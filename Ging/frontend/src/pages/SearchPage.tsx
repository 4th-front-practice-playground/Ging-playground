import { useState } from "react";

import Header from "../components/Header";

import SearchHeader from "../components/search/SearchHeader";
import SearchCategories from "../components/search/SearchCategories";
import SearchFilters from "../components/search/SearchFilters";
import ProductGrid from "../components/search/ProductGrid";
import SearchSort from "../components/search/SearchSort";

function SearchPage() {
    const [selectedCategory, setSelectedCategory] =
        useState("TV");

    return (
        <div className="min-h-screen bg-[#f7f7f8]">
            <Header />

            <main className="mx-auto max-w-[1600px] px-6 py-8">
                
                {/* 상단 */}
                <SearchHeader />

                {/* 카테고리 */}
                <SearchCategories
                    selectedCategory={selectedCategory}
                    onSelectCategory={setSelectedCategory}
                />

                {/* 정렬 */}
                <div className="mt-10 flex justify-end">
                    <SearchSort />
                </div>

                {/* 메인 */}
                <div className="mt-6 grid grid-cols-[280px_1fr] gap-8">
                    
                    {/* 필터 */}
                    <SearchFilters />

                    {/* 상품 */}
                    <ProductGrid />
                </div>
            </main>
        </div>
    );
}

export default SearchPage;