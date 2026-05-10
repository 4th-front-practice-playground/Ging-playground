import {
    Tv,
    Refrigerator,
    Wind,
    WashingMachine,
    Sparkles,
} from "lucide-react";

type SearchCategoriesProps = {
    selectedCategory: string;
    onSelectCategory: (category: string) => void;
};

function SearchCategories({
    selectedCategory,
    onSelectCategory,
}: SearchCategoriesProps) {
    const categories = [
        {
            name: "TV",
            icon: <Tv size={28} />,
            desc: "프리미엄 OLED",
        },
        {
            name: "냉장고",
            icon: <Refrigerator size={28} />,
            desc: "오브제컬렉션",
        },
        {
            name: "에어컨",
            icon: <Wind size={28} />,
            desc: "쾌적한 냉방",
        },
        {
            name: "청소기",
            icon: <Sparkles size={28} />,
            desc: "강력한 청소",
        },
        {
            name: "세탁기",
            icon: <WashingMachine size={28} />,
            desc: "AI 세탁",
        },
    ];

    return (
        <section className="mt-10">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-5">
                {categories.map((category) => {
                    const isActive =
                        selectedCategory === category.name;

                    return (
                        <button
                            key={category.name}
                            onClick={() =>
                                onSelectCategory(category.name)
                            }
                            className={`group rounded-[28px] p-5 text-left transition-all duration-300 ${
                                isActive
                                    ? "bg-red-600 text-white shadow-lg"
                                    : "bg-white shadow-sm hover:-translate-y-1 hover:shadow-xl"
                            }`}
                        >
                            <div
                                className={`mb-4 transition ${
                                    isActive
                                        ? "text-white"
                                        : "text-gray-800 group-hover:scale-110"
                                }`}
                            >
                                {category.icon}
                            </div>

                            <h3 className="text-lg font-bold">
                                {category.name}
                            </h3>

                            <p
                                className={`mt-2 text-sm ${
                                    isActive
                                        ? "text-red-100"
                                        : "text-gray-500"
                                }`}
                            >
                                {category.desc}
                            </p>
                        </button>
                    );
                })}
            </div>
        </section>
    );
}

export default SearchCategories;