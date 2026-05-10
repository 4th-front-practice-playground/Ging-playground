import { Star } from "lucide-react";

function ProductInfo() {
    return (
        <div className="flex flex-col">
            <p className="mb-3 text-sm font-semibold text-red-600">
                OLED TV
            </p>

            <h1 className="text-5xl font-bold leading-tight">
                LG OLED evo AI
            </h1>

            <div className="mt-5 flex items-center gap-2">
                <Star
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                />

                <span className="font-semibold">
                    4.9
                </span>

                <span className="text-gray-400">
                    리뷰 128개
                </span>
            </div>

            <div className="mt-8">
                <p className="text-sm text-gray-400">
                    회원가 기준
                </p>

                <h2 className="text-5xl font-bold">
                    3,490,000원
                </h2>
            </div>

            {/* 스펙 */}
            <div className="mt-10 space-y-4 rounded-[28px] bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                    <span className="text-gray-500">
                        화면 크기
                    </span>

                    <span className="font-semibold">
                        65인치
                    </span>
                </div>

                <div className="flex items-center justify-between">
                    <span className="text-gray-500">
                        해상도
                    </span>

                    <span className="font-semibold">
                        4K OLED
                    </span>
                </div>

                <div className="flex items-center justify-between">
                    <span className="text-gray-500">
                        AI 기능
                    </span>

                    <span className="font-semibold">
                        지원
                    </span>
                </div>
            </div>
        </div>
    );
}

export default ProductInfo;