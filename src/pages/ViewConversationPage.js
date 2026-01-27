import { useParams, useNavigate } from "react-router-dom";
import { loadConversations, saveConversations } from "../utils/storage.js";
import { useState } from "react";
import MessageBubble from "../components/chat/MessageBubble.js";
import AIMessageBubble from "../components/chat/AIMessageBubble.js";
import Rating from "../components/chat/Rating.js";

export default function ViewConversationPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const conversations = loadConversations();
  const conversation = conversations.find(
    (c) => String(c.id) === id
  );

  const [rating, setRating] = useState(conversation?.rating || null);
  const [feedback, setFeedback] = useState(
    conversation?.subjectiveFeedback || ""
  );

  if (!conversation) {
    return <p>Conversation not found.</p>;
  }

  const saveEdits = () => {
    const updated = conversations.map((c) =>
      c.id === conversation.id
        ? { ...c, rating, subjectiveFeedback: feedback }
        : c
    );

    saveConversations(updated);
    alert("Conversation updated!");
    navigate("/history");
  };

  return (
    <div style={{ padding: "24px" }}>
      <h2>View Conversation</h2>

      {conversation.messages.map((m) =>
        m.sender === "user" ? (
          <MessageBubble key={m.id} text={m.text} />
        ) : (
          <AIMessageBubble key={m.id} text={m.text} />
        )
      )}

      <h3>Update Rating</h3>
      <Rating onRate={setRating} />

      <h3>Feedback</h3>
      <textarea
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        rows={4}
        style={{ width: "100%", marginBottom: "16px" }}
      />

      <button type="button" onClick={saveEdits}>
        Save Changes
      </button>
    </div>
  );
}
