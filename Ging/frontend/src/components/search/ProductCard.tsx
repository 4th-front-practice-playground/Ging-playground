import { useNavigate } from "react-router-dom";
import ProductBadge from "./ProductBadge";

type ProductCardProps = {
    id: number;
    name: string;
    description: string;
    price: string;
    image: string;
    badge: string;
};

function ProductCard({
    id,
    name,
    description,
    price,
    image,
    badge,
}: ProductCardProps) {
    const navigate = useNavigate();

    return (
        <button
            onClick={() => navigate(`/product/${id}`)}
            className="group overflow-hidden rounded-[28px] bg-white text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
            {/* 이미지 */}
            <div className="overflow-hidden">
                <img
                    src={image}
                    alt={name}
                    className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
                />
            </div>

            {/* 내용 */}
            <div className="p-6">
                <div className="mb-4">
                    <ProductBadge label={badge} />
                </div>

                <h3 className="text-2xl font-bold tracking-tight">
                    {name}
                </h3>

                <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-gray-500">
                    {description}
                </p>

                <div className="mt-6 flex items-center justify-between">
                    <span className="text-2xl font-bold">
                        {price}
                    </span>

                    <span className="text-sm font-semibold text-red-600">
                        상세보기 →
                    </span>
                </div>
            </div>
        </button>
    );
}

export default ProductCard;