import ProductCard from "./ProductCard";

type ProductGridProps = {
    selectedCategory: string;
};

function ProductGrid({
    selectedCategory,
}: ProductGridProps) {
    const products = [
        {
            id: 1,
            category: "TV",
            name: "LG OLED evo",
            description:
                "몰입감 높은 4K OLED TV",
            price: "3,490,000원",
            image:
                "https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=1200&auto=format&fit=crop",
            badge: "AI 추천",
        },
        {
            id: 2,
            category: "냉장고",
            name: "LG 오브제 냉장고",
            description:
                "프리미엄 디자인 냉장고",
            price: "2,190,000원",
            image:
                "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?q=80&w=1200&auto=format&fit=crop",
            badge: "프리미엄",
        },
        {
            id: 3,
            category: "세탁기",
            name: "LG 워시타워",
            description:
                "공간 효율 높은 세탁 솔루션",
            price: "1,890,000원",
            image:
                "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?q=80&w=1200&auto=format&fit=crop",
            badge: "가성비",
        },
        {
            id: 4,
            category: "에어컨",
            name: "LG 휘센 에어컨",
            description:
                "강력한 냉방 성능",
            price: "2,490,000원",
            image:
                "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=1200&auto=format&fit=crop",
            badge: "저소음",
        },
        {
            id: 5,
            category: "청소기",
            name: "LG 코드제로",
            description:
                "강력한 무선 청소기",
            price: "890,000원",
            image:
                "https://images.unsplash.com/photo-1558317374-067fb5f30001?q=80&w=1200&auto=format&fit=crop",
            badge: "인기",
        },
    ];

    // 현재 선택된 카테고리만 출력
    const filteredProducts = products.filter(
        (product) =>
            product.category === selectedCategory
    );

    return (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.map((product) => (
                <ProductCard
                    key={product.id}
                    {...product}
                />
            ))}
        </div>
    );
}

export default ProductGrid;