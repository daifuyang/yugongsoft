export default function LogoWall() {
  return (
    <section className="py-12 border-y border-slate-100 bg-[#FAFAFA] overflow-hidden">
      <div className="container mx-auto px-6 mb-10 text-center">
        <p className="text-slate-400 text-xs tracking-[0.2em] font-bold">
          深受 500+ 行业领军企业信赖
        </p>
      </div>
      <div className="relative w-full max-w-screen-xl mx-auto flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
        <div className="flex animate-infinite-scroll gap-16 md:gap-24 w-max items-center">
          {[
            '阿里云', '腾讯', '华为', '字节跳动', '中国移动', '国家电网', '中国工商银行', '比亚迪', '顺丰科技', '美团',
            '阿里云', '腾讯', '华为', '字节跳动', '中国移动', '国家电网', '中国工商银行', '比亚迪', '顺丰科技', '美团',
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