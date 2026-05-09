import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  return (
    <header className="flex justify-between items-center p-5 bg-white border-b-2 border-[var(--lg-red)] sticky top-0 z-50">
        <h1 onClick={() => navigate('/')} className="text-2xl font-bold text-[var(--lg-dark)] cursor-pointer tracking-tighter">
            <span className="text-[var(--lg-red)] mr-2 text-xl italic">Life is</span>
            <span className="font-black text-3xl">Oda</span>
        </h1>
        <div className="flex items-center space-x-6 text-sm font-semibold">
        <button onClick={() => navigate('/chat')} className="text-gray-600 hover:text-[var(--lg-red)]">AI 상담</button>
        
        {/* 로그인 버튼 추가 */}
        <button 
          onClick={() => navigate('/login')} 
          className="text-[var(--lg-dark)] hover:underline"
        >
          로그인
        </button>

        <button 
          onClick={() => navigate('/mypage')} 
          className="px-5 py-2 bg-[var(--lg-dark)] text-white rounded-sm hover:bg-black transition"
        >
          마이페이지
        </button>
      </div>
    </header>
  );
}