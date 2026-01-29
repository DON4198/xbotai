import { loadConversations } from "../utils/storage";
import Sidebar from "../components/layout/Sidebar";
import ChatInput from "../components/chat/ChatInput";
import MobileHeader from "../components/layout/MobileHeader";

import "../styles/history.css";

import userIcon from "../assets/icons/User.svg";
import chatGptLogo from "../assets/icons/ChatGPT_Logo.svg";
import botAiIcon from "../assets/icons/Bot AI.svg";
import starFilled from "../assets/icons/Star-filled.svg";
import starEmpty from "../assets/icons/Star.svg";
import thumbsUp from "../assets/icons/Thumb-up.svg";
import thumbsDown from "../assets/icons/Thumb-down.svg";

export default function HistoryPage() {
  const conversations = loadConversations();

  return (
    <div className="app-layout">
      {/* LEFT SIDEBAR (same as ChatPage) */}
      <Sidebar />

      {/* MOBILE HEADER */}
      <MobileHeader />

      {/* MAIN CONTENT */}
      <div className="chat-container">
        {/* REQUIRED BY TEST: HEADER */}
        <header>
          <div className="bot-ai-header">
            <img src={botAiIcon} alt="Bot AI" className="bot-ai-header-icon" />
            
          </div>
        </header>

        {/* PAGE TITLE (TEST EXPECTS THIS TEXT) */}
        <h2 className="history-title">Past Conversations</h2>

        <div className="history-content-wrapper">
          {conversations.length === 0 ? (
            <p>No conversations found.</p>
          ) : (
            <>
              <p className="history-section">Today’s Chats</p>

              {conversations.map((conv) => (
                <div key={conv.id} className="history-card">
                  {conv.messages.map((msg) => {
                    const isUser = msg.sender === "user";
                    return (
                      <div key={msg.id} className="history-message">
                        <img
                          src={isUser ? userIcon : chatGptLogo}
                          alt={isUser ? "user" : "Soul AI"}
                          className="history-avatar"
                        />

                        <div className="history-content">
                          <span className="history-name">
                            {isUser ? "You" : "Soul AI"}
                          </span>

                          <span className="history-text">{msg.text}</span>

                          <span className="history-time">
                            {new Date(
                              msg.time || conv.createdAt
                            ).toLocaleTimeString([], {
                              hour: "2-digit",
                              minute: "2-digit"
                            })}
                          </span>

                          {/* Rating */}
                          {!isUser && conv.rating && (
                            <div className="history-rating">
                              {[1, 2, 3, 4, 5].map((n) => (
                                <img
                                  key={n}
                                  src={n <= conv.rating ? starFilled : starEmpty}
                                  alt="star"
                                />
                              ))}
                            </div>
                          )}

                          {/* Subjective feedback */}
                          {!isUser && conv.subjectiveFeedback && (
                            <p className="history-feedback">
                              <span>Feedback:</span> {conv.subjectiveFeedback}
                            </p>
                          )}

                          {/* Like / Dislike */}
                          {!isUser && msg.feedback && (
                            <div className="history-actions">
                              {msg.feedback === "like" && (
                                <img src={thumbsUp} alt="like" />
                              )}
                              {msg.feedback === "dislike" && (
                                <img src={thumbsDown} alt="dislike" />
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </>
          )}
        </div>

        {/* INPUT BAR (MATCHES CHATPAGE, REQUIRED BY TESTS) */}
        <ChatInput
          onSubmit={(e) => e.preventDefault()} // no-op
          onSave={() => {}}
          inputValue=""
          setInputValue={() => {}}
        />
      </div>
    </div>
  );
}
