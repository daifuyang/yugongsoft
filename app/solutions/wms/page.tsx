import {
  ArrowRight,
  CheckCircle2,
  BarChart3,
  Package,
  ScanBarcode,
  Map,
  Clock,
  Zap,
  Layers,
  FileText,
  Settings,
  Truck
} from 'lucide-react';

import FadeIn from '@/components/FadeIn';
import NumberTicker from '@/components/NumberTicker';

export default function WMS() {
  return (
    <main className="bg-white font-sans selection:bg-[#1677FF] selection:text-white">

      {/* --- Hero Section --- */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-[#F5F7FA]">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-[#E6F7FF] to-transparent opacity-60"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1677ff05_1px,transparent_1px),linear-gradient(to_bottom,#1677ff05_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

            {/* Left: Value Proposition */}
            <div className="lg:w-1/2 space-y-8">
              <FadeIn delay={0.1} direction="up">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-blue-100 shadow-sm shadow-blue-100/50">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1677FF] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#1677FF]"></span>
                  </span>
                  <span className="text-sm font-semibold text-[#1677FF] tracking-wide">智能仓储管理系统</span>
                </div>
              </FadeIn>

              <FadeIn delay={0.2} direction="up">
                <h1 className="text-5xl lg:text-6xl font-bold text-[#000000E0] leading-[1.15] tracking-tight">
                  WMS仓库管理，<br />
                  <span className="text-[#1677FF]">条码出入库精细管理</span>
                </h1>
              </FadeIn>

              <FadeIn delay={0.3} direction="up">
                <p className="text-lg text-slate-500 leading-relaxed max-w-xl">
                  通过PDA扫码实现入库、上架、拣货、复核、出库的全流程智能化作业。让每一个商品都有迹可循，提升仓库作业效率与准确率。
                </p>
              </FadeIn>

              <FadeIn delay={0.4} direction="up">
                <div className="flex flex-wrap gap-4 pt-4">
                  <button className="btn bg-[#1677FF] hover:bg-[#0958D9] text-white px-8 py-4 h-auto rounded-xl font-semibold text-lg shadow-lg shadow-blue-500/30 border-none transition-all hover:-translate-y-1 flex items-center gap-2">
                    免费预约演示
                    <ArrowRight size={18} />
                  </button>
                  <button className="btn bg-white hover:bg-slate-50 text-slate-600 border border-slate-200 px-8 py-4 h-auto rounded-xl font-semibold text-lg shadow-sm hover:shadow-md transition-all flex items-center gap-2">
                    <FileText size={18} />
                    查看解决方案
                  </button>
                </div>
              </FadeIn>
            </div>

            {/* Right: Dashboard Mockup */}
            <div className="lg:w-1/2 relative">
              <FadeIn delay={0.2} direction="left" duration={0.8}>
                <div className="relative w-full bg-white rounded-xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-slate-100 overflow-hidden">
                  <div className="h-10 border-b border-slate-100 bg-slate-50/80 flex items-center px-4 gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
                    </div>
                    <div className="ml-4 h-5 w-32 bg-white rounded border border-slate-100"></div>
                  </div>

                  <div className="p-6 space-y-6">
                    {/* Warehouse Map Visualization */}
                    <div className="bg-slate-900 rounded-xl p-5 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-3">
                             <div className="text-xs text-slate-400">1号仓库实时热力图</div>
                        </div>
                        <div className="grid grid-cols-5 gap-2 mt-6">
                            {Array.from({ length: 15 }).map((_, i) => {
                                const opacity = Math.random() * 0.8 + 0.2;
                                const isBusy = Math.random() > 0.7;
                                return (
                                    <div key={i} className={`h-8 rounded bg-blue-500 transition-all duration-1000`} style={{ opacity }}>
                                        {isBusy && <div className="w-full h-full animate-pulse bg-red-500/50 rounded"></div>}
                                    </div>
                                )
                            })}
                        </div>
                        <div className="mt-4 flex justify-between text-xs text-slate-400">
                            <div>货位利用率: 85%</div>
                            <div>作业中: 5人</div>
                        </div>
                    </div>

                    {/* Task List */}
                    <div className="bg-white rounded-xl border border-slate-100 p-5 shadow-sm">
                        <div className="flex justify-between items-center mb-4">
                            <div className="text-sm font-bold text-slate-800">待办任务</div>
                            <div className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded">PDA实时同步</div>
                        </div>
                        <div className="space-y-3">
                             <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg border-l-4 border-blue-400">
                                 <div>
                                     <div className="font-bold text-slate-700 text-sm">入库任务 #RK20231024</div>
                                     <div className="text-xs text-slate-400 mt-1">待上架: 500件 | A区-02-01</div>
                                 </div>
                                 <div className="text-right">
                                     <button className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded hover:bg-blue-200">执行</button>
                                 </div>
                             </div>
                              <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg border-l-4 border-orange-400">
                                 <div>
                                     <div className="font-bold text-slate-700 text-sm">拣货任务 #JH20231024</div>
                                     <div className="text-xs text-slate-400 mt-1">待拣货: 20件 | B区-05-03</div>
                                 </div>
                                 <div className="text-right">
                                     <button className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded hover:bg-orange-200">执行</button>
                                 </div>
                             </div>
                        </div>
                    </div>

                  </div>
                </div>
              </FadeIn>
              
               {/* Decorative Background */}
              <div className="absolute -z-10 top-10 -right-10 w-full h-full bg-blue-50 rounded-xl opacity-50 scale-95"></div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Stats Banner --- */}
      <section className="bg-white border-b border-slate-100">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-100">
            {[
              { value: "99.9%", label: "库存准确率", icon: Zap },
              { value: "50%", label: "拣货效率提升", icon: Clock },
              { value: "30%", label: "空间利用率提升", icon: Layers },
              { value: "0", label: "错发漏发率", icon: CheckCircle2 },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1} direction="up" className="h-full">
                <div className="flex flex-col items-center justify-center text-center px-4 group cursor-default h-full">
                  <div className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2 group-hover:text-[#1677FF] transition-colors">
                    <NumberTicker value={item.value} />
                  </div>
                  <div className="text-sm text-slate-500 flex items-center gap-1.5">
                    <item.icon size={14} className="text-slate-400" />
                    {item.label}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* --- Pain Points --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <FadeIn direction="up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-[#000000E0] mb-4">
                仓储管理痛点
              </h2>
              <p className="text-slate-500 text-lg">依赖人工记忆和纸质单据，效率低且容易出错</p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "找货难",
                desc: "商品摆放无规则，老员工凭记忆找货，新员工上手慢，拣货效率极低。",
                icon: Map
              },
              {
                title: "错发漏发",
                desc: "肉眼核对容易看走眼，发错货不仅导致退换货成本增加，还影响客户体验。",
                icon: Package
              },
              {
                title: "库存不准",
                desc: "出入库登记滞后，账面库存与实物不符，导致销售超卖或积压。",
                icon: Layers
              }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1} direction="up" className="h-full">
                <div className="group bg-[#F8FAFC] hover:bg-white rounded-2xl p-8 border border-slate-100 hover:border-blue-100 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 h-full">
                  <div className="w-14 h-14 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-[#1677FF] group-hover:scale-110 transition-all mb-6">
                    <item.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* --- Core Features --- */}
      <section className="py-24 bg-[#F5F7FA]">
        <div className="container mx-auto px-6">
          <div className="space-y-24">
            {/* Feature 1 */}
            <FadeIn direction="right">
              <div className="flex flex-col lg:flex-row items-center gap-16">
                <div className="lg:w-1/2 space-y-6">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 text-[#1677FF] flex items-center justify-center">
                    <ScanBarcode size={24} />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">条码/RFID管理，<br />扫码作业零差错</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    支持一维码、二维码、RFID标签。入库扫码上架，出库扫码复核。PDA手持终端指引作业，系统自动校验，防止人为失误。
                  </p>
                  <ul className="space-y-3 pt-2">
                    {["PDA手持终端作业", "防呆防错机制", "全流程条码追溯"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-700">
                        <CheckCircle2 size={18} className="text-[#1677FF]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:w-1/2">
                  <div className="relative bg-white rounded-2xl p-2 shadow-2xl shadow-slate-200/50 border border-white">
                    <div className="aspect-[4/3] bg-slate-50 rounded-xl flex items-center justify-center border border-slate-100">
                        <ScanBarcode size={64} className="text-slate-200" />
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Feature 2 */}
            <FadeIn direction="left">
              <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
                <div className="lg:w-1/2 space-y-6">
                  <div className="w-12 h-12 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center">
                    <Zap size={24} />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">智能波次策略，<br />拣货效率翻倍</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    支持按订单、按商品、按区域等多种波次拣货策略。系统自动规划最优拣货路径，合并拣货任务，减少走动距离，大幅提升拣货效率。
                  </p>
                  <ul className="space-y-3 pt-2">
                    {["波次合并拣货", "最优路径规划", "摘果/播种式分拣"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-700">
                        <CheckCircle2 size={18} className="text-orange-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:w-1/2">
                   <div className="relative bg-white rounded-2xl p-2 shadow-2xl shadow-slate-200/50 border border-white">
                    <div className="aspect-[4/3] bg-slate-50 rounded-xl flex items-center justify-center border border-slate-100">
                        <Zap size={64} className="text-slate-200" />
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
            
             {/* Feature 3 */}
            <FadeIn direction="right">
              <div className="flex flex-col lg:flex-row items-center gap-16">
                <div className="lg:w-1/2 space-y-6">
                  <div className="w-12 h-12 rounded-lg bg-green-100 text-green-600 flex items-center justify-center">
                    <Layers size={24} />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">可视化货位管理，<br />空间利用率提升</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    建立仓库平面图和立体货架模型。系统根据商品体积、重量、周转率推荐最佳上架货位，实现货位利用最大化和先进先出。
                  </p>
                  <ul className="space-y-3 pt-2">
                    {["货位热力图分析", "体积重量智能匹配", "呆滞库存预警"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-700">
                        <CheckCircle2 size={18} className="text-green-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:w-1/2">
                   <div className="relative bg-white rounded-2xl p-2 shadow-2xl shadow-slate-200/50 border border-white">
                    <div className="aspect-[4/3] bg-slate-50 rounded-xl flex items-center justify-center border border-slate-100">
                        <Layers size={64} className="text-slate-200" />
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* --- CTA Section --- */}
      <section className="py-24 bg-[#1677FF] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/grid.svg')] bg-repeat"></div>
        </div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <FadeIn direction="up">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              迈向智能仓储
            </h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
              立即体验 WMS 系统，让仓储管理变得井井有条。
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="btn bg-white text-[#1677FF] hover:bg-blue-50 px-10 py-4 h-auto rounded-xl font-bold text-lg shadow-xl transition-all border-none">
                免费预约演示
              </button>
              <button className="btn bg-transparent border border-white/30 text-white hover:bg-white/10 px-10 py-4 h-auto rounded-xl font-bold text-lg transition-all">
                咨询在线客服
              </button>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
