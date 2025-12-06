export default function CTA() {
  return (
    <section className="py-24 bg-[#1677FF] text-white relative overflow-hidden">
      {/* 增加背景纹理：波纹光效 */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
           <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
        </svg>
      </div>
      {/* 增加网格纹理 */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>
      
      {/* 增加光晕 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white rounded-full blur-[150px] opacity-10"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">
          准备好升级您的数字化引擎了吗？
        </h2>
        <p className="text-blue-100 mb-12 max-w-2xl mx-auto text-xl opacity-90 font-light">
          每天有超过 100 家企业选择与我们同行。现在的选择，决定了未来的速度。
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-5">
          <button className="btn bg-white text-[#1677FF] hover:bg-blue-50 border-none btn-lg px-10 h-14 min-h-0 rounded font-bold shadow-2xl shadow-blue-900/20 text-lg">
            免费获取报价
          </button>
          <button className="btn btn-outline border-white/60 text-white hover:bg-white/10 hover:border-white btn-lg px-10 h-14 min-h-0 rounded font-normal text-lg">
            400-888-6666
          </button>
        </div>
      </div>
    </section>
  );
}