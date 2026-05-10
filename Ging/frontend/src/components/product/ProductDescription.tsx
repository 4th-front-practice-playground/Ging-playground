function ProductDescription() {
    return (
        <section className="mt-20 rounded-[32px] bg-white p-10 shadow-sm">
            <h2 className="text-4xl font-bold">
                제품 설명
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-gray-600">
                LG OLED evo AI는 뛰어난 화질과 AI 기술을
                결합한 프리미엄 TV입니다.
                <br />
                더욱 선명한 색감과 몰입감 높은 사운드를
                제공합니다.
            </p>

            <div className="mt-10 overflow-hidden rounded-[28px]">
                <img
                    src="https://images.unsplash.com/photo-1461151304267-38535e780c79?q=80&w=1600&auto=format&fit=crop"
                    alt="제품 설명"
                    className="h-[500px] w-full object-cover"
                />
            </div>
        </section>
    );
}

export default ProductDescription;