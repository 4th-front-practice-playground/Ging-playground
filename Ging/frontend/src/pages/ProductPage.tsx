import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header";

import ProductGallery from "../components/product/ProductGallery";
import ProductInfo from "../components/product/ProductInfo";
import ProductActions from "../components/product/ProductActions";
import ProductDescription from "../components/product/ProductDescription";
import RecommendedProducts from "../components/product/RecommendedProducts";

function ProductPage() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#f7f7f8]">
            <Header />

            <main className="mx-auto max-w-7xl px-6 py-10">
                
                {/* 뒤로가기 */}
                <button
                    onClick={() => navigate(-1)}
                    className="mb-10 flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-black"
                >
                    <ArrowLeft size={18} />
                    이전으로
                </button>

                {/* 상단 */}
                <section className="grid gap-10 lg:grid-cols-2">
                    
                    {/* 이미지 */}
                    <ProductGallery />

                    {/* 정보 */}
                    <div>
                        <ProductInfo />
                        <ProductActions />
                    </div>
                </section>

                {/* 설명 */}
                <ProductDescription />

                {/* 추천 */}
                <RecommendedProducts />
            </main>
        </div>
    );
}

export default ProductPage;