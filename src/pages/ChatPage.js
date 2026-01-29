import { useState, useEffect } from "react";
import { stubResponses } from "../data/StubData.js";
import { loadConversations, saveConversations } from "../utils/storage.js";
import Sidebar from "../components/layout/Sidebar.js";
import MessageBubble from "../components/chat/MessageBubble.js";
import AIMessageBubble from "../components/chat/AIMessageBubble.js";
import ChatInput from "../components/chat/ChatInput.js";
// import Rating from "../components/chat/Rating.js";
import MobileHeader from "../components/layout/MobileHeader.js";
import SuggestionCards from "../components/chat/SuggestionCards.js";
import chatGptLogo from "../assets/icons/ChatGPT_Logo.svg";
import botAiIcon from "../assets/icons/Bot AI.svg";
import "../styles/chat.css";

export default function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [rating, setRating] = useState(null);
  const [showSidebar, setShowSidebar] = useState(false);
  const [inputValue, setInputValue] = useState("");



  // Load active draft chat only (not saved history)
  useEffect(() => {
    setMessages([]);
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    const input = inputValue.trim();
    if (!input) return;

      const aiResponse = stubResponses[input]
    ? stubResponses[input]
    : "Sorry, Did not understand your query!";



    const timestamp = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  });

    setMessages((prev) => [
      ...prev,
      { id: Date.now(), sender: "user", text: input, time: timestamp },
      { id: Date.now() + 1, sender: "ai", text: aiResponse, feedback: null, time: timestamp }
    ]);

    setInputValue("");  
  };

  const saveConversation = () => {
    if (messages.length === 0) return;

    const existing = loadConversations();

    const conversation = {
      id: Date.now(),
      createdAt: new Date().toISOString(),
      messages,
      rating,
      subjectiveFeedback: ""
    };

    saveConversations([...existing, conversation]);

    alert("Conversation saved!");
    setMessages([]);
    setRating(null);
  };

  return (
    
    <div className="app-layout">
      <Sidebar />

      <MobileHeader onToggle={() => setShowSidebar(true)} />

      {showSidebar && (
            <>
                <div className="mobile-sidebar open">
                <Sidebar />
                </div>

                <div
                className="overlay"
                onClick={() => setShowSidebar(false)}
                />
            </>
            )}


      <div className="chat-container">
        <header>
            <div className="bot-ai-header">
              <img src={botAiIcon} alt="Bot AI" className="bot-ai-header-icon" />
              <span>Bot AI</span>
            </div>
          </header>


      {messages.length === 0 && (
            <>
                <div className="empty-state">
                    <h2>How Can I Help You Today?</h2>
                    <div className="bot-circle">
                        <img
                        src={chatGptLogo}
                        alt="Bot AI"
                        className="bot-circle-icon"
                        />
                    </div>
                    </div>


                <SuggestionCards
                onSelect={(text) => {
                    const fakeEvent = {
                    preventDefault: () => {},
                    target: [{ value: text }]
                    };
                    sendMessage(fakeEvent);
                }}
                />
            </>
            )}


        <div className="chat-window">
          {messages.map((m) =>
              m.sender === "user" ? (
                <MessageBubble key={m.id} text={m.text} time={m.time} />
              ) : (
                <AIMessageBubble key={m.id} text={m.text} time={m.time} />
              )
            )}

        </div>

        {/* {messages.length > 0 && (
          <Rating onRate={(r) => setRating(r)} />
        )} */}



        <ChatInput
            onSubmit={sendMessage}
            onSave={saveConversation}
            inputValue={inputValue}
            setInputValue={setInputValue}
          />

      </div>
    </div>
  );
}
