'use client';

import { useState } from 'react';
import ChatBox from './ChatBox';

const ChatbotIcon = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[99] bg-transparent">
      <button
        className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 
                   text-white rounded-full p-3 shadow-lg transform transition-all duration-300 
                   hover:scale-110 hover:shadow-xl flex items-center justify-center"
        onClick={() => setIsChatOpen(!isChatOpen)}
        suppressHydrationWarning
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          viewBox="0 0 24 24"
          fill="none"
        >
          {/* AI Avatar Design */}
          <circle cx="12" cy="12" r="10" fill="currentColor" />
          {/* Circuit-like pattern */}
          <path
            d="M7 8h10M7 12h10M7 16h10"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Glowing dots */}
          <circle cx="8" cy="8" r="1" fill="white" />
          <circle cx="16" cy="8" r="1" fill="white" />
          <circle cx="8" cy="16" r="1" fill="white" />
          <circle cx="16" cy="16" r="1" fill="white" />
        </svg>
      </button>
      <ChatBox isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  );
};

export default ChatbotIcon; 