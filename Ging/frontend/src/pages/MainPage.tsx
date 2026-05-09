import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import {
  Tv,
  Refrigerator,
  Wind,
  WashingMachine,
  Sparkles,
} from "lucide-react";

function MainPage() {
  const navigate = useNavigate();

  const categories = [
    {
      name: "TV",
      icon: <Tv size={38} />,
      desc: "더 선명한 화질",
    },
    {
      name: "냉장고",
      icon: <Refrigerator size={38} />,
      desc: "신선함을 오래",
    },
    {
      name: "에어컨",
      icon: <Wind size={38} />,
      desc: "쾌적한 공기",
    },
    {
      name: "청소기",
      icon: <Sparkles size={38} />,
      desc: "깨끗한 생활",
    },
    {
      name: "세탁기",
      icon: <WashingMachine size={38} />,
      desc: "똑똑한 세탁",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f7f7f8]">
      <Header />

      <main className="mx-auto max-w-7xl px-6 py-8">
        {/* 메인 배너 */}
        <section className="relative mb-10 overflow-hidden rounded-[32px] bg-white shadow-sm">
          <div className="grid items-center lg:grid-cols-2">
            {/* 왼쪽 텍스트 */}
            <div className="p-14">
              <p className="mb-4 text-sm font-semibold text-red-600">
                LG ELECTRONICS
              </p>

              <h1 className="mb-6 text-5xl font-bold leading-tight text-black">
                당신의 일상을 더 편리하게
                <br />
                LG전자 가전
              </h1>

              <p className="mb-8 text-lg text-gray-500">
                혁신적인 기술과 디자인으로 삶의 질을 높여보세요.
              </p>

              <button className="rounded-full bg-black px-7 py-4 text-sm font-semibold text-white transition hover:bg-gray-800">
                자세히 보기
              </button>
            </div>

            {/* 오른쪽 이미지 */}
            <div className="h-full">
             <img
  src="https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1600&auto=format&fit=crop"
  alt="Smart Home"
  className="h-full w-full object-cover"
/>
            </div>
          </div>
        </section>

        {/* LG봇 추천 */}
        <section className="mb-12 rounded-[28px] bg-white p-8 shadow-sm">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-100">
                <Sparkles className="text-pink-500" />
              </div>

              <div>
                <h2 className="mb-2 text-3xl font-bold text-black">
                  LG봇에게 추천받기
                </h2>

                <p className="text-gray-500">
                  나에게 딱 맞는 LG 가전을 AI에게 추천받아보세요.
                </p>
              </div>
            </div>

            <button
              className="rounded-2xl bg-red-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-red-700"
              onClick={() => navigate("/chat")}
            >
              LG봇 시작 →
            </button>
          </div>
        </section>

        {/* 카테고리 */}
        <section>
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-3xl font-bold text-black">
              카테고리
            </h2>

            <button className="text-sm font-medium text-gray-500 hover:text-black">
              전체보기 →
            </button>
          </div>

          <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() =>
                  navigate(`/search?category=${category.name}`)
                }
                className="group rounded-[24px] bg-white p-6 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-5 text-gray-800 transition group-hover:scale-110">
                  {category.icon}
                </div>

                <h3 className="mb-2 text-xl font-bold text-black">
                  {category.name}
                </h3>

                <p className="text-sm text-gray-500">
                  {category.desc}
                </p>
              </button>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default MainPage;