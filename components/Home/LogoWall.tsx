export default function LogoWall() {
  return (
    <section className="py-12 border-y border-slate-100 bg-[#FAFAFA] overflow-hidden">
      <div className="container mx-auto px-6 mb-10 text-center">
        <p className="text-slate-400 text-base tracking-[0.2em] font-bold">
          深受 500+ 中小企业主信赖
        </p>
      </div>
      <div className="container relative w-full mx-auto flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
        <div className="flex animate-infinite-scroll gap-16 md:gap-24 w-max items-center">
          {[
            '连锁餐饮', '精密加工厂', '跨境电商', '教育培训', '汽配批发', '生鲜配送', '家政服务', '同城物流',
            '连锁餐饮', '精密加工厂', '跨境电商', '教育培训', '汽配批发', '生鲜配送', '家政服务', '同城物流',
          ].map((name, i) => (
            <div key={i} className="flex items-center justify-center min-w-[100px] group cursor-default">
              <span className="text-xl md:text-2xl font-bold text-slate-400/80 group-hover:text-[#1677FF] group-hover:scale-110 transition-all duration-300 font-sans tracking-wide whitespace-nowrap">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}