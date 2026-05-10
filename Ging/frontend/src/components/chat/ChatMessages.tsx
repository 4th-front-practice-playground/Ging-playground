import type { ChatMessage } from "../../pages/ChatPage";

type ChatMessagesProps = {
    messages: ChatMessage[];
};

function ChatMessages({ messages }: ChatMessagesProps) {
    if (messages.length === 0) {
        return (
            <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
                <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-red-50 text-4xl">
                    💬
                </div>

                <h2 className="mb-3 text-4xl font-bold">
                    무엇을 도와드릴까요?
                </h2>

                <p className="mb-10 text-lg text-gray-500">
                    원하는 가전 조건을 선택하거나 직접 입력해보세요.
                </p>

                <div className="grid w-full max-w-3xl grid-cols-2 gap-3">
                    {[
                        "혼자 사는데 어떤 냉장고가 좋아?",
                        "20평대 에어컨 추천해줘",
                        "TV랑 사운드바 같이 추천해줘",
                        "예산 100만원 이하 세탁기 추천해줘",
                    ].map((prompt) => (
                        <button
                            key={prompt}
                            className="rounded-2xl border border-gray-200 bg-white p-5 text-left transition hover:-translate-y-1 hover:shadow-md"
                        >
                            {prompt}
                        </button>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="flex-1 space-y-6 overflow-y-auto px-8 py-6">
            {messages.map((message) => (
                <div
                    key={message.id}
                    className={`flex ${
                        message.role === "user"
                            ? "justify-end"
                            : "justify-start"
                    }`}
                >
                    <div
                        className={
                            message.role === "user"
                                ? "max-w-[70%] rounded-[24px] rounded-br-md bg-red-600 px-5 py-4 text-white shadow-sm"
                                : "max-w-[70%] rounded-[24px] rounded-bl-md bg-gray-100 px-5 py-4 text-gray-800"
                        }
                    >
                        <p className="leading-relaxed">
                            {message.content}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ChatMessages;