'use client';

import {
  ArrowRight,
  BarChart3,
  LineChart,
  PieChart,
  Smartphone,
  TrendingUp,
  Database,
  Monitor,
  Share2,
  FileSpreadsheet,
  Server,
  Cpu,
  Activity,
  Globe2,
  Zap
} from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import { motion } from 'framer-motion';

export default function DataAnalysis() {
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
                  <span className="text-sm font-semibold text-[#1677FF] tracking-wide">数据驱动 · 科学决策</span>
                </div>
              </FadeIn>
              <FadeIn delay={0.2} direction="up">
                <h1 className="text-5xl lg:text-7xl font-bold text-[#000000E0] leading-[1.1] tracking-tight">
                  数据大屏 / 报表中心<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1677FF] to-[#00C6FF]">
                    让数据创造价值
                  </span>
                </h1>
              </FadeIn>
              <FadeIn delay={0.3} direction="up">
                <p className="text-lg text-slate-500 leading-relaxed max-w-xl">
                  打破数据孤岛，将散落在各个系统中的数据汇聚一屏。实时监控经营指标，通过可视化图表洞察业务趋势，辅助管理者科学决策。
                </p>
              </FadeIn>
               <FadeIn delay={0.4} direction="up">
                <div className="flex flex-wrap gap-4 pt-6">
                  <button className="btn bg-[#1677FF] hover:bg-[#0958D9] text-white px-10 py-4 h-auto rounded-xl font-bold text-lg shadow-xl shadow-blue-500/20 border-none transition-all hover:-translate-y-1 flex items-center gap-2">
                    免费获取方案
                    <ArrowRight size={20} />
                  </button>
                  <button className="btn bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-10 py-4 h-auto rounded-xl font-bold text-lg shadow-sm hover:shadow-md transition-all">
                    查看演示 Demo
                  </button>
                </div>
              </FadeIn>
            </div>
             
            {/* Right: Chart Abstract */}
            <div className="lg:w-1/2 relative">
                <FadeIn delay={0.2} direction="left" duration={0.8}>
                    <div className="relative">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-3xl -z-10 animate-pulse"></div>
                        
                        {/* Main Dashboard Container */}
                        <div className="relative transform hover:-translate-y-2 transition-transform duration-500">
                            
                            {/* Glass Panel Background */}
                            <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/50 p-6 relative z-10 w-full aspect-[4/3]">
                                {/* Header - Real Content */}
                                <div className="flex justify-between items-center mb-6 border-b border-slate-100 pb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-[#1677FF] flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
                                            <BarChart3 size={20} />
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-slate-800">智慧商业决策中心</div>
                                            <div className="text-[10px] text-slate-500">Smart BI Dashboard</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                        <div className="text-[10px] font-medium text-slate-400">实时监控中</div>
                                    </div>
                                </div>

                                {/* Content Grid */}
                                <div className="grid grid-cols-3 gap-4 h-[calc(100%-5rem)]">
                                    {/* Main Chart Area */}
                                    <div className="col-span-2 space-y-4">
                                        {/* Big Chart */}
                                        <div className="bg-slate-50 rounded-xl p-4 h-40 border border-slate-100 relative overflow-hidden flex flex-col">
                                            <div className="flex justify-between items-center mb-4">
                                                <div className="text-xs font-bold text-slate-700">年度营收趋势</div>
                                                <div className="px-2 py-0.5 bg-green-100 text-green-600 rounded-full text-[10px] font-bold">
                                                    +24.5% 增长
                                                </div>
                                            </div>
                                            <div className="flex-1 flex items-end justify-between gap-1">
                                                {[30, 45, 35, 60, 50, 75, 65, 90, 80, 95].map((h, i) => (
                                                    <div key={i} style={{height: `${h}%`}} className="flex-1 bg-gradient-to-t from-[#1677FF]/20 to-[#1677FF] rounded-t-sm"></div>
                                                ))}
                                            </div>
                                        </div>
                                        {/* Smaller Stats */}
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                                                <div className="text-[10px] text-slate-500 mb-1">活跃用户数</div>
                                                <div className="text-lg font-bold text-slate-800">12,450</div>
                                                <div className="w-full bg-slate-200 h-1.5 rounded-full mt-2">
                                                    <div className="w-[70%] h-full bg-blue-500 rounded-full"></div>
                                                </div>
                                            </div>
                                            <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                                                <div className="text-[10px] text-slate-500 mb-1">订单转化率</div>
                                                <div className="text-lg font-bold text-slate-800">3.2%</div>
                                                <div className="w-full bg-slate-200 h-1.5 rounded-full mt-2">
                                                    <div className="w-[45%] h-full bg-purple-500 rounded-full"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Sidebar */}
                                    <div className="col-span-1 space-y-4">
                                        {/* Distribution */}
                                        <div className="bg-slate-800 rounded-xl p-3 h-32 relative overflow-hidden flex flex-col justify-between border border-slate-700">
                                            <div className="flex justify-between items-start z-10">
                                                <div>
                                                    <div className="text-[10px] text-slate-400 mb-0.5">核心区域占比</div>
                                                    <div className="text-sm font-bold text-white">全国分布</div>
                                                </div>
                                                <div className="bg-blue-500/20 text-blue-400 text-[10px] px-1.5 py-0.5 rounded border border-blue-500/30">TOP 5</div>
                                            </div>
                                            <div className="space-y-2 relative z-10">
                                                <div className="space-y-1">
                                                    <div className="flex justify-between text-[10px]">
                                                        <span className="text-slate-300">华东区</span>
                                                        <span className="text-blue-400">45%</span>
                                                    </div>
                                                    <div className="w-full bg-slate-700/50 h-1 rounded-full">
                                                        <div className="h-full rounded-full w-[45%] bg-blue-500"></div>
                                                    </div>
                                                </div>
                                                <div className="space-y-1">
                                                    <div className="flex justify-between text-[10px]">
                                                        <span className="text-slate-300">华南区</span>
                                                        <span className="text-cyan-400">32%</span>
                                                    </div>
                                                    <div className="w-full bg-slate-700/50 h-1 rounded-full">
                                                        <div className="h-full rounded-full w-[32%] bg-cyan-500"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-blue-500/10 rounded-full blur-xl"></div>
                                        </div>

                                        {/* Activity */}
                                        <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 h-32 flex flex-col">
                                            <div className="text-[10px] font-bold text-slate-700 mb-2">系统动态</div>
                                            <div className="space-y-2.5">
                                                {[
                                                    { text: "大额订单提醒", time: "刚刚" },
                                                    { text: "库存预警通知", time: "5m" },
                                                    { text: "新用户注册", time: "12m" }
                                                ].map((item, i) => (
                                                    <div key={i} className="flex gap-2 items-center">
                                                        <div className="w-6 h-6 rounded-full bg-white border border-slate-200 flex items-center justify-center">
                                                            <Activity size={10} className="text-blue-500" />
                                                        </div>
                                                        <div className="flex-1 flex justify-between items-center">
                                                            <div className="text-[10px] text-slate-600">{item.text}</div>
                                                            <div className="text-[10px] text-slate-400 scale-90">{item.time}</div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Elements */}
                            <motion.div 
                                className="absolute -right-8 top-10 z-20"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <div className="bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3">
                                    <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-500">
                                        <TrendingUp size={20} />
                                    </div>
                                    <div>
                                        <div className="text-xs text-slate-500 font-medium">同比增长</div>
                                        <div className="text-sm font-bold text-slate-900">+128% 🚀</div>
                                    </div>
                                </div>
                            </motion.div>
                            
                            <motion.div 
                                className="absolute -left-8 bottom-10 z-20"
                                animate={{ y: [0, -12, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            >
                                <div className="bg-slate-900 p-4 rounded-xl shadow-xl border border-slate-800 text-white w-40">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Zap size={14} className="text-yellow-400" />
                                        <span className="text-xs font-bold">智能预警</span>
                                    </div>
                                    <div className="text-[10px] text-slate-400 leading-relaxed">
                                        检测到华北区销量数据出现异常波动。
                                    </div>
                                </div>
                            </motion.div>

                        </div>
                    </div>
                </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* --- Features Grid --- */}
       <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-3 gap-8">
                  {[
                      { icon: <PieChart size={28} />, title: "炫酷可视化大屏", desc: "适用于展厅汇报、指挥中心。支持 3D 地图、实时动态图表，震撼视觉效果，尽显企业实力。" },
                      { icon: <Smartphone size={28} />, title: "移动端驾驶舱", desc: "老板专属的数据驾驶舱。随时随地通过手机查看今日营收、订单、库存等关键经营数据。" },
                      { icon: <TrendingUp size={28} />, title: "智能预警分析", desc: "自定义预警规则，当数据异常（如库存不足、销量暴跌）时，自动发送消息通知相关人员。" }
                  ].map((item, i) => (
                      <FadeIn key={i} delay={i * 0.1} direction="up">
                          <div className="p-8 rounded-2xl bg-slate-50 hover:bg-white border border-slate-100 hover:border-blue-100 hover:shadow-xl transition-all duration-300 group h-full">
                              <div className="w-12 h-12 bg-blue-100 text-[#1677FF] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
                              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                              <p className="text-slate-600">{item.desc}</p>
                          </div>
                      </FadeIn>
                  ))}
              </div>
          </div>
      </section>

      {/* --- Data Sources & Integration --- */}
      <section className="py-24 bg-[#F5F7FA]">
          <div className="container mx-auto px-6">
              <FadeIn direction="up">
                <div className="text-center max-w-3xl mx-auto mb-16">
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">多源数据融合</h2>
                  <p className="text-slate-500 text-lg">无缝对接企业现有的各类业务系统</p>
                </div>
              </FadeIn>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                      { name: "Excel / CSV", icon: <FileSpreadsheet size={32} /> },
                      { name: "MySQL / Oracle", icon: <Database size={32} /> },
                      { name: "ERP / CRM API", icon: <Server size={32} /> },
                      { name: "IoT / Hardware", icon: <Cpu size={32} /> },
                  ].map((item, i) => (
                      <FadeIn key={i} delay={i * 0.1} direction="up">
                          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:border-[#1677FF]/50 hover:shadow-lg transition-all duration-300 group cursor-default h-full justify-center">
                              <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 mb-4 group-hover:bg-[#1677FF] group-hover:text-white transition-all duration-300">
                                  {item.icon}
                              </div>
                              <h4 className="font-bold text-slate-800 text-lg group-hover:text-[#1677FF] transition-colors">{item.name}</h4>
                          </div>
                      </FadeIn>
                  ))}
              </div>
          </div>
      </section>

       {/* --- CTA --- */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/images/grid.svg')]"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
           <FadeIn direction="up">
             <h2 className="text-4xl font-bold text-white mb-6">让数据开口说话</h2>
             <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
               立即构建您的企业数据驾驶舱，抢占数字化转型先机。
             </p>
             <button className="btn bg-[#1677FF] hover:bg-[#0958D9] text-white px-12 py-5 h-auto rounded-full font-bold text-xl shadow-xl shadow-blue-500/30 border-none transition-all hover:scale-105">
               预约演示
             </button>
           </FadeIn>
        </div>
      </section>

    </main>
  );
}
