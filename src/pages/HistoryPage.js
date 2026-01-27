import { loadConversations } from "../utils/storage";
import "../styles/history.css";
import Sidebar from "../components/layout/Sidebar";
import MessageBubble from "../components/chat/MessageBubble";
import AIMessageBubble from "../components/chat/AIMessageBubble";
import ChatInput from "../components/chat/ChatInput";
import userIcon from "../assets/icons/User.svg";
import chatGptLogo from "../assets/icons/ChatGPT_Logo.svg";
import starFilled from "../assets/icons/Star-filled.svg";
import starEmpty from "../assets/icons/Star.svg";
import thumbsUp from "../assets/icons/Thumb-up.svg";
import thumbsDown from "../assets/icons/Thumb-down.svg";

export default function HistoryPage() {
  const conversations = loadConversations();

  return (
    <div className="history-page">
      <div className="history-content-wrapper">
        <h2 className="history-title">Conversation History</h2>

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
                          {new Date(msg.timestamp || conv.createdAt).toLocaleTimeString(
                            [],
                            { hour: "2-digit", minute: "2-digit" }
                          )}
                        </span>

                        {/* Rating only once per conversation (after AI msg) */}
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

                        {/* Feedback text */}
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
    </div>
  );
}
