import { Link, useLocation } from "react-router-dom";
import editIcon from "../../assets/icons/Edit.svg";
import ChatGPT_Logo from "../../assets/icons/ChatGPT_Logo.svg";

export default function Sidebar() {
  const location = useLocation();

  return (
    <nav className="sidebar">
      {/* Top Row */}
      <div className="sidebar-top-row">
        <img
          src={ChatGPT_Logo}
          alt="ChatGPT"
          className="sidebar-chatgpt-logo"
        />

        {/* New Chat MUST be a Link */}
        <Link to="/" className="sidebar-newchat-text">
          New Chat
        </Link>

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
        Feedback
      </Link>
    </nav>
  );
}
