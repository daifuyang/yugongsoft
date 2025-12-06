import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  CheckCircle2, 
  Factory, 
  Cpu, 
  Settings, 
  ClipboardList,
  BarChart4,
  Truck,
  AlertTriangle,
  Clock,
  Database,
  ScanBarcode
} from 'lucide-react';

import FadeIn from '@/components/FadeIn';
import NumberTicker from '@/components/NumberTicker';

export default function MESPage() {
  return (
    <main className="bg-white font-sans selection:bg-[#1677FF] selection:text-white">
      
      {/* --- Hero Section: 数字工厂、实时监控 --- */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-[#F5F7FA]">
        {/* 背景装饰 */}
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
                  <span className="text-sm font-semibold text-[#1677FF] tracking-wide">工业 4.0 智能制造引擎</span>
                </div>
              </FadeIn>

              <FadeIn delay={0.2} direction="up">
                <h1 className="text-5xl lg:text-6xl font-bold text-[#000000E0] leading-[1.15] tracking-tight">
                  打造透明工厂，<br />
                  <span className="text-[#1677FF]">让生产过程可视可控</span>
                </h1>
              </FadeIn>
              
              <FadeIn delay={0.3} direction="up">
                <p className="text-lg text-slate-500 leading-relaxed max-w-xl">
                  连接人、机、料、法、环，打破生产黑盒。通过实时数据采集与分析，实现从订单下达到产品入库的全流程精细化管控，助您迈入智能制造时代。
                </p>
              </FadeIn>

              <FadeIn delay={0.4} direction="up">
                <div className="flex flex-wrap gap-4 pt-4">
                  <button className="btn bg-[#1677FF] hover:bg-[#0958D9] text-white px-8 py-4 h-auto rounded-xl font-semibold text-lg shadow-lg shadow-blue-500/30 border-none transition-all hover:-translate-y-1 flex items-center gap-2">
                    预约工厂诊断
                    <ArrowRight size={18} />
                  </button>
                  <button className="btn bg-white hover:bg-slate-50 text-slate-600 border border-slate-200 px-8 py-4 h-auto rounded-xl font-semibold text-lg shadow-sm hover:shadow-md transition-all flex items-center gap-2">
                    <Factory size={18} />
                    查看实施案例
                  </button>
                </div>
              </FadeIn>
            </div>

            {/* Right: Flat Production Line Mockup */}
            <div className="lg:w-1/2 relative">
              <FadeIn delay={0.2} direction="left" duration={0.8}>
                <div className="relative w-full aspect-[3/2] shadow-2xl shadow-blue-900/10 rounded-2xl overflow-hidden border border-slate-200/50">
                  {/* Main Dashboard Layer */}
                  <div className="absolute inset-0 bg-[#001529] flex flex-col">
                     {/* Header */}
                     <div className="h-10 border-b border-slate-700 bg-slate-800/50 flex items-center justify-between px-4 shrink-0">
                        <div className="text-blue-400 font-mono text-xs tracking-wider">PRODUCTION MONITORING</div>
                        <div className="flex gap-2">
                           <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                           <span className="text-[10px] text-green-500 font-medium">LIVE</span>
                        </div>
                     </div>
                     
                     {/* Content */}
                     <div className="flex-1 p-5 relative">
                        {/* Grid Lines */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                        
                        <div className="relative z-10 grid grid-cols-2 grid-rows-[auto_1fr] gap-4 h-full">
                           {/* Machine Status */}
                           <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-3">
                              <div className="text-slate-400 text-[10px] mb-2">设备综合效率 (OEE)</div>
                              <div className="flex items-center justify-center h-20 relative">
                                 <div className="w-16 h-16 rounded-full border-[3px] border-slate-700 border-t-blue-500 border-r-blue-500 rotate-45"></div>
                                 <span className="absolute text-lg font-bold text-white">87%</span>
                              </div>
                           </div>
                           
                           {/* Output Chart */}
                           <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-3 flex flex-col justify-end">
                              <div className="flex items-end justify-between gap-1 h-20">
                                 {[40, 65, 45, 80, 55, 90, 70, 85].map((h, i) => (
                                    <div key={i} style={{height: `${h}%`}} className="w-full bg-blue-500/80 rounded-t-sm hover:bg-blue-400 transition-colors"></div>
                                 ))}
                              </div>
                              <div className="text-slate-400 text-[10px] mt-2 text-center">实时产量趋势</div>
                           </div>

                           {/* Alert Log - Enhanced Table Style */}
                           <div className="col-span-2 bg-slate-800/50 border border-slate-700 rounded-lg p-0 overflow-hidden flex flex-col">
                              <div className="flex items-center justify-between px-3 py-2 border-b border-slate-700/50 bg-slate-800/80">
                                 <div className="flex items-center gap-2 text-xs text-red-400">
                                    <AlertTriangle size={12} />
                                    <span className="font-medium">异常日志</span>
                                 </div>
                                 <div className="text-[10px] text-slate-500">Real-time</div>
                              </div>
                              
                              <div className="flex-1 overflow-y-auto p-2 space-y-1.5 custom-scrollbar">
                                 {/* Table Header */}
                                 <div className="grid grid-cols-[auto_1fr_auto] gap-2 text-[10px] text-slate-500 px-2 pb-1">
                                    <span>ID</span>
                                    <span>报警内容</span>
                                    <span>时间</span>
                                 </div>
                                 
                                 {/* List Items */}
                                 <div className="grid grid-cols-[auto_1fr_auto] gap-2 items-center text-[10px] text-slate-300 bg-red-500/10 p-1.5 rounded border border-red-500/20 hover:bg-red-500/20 transition-colors cursor-pointer">
                                    <span className="font-mono text-red-400">#001</span>
                                    <span className="truncate">注塑机 A3 温度过高</span>
                                    <span className="font-mono text-slate-400">10:42:15</span>
                                 </div>
                                 <div className="grid grid-cols-[auto_1fr_auto] gap-2 items-center text-[10px] text-slate-300 bg-slate-700/30 p-1.5 rounded hover:bg-slate-700/50 transition-colors cursor-pointer">
                                    <span className="font-mono text-slate-500">#003</span>
                                    <span className="truncate">传送带 B1 缺料预警</span>
                                    <span className="font-mono text-slate-400">10:40:00</span>
                                 </div>
                                 <div className="grid grid-cols-[auto_1fr_auto] gap-2 items-center text-[10px] text-slate-300 bg-slate-700/30 p-1.5 rounded hover:bg-slate-700/50 transition-colors cursor-pointer">
                                    <span className="font-mono text-slate-500">#005</span>
                                    <span className="truncate">机械臂 C2 扭矩异常</span>
                                    <span className="font-mono text-slate-400">10:38:42</span>
                                 </div>
                                 <div className="grid grid-cols-[auto_1fr_auto] gap-2 items-center text-[10px] text-slate-300 bg-slate-700/30 p-1.5 rounded hover:bg-slate-700/50 transition-colors cursor-pointer">
                                    <span className="font-mono text-slate-500">#002</span>
                                    <span className="truncate">包装机 D4 待机超时</span>
                                    <span className="font-mono text-slate-400">10:35:10</span>
                                 </div>
                                 <div className="grid grid-cols-[auto_1fr_auto] gap-2 items-center text-[10px] text-slate-300 bg-slate-700/30 p-1.5 rounded hover:bg-slate-700/50 transition-colors cursor-pointer">
                                    <span className="font-mono text-slate-500">#006</span>
                                    <span className="truncate">AGV-08 路径偏离</span>
                                    <span className="font-mono text-slate-400">10:31:55</span>
                                 </div>
                              </div>
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

      {/* --- Stats Banner --- */}
      <section className="bg-white border-b border-slate-100">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-100">
             {[
               { value: "99%", label: "库存准确率", icon: Database },
               { value: "-30%", label: "生产周期缩短", icon: Clock },
               { value: "100%", label: "质量可追溯", icon: CheckCircle2 },
               { value: "0", label: "纸质单据", icon: ClipboardList },
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
                生产现场的“黑洞”，<br className="lg:hidden"/>正在吞噬您的利润
              </h2>
              <p className="text-slate-500 text-lg">面对日益激烈的市场竞争，传统粗放式管理已难以为继</p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "生产进度不透明",
                desc: "订单下到车间就像石沉大海，无法实时掌握进度，插单、改单响应慢，交期难以保证。",
                icon: AlertTriangle
              },
              {
                title: "质量追溯困难",
                desc: "出现质量问题无法定位根源，是原材料问题？还是工艺参数问题？缺乏数据支撑。",
                icon: ScanBarcode
              },
              {
                title: "设备效率低下",
                desc: "设备故障停机无人知晓，OEE（设备综合效率）无法统计，产能浪费严重。",
                icon: Settings
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
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold text-[#000000E0] mb-4">打造数字化透明工厂</h2>
            <p className="text-slate-500 text-lg">从计划到执行，全链路智能化闭环</p>
          </div>

          <div className="space-y-24">
            {/* Feature 1: 生产计划排程 */}
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2">
                <FadeIn direction="left" className="space-y-6">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 text-[#1677FF] flex items-center justify-center">
                    <ClipboardList size={24} />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">智能排产与派工，<br/>让生产井井有条</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    告别纸质工单。系统根据设备产能、物料齐套情况辅助排产，一键下发电子工单到车间终端，工人扫码开工，进度实时回传。
                  </p>
                  <ul className="space-y-3 pt-2">
                    {["APS 辅助有限产能排程", "电子工单无纸化流转", "工序级进度实时反馈"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-700">
                        <CheckCircle2 size={18} className="text-[#1677FF]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </FadeIn>
              </div>
              <div className="lg:w-1/2">
                <FadeIn direction="right">
                  <div className="relative bg-white rounded-2xl p-2 shadow-2xl shadow-slate-200/50 border border-white">
                    <div className="aspect-[4/3] bg-slate-50 rounded-xl border border-slate-100 overflow-hidden flex flex-col">
                      {/* Header */}
                      <div className="h-10 bg-white border-b border-slate-100 flex items-center px-4 justify-between shrink-0">
                        <div className="flex gap-2">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                        </div>
                        <div className="text-xs font-mono text-slate-400">APS SCHEDULER v4.0</div>
                      </div>
                      {/* Timeline Header */}
                      <div className="h-8 bg-slate-50 border-b border-slate-100 flex items-center px-12 shrink-0">
                         {['08:00', '10:00', '12:00', '14:00', '16:00'].map(t => (
                           <div key={t} className="flex-1 text-[10px] text-slate-400 border-l border-slate-200 pl-1">{t}</div>
                         ))}
                      </div>
                      {/* Gantt Body */}
                      <div className="flex-1 p-3 overflow-hidden relative flex flex-col justify-between">
                         {/* Grid Lines */}
                         <div className="absolute inset-0 left-12 grid grid-cols-5 pointer-events-none">
                            <div className="border-l border-dashed border-slate-200 h-full"></div>
                            <div className="border-l border-dashed border-slate-200 h-full"></div>
                            <div className="border-l border-dashed border-slate-200 h-full"></div>
                            <div className="border-l border-dashed border-slate-200 h-full"></div>
                            <div className="border-l border-dashed border-slate-200 h-full"></div>
                         </div>
                         
                         {/* Row 1 */}
                         <div className="flex items-center relative z-10 h-8">
                            <div className="w-12 text-[10px] font-medium text-slate-600">注塑机 A</div>
                            <div className="flex-1 h-full bg-slate-100 rounded relative overflow-hidden">
                               <div className="absolute left-0 w-[40%] h-full bg-blue-500 rounded-l flex items-center px-2 text-[10px] text-white/90 shadow-sm border-r border-blue-400/50">WO-2401</div>
                               <div className="absolute left-[40%] w-[30%] h-full bg-blue-400 rounded-r flex items-center px-2 text-[10px] text-white/90 shadow-sm">WO-2402</div>
                            </div>
                         </div>
                         {/* Row 2 */}
                         <div className="flex items-center relative z-10 h-8">
                            <div className="w-12 text-[10px] font-medium text-slate-600">注塑机 B</div>
                            <div className="flex-1 h-full bg-slate-100 rounded relative overflow-hidden">
                               <div className="absolute left-[20%] w-[55%] h-full bg-blue-500 rounded flex items-center px-2 text-[10px] text-white/90 shadow-sm">WO-2403</div>
                            </div>
                         </div>
                         {/* Row 3 */}
                         <div className="flex items-center relative z-10 h-8">
                            <div className="w-12 text-[10px] font-medium text-slate-600">CNC B1</div>
                            <div className="flex-1 h-full bg-slate-100 rounded relative overflow-hidden">
                               <div className="absolute left-[10%] w-[50%] h-full bg-indigo-500 rounded flex items-center px-2 text-[10px] text-white/90 shadow-sm">WO-2405 (急单)</div>
                               <div className="absolute left-[65%] w-[20%] h-full bg-amber-400 rounded flex items-center px-2 text-[10px] text-white/90 shadow-sm">换模</div>
                            </div>
                         </div>
                         {/* Row 4 */}
                         <div className="flex items-center relative z-10 h-8">
                            <div className="w-12 text-[10px] font-medium text-slate-600">CNC B2</div>
                            <div className="flex-1 h-full bg-slate-100 rounded relative overflow-hidden">
                               <div className="absolute left-[0%] w-[35%] h-full bg-indigo-500 rounded flex items-center px-2 text-[10px] text-white/90 shadow-sm">WO-2406</div>
                               <div className="absolute left-[40%] w-[45%] h-full bg-indigo-400 rounded flex items-center px-2 text-[10px] text-white/90 shadow-sm">WO-2407</div>
                            </div>
                         </div>
                         {/* Row 5 */}
                         <div className="flex items-center relative z-10 h-8">
                            <div className="w-12 text-[10px] font-medium text-slate-600">包装线</div>
                            <div className="flex-1 h-full bg-slate-100 rounded relative overflow-hidden">
                               <div className="absolute left-[30%] w-[60%] h-full bg-emerald-500 rounded flex items-center px-2 text-[10px] text-white/90 shadow-sm">WO-2399</div>
                            </div>
                         </div>
                         
                         {/* Legend / Status */}
                         <div className="flex items-center gap-4 pt-2 border-t border-slate-100 mt-1">
                            <div className="flex items-center gap-1.5">
                               <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                               <span className="text-[10px] text-slate-500">正常生产</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                               <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                               <span className="text-[10px] text-slate-500">加急订单</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                               <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                               <span className="text-[10px] text-slate-500">换模/调试</span>
                            </div>
                            <div className="flex items-center gap-1.5 ml-auto">
                               <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                               <span className="text-[10px] font-medium text-green-600">已自动优化</span>
                            </div>
                         </div>
                      </div>
                    </div>
                    {/* Decor */}
                    <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl -z-10"></div>
                  </div>
                </FadeIn>
              </div>
            </div>

            {/* Feature 2: 质量追溯 (Reversed) */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
              <div className="lg:w-1/2">
                <FadeIn direction="right" className="space-y-6">
                  <div className="w-12 h-12 rounded-lg bg-green-100 text-green-600 flex items-center justify-center">
                    <ScanBarcode size={24} />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">全流程质量追溯，<br/>构建品质护城河</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    建立“一物一码”档案。从原材料入库到成品出库，全链路记录人、机、料、检数据。发生客诉时，可秒级定位问题批次，快速响应。
                  </p>
                  <ul className="space-y-3 pt-2">
                    {["IQC/IPQC/OQC 全检录入", "关键工艺参数自动采集", "正反向全链条追溯"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-700">
                        <CheckCircle2 size={18} className="text-green-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </FadeIn>
              </div>
              <div className="lg:w-1/2">
                <FadeIn direction="left">
                  <div className="relative bg-white rounded-2xl p-2 shadow-2xl shadow-slate-200/50 border border-white">
                    <div className="aspect-[4/3] bg-slate-50 rounded-xl border border-slate-100 overflow-hidden relative flex flex-col">
                       {/* Background Pattern */}
                       <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] bg-[size:16px_16px]"></div>
                       
                       <div className="absolute inset-0 p-6 flex flex-col h-full">
                          {/* Header Card */}
                          <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex items-center gap-4 mb-4 shrink-0">
                             <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center text-green-600">
                                <ScanBarcode size={24} />
                             </div>
                             <div>
                                <div className="text-xs text-slate-400">产品序列号 (SN)</div>
                                <div className="text-lg font-mono font-bold text-slate-800">20241206-A882</div>
                             </div>
                             <div className="ml-auto px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded">合格</div>
                          </div>
                          
                          {/* Timeline */}
                          <div className="flex-1 bg-white rounded-xl border border-slate-100 shadow-sm p-4 overflow-hidden relative flex flex-col">
                             <div className="absolute top-4 bottom-4 left-6 w-0.5 bg-slate-100"></div>
                             <div className="flex-1 flex flex-col justify-between relative">
                                {/* Step 1: Outbound */}
                                <div className="flex gap-4">
                                   <div className="w-4 h-4 rounded-full bg-green-500 border-2 border-white shadow-sm relative z-10 mt-1"></div>
                                   <div>
                                      <div className="text-sm font-bold text-slate-700">成品入库 & 发货</div>
                                      <div className="text-xs text-slate-400">2024-12-06 14:30 · 仓库A区</div>
                                   </div>
                                </div>
                                {/* Step 2: Quality Check */}
                                <div className="flex gap-4">
                                   <div className="w-4 h-4 rounded-full bg-green-500 border-2 border-white shadow-sm relative z-10 mt-1"></div>
                                   <div className="flex-1">
                                      <div className="text-sm font-bold text-slate-700">OQC 终检 (PASS)</div>
                                      <div className="mt-1 flex gap-1">
                                         <span className="px-1.5 py-0.5 bg-slate-100 text-slate-500 text-[10px] rounded">外观: OK</span>
                                         <span className="px-1.5 py-0.5 bg-slate-100 text-slate-500 text-[10px] rounded">功能: OK</span>
                                      </div>
                                   </div>
                                </div>
                                {/* Step 3: Assembly */}
                                <div className="flex gap-4">
                                   <div className="w-4 h-4 rounded-full bg-blue-500 border-2 border-white shadow-sm relative z-10 mt-1"></div>
                                   <div className="flex-1">
                                      <div className="text-sm font-bold text-slate-700">自动化组装</div>
                                      <div className="mt-1 p-1.5 bg-slate-50 rounded border border-slate-100 text-[10px] font-mono text-slate-600 w-full">
                                         扭矩: 12.5Nm | 压力: 4.2bar
                                      </div>
                                   </div>
                                </div>
                                {/* Step 4: Raw Material */}
                                <div className="flex gap-4">
                                   <div className="w-4 h-4 rounded-full bg-slate-400 border-2 border-white shadow-sm relative z-10 mt-1"></div>
                                   <div className="flex-1">
                                      <div className="text-sm font-bold text-slate-700">原材料投料</div>
                                      <div className="text-xs text-slate-400">批次: MT-20241201-09</div>
                                      <div className="text-[10px] text-slate-400 mt-0.5">供应商: 宝钢股份</div>
                                   </div>
                                </div>
                             </div>
                          </div>
                       </div>
                    </div>
                    {/* Decor */}
                    <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-green-400/10 rounded-full blur-3xl -z-10"></div>
                  </div>
                </FadeIn>
              </div>
            </div>

            {/* Feature 3: 设备物联 */}
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2">
                <FadeIn direction="left" className="space-y-6">
                  <div className="w-12 h-12 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center">
                    <Cpu size={24} />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">设备联网监控，<br/>挖掘设备最大潜能</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    支持 PLC/传感器/CNC 等多种设备接入。实时采集设备运行状态、产量计数、工艺参数。自动计算 OEE，实现预测性维护，减少意外停机。
                  </p>
                  <ul className="space-y-3 pt-2">
                    {["MDC 设备数据自动采集", "实时看板可视化监控", "设备维保全生命周期管理"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-700">
                        <CheckCircle2 size={18} className="text-purple-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </FadeIn>
              </div>
              <div className="lg:w-1/2">
                <FadeIn direction="right">
                  <div className="relative bg-white rounded-2xl p-2 shadow-2xl shadow-slate-200/50 border border-white">
                    <div className="aspect-[4/3] bg-slate-900 rounded-xl border border-slate-800 overflow-hidden flex flex-col relative">
                       {/* Grid Bg */}
                       <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

                       {/* Header */}
                       <div className="p-4 flex items-center justify-between border-b border-white/10 relative z-10 shrink-0">
                          <div className="flex items-center gap-3">
                             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                             <span className="text-white font-mono font-bold">CNC-MAZAK-01</span>
                          </div>
                          <span className="px-2 py-0.5 bg-green-500/20 text-green-400 text-xs rounded border border-green-500/30">RUNNING</span>
                       </div>

                       {/* Dashboard Content - Full Height Grid */}
                       <div className="flex-1 p-4 grid grid-cols-2 grid-rows-[auto_auto_1fr] gap-4 relative z-10">
                          
                          {/* Top Row: OEE & Counts */}
                          <div className="bg-white/5 rounded-lg p-3 border border-white/10 flex flex-col items-center justify-center relative overflow-hidden">
                             <div className="absolute top-1 right-2 text-[10px] text-slate-400">OEE</div>
                             <div className="relative w-16 h-16">
                                <svg className="w-full h-full transform -rotate-90">
                                   <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="6" fill="transparent" className="text-slate-700" />
                                   <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="6" fill="transparent" strokeDasharray="175" strokeDashoffset="19" className="text-blue-500" />
                                </svg>
                                <div className="absolute inset-0 flex items-center justify-center">
                                   <span className="text-lg font-bold text-white">89%</span>
                                </div>
                             </div>
                          </div>

                          <div className="bg-white/5 rounded-lg p-3 border border-white/10 flex flex-col justify-between">
                             <div>
                                <div className="text-[10px] text-slate-400">当前产量</div>
                                <div className="text-2xl font-mono text-white leading-none mt-1">3,420</div>
                             </div>
                             <div>
                                <div className="text-[10px] text-slate-400">目标产量</div>
                                <div className="text-sm font-mono text-slate-300">4,000 <span className="text-xs text-slate-500">pcs</span></div>
                             </div>
                             <div className="h-1 bg-slate-700 rounded-full overflow-hidden mt-2">
                                <div className="h-full w-[85%] bg-green-500"></div>
                             </div>
                          </div>

                          {/* Middle Row: Realtime Params */}
                          <div className="col-span-2 grid grid-cols-3 gap-3">
                             {[
                                { label: "主轴转速", val: "12,500", unit: "rpm", color: "text-purple-400" },
                                { label: "主轴负载", val: "68", unit: "%", color: "text-blue-400" },
                                { label: "切削温度", val: "65.2", unit: "°C", color: "text-orange-400" },
                             ].map((p, i) => (
                                <div key={i} className="bg-white/5 rounded-lg p-2 border border-white/10 text-center">
                                   <div className="text-[10px] text-slate-500">{p.label}</div>
                                   <div className={`text-lg font-mono font-bold ${p.color} my-0.5`}>{p.val}</div>
                                   <div className="text-[10px] text-slate-600">{p.unit}</div>
                                </div>
                             ))}
                          </div>

                          {/* Bottom Row: Load Chart */}
                          <div className="col-span-2 bg-white/5 rounded-lg p-3 border border-white/10 flex flex-col">
                             <div className="flex justify-between items-center mb-2">
                                <span className="text-[10px] text-slate-400">24H 负载趋势</span>
                                <div className="flex gap-1">
                                   <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                                   <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                                </div>
                             </div>
                             <div className="flex-1 flex items-end gap-1">
                                {[30, 45, 35, 60, 50, 75, 65, 80, 70, 60, 55, 40, 60, 70, 85, 90, 75, 60, 50, 45].map((h, i) => (
                                   <div key={i} className="flex-1 flex flex-col justify-end gap-[1px] h-full group">
                                      <div style={{height: `${h}%`}} className="w-full bg-blue-500/50 rounded-sm group-hover:bg-blue-400 transition-all"></div>
                                      <div style={{height: `${h * 0.6}%`}} className="w-full bg-purple-500/30 rounded-sm group-hover:bg-purple-400 transition-all"></div>
                                   </div>
                                ))}
                             </div>
                          </div>
                       </div>
                    </div>
                    {/* Decor */}
                    <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl -z-10"></div>
                  </div>
                </FadeIn>
              </div>
            </div>

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
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            开启您的智能制造之旅
          </h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
            从“制造”到“智造”，只差一套合适的 MES 系统。
            <br className="hidden md:block"/>
            立即联系专家，获取量身定制的数字化工厂方案。
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="btn bg-white text-[#1677FF] hover:bg-blue-50 px-10 py-4 h-auto rounded-xl font-bold text-lg shadow-xl transition-all border-none">
              预约专家演示
            </button>
            <button className="btn bg-transparent border border-white/30 text-white hover:bg-white/10 px-10 py-4 h-auto rounded-xl font-bold text-lg transition-all">
              下载 MES 白皮书
            </button>
          </div>
        </div>
      </section>

    </main>
  );
}
