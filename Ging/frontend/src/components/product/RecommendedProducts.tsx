import RecommendedProductCard from "./RecommendedProductCard";

function RecommendedProducts() {
    return (
        <section className="mt-20">
            <div className="mb-8 flex items-center justify-between">
                <h2 className="text-4xl font-bold">
                    함께 보면 좋은 제품
                </h2>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                <RecommendedProductCard />
                <RecommendedProductCard />
                <RecommendedProductCard />
            </div>
        </section>
    );
}

export default RecommendedProducts;