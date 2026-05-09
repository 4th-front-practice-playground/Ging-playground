import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6">
      <div className="max-w-md w-full bg-white p-10 rounded-lg shadow-sm border border-gray-100">
        <h2 className="text-3xl font-bold text-[var(--lg-dark)] mb-8 text-center">로그인</h2>
        
        <div className="space-y-4">
          <input 
            type="email" 
            placeholder="이메일 주소" 
            className="w-full p-4 border border-gray-200 rounded-sm focus:border-[var(--lg-red)] outline-none"
          />
          <input 
            type="password" 
            placeholder="비밀번호" 
            className="w-full p-4 border border-gray-200 rounded-sm focus:border-[var(--lg-red)] outline-none"
          />
          <button className="w-full py-4 bg-[var(--lg-red)] text-white font-bold rounded-sm hover:bg-[#DA0044] transition mt-4">
            로그인하기
          </button>
        </div>

        <div className="mt-6 text-center text-sm text-gray-500">
          계정이 없으신가요? <span className="text-[var(--lg-red)] cursor-pointer font-semibold">회원가입</span>
        </div>
        
        <button 
          onClick={() => navigate('/')} 
          className="mt-8 w-full text-gray-400 text-xs hover:underline"
        >
          메인으로 돌아가기
        </button>
      </div>
    </div>
  );
}