import { Link, useLocation } from "react-router-dom";
import editIcon from "../../assets/icons/Edit.svg";
import ChatGPT_Logo from "../../assets/icons/ChatGPT_Logo.svg"

export default function Sidebar() {
  const location = useLocation();

  return (
    <div className="sidebar">
      <div className="sidebar-top-row">
        <img
            src={ChatGPT_Logo}
            alt="ChatGPT"
            className="sidebar-chatgpt-logo"
        />

        <a href="/"><span className="sidebar-newchat-text">New Chat</span></a> 

        <img
            src={editIcon}
            alt="edit"
            className="sidebar-edit-icon"
        />
        </div>


        {/* Past Conversations */}
        <Link
        to="/history"
        className={`sidebar-pill ${
            location.pathname.startsWith("/history") ? "active" : ""
        }`}
        >
        Past Conversations
        </Link>

            {/* Feedback */}
            <Link
                to="/feedback"
                className={`sidebar-pill ${
                location.pathname === "/feedback" ? "active" : ""
                }`}
            >
                <span>Feedback</span>
            </Link>
    </div>
  );
}
