/**
 * 图标标签卡片：用于数据源/协议等简短标签展示
 * - 保持中性风格，文本居中，图标圆形背景
 */
interface TileCardProps {
  icon?: React.ReactNode;
  title: string;
  className?: string;
}

export default function TileCard({ icon, title, className = "" }: TileCardProps) {
  return (
    <div className={`bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:border-[#1677FF]/50 hover:shadow-lg transition-all duration-300 group cursor-default h-full justify-center ${className}`}>
      {icon && (
        <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 mb-4 group-hover:bg-[#1677FF] group-hover:text-white transition-all duration-300">
          {icon}
        </div>
      )}
      <h4 className="font-bold text-slate-800 text-lg group-hover:text-[#1677FF] transition-colors">{title}</h4>
    </div>
  );
}

