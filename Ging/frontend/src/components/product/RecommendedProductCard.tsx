function RecommendedProductCard() {
    return (
        <button className="group overflow-hidden rounded-[28px] bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
            <div className="overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?q=80&w=1200&auto=format&fit=crop"
                    alt="추천 상품"
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                />
            </div>

            <div className="p-5">
                <h3 className="text-xl font-bold">
                    LG 오브제 냉장고
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                    프리미엄 디자인 냉장고
                </p>

                <p className="mt-5 text-2xl font-bold">
                    2,190,000원
                </p>
            </div>
        </button>
    );
}

export default RecommendedProductCard;