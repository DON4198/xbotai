import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChatPage from "./pages/ChatPage.js";
import HistoryPage from "./pages/HistoryPage.js";
import FeedbackPage from "./pages/FeedbackPage.js";
import ViewConversationPage from "./pages/ViewConversationPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ChatPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
        <Route path="/history/:id" element={<ViewConversationPage />} />
      </Routes>
    </BrowserRouter>
  );
}
