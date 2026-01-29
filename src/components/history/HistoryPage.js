export default function HistoryPage() {
  return (
   
          <div className="app-layout">
        <Sidebar />
        <div className="chat-container">
          <h2>Past Conversations</h2>

          <div className="chat-window">
            { /* messages */ }
            
          </div>

          <ChatInput
            onSubmit={(e) => e.preventDefault()}
            onSave={() => {}}
            inputValue=""
            setInputValue={() => {}}
          />
        </div>
      </div>

  );
}


