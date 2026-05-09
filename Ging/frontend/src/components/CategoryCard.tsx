import { useNavigate } from 'react-router-dom';

interface CategoryProps {
  name: string;
  icon: string;
  path: string; // path 프롭스 추가 확인!
}

export default function CategoryCard({ name, icon, path }: CategoryProps) {
  const navigate = useNavigate();

  return (
    <div 
        onClick={() => navigate(path)}
        className="group flex flex-col items-center p-8 bg-white border border-gray-100 
             rounded-[32px] shadow-sm hover:shadow-2xl hover:shadow-red-100/50 
             -translate-y-0 hover:-translate-y-2 transition-all duration-500 cursor-pointer"
    >
    <div className="w-20 h-20 mb-6 flex items-center justify-center bg-gray-50 rounded-full 
                  group-hover:rotate-12 transition-transform duration-500">
        <span className="text-4xl">{icon}</span>
    </div>
      
        <span className="font-semibold text-gray-600 group-hover:text-[var(--lg-red)] transition-colors">
        {name}
        </span>
    </div>
  );
}