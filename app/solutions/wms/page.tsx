import * as motion from "framer-motion/client";
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
  Truck,
  Wifi,
  Battery,
  ChevronRight,
  Search,
  ArrowUpRight,
  Box
} from 'lucide-react';

import FadeIn from '@/components/FadeIn';
import NumberTicker from '@/components/NumberTicker';
import CtaSection from '@/components/ui/CtaSection';
import FeatureGrid from '@/components/ui/FeatureGrid';

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
            <motion.div
              className="lg:w-1/2 relative"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
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
                                const opacity = 0.2 + (((i * 37) % 80) / 100);
                                const isBusy = i % 7 === 0;
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
            </motion.div>
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

          <div className="mb-16">
            <FadeIn direction="up">
              <FeatureGrid
                items={[
                  {
                    title: "找货难",
                    desc: "商品摆放无规则，老员工凭记忆找货，新员工上手慢，拣货效率极低。",
                    icon: <Map size={28} />
                  },
                  {
                    title: "错发漏发",
                    desc: "肉眼核对容易看走眼，发错货不仅导致退换货成本增加，还影响客户体验。",
                    icon: <Package size={28} />
                  },
                  {
                    title: "库存不准",
                    desc: "出入库登记滞后，账面库存与实物不符，导致销售超卖或积压。",
                    icon: <Layers size={28} />
                  }
                ]}
                cols={3}
                animated
                variant="badge"
                size="lg"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* --- Core Features --- */}
      <section className="py-24 bg-[#F5F7FA]">
        <div className="container mx-auto px-6">
          <div className="space-y-32">
            {/* Feature 1: PDA/Barcode */}
            <FadeIn direction="right">
              <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                <div className="lg:w-1/2 space-y-6">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#1677FF] flex items-center justify-center border border-blue-100">
                    <ScanBarcode size={28} />
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">条码/RFID管理，<br />扫码作业零差错</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    支持一维码、二维码、RFID标签。入库扫码上架，出库扫码复核。PDA手持终端指引作业，系统自动校验，防止人为失误。
                  </p>
                  <ul className="space-y-4 pt-4">
                    {["PDA手持终端作业", "防呆防错机制", "全流程条码追溯"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-700">
                        <CheckCircle2 size={20} className="text-[#1677FF] shrink-0" />
                        <span className="font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:w-1/2 flex justify-center lg:justify-end">
                  {/* PDA Mockup - Clean & Flat */}
                  <div className="relative w-[320px] h-[640px] bg-white rounded-[3rem] border-[8px] border-slate-900 shadow-2xl overflow-hidden">
                      {/* Status Bar */}
                      <div className="h-8 bg-white flex justify-between items-center px-6 pt-2 shrink-0 select-none">
                          <div className="text-[10px] font-bold text-slate-900">9:41</div>
                          <div className="flex gap-1">
                              <div className="w-3 h-2 bg-slate-900 rounded-[1px]"></div>
                              <div className="w-0.5 h-2 bg-slate-900/30 rounded-[1px]"></div>
                          </div>
                      </div>
                      
                      {/* App Header */}
                      <div className="bg-white px-4 pb-3 shrink-0 border-b border-slate-50">
                          <div className="flex items-center gap-3 mb-3">
                              <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[#1677FF]">
                                <ChevronRight className="rotate-180" size={20}/>
                              </div>
                              <div className="flex-1 text-center pr-8">
                                  <div className="text-lg font-bold text-slate-900">入库上架</div>
                              </div>
                          </div>
                          <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                              <div className="text-xs text-slate-400 mb-1">当前任务单号</div>
                              <div className="font-mono font-bold text-slate-800 flex justify-between items-center">
                                <span>RK-20231205-001</span>
                                <span className="text-[10px] bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">进行中</span>
                              </div>
                          </div>
                      </div>

                      {/* Content Area */}
                      <div className="p-4 space-y-4 bg-[#F9FAFB] h-full overflow-hidden flex flex-col">
                          {/* Scan Box */}
                          <div className="bg-white p-6 rounded-2xl border border-dashed border-slate-300 shadow-sm text-center flex flex-col items-center justify-center gap-2 group cursor-pointer hover:border-blue-400 hover:bg-blue-50/30 transition-all">
                              <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-blue-100 group-hover:text-blue-500 transition-colors">
                                <ScanBarcode size={24}/>
                              </div>
                              <div className="text-sm font-medium text-slate-500 group-hover:text-blue-600">点击扫描商品条码</div>
                          </div>

                          {/* Item Info */}
                          <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex-1">
                              <div className="flex gap-4 mb-5">
                                  <div className="w-20 h-20 bg-slate-50 rounded-xl shrink-0 flex items-center justify-center border border-slate-100">
                                      <Package size={32} className="text-slate-300"/>
                                  </div>
                                  <div>
                                      <div className="font-bold text-slate-900 text-lg mb-1">无线蓝牙耳机 Pro</div>
                                      <div className="text-xs text-slate-500 mb-1">规格: 白色 / 标准版</div>
                                      <div className="text-xs font-mono text-slate-400">6941234567890</div>
                                  </div>
                              </div>
                              
                              <div className="grid grid-cols-2 gap-3 mb-4">
                                  <div className="bg-blue-50 p-3 rounded-xl border border-blue-100">
                                      <div className="text-xs text-blue-500 mb-1">推荐货位</div>
                                      <div className="font-bold text-xl text-blue-700">A-02-15</div>
                                  </div>
                                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                                      <div className="text-xs text-slate-500 mb-1">待上架</div>
                                      <div className="font-bold text-xl text-slate-800">50 <span className="text-xs font-normal text-slate-400">件</span></div>
                                  </div>
                              </div>
                              
                              <div className="space-y-2">
                                <div className="text-xs text-slate-400 flex justify-between">
                                  <span>上架进度</span>
                                  <span>20/50</span>
                                </div>
                                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                                  <div className="h-full w-[40%] bg-blue-500 rounded-full"></div>
                                </div>
                              </div>
                          </div>
                          
                          {/* Action Button */}
                          <div className="pb-8">
                            <button className="w-full bg-[#1677FF] hover:bg-[#0958D9] text-white py-4 rounded-xl font-bold shadow-lg shadow-blue-500/30 text-lg active:scale-95 transition-all">
                                确认上架
                            </button>
                          </div>
                      </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Feature 2: Wave Picking */}
            <FadeIn direction="left">
              <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24">
                <div className="lg:w-1/2 space-y-6">
                  <div className="w-14 h-14 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center border border-orange-100">
                    <Zap size={28} />
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">智能波次策略，<br />拣货效率翻倍</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    支持按订单、按商品、按区域等多种波次拣货策略。系统自动规划最优拣货路径，合并拣货任务，减少走动距离，大幅提升拣货效率。
                  </p>
                  <ul className="space-y-4 pt-4">
                    {["波次合并拣货", "最优路径规划", "摘果/播种式分拣"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-700">
                        <CheckCircle2 size={20} className="text-orange-500 shrink-0" />
                        <span className="font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:w-1/2 flex justify-center lg:justify-start">
                   {/* Wave Dashboard */}
                   <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
                       <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                           <div className="flex items-center gap-2">
                               <Layers size={18} className="text-orange-500"/>
                               <span className="font-bold text-slate-700">波次任务监控</span>
                           </div>
                           <div className="text-xs text-slate-500">执行中: 3个</div>
                       </div>
                       
                       <div className="p-6 space-y-6">
                           {/* Wave Item */}
                           {[
                               { id: "W-20231205-01", progress: 85, status: "拣货中", items: 120, orders: 45, color: "bg-blue-500" },
                               { id: "W-20231205-02", progress: 30, status: "等待中", items: 80, orders: 28, color: "bg-orange-500" }
                           ].map((wave, i) => (
                               <div key={i} className="bg-white border border-slate-100 rounded-xl p-4 shadow-sm">
                                   <div className="flex justify-between items-start mb-3">
                                       <div>
                                           <div className="flex items-center gap-2 mb-1">
                                               <span className="font-bold text-slate-800 text-sm">波次 {wave.id}</span>
                                               <span className={`text-[10px] px-1.5 py-0.5 rounded text-white ${wave.progress > 50 ? 'bg-blue-500' : 'bg-orange-500'}`}>{wave.status}</span>
                                           </div>
                                           <div className="text-xs text-slate-500">{wave.orders} 订单 | {wave.items} 商品</div>
                                       </div>
                                       <div className="text-lg font-bold text-slate-700">{wave.progress}%</div>
                                   </div>
                                   <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden mb-3">
                                       <div className={`h-full rounded-full ${wave.color} transition-all duration-1000`} style={{ width: `${wave.progress}%` }}></div>
                                   </div>
                                   
                                   {/* Path Optimization Visual */}
                                   {i === 0 && (
                                       <div className="mt-4 bg-slate-50 rounded-lg p-3">
                                           <div className="flex items-center justify-between text-[10px] text-slate-400 mb-2">
                                               <span>路径优化推荐</span>
                                               <span className="text-green-600 flex items-center gap-1"><Zap size={10}/> 节省 45% 距离</span>
                                           </div>
                                           <div className="flex items-center gap-2 text-xs font-mono text-slate-600">
                                               <div className="bg-white border border-slate-200 px-2 py-1 rounded">A01</div>
                                               <ArrowRight size={12} className="text-slate-300"/>
                                               <div className="bg-white border border-slate-200 px-2 py-1 rounded">A05</div>
                                               <ArrowRight size={12} className="text-slate-300"/>
                                               <div className="bg-white border border-slate-200 px-2 py-1 rounded">B03</div>
                                               <ArrowRight size={12} className="text-slate-300"/>
                                               <div className="bg-blue-100 text-blue-600 border border-blue-200 px-2 py-1 rounded">复核台</div>
                                           </div>
                                       </div>
                                   )}
                               </div>
                           ))}
                       </div>
                   </div>
                </div>
              </div>
            </FadeIn>
            
             {/* Feature 3: Visual Locations */}
            <FadeIn direction="right">
              <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                <div className="lg:w-1/2 space-y-6">
                  <div className="w-14 h-14 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center border border-green-100">
                    <Layers size={28} />
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">可视化货位管理，<br />空间利用率提升</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    建立仓库平面图和立体货架模型。系统根据商品体积、重量、周转率推荐最佳上架货位，实现货位利用最大化和先进先出。
                  </p>
                  <ul className="space-y-4 pt-4">
                    {["货位热力图分析", "体积重量智能匹配", "呆滞库存预警"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-700">
                        <CheckCircle2 size={20} className="text-green-500 shrink-0" />
                        <span className="font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:w-1/2 flex justify-center lg:justify-end">
                   {/* Warehouse Map Card */}
                   <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
                       <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                           <div>
                               <div className="text-lg font-bold text-slate-800">1号库区平面图</div>
                               <div className="text-xs text-slate-400">实时热力监控</div>
                           </div>
                           <div className="flex gap-2">
                               <div className="flex items-center gap-1 text-[10px] text-slate-500">
                                   <div className="w-2 h-2 bg-blue-500 rounded-sm"></div> 满载
                               </div>
                               <div className="flex items-center gap-1 text-[10px] text-slate-500">
                                   <div className="w-2 h-2 bg-slate-200 rounded-sm"></div> 空闲
                               </div>
                           </div>
                       </div>
                       
                       <div className="p-6 bg-slate-50 relative overflow-hidden">
                           {/* Grid Visualization */}
                           <div className="grid grid-cols-6 gap-2">
                               {Array.from({ length: 24 }).map((_, i) => {
                                   const status = i % 5 === 0 ? 'empty' : (i % 3 === 0 ? 'hot' : 'normal');
                                   let color = 'bg-blue-200';
                                   if (status === 'empty') color = 'bg-slate-200';
                                   if (status === 'hot') color = 'bg-blue-600';
                                   
                                   return (
                                       <div key={i} className={`aspect-square rounded-md ${color} relative group cursor-pointer transition-all hover:scale-105 hover:shadow-lg`}>
                                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 text-[10px] text-white font-bold transition-opacity">
                                              {status === 'empty' ? '空' : `${(i * 13) % 100}%`}
                                          </div>
                                       </div>
                                   )
                               })}
                           </div>
                       </div>
                       
                       <div className="px-6 py-4 bg-white border-t border-slate-100 grid grid-cols-3 divide-x divide-slate-100">
                           <div className="text-center">
                               <div className="text-xs text-slate-400">总货位</div>
                               <div className="font-bold text-slate-800">2,400</div>
                           </div>
                           <div className="text-center">
                               <div className="text-xs text-slate-400">已使用</div>
                               <div className="font-bold text-blue-600">1,850</div>
                           </div>
                           <div className="text-center">
                               <div className="text-xs text-slate-400">利用率</div>
                               <div className="font-bold text-slate-800">77%</div>
                           </div>
                       </div>
                   </div>
                </div>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* --- CTA Section --- */}
      <CtaSection
        title="迈向智能仓储"
        description={
          <>
            立即体验 WMS 系统，让仓储管理变得井井有条。
            <br className="hidden md:block" />
            现在注册，即可获得 15 天全功能免费试用。
            <div className="mt-8 text-sm text-blue-200/80">
              支持私有化部署 · 7x24小时服务支持
            </div>
          </>
        }
        primaryAction={{ label: "免费预约演示", href: "/contact" }}
        secondaryAction={{ label: "咨询在线客服", href: "/contact" }}
      />
    </main>
  );
}
