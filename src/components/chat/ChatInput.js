export default function ChatInput({ onSubmit, onSave, inputValue, setInputValue }) {

  return (
 <form className="chat-input-bar" onSubmit={onSubmit}>
  <input
    type="text"
    className="chat-text-input"
    placeholder="Message Bot AI..."
    value={inputValue}
    onChange={(e) => setInputValue(e.target.value)}
  />

  <button type="submit" className="ask-btn">
    Ask
  </button>

  <button type="button" className="save-btn" onClick={onSave}>
    Save
  </button>
</form>


  );
}

