// components/LogoCloud.tsx
export default function LogoCloud() {
  return (
    <section className="py-10 border-y border-white/5 bg-base-100/50">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm text-base-content/40 mb-6 tracking-widest">深受 500+ 行业领军企业信赖</p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 grayscale opacity-60 hover:opacity-100 transition-opacity duration-300">
          {/* 这里替换为你真实的客户 Logo 图片 */}
          <span className="text-xl font-bold text-base-content/60">ALIBABA</span>
          <span className="text-xl font-bold text-base-content/60">TENCENT</span>
          <span className="text-xl font-bold text-base-content/60">HUAWEI</span>
          <span className="text-xl font-bold text-base-content/60">BANK OF CHINA</span>
          <span className="text-xl font-bold text-base-content/60">BYD</span>
        </div>
      </div>
    </section>
  );
}