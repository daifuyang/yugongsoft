import * as motion from "framer-motion/client";
import {
    ArrowRight,
    RefreshCw,
    Bug,
    Code,
    ShieldCheck,
    Server,
    FileCode,
    GitPullRequest,
    Activity,
} from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import Section from '@/components/ui/Section';
import FeatureGrid from '@/components/ui/FeatureGrid';
import CtaSection from '@/components/ui/CtaSection';

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
                        <div className="lg:w-1/2 relative flex justify-center lg:justify-end">
                            <FadeIn delay={0.2} direction="left" fullWidth duration={0.8}>
                                <motion.div className="relative" animate={{ y: [0, -20, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
                                    {/* Background Glows - Subtler */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-50/80 rounded-full blur-[80px] -z-10"></div>

                                    {/* Main Card */}
                                    <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-100 overflow-hidden relative z-10">
                                        {/* Header */}
                                        <div className="px-6 py-4 border-b border-slate-50 flex justify-between items-center bg-slate-50/50">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-lg bg-[#1677FF] flex items-center justify-center text-white shadow-md shadow-blue-500/20">
                                                    <Activity size={16} />
                                                </div>
                                                <span className="font-bold text-slate-800 tracking-tight">系统健康监控中心</span>
                                            </div>
                                            <div className="flex items-center gap-1.5 px-2.5 py-1 bg-green-50 border border-green-100 rounded-full">
                                                <span className="relative flex h-2 w-2">
                                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                                </span>
                                                <span className="text-[10px] font-semibold text-green-600">运行正常</span>
                                            </div>
                                        </div>

                                        <div className="p-6">
                                            {/* Top Section: Gauge & Primary Metrics */}
                                            <div className="flex items-center gap-8 mb-8">
                                                {/* Health Gauge */}
                                                <div className="relative w-36 h-36 flex items-center justify-center flex-shrink-0">
                                                    <svg className="w-full h-full transform -rotate-90">
                                                        <circle cx="72" cy="72" r="60" stroke="#f1f5f9" strokeWidth="12" fill="transparent" />
                                                        <motion.circle
                                                            initial={{ strokeDashoffset: 377 }}
                                                            animate={{ strokeDashoffset: 37 }} // (377 * (1 - 0.92)) approx
                                                            transition={{ duration: 1.5, ease: "easeOut" }}
                                                            cx="72" cy="72" r="60"
                                                            stroke="#1677FF"
                                                            strokeWidth="12"
                                                            fill="transparent"
                                                            strokeDasharray="377"
                                                            strokeLinecap="round"
                                                        />
                                                    </svg>
                                                    <div className="absolute flex flex-col items-center">
                                                        <span className="text-4xl font-bold text-slate-800 tracking-tighter">98<span className="text-lg text-slate-400 align-top ml-0.5">分</span></span>
                                                        <span className="text-[10px] text-slate-400 font-medium mt-1">综合健康评分</span>
                                                    </div>
                                                </div>

                                                {/* Vertical Divider */}
                                                <div className="w-px h-24 bg-slate-100 hidden sm:block"></div>

                                                {/* Right Metrics List */}
                                                <div className="flex-1 space-y-5 min-w-[180px]">
                                                    <div className="space-y-1.5">
                                                        <div className="flex justify-between items-center text-xs">
                                                            <span className="text-slate-500 font-medium">代码规范度</span>
                                                            <span className="text-slate-800 font-bold">A+ (优秀)</span>
                                                        </div>
                                                        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                                                            <motion.div
                                                                initial={{ width: 0 }}
                                                                animate={{ width: "95%" }}
                                                                transition={{ duration: 1, delay: 0.2 }}
                                                                className="bg-emerald-500 w-[95%] h-full rounded-full"
                                                            ></motion.div>
                                                        </div>
                                                    </div>
                                                    <div className="space-y-1.5">
                                                        <div className="flex justify-between items-center text-xs">
                                                            <span className="text-slate-500 font-medium">安全指数</span>
                                                            <span className="text-slate-800 font-bold">100%</span>
                                                        </div>
                                                        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                                                            <motion.div
                                                                initial={{ width: 0 }}
                                                                animate={{ width: "100%" }}
                                                                transition={{ duration: 1, delay: 0.4 }}
                                                                className="bg-blue-500 w-full h-full rounded-full"
                                                            ></motion.div>
                                                        </div>
                                                    </div>
                                                    <div className="space-y-1.5">
                                                        <div className="flex justify-between items-center text-xs">
                                                            <span className="text-slate-500 font-medium">数据库性能</span>
                                                            <span className="text-slate-800 font-bold">Stable</span>
                                                        </div>
                                                        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                                                            <motion.div
                                                                initial={{ width: 0 }}
                                                                animate={{ width: "92%" }}
                                                                transition={{ duration: 1, delay: 0.6 }}
                                                                className="bg-indigo-500 w-[92%] h-full rounded-full"
                                                            ></motion.div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Bottom Grid: Stats */}
                                            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-slate-50">
                                                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 hover:border-blue-100 transition-colors group">
                                                    <div className="text-[10px] text-slate-500 mb-1 group-hover:text-blue-500 transition-colors">平均响应</div>
                                                    <div className="text-lg font-bold text-slate-800">45ms</div>
                                                    <div className="text-[10px] text-green-600 font-medium flex items-center gap-0.5 mt-0.5">
                                                        <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                                                        -92%
                                                    </div>
                                                </div>
                                                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 hover:border-blue-100 transition-colors group">
                                                    <div className="text-[10px] text-slate-500 mb-1 group-hover:text-blue-500 transition-colors">月故障数</div>
                                                    <div className="text-lg font-bold text-slate-800">0 次</div>
                                                    <div className="text-[10px] text-green-600 font-medium flex items-center gap-0.5 mt-0.5">
                                                        <ShieldCheck size={10} />
                                                        已清零
                                                    </div>
                                                </div>
                                                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 hover:border-blue-100 transition-colors group">
                                                    <div className="text-[10px] text-slate-500 mb-1 group-hover:text-blue-500 transition-colors">维护成本</div>
                                                    <div className="text-lg font-bold text-slate-800">↓ 60%</div>
                                                    <div className="text-[10px] text-green-600 font-medium flex items-center gap-0.5 mt-0.5">
                                                        节省开支
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Service Features --- */}
            <Section className="py-24 bg-white">
                <FeatureGrid
                    items={[
                        { icon: <Bug size={28} />, title: "Bug 修复与排查", desc: "深入分析系统日志，快速定位并修复导致系统崩溃、数据错误等疑难杂症，恢复系统正常运行。" },
                        { icon: <RefreshCw size={28} />, title: "性能优化", desc: "针对系统卡顿、加载慢等问题，从数据库索引、代码逻辑、缓存机制等多维度进行优化提速。" },
                        { icon: <Code size={28} />, title: "功能二次开发", desc: "在不破坏原有系统架构的基础上，扩展新的业务功能模块，满足企业不断发展的业务需求。" },
                    ]}
                    cols={3}
                    animated
                />
            </Section>

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
                                        <p className="text-slate-600 text-sm h-10 line-clamp-2">{item.desc}</p>
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
            <CtaSection
                title="拯救您的“僵尸”系统"
                description="别让老系统成为业务发展的绊脚石，我们帮您重塑系统价值。"
                primaryAction={{ label: "申请系统评估", href: "/contact" }}
            />

        </main>
    );
}
