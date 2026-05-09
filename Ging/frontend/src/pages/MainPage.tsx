import Header from '../components/Header';
import CategoryCard from '../components/CategoryCard';
import { useNavigate } from 'react-router-dom';

export default function MainPage() {
  const navigate = useNavigate();
  
  // 카테고리
  const categories = [
    { name: 'TV', icon: '📺', path: '/product/tv' },
    { name: '냉장고', icon: '🧊', path: '/product/refrigerator' },
    { name: '에어컨', icon: '❄️', path: '/product/air-conditioner' },
    { name: '청소기', icon: '🧹', path: '/product/vacuum' },
    { name: '세탁기', icon: '🧺', path: '/product/washing-machine' },
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      
      <main>
        {/* 히어로 섹션 */}
        <section className="h-[550px] flex items-center justify-center bg-gradient-to-br from-[#1a1a1a] via-[#333333] to-[#4a4a4a] text-white text-center px-6 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[var(--lg-red)] opacity-10 blur-[120px] pointer-events-none"></div>
  
          <div className="relative z-10">
            <h2 className="text-6xl font-light mb-6 tracking-tight">
              <span className="italic font-serif">Life is</span> <span className="font-black text-[var(--lg-red)]">Oda</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8">당신의 공간을 완성하는 스마트 가전 큐레이션</p>
    
            <div className="flex justify-center space-x-4">
              <button 
                onClick={() => navigate('/chat')}
                className="px-10 py-4 bg-[var(--lg-red)] hover:bg-[#DA0044] text-white font-bold rounded-sm transition shadow-lg active:scale-95"
              >
                AI 상담 시작하기
              </button>
      
              <button 
                onClick={() => navigate('/login')}
                className="px-10 py-4 border border-white text-white font-bold rounded-sm hover:bg-white hover:text-[var(--lg-dark)] transition active:scale-95"
              >
                로그인
              </button>
            </div>
          </div>
        </section>

        {/* 카테고리 섹션 */}
        <section className="max-w-7xl mx-auto py-20 px-6">
          <h3 className="text-2xl font-bold text-[var(--lg-dark)] mb-10 text-center uppercase tracking-wider">
            Category
          </h3>
          {/* 5개 아이템을 예쁘게 보여주기 위해 md:grid-cols-5로 변경 */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {categories.map((cat) => (
              <CategoryCard 
                key={cat.name} 
                name={cat.name} 
                icon={cat.icon} 
                path={cat.path} 
              />
            ))}
          </div>
        </section>
      </main>

      <footer className="py-10 border-t border-gray-100 text-center text-gray-400 text-sm">
        <p>© 2026 Team Oda. All rights reserved.</p>
      </footer>
    </div>
  );
}