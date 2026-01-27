const STORAGE_KEY = "bot_ai_conversations";

export const loadConversations = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

export const saveConversations = (conversations) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(conversations));
};
