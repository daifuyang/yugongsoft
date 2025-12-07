import * as motion from "framer-motion/client";
import {
    ArrowRight,
    Smartphone,
    Layout,
    Zap,
    ShieldCheck,
    Code2,
    Layers,
    Cpu,
    CreditCard,
    Bell,
    Server,
    FileCode
} from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import FeatureGrid from '@/components/ui/FeatureGrid';
import ProcessGrid from '@/components/ui/ProcessGrid';
import PhoneMockup from '@/components/ui/PhoneMockup';
import CtaSection from '@/components/ui/CtaSection';

export default function AppDev() {
    return (
        <main className="bg-white font-sans selection:bg-[#1677FF] selection:text-white">

            {/* --- Hero Section: 现代科技风 --- */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#F8FAFC]">
                {/* 背景装饰 */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-blue-100/40 rounded-full blur-3xl opacity-50 animate-pulse"></div>
                    <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-indigo-50/60 rounded-full blur-3xl opacity-50"></div>
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                        {/* Left Content */}
                        <div className="lg:w-1/2 space-y-8">
                            <FadeIn delay={0.1} direction="up">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50/80 border border-blue-100 backdrop-blur-sm">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1677FF] opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1677FF]"></span>
                                    </span>
                                    <span className="text-sm font-medium text-[#1677FF] tracking-wide">移动端全栈解决方案</span>
                                </div>
                            </FadeIn>

                            <FadeIn delay={0.2} direction="up">
                                <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.15] tracking-tight">
                                    打造极致体验的<br />
                                    <span className="text-[#1677FF]">企业级移动应用</span>
                                </h1>
                            </FadeIn>

                            <FadeIn delay={0.3} direction="up">
                                <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                                    深度融合业务场景，为您定制开发高性能、高可用的小程序与 APP。
                                    支持 iOS、Android、HarmonyOS 及全平台小程序，助力企业抢占移动流量入口。
                                </p>
                            </FadeIn>

                            <FadeIn delay={0.4} direction="up">
                                <div className="flex flex-wrap gap-4 pt-4">
                                    <button className="btn bg-[#1677FF] hover:bg-[#0958D9] text-white px-8 py-4 h-auto rounded-xl font-semibold text-lg shadow-lg shadow-blue-500/25 border-none transition-all hover:-translate-y-0.5 flex items-center gap-2">
                                        免费获取方案
                                        <ArrowRight size={18} />
                                    </button>
                                    <button className="btn bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-8 py-4 h-auto rounded-xl font-semibold text-lg shadow-sm hover:shadow-md transition-all">
                                        查看成功案例
                                    </button>
                                </div>
                            </FadeIn>

                            <FadeIn delay={0.5} direction="up">
                                <div className="flex items-center gap-8 pt-8 border-t border-slate-200/60">
                                    {[
                                        { label: "原生体验", val: "100%" },
                                        { label: "交付准时率", val: "99%+" },
                                        { label: "售后响应", val: "7x24h" }
                                    ].map((stat, i) => (
                                        <div key={i}>
                                            <div className="text-2xl font-bold text-slate-900">{stat.val}</div>
                                            <div className="text-sm text-slate-500">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </FadeIn>
                        </div>

                        {/* Right: Visualization (Modern App Mockup) */}
                        <motion.div
                            className="lg:w-1/2 relative flex justify-center lg:justify-end"
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <FadeIn delay={0.2} direction="left" duration={0.8} className="w-full max-w-[500px]">
                                <div className="relative">
                                    {/* Phone Frame - Component Refactored */}
                                    <PhoneMockup className="z-10 shadow-2xl shadow-slate-300">
                                        {/* App Header */}
                                        <div className="px-6 pb-4 bg-white z-10">
                                            <div className="flex justify-between items-center mb-6">
                                                <div>
                                                    <div className="text-xs text-slate-400 font-medium mb-0.5">下午好，管理员</div>
                                                    <div className="text-xl font-bold text-slate-900 tracking-tight">工作台</div>
                                                </div>
                                                <div className="w-9 h-9 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center relative">
                                                    <Bell size={18} className="text-slate-600" />
                                                    <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></div>
                                                </div>
                                            </div>
                                            {/* Search Bar */}
                                            <div className="w-full h-11 bg-slate-50 rounded-xl flex items-center px-4 gap-2 text-slate-400 text-sm border border-slate-100/50">
                                                <div className="w-4 h-4 rounded-full border-2 border-slate-300/80"></div>
                                                <span>搜索功能模块...</span>
                                            </div>
                                        </div>

                                        {/* Scrollable Content */}
                                        <div className="flex-1 overflow-hidden bg-[#F8FAFC] rounded-t-[2rem] p-5 space-y-4 relative border-t border-slate-100/50">
                                            {/* Chart Card */}
                                            <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100/80">
                                                <div className="flex justify-between items-center mb-6">
                                                    <div>
                                                        <div className="font-bold text-slate-800">本周营收</div>
                                                        <div className="text-[10px] text-slate-400 mt-0.5">近七天数据</div>
                                                    </div>
                                                    <div className="text-xs text-green-600 font-bold bg-green-50 px-2 py-1 rounded-full">+12.5%</div>
                                                </div>
                                                <div className="flex items-end gap-2 h-24 px-1">
                                                    {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                                                        <div key={i} style={{ height: `${h}%` }} className={`flex-1 rounded-t-md ${i === 5 ? 'bg-[#1677FF]' : 'bg-slate-200'} opacity-90 transition-all hover:opacity-100 hover:scale-y-105 origin-bottom`}></div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* List Items */}
                                            <div className="space-y-3">
                                                <div className="flex justify-between items-center px-1">
                                                    <div className="text-sm font-bold text-slate-900">最新动态</div>
                                                    <div className="text-xs text-[#1677FF] font-medium">查看全部</div>
                                                </div>
                                                {[
                                                    { icon: <CreditCard size={16} />, title: "订单支付", time: "2分钟前", amount: "+¥240.00", color: "bg-blue-50 text-blue-600" },
                                                    { icon: <Smartphone size={16} />, title: "会员充值", time: "1小时前", amount: "+¥500.00", color: "bg-purple-50 text-purple-600" },
                                                    { icon: <Zap size={16} />, title: "服务订阅", time: "3小时前", amount: "+¥128.00", color: "bg-amber-50 text-amber-600" },
                                                ].map((item, i) => (
                                                    <div key={i} className="bg-white p-3.5 rounded-xl shadow-sm border border-slate-100/50 flex items-center justify-between group hover:border-blue-100 transition-colors">
                                                        <div className="flex items-center gap-3.5">
                                                            <div className={`w-10 h-10 rounded-xl ${item.color} flex items-center justify-center`}>
                                                                {item.icon}
                                                            </div>
                                                            <div>
                                                                <div className="text-sm font-bold text-slate-800 group-hover:text-[#1677FF] transition-colors">{item.title}</div>
                                                                <div className="text-[10px] text-slate-400 mt-0.5">{item.time}</div>
                                                            </div>
                                                        </div>
                                                        <div className={`text-sm font-bold ${item.amount.startsWith('+') ? 'text-green-600' : 'text-slate-900'}`}>{item.amount}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Bottom Nav */}
                                        <div className="h-16 bg-white absolute bottom-0 left-0 right-0 flex justify-around items-center border-t border-slate-100 px-4 pb-2 z-20">
                                            {[0, 1, 2, 3].map((i) => (
                                                <div key={i} className={`w-12 h-12 flex items-center justify-center rounded-2xl transition-all ${i === 0 ? 'text-[#1677FF] bg-blue-50' : 'text-slate-300 hover:text-slate-500 hover:bg-slate-50'}`}>
                                                    <div className="w-5 h-5 rounded-md border-[2.5px] border-current opacity-80"></div>
                                                </div>
                                            ))}
                                        </div>
                                    </PhoneMockup>

                                </div>
                            </FadeIn>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- Pain Points: 为什么需要专业开发 --- */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <FadeIn direction="up">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">为什么您的企业需要<span className="text-[#1677FF]">专业移动端开发</span>？</h2>
                            <p className="text-slate-500 text-lg">移动互联网时代，粗制滥造的应用只会损害品牌形象</p>
                        </div>
                    </FadeIn>

                    <FeatureGrid
                        cols={3}
                        variant="badge"
                        animated
                        items={[
                            {
                                title: "用户体验差，留存难",
                                desc: "模板套用的 App 经常出现卡顿、闪退、界面丑陋，导致用户下载后秒删，推广费用打水漂。",
                                icon: <Layout size={28} />
                            },
                            {
                                title: "多端适配成本高",
                                desc: "iOS、Android、微信、抖音... 平台众多，各自开发维护成本高昂，数据无法互通。",
                                icon: <Layers size={28} />
                            },
                            {
                                title: "安全隐患大",
                                desc: "缺乏专业的安全防护，容易被黑客攻击导致用户数据泄露，给企业带来巨大的法律风险。",
                                icon: <ShieldCheck size={28} />
                            }
                        ]}
                    />
                </div>
            </section>

            {/* --- Tech Stack: 技术实力 --- */}
            <section className="py-32 bg-slate-50 overflow-hidden relative">
                {/* 背景纹理 */}
                <div className="absolute inset-0 opacity-40 bg-[linear-gradient(#e2e8f0_1px,transparent_1px),linear-gradient(to_right,#e2e8f0_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row items-start gap-20">
                        <div className="lg:w-1/3 lg:sticky lg:top-32">
                            <FadeIn direction="right">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1677FF]/10 border border-[#1677FF]/20 text-[#1677FF] text-xs font-bold tracking-wider uppercase mb-8">
                                    Tech Stack
                                </div>
                                <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-900 leading-[1.2]">全栈技术架构<br /><span className="text-[#1677FF]">稳健、高性能</span></h2>
                                <p className="text-slate-600 text-lg leading-relaxed mb-10">
                                    根据项目需求选择最合适的技术栈，拒绝套模版，确保高质量交付与长期可维护性。
                                </p>


                            </FadeIn>
                        </div>

                        <div className="lg:w-2/3">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                                {[
                                    { name: "React Native", type: "Cross Platform", icon: <Code2 size={28} /> },
                                    { name: "Flutter", type: "Google UI", icon: <Layout size={28} /> },
                                    { name: "Uni-app", type: "Mini Program", icon: <Layers size={28} /> },
                                    { name: "Swift", type: "iOS Native", icon: <Cpu size={28} /> },
                                    { name: "Kotlin", type: "Android", icon: <Smartphone size={28} /> },
                                    { name: "Node.js", type: "Backend", icon: <Server size={28} /> },
                                    { name: "TypeScript", type: "Language", icon: <FileCode size={28} /> },
                                    { name: "Fastify", type: "High Perf", icon: <Zap size={28} /> },
                                ].map((stack, i) => (
                                    <FadeIn key={i} delay={i * 0.05} direction="up" className="h-full">
                                        <div className="bg-white border border-slate-200 p-6 rounded-xl hover:border-blue-200 hover:shadow-lg transition-all duration-300 text-center group h-full flex flex-col items-center justify-center relative overflow-hidden">

                                            <div className="relative z-10 w-14 h-14 mx-auto bg-blue-50 rounded-xl mb-4 flex items-center justify-center text-[#1677FF] group-hover:scale-110 transition-all">
                                                {stack.icon}
                                            </div>
                                            <h4 className="relative z-10 font-bold text-lg mb-1 text-slate-800 group-hover:text-[#1677FF] transition-colors">{stack.name}</h4>
                                            <p className="relative z-10 text-xs text-slate-500">{stack.type}</p>
                                        </div>
                                    </FadeIn>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Process: 标准化服务流程 --- */}
            <section className="py-24 bg-[#F5F7FA]">
                <div className="container mx-auto px-6">
                    <FadeIn direction="up">
                        <div className="text-center max-w-3xl mx-auto mb-20">
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">标准化交付流程</h2>
                            <p className="text-slate-500 text-lg">从 0 到 1，每个环节都经过严格把控，确保项目按时按质交付</p>
                        </div>
                    </FadeIn>

                    <ProcessGrid
                        items={[
                            { step: "01", title: "需求分析", desc: "深度沟通，梳理业务逻辑，输出思维导图与原型。" },
                            { step: "02", title: "UI/UX设计", desc: "大厂设计师操刀，打造符合品牌调性的视觉界面。" },
                            { step: "03", title: "程序开发", desc: "规范的代码编写，模块化开发，确保系统稳定扩展。" },
                            { step: "04", title: "测试验收", desc: "功能测试、压力测试、兼容性测试，消灭每一个Bug。" },
                            { step: "05", title: "上线运维", desc: "协助应用市场上架，提供全年的免费技术维护。" },
                        ]}
                        animated
                        startDelay={0}
                        delayStep={0.1}
                    />
                </div>
            </section>

            {/* --- CTA: 底部转化 --- */}
            {/* --- CTA: 底部转化 --- */}
            <CtaSection
                title="准备好打造您的超级应用了吗？"
                description="立即与我们的产品专家沟通，获取免费的需求评估与报价方案。"
                primaryAction={{ label: "免费预约咨询", href: "/contact" }}
            />

        </main>
    );
}
