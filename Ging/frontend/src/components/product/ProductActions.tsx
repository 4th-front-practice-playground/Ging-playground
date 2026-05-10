import { Heart, MessageCircle } from "lucide-react";

function ProductActions() {
    return (
        <div className="mt-10 flex gap-4">
            <button className="flex h-16 w-16 items-center justify-center rounded-2xl border bg-white hover:bg-gray-50">
                <Heart />
            </button>

            <button className="flex-1 rounded-2xl bg-black text-lg font-semibold text-white transition hover:bg-gray-800">
                구매하기
            </button>

            <button className="flex items-center justify-center gap-2 rounded-2xl bg-red-600 px-8 text-lg font-semibold text-white transition hover:bg-red-700">
                <MessageCircle size={20} />
                상담하기
            </button>
        </div>
    );
}

export default ProductActions;