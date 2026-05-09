import {
    Refrigerator,
    Wind,
    Tv,
    WashingMachine,
} from "lucide-react";

type RecommendedQuestionsProps = {
    onSelectQuestion: (question: string) => void;
};

function RecommendedQuestions({
    onSelectQuestion,
}: RecommendedQuestionsProps) {
    const questions = [
        {
            title: "혼자 사는데 어떤 냉장고가 좋아?",
            desc: "1인 가구 맞춤 냉장고 추천",
            icon: <Refrigerator size={22} />,
        },
        {
            title: "20평대 에어컨 추천해줘",
            desc: "공간별 냉방 성능 비교",
            icon: <Wind size={22} />,
        },
        {
            title: "TV랑 사운드바 같이 추천해줘",
            desc: "몰입감 있는 홈시네마 구성",
            icon: <Tv size={22} />,
        },
        {
            title: "예산 100만원 이하 세탁기 추천",
            desc: "가성비 인기 세탁기 추천",
            icon: <WashingMachine size={22} />,
        },
    ];

    return (
        <div className="flex flex-1 flex-col items-center justify-center px-8">
            
            {/* 챗봇 아이콘 */}
            <div className="mb-8 flex h-28 w-28 items-center justify-center rounded-full bg-red-50 text-5xl shadow-inner">
                💬
            </div>

            {/* 제목 */}
            <h2 className="mb-3 text-5xl font-bold tracking-tight">
                무엇을 도와드릴까요?
            </h2>

            <p className="mb-12 text-lg text-gray-500">
                원하는 가전 조건을 선택하거나 직접 입력해보세요.
            </p>

            {/* 추천 카드 */}
            <div className="grid w-full max-w-4xl grid-cols-2 gap-5">
                {questions.map((question) => (
                    <button
                        key={question.title}
                        onClick={() =>
                            onSelectQuestion(question.title)
                        }
                        className="group rounded-[28px] border border-gray-200 bg-white p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-xl"
                    >
                        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-100 text-gray-700">
                            {question.icon}
                        </div>

                        <h3 className="mb-2 text-lg font-bold leading-snug text-black">
                            {question.title}
                        </h3>

                        <p className="text-sm text-gray-500">
                            {question.desc}
                        </p>
                    </button>
                ))}
            </div>
        </div>
    );
}

export default RecommendedQuestions;