import MessageBubble from "./MessageBubble.js";
import AIMessageBubble from "./AIMessageBubble.js";

export default function ChatWindow({ messages, onFeedback }) {
  return (
    <div className="chat-window">
      {messages.map((msg) =>
        msg.sender === "user" ? (
          <MessageBubble key={msg.id} text={msg.text} />
        ) : (
          <AIMessageBubble
            key={msg.id}
            text={msg.text}
            feedback={msg.feedback}
            onFeedback={(val) => onFeedback(msg.id, val)}
          />
        )
      )}
    </div>
  );
}
