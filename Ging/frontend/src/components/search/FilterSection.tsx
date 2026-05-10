type FilterSectionProps = {
    title: string;
    items: string[];
};

function FilterSection({
    title,
    items,
}: FilterSectionProps) {
    return (
        <section className="border-b border-gray-100 pb-6">
            <h3 className="mb-4 text-sm font-bold text-black">
                {title}
            </h3>

            <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                    <button
                        key={item}
                        className="rounded-full border border-gray-200 px-4 py-2 text-sm transition hover:border-red-500 hover:text-red-600"
                    >
                        {item}
                    </button>
                ))}
            </div>
        </section>
    );
}

export default FilterSection;