import {
  ArrowRight,
  Globe,
  Search,
  Monitor,
  MousePointerClick,
  Image,
  Layout,
  Zap,
  Shield,
  PenTool,
  Smartphone
} from 'lucide-react';
import FadeIn from '@/components/FadeIn';

export default function Website() {
  return (
    <main className="bg-white font-sans selection:bg-[#1677FF] selection:text-white">
      
      {/* --- Hero Section --- */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#F5F7FA]">
        <div className="absolute inset-0 z-0">
           <div className="absolute top-0 left-0 right-0 h-[600px] bg-gradient-to-b from-[#E6F7FF] to-transparent opacity-70"></div>
           <div className="absolute inset-0 bg-[linear-gradient(to_right,#1677ff08_1px,transparent_1px),linear-gradient(to_bottom,#1677ff08_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="lg:w-1/2 space-y-8">
              <FadeIn delay={0.1} direction="up">
                 <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-100 shadow-sm shadow-blue-100/50">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1677FF] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#1677FF]"></span>
                  </span>
                  <span className="text-sm font-semibold text-[#1677FF] tracking-wide">高端品牌形象建设</span>
                </div>
              </FadeIn>
              <FadeIn delay={0.2} direction="up">
                <h1 className="text-5xl lg:text-7xl font-bold text-[#000000E0] leading-[1.1] tracking-tight">
                  企业官网建设<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1677FF] to-[#00C6FF]">
                    始于颜值，忠于转化
                  </span>
                </h1>
              </FadeIn>
              <FadeIn delay={0.3} direction="up">
                <p className="text-lg text-slate-500 leading-relaxed max-w-xl">
                  国际化设计视野，打造具有“大厂气质”的品牌官网。深度融合 SEO 优化策略，让您的网站成为 24 小时自动获客的金牌销售。
                </p>
              </FadeIn>
               <FadeIn delay={0.4} direction="up">
                <div className="flex flex-wrap gap-4 pt-6">
                  <button className="btn bg-[#1677FF] hover:bg-[#0958D9] text-white px-10 py-4 h-auto rounded-xl font-bold text-lg shadow-xl shadow-blue-500/20 border-none transition-all hover:-translate-y-1 flex items-center gap-2">
                    免费获取报价
                    <ArrowRight size={20} />
                  </button>
                  <button className="btn bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-10 py-4 h-auto rounded-xl font-bold text-lg shadow-sm hover:shadow-md transition-all">
                    查看设计案例
                  </button>
                </div>
              </FadeIn>
            </div>
             
            {/* Right: Showcase */}
            <div className="lg:w-1/2 relative">
                <FadeIn delay={0.2} direction="left" duration={0.8}>
                    <div className="relative perspective-1000">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-3xl -z-10 animate-pulse"></div>
                        
                        {/* Floating Layers Effect */}
                        <div className="relative transform rotate-y-12 rotate-x-6 hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-700 preserve-3d">
                            
                            {/* Decorative Elements Behind */}
                            <div className="absolute -top-10 -right-10 z-0 animate-bounce duration-[3000ms]">
                                <div className="bg-white p-3 rounded-xl shadow-lg border border-slate-100 flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                    <span className="text-xs font-bold text-slate-600">Online</span>
                                </div>
                            </div>

                            {/* Desktop View */}
                            <div className="bg-white rounded-xl shadow-2xl border border-slate-200/80 overflow-hidden w-full aspect-[16/10] relative z-10 ring-1 ring-slate-900/5">
                                {/* Browser Chrome */}
                                <div className="h-9 bg-slate-50/80 backdrop-blur border-b border-slate-100 flex items-center px-4 gap-2 justify-between">
                                    <div className="flex gap-1.5">
                                        <div className="w-2.5 h-2.5 rounded-full bg-red-400/80"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-green-400/80"></div>
                                    </div>
                                    <div className="flex-1 mx-4">
                                        <div className="bg-slate-200/50 rounded-md h-5 w-2/3 mx-auto flex items-center justify-center">
                                            <div className="w-2 h-2 bg-slate-400 rounded-full mr-2 opacity-50"></div>
                                            <div className="h-1.5 w-24 bg-slate-300 rounded-full opacity-50"></div>
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="w-4 h-4 rounded-full bg-slate-200/50"></div>
                                    </div>
                                </div>

                                {/* Mockup Content */}
                                <div className="h-full overflow-hidden bg-white relative">
                                    {/* Nav */}
                                    <div className="h-12 border-b border-slate-50 flex items-center justify-between px-6">
                                        <div className="w-20 h-4 bg-slate-200 rounded"></div>
                                        <div className="flex gap-4">
                                            <div className="w-12 h-3 bg-slate-100 rounded"></div>
                                            <div className="w-12 h-3 bg-slate-100 rounded"></div>
                                            <div className="w-12 h-3 bg-slate-100 rounded"></div>
                                            <div className="w-16 h-6 bg-[#1677FF] rounded-md"></div>
                                        </div>
                                    </div>
                                    {/* Hero */}
                                    <div className="p-8 flex items-center gap-8">
                                        <div className="w-1/2 space-y-3">
                                            <div className="w-32 h-6 bg-slate-100 rounded-full"></div>
                                            <div className="w-full h-8 bg-slate-800 rounded-lg"></div>
                                            <div className="w-2/3 h-8 bg-slate-800 rounded-lg"></div>
                                            <div className="w-full h-16 bg-slate-50 rounded-lg mt-2"></div>
                                            <div className="flex gap-3 mt-4">
                                                <div className="w-24 h-8 bg-[#1677FF] rounded-lg"></div>
                                                <div className="w-24 h-8 bg-slate-100 rounded-lg"></div>
                                            </div>
                                        </div>
                                        <div className="w-1/2">
                                            <div className="w-full aspect-square bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-slate-100 relative overflow-hidden">
                                                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.5)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] animate-[shimmer_3s_infinite]"></div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Features Grid */}
                                    <div className="px-8 py-4 grid grid-cols-3 gap-4">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className="h-24 bg-slate-50 rounded-xl border border-slate-100 p-3">
                                                <div className="w-8 h-8 bg-white rounded-lg mb-2 shadow-sm"></div>
                                                <div className="w-16 h-3 bg-slate-200 rounded mb-1"></div>
                                                <div className="w-full h-2 bg-slate-100 rounded"></div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                
                                {/* Mouse Cursor Overlay */}
                                <div className="absolute top-[60%] left-[60%] z-30 drop-shadow-xl animate-[moveCursor_5s_infinite]">
                                     <MousePointerClick className="text-black fill-black w-6 h-6" />
                                     <div className="ml-4 mt-1 bg-black text-white text-[10px] px-2 py-0.5 rounded-full font-bold">Click</div>
                                </div>
                            </div>
                            
                            {/* Mobile View (Floating) */}
                            <div className="absolute -right-6 -bottom-16 w-[140px] h-[280px] bg-slate-900 rounded-[2rem] border-[6px] border-slate-800 shadow-2xl z-20 ring-1 ring-white/20">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-slate-800 rounded-b-xl z-30"></div>
                                {/* Mobile Screen */}
                                <div className="w-full h-full bg-white rounded-[1.5rem] overflow-hidden flex flex-col relative">
                                    {/* Mobile Header */}
                                    <div className="h-12 bg-white flex items-center justify-between px-3 pt-2">
                                        <div className="w-4 h-4 rounded bg-slate-100"></div>
                                        <div className="w-16 h-3 bg-slate-100 rounded"></div>
                                        <div className="w-4 h-4 rounded bg-slate-100"></div>
                                    </div>
                                    {/* Mobile Hero */}
                                    <div className="p-3 space-y-2">
                                        <div className="w-full aspect-video bg-blue-50 rounded-lg mb-2"></div>
                                        <div className="w-3/4 h-4 bg-slate-800 rounded"></div>
                                        <div className="w-1/2 h-4 bg-slate-800 rounded"></div>
                                        <div className="flex gap-2 mt-2">
                                            <div className="flex-1 h-6 bg-[#1677FF] rounded"></div>
                                            <div className="flex-1 h-6 bg-slate-100 rounded"></div>
                                        </div>
                                    </div>
                                    {/* Mobile List */}
                                    <div className="px-3 space-y-2">
                                        {[1, 2].map(i => (
                                            <div key={i} className="h-12 bg-slate-50 rounded-lg border border-slate-100 flex items-center px-2 gap-2">
                                                <div className="w-8 h-8 bg-white rounded shadow-sm"></div>
                                                <div className="flex-1">
                                                    <div className="w-12 h-2 bg-slate-200 rounded mb-1"></div>
                                                    <div className="w-20 h-2 bg-slate-100 rounded"></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* --- Responsive Design Showcase --- */}
      <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
              <FadeIn direction="up">
                <div className="text-center max-w-3xl mx-auto mb-16">
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">全端响应式设计</h2>
                  <p className="text-slate-500 text-lg">一次开发，多端适配。无论用户使用什么设备访问，都能获得最佳浏览体验。</p>
                </div>
              </FadeIn>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  {[
                      { icon: <Monitor size={48} />, title: "桌面端 Desktop", desc: "沉浸式大屏体验，展示丰富的信息与视觉效果，建立品牌信任感。" },
                      { icon: <Layout size={48} />, title: "平板端 Tablet", desc: "自适应布局调整，兼顾触控操作与信息密度，适合移动办公场景。" },
                      { icon: <Smartphone size={48} />, title: "移动端 Mobile", desc: "极简交互设计，关键信息一目了然，方便用户随时随地快速访问。" }
                  ].map((item, i) => (
                      <FadeIn key={i} delay={i * 0.1} direction="up">
                          <div className="p-8 bg-slate-50 rounded-2xl hover:bg-white border border-slate-100 hover:shadow-xl transition-all duration-300 group">
                              <div className="text-slate-300 group-hover:text-[#1677FF] transition-colors mb-6 flex justify-center">{item.icon}</div>
                              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                              <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                          </div>
                      </FadeIn>
                  ))}
              </div>
          </div>
      </section>

      {/* --- SEO & Marketing --- */}
       <section className="py-24 bg-[#F5F7FA]">
          <div className="container mx-auto px-6">
             <div className="flex flex-col lg:flex-row items-center gap-16">
                 <div className="lg:w-1/2">
                     <FadeIn direction="right">
                         <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">不仅是名片，<br /><span className="text-[#1677FF]">更是获客利器</span></h2>
                         <p className="text-slate-600 text-lg leading-relaxed mb-8">
                             大多数建站公司只在乎好看，而我们更在乎效果。我们将 SEO 优化策略融入到代码开发的每一行，确保您的网站深受搜索引擎喜爱。
                         </p>
                         <div className="space-y-6">
                             {[
                                 { title: "代码结构优化", desc: "语义化 HTML5 标签，H1-H6 标签规范使用，利于爬虫抓取。" },
                                 { title: "极致加载速度", desc: "图片自动压缩，代码合并混淆，CDN 加速，秒开体验降低跳出率。" },
                                 { title: "TDK 自动配置", desc: "每个页面均可独立设置 Title, Keywords, Description，精准覆盖长尾词。" }
                             ].map((item, i) => (
                                 <div key={i} className="flex gap-4">
                                     <div className="w-12 h-12 rounded-lg bg-white border border-slate-100 flex items-center justify-center text-[#1677FF] shadow-sm shrink-0">
                                         <Search size={24} />
                                     </div>
                                     <div>
                                         <h4 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h4>
                                         <p className="text-slate-500 text-sm">{item.desc}</p>
                                     </div>
                                 </div>
                             ))}
                         </div>
                     </FadeIn>
                 </div>
                 <div className="lg:w-1/2">
                     <FadeIn direction="left">
                        <div className="relative">
                            {/* Main Audit Card */}
                            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 relative z-10">
                                <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl"></div>
                                
                                <div className="flex justify-between items-center mb-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#1677FF]">
                                            <Shield size={20} />
                                        </div>
                                        <div>
                                            <div className="font-bold text-slate-900">Site Audit</div>
                                            <div className="text-xs text-slate-400">Updated 2m ago</div>
                                        </div>
                                    </div>
                                    <div className="text-green-500 font-bold text-xl">A+</div>
                                </div>

                                <div className="space-y-4 mb-6">
                                    {[
                                        { label: "Performance", score: 98, color: "bg-green-500" },
                                        { label: "Accessibility", score: 100, color: "bg-green-500" },
                                        { label: "Best Practices", score: 95, color: "bg-blue-500" },
                                        { label: "SEO", score: 100, color: "bg-green-500" },
                                    ].map((metric, i) => (
                                        <div key={i}>
                                            <div className="flex justify-between text-sm mb-1">
                                                <span className="font-medium text-slate-700">{metric.label}</span>
                                                <span className="font-bold text-slate-900">{metric.score}</span>
                                            </div>
                                            <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                                <div style={{width: `${metric.score}%`}} className={`h-full ${metric.color} rounded-full`}></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                
                                <div className="pt-4 border-t border-slate-100 grid grid-cols-3 gap-4">
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-slate-900">0</div>
                                        <div className="text-xs text-slate-400">Errors</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-slate-900">0</div>
                                        <div className="text-xs text-slate-400">Warnings</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-green-500">98</div>
                                        <div className="text-xs text-slate-400">Passed</div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Search Result Card */}
                            <div className="absolute -bottom-10 -left-10 z-20 w-full max-w-sm animate-[float_6s_infinite_ease-in-out]">
                                <div className="bg-white p-5 rounded-xl shadow-2xl border border-slate-100/80 backdrop-blur-sm">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-[10px] font-bold text-[#1677FF]">G</div>
                                        <div className="text-xs text-slate-500">google.com</div>
                                    </div>
                                    <div className="text-[#1a0dab] text-lg font-medium hover:underline cursor-pointer truncate">
                                        Brand Official Website - Premium Design & Dev
                                    </div>
                                    <div className="text-green-700 text-sm mb-1 truncate">
                                        https://www.yourbrand.com/official
                                    </div>
                                    <div className="text-slate-500 text-sm line-clamp-2">
                                        Professional website development services. Custom design, SEO optimized, mobile responsive. Boost your business growth today.
                                    </div>
                                </div>
                            </div>
                        </div>
                     </FadeIn>
                 </div>
             </div>
          </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
           <FadeIn direction="up">
             <h2 className="text-4xl font-bold text-slate-900 mb-6">让您的品牌脱颖而出</h2>
             <p className="text-xl text-slate-500 mb-10 max-w-2xl mx-auto">
               不要让糟糕的网站形象流失客户。立即升级您的企业数字门面。
             </p>
             <button className="btn bg-[#1677FF] hover:bg-[#0958D9] text-white px-12 py-5 h-auto rounded-full font-bold text-xl shadow-xl shadow-blue-500/30 border-none transition-all hover:scale-105">
               预约网站诊断
             </button>
           </FadeIn>
        </div>
      </section>

    </main>
  );
}
