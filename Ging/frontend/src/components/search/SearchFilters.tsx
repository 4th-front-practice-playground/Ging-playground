import FilterSection from "./FilterSection";

function SearchFilters() {
    return (
        <aside className="sticky top-24 h-fit rounded-[28px] bg-white p-6 shadow-sm">
            <div className="mb-8 flex items-center justify-between">
                <h2 className="text-xl font-bold">
                    필터
                </h2>

                <button className="text-sm text-gray-400 hover:text-black">
                    초기화
                </button>
            </div>

            <div className="space-y-8">
                <FilterSection
                    title="가격대"
                    items={[
                        "~100만원",
                        "100~300만원",
                        "300만원+",
                    ]}
                />

                <FilterSection
                    title="추천 유형"
                    items={[
                        "AI 추천",
                        "가성비",
                        "저소음",
                        "프리미엄",
                    ]}
                />
            </div>
        </aside>
    );
}

export default SearchFilters;