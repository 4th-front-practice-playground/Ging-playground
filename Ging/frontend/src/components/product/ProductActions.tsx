import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
    Heart,
    MessageCircle,
} from "lucide-react";

function ProductActions() {
    const navigate = useNavigate();

    // 찜 상태
    const [liked, setLiked] =
        useState(false);

    // 찜 버튼 클릭
    const handleLike = () => {
        setLiked((prev) => !prev);
    };

    // 상담하기 클릭
    const handleConsult = () => {
        navigate("/chat");
    };

    // 구매하기 클릭
    const handlePurchase = () => {
        alert("구매 기능은 준비 중입니다.");
    };

    return (
        <div className="mt-10 flex gap-4">

            {/* 찜하기 */}
            <button
                onClick={handleLike}
                className={`flex h-16 w-16 items-center justify-center rounded-2xl border transition ${
                    liked
                        ? "border-red-500 bg-red-50"
                        : "bg-white hover:bg-gray-50"
                }`}
            >
                <Heart
                    className={
                        liked
                            ? "fill-red-500 text-red-500"
                            : ""
                    }
                />
            </button>

            {/* 구매하기 */}
            <button
                onClick={handlePurchase}
                className="flex-1 rounded-2xl bg-black text-lg font-semibold text-white transition hover:bg-gray-800"
            >
                구매하기
            </button>

            {/* 상담하기 */}
            <button
                onClick={handleConsult}
                className="flex items-center justify-center gap-2 rounded-2xl bg-red-600 px-8 text-lg font-semibold text-white transition hover:bg-red-700"
            >
                <MessageCircle size={20} />
                상담하기
            </button>
        </div>
    );
}

export default ProductActions;