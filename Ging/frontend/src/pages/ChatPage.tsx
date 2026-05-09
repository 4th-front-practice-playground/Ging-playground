import { useState } from "react";
import Header from "../components/Header";

import ChatSidebar from "../components/chat/ChatSidebar";
import ChatHeader from "../components/chat/ChatHeader";
import RecommendedQuestions from "../components/chat/RecommendedQuestions";
import ChatMessages from "../components/chat/ChatMessages";
import ChatInput from "../components/chat/ChatInput";

export type ChatMessage = {
  id: number;
  role: "user" | "assistant";
  content: string;
};

function ChatPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  // 메시지 전송
  const handleSendMessage = async (content: string) => {
    const userMessage: ChatMessage = {
      id: Date.now(),
      role: "user",
      content,
    };

    setMessages((prev) => [...prev, userMessage]);

    /*
      ============================
      AI API 연결 예정
      ============================
    */

    // 임시 응답
    setTimeout(() => {
      const assistantMessage: ChatMessage = {
        id: Date.now() + 1,
        role: "assistant",
        content:
          "고객님 조건에 맞는 제품을 추천해드릴게요.",
      };

      setMessages((prev) => [...prev, assistantMessage]);
    }, 1000);
  };

  // 새 대화
  const handleNewChat = () => {
    setMessages([]);
  };

  return (
    <div className="min-h-screen bg-[#f7f7f8]">
      <Header />

      {/* 전체 레이아웃 */}
      <main className="mx-auto grid h-[calc(100vh-72px)] max-w-[1600px] grid-cols-[320px_1fr] gap-6 p-6">
        
        {/* 사이드바 */}
        <ChatSidebar onNewChat={handleNewChat} />

        {/* 채팅 메인 */}
        <section className="flex min-h-0 flex-col overflow-hidden rounded-[32px] bg-white shadow-sm">
          
          {/* 상단 헤더 */}
          <ChatHeader />

          {/* 메시지 영역 */}
          <div className="flex min-h-0 flex-1 flex-col">
            {messages.length === 0 ? (
              <RecommendedQuestions
                onSelectQuestion={handleSendMessage}
              />
            ) : (
              <ChatMessages messages={messages} />
            )}
          </div>

          {/* 입력창 */}
          <ChatInput onSendMessage={handleSendMessage} />
        </section>
      </main>
    </div>
  );
}

export default ChatPage;