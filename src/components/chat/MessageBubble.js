import userIcon from "../../assets/icons/User.svg";

export default function MessageBubble({ text, time }) {
  return (
    <div className="message user">
      <img src={userIcon} alt="user" className="message-user-icon" />

      <div className="message-content">
        <span className="message-author">You</span>
        <span>{text}</span>  
      </div>

      <div className="message-meta">
        <span className="message-time">{time}</span>
      </div>
    </div>
  );
}
