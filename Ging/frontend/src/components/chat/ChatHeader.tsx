function ChatHeader() {
    return (
        <div className="border-b border-gray-100 bg-white px-8 py-6">
            <h1 className="text-3xl font-bold tracking-tight">
                LG 챗봇
            </h1>

            <p className="mt-2 text-gray-500">
                원하는 가전 조건을 입력하면
                AI가 상품을 추천해드립니다.
            </p>
        </div>
    );
}

export default ChatHeader;