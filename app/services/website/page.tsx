import * as motion from "framer-motion/client";
import {
    ArrowRight,
    Search,
    Monitor,
    MousePointerClick,
    Layout,
    Shield,
    Smartphone
} from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import FeatureGrid from '@/components/ui/FeatureGrid';
import CtaSection from '@/components/ui/CtaSection';

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
                        <div className="lg:w-1/2 relative flex justify-center lg:justify-end">
                            <FadeIn delay={0.2} direction="left" duration={0.8} fullWidth>
                                <motion.div
                                    animate={{ y: [0, -20, 0] }}
                                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                    className="relative z-10"
                                >
                                    {/* Abstract Browser Frame */}
                                    <div className="bg-white rounded-2xl shadow-2xl shadow-blue-900/10 border border-slate-200 overflow-hidden relative">
                                        {/* Browser Header */}
                                        <div className="h-10 bg-slate-50/80 backdrop-blur border-b border-slate-100 flex items-center px-4 justify-between">
                                            <div className="flex gap-2">
                                                <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                                                <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                                                <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                                            </div>
                                            <div className="bg-white border border-slate-200 rounded-md h-6 w-1/2 shadow-sm flex items-center justify-center">
                                                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                                                <div className="h-1 w-20 bg-slate-100 rounded-full"></div>
                                            </div>
                                            <div className="w-10"></div>
                                        </div>

                                        {/* Website Content Skeleton */}
                                        <div className="p-0 bg-white min-h-[360px] relative">
                                            {/* Hero Banner */}
                                            <div className="h-48 bg-slate-50 relative overflow-hidden flex items-center justify-center p-8">
                                                <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-[size:20px_20px] opacity-50"></div>
                                                <div className="text-center space-y-3 relative z-10 w-full max-w-xs mx-auto">
                                                    <div className="h-2 w-16 bg-blue-100 rounded-full mx-auto mb-4"></div>
                                                    <div className="h-6 w-full bg-slate-900/5 rounded-lg"></div>
                                                    <div className="h-6 w-2/3 bg-slate-900/5 rounded-lg mx-auto"></div>
                                                    <div className="flex justify-center gap-3 mt-6">
                                                        <div className="h-8 w-24 bg-[#1677FF] rounded-lg shadow-lg shadow-blue-500/20"></div>
                                                        <div className="h-8 w-24 bg-white border border-slate-200 rounded-lg"></div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Feature Section */}
                                            <div className="p-8 grid grid-cols-3 gap-6">
                                                {[1, 2, 3].map((i) => (
                                                    <div key={i} className="space-y-3">
                                                        <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 mb-3 flex items-center justify-center">
                                                            <div className="w-5 h-5 bg-white rounded-md shadow-sm"></div>
                                                        </div>
                                                        <div className="h-2.5 w-16 bg-slate-200 rounded-full"></div>
                                                        <div className="h-1.5 w-full bg-slate-100 rounded-full"></div>
                                                        <div className="h-1.5 w-2/3 bg-slate-100 rounded-full"></div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Overlay Gradient for Depth */}
                                        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-white/80 via-transparent to-transparent"></div>
                                    </div>

                                    {/* Back Layer for Layered Effect */}
                                    <div className="absolute top-4 -right-4 -bottom-4 -left-4 bg-slate-100/50 rounded-3xl -z-10 border border-slate-100/50"></div>
                                    <div className="absolute top-8 -right-8 -bottom-8 -left-8 bg-blue-50/30 rounded-[2rem] -z-20"></div>
                                </motion.div>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Responsive Design Showcase --- */}
            <Section className="py-24 bg-white">
                <SectionHeader
                    title="全端响应式设计"
                    subtitle="一次开发，多端适配。无论用户使用什么设备访问，都能获得最佳浏览体验。"
                    centered
                />
                <FeatureGrid
                    items={[
                        { icon: <Monitor size={32} />, title: "桌面端 Desktop", desc: "沉浸式大屏体验，展示丰富的信息与视觉效果，建立品牌信任感。" },
                        { icon: <Layout size={32} />, title: "平板端 Tablet", desc: "自适应布局调整，兼顾触控操作与信息密度，适合移动办公场景。" },
                        { icon: <Smartphone size={32} />, title: "移动端 Mobile", desc: "极简交互设计，关键信息一目了然，方便用户随时随地快速访问。" },
                    ]}
                    variant="card"
                    cols={3}
                />
            </Section>

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
                            <FadeIn direction="left" className="h-full flex items-center justify-center">
                                <div className="relative w-full max-w-[500px]">
                                    {/* Decorative Background Elements */}
                                    <div className="absolute -top-10 -right-10 w-64 h-64 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-full blur-3xl opacity-60 -z-10"></div>
                                    <div className="absolute -bottom-10 -left-10 w-56 h-56 bg-gradient-to-tr from-indigo-50 to-purple-50 rounded-full blur-3xl opacity-60 -z-10"></div>

                                    {/* Main Dashboard Card */}
                                    <div className="bg-white p-6 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 relative z-10">
                                        <div className="flex justify-between items-center mb-6 pb-4 border-b border-slate-50">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-[#1677FF]">
                                                    <Shield size={20} />
                                                </div>
                                                <div>
                                                    <div className="font-bold text-slate-900 text-sm">SEO 健康度监控</div>
                                                    <div className="text-xs text-slate-400">实时数据更新中</div>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2 bg-green-50 px-3 py-1 rounded-full border border-green-100">
                                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                                <span className="text-green-700 font-bold text-sm">98 分</span>
                                            </div>
                                        </div>

                                        <div className="space-y-5 mb-6">
                                            {[
                                                { label: "性能表现 (Performance)", score: 99, color: "bg-green-500" },
                                                { label: "无障碍访问 (Accessibility)", score: 100, color: "bg-green-500" },
                                                { label: "最佳实践 (Best Practices)", score: 96, color: "bg-blue-500" },
                                                { label: "搜索引擎优化 (SEO)", score: 100, color: "bg-green-500" },
                                            ].map((metric, i) => (
                                                <div key={i}>
                                                    <div className="flex justify-between text-xs mb-2">
                                                        <span className="font-medium text-slate-600">{metric.label}</span>
                                                        <span className="font-bold text-slate-900">{metric.score}</span>
                                                    </div>
                                                    <div className="h-2 bg-slate-50 rounded-full overflow-hidden border border-slate-100">
                                                        <motion.div
                                                            initial={{ width: 0 }}
                                                            whileInView={{ width: `${metric.score}%` }}
                                                            transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                                                            className={`h-full ${metric.color} rounded-full`}
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="grid grid-cols-3 gap-2">
                                            {[
                                                { label: "页面收录", val: "2,840", trend: "+12%" },
                                                { label: "关键词覆盖", val: "156", trend: "+5%" },
                                                { label: "日均访问", val: "8.5k", trend: "+24%" }
                                            ].map((stat, i) => (
                                                <div key={i} className="bg-slate-50 rounded-lg p-3 text-center border border-slate-100/50">
                                                    <div className="text-xs text-slate-400 mb-1">{stat.label}</div>
                                                    <div className="font-bold text-slate-900 text-lg leading-none mb-1">{stat.val}</div>
                                                    <div className="text-[10px] text-green-600 font-medium">{stat.trend}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- CTA --- */}
            <CtaSection
                title="让您的品牌脱颖而出"
                description="不要让糟糕的网站形象流失客户。立即升级您的企业数字门面，每天有超过 100 家企业选择与我们同行。"
                primaryAction={{ label: "预约网站诊断", href: "/contact" }}
                secondaryAction={{ label: "查看成功案例", href: "/cases" }}
            />

        </main>
    );
}
