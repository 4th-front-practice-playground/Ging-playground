import ProductCard from "./ProductCard";

function ProductGrid() {
    const products = [
        {
            id: 1,
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
            name: "LG 워시타워",
            description:
                "공간 효율 높은 세탁 솔루션",
            price: "1,890,000원",
            image:
                "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?q=80&w=1200&auto=format&fit=crop",
            badge: "가성비",
        },
    ];

    return (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    {...product}
                />
            ))}
        </div>
    );
}

export default ProductGrid;