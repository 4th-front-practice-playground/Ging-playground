type ProductBadgeProps = {
    label: string;
};

function ProductBadge({
    label,
}: ProductBadgeProps) {
    return (
        <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-600">
            {label}
        </span>
    );
}

export default ProductBadge;