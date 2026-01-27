import hamburger from "../../assets/icons/Hamburger.svg";

export default function MobileHeader({ onToggle }) {
  return (
    <div className="mobile-header">
      <img
        src={hamburger}
        alt="menu"
        role="button"
        tabIndex={0}
        onClick={onToggle}
        onKeyDown={(e) => e.key === "Enter" && onToggle()}
      />

      
      <span className="bot-title">Bot AI</span>
      
    </div>
  );
}
