import { useState } from "react";
import { SendHorizonal, Paperclip } from "lucide-react";

type ChatInputProps = {
    onSendMessage: (message: string) => void;
};

function ChatInput({ onSendMessage }: ChatInputProps) {
    const [message, setMessage] = useState("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!message.trim()) return;

        onSendMessage(message);
        setMessage("");
    };

    return (
        <div className=" border-gray-100 bg-white p-6">
            <form
                onSubmit={handleSubmit}
                className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white p-3 shadow-sm"
            >
                <button
                    type="button"
                    className="rounded-xl p-2 text-gray-400 hover:bg-gray-100"
                >
                    <Paperclip size={20} />
                </button>

                <input
                    type="text"
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    placeholder="메시지를 입력하세요."
                    className="flex-1 bg-transparent px-2 py-3 outline-none"
                />

                <button
                    type="submit"
                    className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-600 text-white transition hover:bg-red-700"
                >
                    <SendHorizonal size={20} />
                </button>
            </form>

            <p className="mt-3 text-xs text-gray-400">
                예시: “4인 가족 냉장고 추천해줘”, “조용한 청소기 찾아줘”
            </p>
        </div>
    );
}

export default ChatInput;