function SearchSort() {
    return (
        <div className="flex items-center gap-3">
            <span className="text-sm text-gray-500">
                정렬
            </span>

            <select className="rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm outline-none">
                <option>추천순</option>
                <option>가격 높은순</option>
                <option>가격 낮은순</option>
                <option>인기순</option>
            </select>
        </div>
    );
}

export default SearchSort;