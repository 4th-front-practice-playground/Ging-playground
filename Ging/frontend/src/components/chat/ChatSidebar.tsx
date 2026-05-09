import { MessageSquarePlus, ChevronRight } from "lucide-react";

type ChatSidebarProps = {
    onNewChat: () => void;
};

function ChatSidebar({ onNewChat }: ChatSidebarProps) {
    const recentChats = [
        {
            title: "TV 추천 상담",
            time: "오후 2:30",
        },
        {
            title: "냉장고 비교",
            time: "어제",
        },
        {
            title: "에어컨 문의",
            time: "2일 전",
        },
    ];

    return (
        <aside className="flex h-full flex-col rounded-[28px] bg-white p-5 shadow-sm">
            <button
                type="button"
                onClick={onNewChat}
                className="mb-8 flex items-center justify-center gap-2 rounded-2xl bg-red-600 py-4 font-semibold text-white transition hover:bg-red-700"
            >
                <MessageSquarePlus size={20} />
                새 대화
            </button>

            <section className="flex-1">
                <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-sm font-bold text-gray-500">
                        최근 대화
                    </h2>

                    <button className="text-xs text-gray-400 hover:text-black">
                        전체 보기
                    </button>
                </div>

                <div className="space-y-3">
                    {recentChats.map((chat) => (
                        <button
                            key={chat.title}
                            type="button"
                            className="group w-full rounded-2xl border border-gray-100 bg-white p-4 text-left transition hover:border-gray-200 hover:shadow-md"
                        >
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-semibold text-black">
                                        {chat.title}
                                    </p>

                                    <p className="mt-1 text-sm text-gray-400">
                                        {chat.time}
                                    </p>
                                </div>

                                <ChevronRight
                                    size={18}
                                    className="text-gray-300 transition group-hover:text-black"
                                />
                            </div>
                        </button>
                    ))}
                </div>
            </section>

            <div className="mt-6 rounded-2xl bg-gray-50 p-5">
                <p className="mb-3 text-sm leading-relaxed text-gray-600">
                    LG 챗봇은 AI 기술을 기반으로
                    정보를 제공합니다.
                </p>

                <button className="text-sm font-semibold">
                    이용 가이드 보기 →
                </button>
            </div>
        </aside>
    );
}

export default ChatSidebar;