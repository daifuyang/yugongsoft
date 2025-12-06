'use client';

import {
  ArrowRight,
  Wrench,
  RefreshCw,
  Bug,
  Code,
  Cpu,
  ShieldCheck,
  Server,
  FileCode,
  GitPullRequest,
  CheckCircle2,
  Activity,
  Zap,
  Database,
  Timer,
  AlertTriangle
} from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import { motion } from 'framer-motion';

export default function LegacySystem() {
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
                  <span className="text-sm font-semibold text-[#1677FF] tracking-wide">系统托管 · 焕发新生</span>
                </div>
              </FadeIn>
              <FadeIn delay={0.2} direction="up">
                <h1 className="text-5xl lg:text-7xl font-bold text-[#000000E0] leading-[1.1] tracking-tight">
                  旧系统维护 / 二次开发<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1677FF] to-[#00C6FF]">
                    保护企业 IT 资产
                  </span>
                </h1>
              </FadeIn>
              <FadeIn delay={0.3} direction="up">
                <p className="text-lg text-slate-500 leading-relaxed max-w-xl">
                  原开发团队失联？系统 Bug 频出无人修？我们提供专业的接盘服务。修复 Bug、优化性能、开发新功能，让老系统继续为企业创造价值。
                </p>
              </FadeIn>
               <FadeIn delay={0.4} direction="up">
                <div className="flex flex-wrap gap-4 pt-6">
                  <button className="btn bg-[#1677FF] hover:bg-[#0958D9] text-white px-10 py-4 h-auto rounded-xl font-bold text-lg shadow-xl shadow-blue-500/20 border-none transition-all hover:-translate-y-1 flex items-center gap-2">
                    申请系统评估
                    <ArrowRight size={20} />
                  </button>
                  <button className="btn bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-10 py-4 h-auto rounded-xl font-bold text-lg shadow-sm hover:shadow-md transition-all">
                    查看服务案例
                  </button>
                </div>
              </FadeIn>
            </div>
             
            {/* Right: Code Maintenance Abstract */}
            <div className="lg:w-1/2 relative">
                <FadeIn delay={0.2} direction="left" duration={0.8}>
                    <div className="relative">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl -z-10 animate-pulse"></div>
                        
                        {/* Main Dashboard Card */}
                        <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/50 p-6 sm:p-8 relative z-10">
                            
                            {/* Header */}
                            <div className="flex justify-between items-center mb-8 border-b border-slate-100 pb-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-[#1677FF] flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
                                        <Activity size={20} />
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-slate-800">系统健康监控</div>
                                        <div className="text-[10px] text-slate-500">System Health Monitor</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 px-2 py-1 bg-green-50 rounded-full border border-green-100">
                                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                    <span className="text-xs font-semibold text-green-600">Running</span>
                                </div>
                            </div>

                            {/* Core Metric: Health Score */}
                            <div className="flex items-center justify-between mb-8">
                                <div className="relative w-32 h-32 flex items-center justify-center flex-shrink-0">
                                    {/* SVG Ring */}
                                    <svg className="w-full h-full transform -rotate-90">
                                        <circle cx="64" cy="64" r="56" stroke="#f1f5f9" strokeWidth="12" fill="transparent" />
                                        <circle cx="64" cy="64" r="56" stroke="#1677FF" strokeWidth="12" fill="transparent" strokeDasharray="351.86" strokeDashoffset="35" strokeLinecap="round" />
                                    </svg>
                                    <div className="absolute flex flex-col items-center">
                                        <span className="text-3xl font-bold text-slate-800">92<span className="text-sm text-slate-400">%</span></span>
                                        <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Health</span>
                                    </div>
                                </div>
                                <div className="flex-1 ml-6 sm:ml-8 space-y-4">
                                    <div className="space-y-1">
                                        <div className="flex justify-between items-center">
                                            <div className="text-xs text-slate-500 font-medium">代码规范度</div>
                                            <div className="text-xs font-bold text-slate-800">A+ Level</div>
                                        </div>
                                        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                                            <div className="bg-green-500 w-[95%] h-full rounded-full"></div>
                                        </div>
                                    </div>

                                    <div className="space-y-1">
                                        <div className="flex justify-between items-center">
                                            <div className="text-xs text-slate-500 font-medium">安全漏洞</div>
                                            <div className="text-xs font-bold text-slate-800">0 Issues</div>
                                        </div>
                                        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                                            <div className="bg-blue-500 w-[100%] h-full rounded-full"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Comparison Grid */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                                    <div className="flex items-center gap-2 mb-2 text-slate-500">
                                        <Timer size={14} />
                                        <span className="text-xs font-bold">平均响应</span>
                                    </div>
                                    <div className="flex items-baseline gap-2 flex-wrap">
                                        <span className="text-2xl font-bold text-slate-800">50ms</span>
                                        <span className="text-xs text-slate-400 line-through decoration-slate-400/50">1200ms</span>
                                    </div>
                                    <div className="mt-2 text-[10px] text-green-600 bg-green-100 inline-block px-1.5 py-0.5 rounded font-bold">
                                        提升 2400%
                                    </div>
                                </div>
                                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                                    <div className="flex items-center gap-2 mb-2 text-slate-500">
                                        <Bug size={14} />
                                        <span className="text-xs font-bold">月均故障</span>
                                    </div>
                                    <div className="flex items-baseline gap-2 flex-wrap">
                                        <span className="text-2xl font-bold text-slate-800">0</span>
                                        <span className="text-xs text-slate-400 line-through decoration-slate-400/50">15+</span>
                                    </div>
                                    <div className="mt-2 text-[10px] text-green-600 bg-green-100 inline-block px-1.5 py-0.5 rounded font-bold">
                                        稳定性 100%
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating 1: Security (Top Right) */}
                        <motion.div
                            className="absolute -right-6 top-10 z-20"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <div className="bg-white p-3 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3">
                                <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-500">
                                    <ShieldCheck size={20} />
                                </div>
                                <div>
                                    <div className="text-[10px] text-slate-500 font-bold uppercase">Security</div>
                                    <div className="text-xs font-bold text-slate-800">核心漏洞已修复</div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Floating 2: Database (Bottom Left) */}
                        <motion.div
                            className="absolute -left-8 bottom-24 z-20"
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        >
                            <div className="bg-slate-900 p-3 rounded-xl shadow-xl border border-slate-800 text-white flex items-center gap-3">
                                <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400">
                                    <Database size={20} />
                                </div>
                                <div>
                                    <div className="text-[10px] text-slate-400 font-bold uppercase">Storage</div>
                                    <div className="text-xs font-bold">查询性能优化</div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Floating 3: Code Refactor (Bottom Right) */}
                        <motion.div
                            className="absolute -right-4 -bottom-6 z-20"
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                        >
                            <div className="bg-[#1677FF] p-3 rounded-xl shadow-xl shadow-blue-500/30 text-white flex items-center gap-3">
                                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white">
                                    <FileCode size={20} />
                                </div>
                                <div>
                                    <div className="text-[10px] text-blue-100 font-bold uppercase">Refactor</div>
                                    <div className="text-xs font-bold">代码重构完成</div>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* --- Service Features --- */}
       <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-3 gap-8">
                  {[
                      { icon: <Bug size={28} />, title: "Bug 修复与排查", desc: "深入分析系统日志，快速定位并修复导致系统崩溃、数据错误等疑难杂症，恢复系统正常运行。" },
                      { icon: <RefreshCw size={28} />, title: "性能优化", desc: "针对系统卡顿、加载慢等问题，从数据库索引、代码逻辑、缓存机制等多维度进行优化提速。" },
                      { icon: <Code size={28} />, title: "功能二次开发", desc: "在不破坏原有系统架构的基础上，扩展新的业务功能模块，满足企业不断发展的业务需求。" }
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

      {/* --- Maintenance Workflow --- */}
      <section className="py-24 bg-[#F5F7FA]">
          <div className="container mx-auto px-6">
              <FadeIn direction="up">
                <div className="text-center max-w-3xl mx-auto mb-16">
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">专业的接管流程</h2>
                  <p className="text-slate-500 text-lg">规范化操作，确保系统平滑过渡，业务零中断</p>
                </div>
              </FadeIn>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  {[
                      { step: "01", title: "代码审计", desc: "全面扫描源代码，评估代码质量与安全风险。", icon: <FileCode /> },
                      { step: "02", title: "环境复刻", desc: "搭建测试环境，完整复刻生产环境配置。", icon: <Server /> },
                      { step: "03", title: "修复与迭代", desc: "制定修复计划，按优先级进行 Bug 修复或功能开发。", icon: <GitPullRequest /> },
                      { step: "04", title: "运维托管", desc: "提供 7x24 小时监控与应急响应，保障系统稳定。", icon: <ShieldCheck /> },
                  ].map((item, i) => (
                      <FadeIn key={i} delay={i * 0.1} direction="up">
                          <div className="relative group">
                              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative z-10 h-full hover:-translate-y-2 transition-transform duration-300">
                                  <div className="text-4xl font-bold text-slate-100 absolute top-4 right-4">{item.step}</div>
                                  <div className="w-12 h-12 bg-blue-50 text-[#1677FF] rounded-lg flex items-center justify-center mb-6">{item.icon}</div>
                                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                                  <p className="text-slate-600 text-sm">{item.desc}</p>
                              </div>
                              {/* Connector Line (Desktop) */}
                              {i < 3 && (
                                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-slate-200 z-0"></div>
                              )}
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
             <h2 className="text-4xl font-bold text-white mb-6">拯救您的“僵尸”系统</h2>
             <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
               别让投入巨资开发的系统成为摆设。立即联系我们进行系统体检。
             </p>
             <button className="btn bg-[#1677FF] hover:bg-[#0958D9] text-white px-12 py-5 h-auto rounded-full font-bold text-xl shadow-xl shadow-blue-500/30 border-none transition-all hover:scale-105">
               预约系统体检
             </button>
           </FadeIn>
        </div>
      </section>

    </main>
  );
}
