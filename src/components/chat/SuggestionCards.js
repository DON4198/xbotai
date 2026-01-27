

const SUGGESTIONS = [
  "Hi, what is the weather",
  "Hi, what is my location",
  "Hi, what is the temperature",
  "Hi, how are you"
];

export default function SuggestionCards({ onSelect }) {
  return (
    <div className="suggestion-grid">
      {SUGGESTIONS.map((text) => (
        <div
          key={text}
          className="suggestion-card"
          role="button"
          tabIndex={0}
          onClick={() => onSelect(text)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onSelect(text);
            }
          }}
        >

          <div className="suggestion-text">
            <p className="title">{text}</p>
            <p className="subtitle">
              Get immediate AI generated response
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
