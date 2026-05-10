import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import Header from "../components/Header";

import SearchHeader from "../components/search/SearchHeader";
import SearchCategories from "../components/search/SearchCategories";
import SearchFilters from "../components/search/SearchFilters";
import ProductGrid from "../components/search/ProductGrid";
import SearchSort from "../components/search/SearchSort";

function SearchPage() {
    const [searchParams] = useSearchParams();

    // 메인페이지에서 전달된 category 읽기
    const initialCategory =
        searchParams.get("category") || "TV";

    // 현재 선택 카테고리 상태
    const [selectedCategory, setSelectedCategory] =
        useState(initialCategory);

    return (
        <div className="min-h-screen bg-[#f7f7f8]">
            <Header />

            <main className="mx-auto max-w-[1600px] px-6 py-8">

                {/* 상단 헤더 */}
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
                    <ProductGrid
                        selectedCategory={selectedCategory}
                    />
                </div>
            </main>
        </div>
    );
}

export default SearchPage;