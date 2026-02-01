import aiIcon from "../../assets/icons/ChatGPT_Logo.svg";
import thumbsUp from "../../assets/icons/Thumb-up.svg";
import thumbsDown from "../../assets/icons/Thumb-down.svg";

export default function AIMessageBubble({ text, onFeedback, time }) {
  return (
    // <div className="message ai">
    //   <img src={aiIcon} alt="ai" width="24" className="message-ai-icon"/>
    //   <span>Soul AI</span>
    //   <p>{text}</p>

    //    <div className="feedback-icons">
    //     <img src={thumbsUp} alt="like" onClick={() => onFeedback("like")} />
    //     <img src={thumbsDown} alt="dislike" onClick={() => onFeedback("dislike")} />
    //   </div> 
    // </div>

    <div className="message ai">
      <img src={aiIcon} alt="ai" className="message-ai-icon" />

      <div className="message-content">
        <span className="message-author">Soul AI</span>
        <p>{text}</p>
      </div>

     <div className="message-meta">
          <span className="message-time">{time}</span>

          <div className="message-feedback">
            <img src={thumbsUp} alt="like" />
            <img src={thumbsDown} alt="dislike" />
          </div>
          
        </div>

    </div>

  );
}

