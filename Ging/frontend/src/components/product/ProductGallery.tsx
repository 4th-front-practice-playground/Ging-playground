import { useState } from "react";

function ProductGallery() {
    const images = [
        "https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1461151304267-38535e780c79?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=1200&auto=format&fit=crop",
    ];

    const [selectedImage, setSelectedImage] =
        useState(images[0]);

    return (
        <div>
            {/* 메인 이미지 */}
            <div className="overflow-hidden rounded-[32px] bg-white shadow-sm">
                <img
                    src={selectedImage}
                    alt="LG 제품"
                    className="h-[600px] w-full object-cover"
                />
            </div>

            {/* 썸네일 */}
            <div className="mt-4 flex gap-4">
                {images.map((image) => (
                    <button
                        key={image}
                        onClick={() =>
                            setSelectedImage(image)
                        }
                        className={`overflow-hidden rounded-2xl border-2 transition ${
                            selectedImage === image
                                ? "border-red-500"
                                : "border-transparent"
                        }`}
                    >
                        <img
                            src={image}
                            alt=""
                            className="h-24 w-24 object-cover"
                        />
                    </button>
                ))}
            </div>
        </div>
    );
}

export default ProductGallery;