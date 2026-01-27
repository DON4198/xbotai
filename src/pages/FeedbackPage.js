import { useState } from "react";
import { loadConversations } from "../utils/storage.js";
import MessageBubble from "../components/chat/MessageBubble.js";
import AIMessageBubble from "../components/chat/AIMessageBubble.js";

export default function FeedbackPage() {
  const conversations = loadConversations();

  const [ratingFilter, setRatingFilter] = useState("all");
  const [feedbackFilter, setFeedbackFilter] = useState("all");

  const filtered = conversations.filter((conv) => {
    if (ratingFilter !== "all" && conv.rating !== Number(ratingFilter)) {
      return false;
    }

    if (feedbackFilter !== "all") {
      return conv.messages.some(
        (m) => m.sender === "ai" && m.feedback === feedbackFilter
      );
    }

    return true;
  });

  return (
    <div style={{ padding: "24px" }}>
      <h2>Feedback Analytics</h2>

      {/* Filters */}
      <div style={{ display: "flex", gap: "16px", marginBottom: "24px" }}>
        <select onChange={(e) => setRatingFilter(e.target.value)}>
          <option value="all">All Ratings</option>
          {[1,2,3,4,5].map((r) => (
            <option key={r} value={r}>{r} Star</option>
          ))}
        </select>

        <select onChange={(e) => setFeedbackFilter(e.target.value)}>
          <option value="all">All Feedback</option>
          <option value="like">Liked</option>
          <option value="dislike">Disliked</option>
        </select>
      </div>

      {/* Results */}
      {filtered.length === 0 && <p>No matching feedback.</p>}

      {filtered.map((conv) => (
        <div key={conv.id} style={{ marginBottom: "32px" }}>
          <p><strong>Rating:</strong> {conv.rating || "N/A"}</p>

          {conv.messages.map((m) =>
            m.sender === "user" ? (
              <MessageBubble key={m.id} text={m.text} />
            ) : (
              <AIMessageBubble key={m.id} text={m.text} />
            )
          )}
        </div>
      ))}
    </div>
  );
}
