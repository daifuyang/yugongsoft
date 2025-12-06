'use client';

import {
    ArrowRight,
    ShieldCheck,
    Zap,
    Server,
    Globe,
    Lock,
    Cpu,
    Database,
} from "lucide-react";
import Logo from "@/components/Logo"; // 请确保路径正确
import FadeIn from "@/components/FadeIn"; // 请确保路径正确
import { motion, useMotionValue, useSpring } from "framer-motion";
import { MouseEvent } from "react";

// --- 3D 交互卡片组件 (已修正物理引擎) ---
function Hero3DCard({ children }: { children: React.ReactNode }) {

    // 1. 设定“帅气”的初始角度
    // rotateX(5): 微微后仰，像放在讲台上的展示板
    // rotateY(-12): 右侧向里收缩，左侧突出，引导视线向深处
    const initialRotateX = 4;
    const initialRotateY = -8;

    const rotateX = useMotionValue(initialRotateX);
    const rotateY = useMotionValue(initialRotateY);

    // 2. 增加刚度(stiffness)和阻尼(damping)，让回弹更有“重物感”，不轻飘飘
    const springConfig = { stiffness: 400, damping: 30 };
    const springRotateX = useSpring(rotateX, springConfig);
    const springRotateY = useSpring(rotateY, springConfig);

    function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        // 计算鼠标相对中心的坐标 (-0.5 到 0.5)
        const mouseX = (e.clientX - rect.left) / width - 0.5;
        const mouseY = (e.clientY - rect.top) / height - 0.5;

        // 3. 交互逻辑：在初始角度基础上进行微调，而不是覆盖
        // 鼠标移动带来的改变幅度设为 10度，既有动感又不破坏整体构图
        rotateX.set(initialRotateX + (mouseY * -10));
        rotateY.set(initialRotateY + (mouseX * 10));
    }

    function handleMouseLeave() {
        // 鼠标离开，平滑复位到初始角度
        rotateX.set(initialRotateX);
        rotateY.set(initialRotateY);
    }

    return (
        // 关键点 A: 透视必须加在父容器
        <div className="perspective-[1200px] py-10 flex justify-center w-full">
            <motion.div
                style={{
                    rotateX: springRotateX,
                    rotateY: springRotateY,
                    transformStyle: "preserve-3d", // 关键点 B: 开启 3D 空间，让子元素可以 Z 轴悬浮
                }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="relative w-full max-w-[700px] cursor-pointer"
            >
                {children}
            </motion.div>
        </div>
    );
}

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-32 lg:pb-16 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white min-h-[90vh] flex items-center">

            {/* 背景装饰：增强空间感 */}
            <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-[#E6F4FF] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 opacity-60 pointer-events-none"></div>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 xl:gap-20">

                    {/* 左侧文案 */}
                    <div className="lg:w-1/2 z-20 min-w-0 pt-10 lg:pt-0">
                        <FadeIn delay={0.1}>
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#0958D9] text-sm font-medium mb-8">
                                <span className="bg-[#1677FF] text-white text-[10px] px-2 py-0.5 rounded-full font-bold tracking-wide">NEW</span>
                                企业级数字化引擎 V5.0
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold text-[#0f172a] leading-[1.1] mb-6 tracking-tight">
                                以<span className="text-[#1677FF] inline-block relative">
                                    移山之智
                                    {/* 文字下划线装饰 */}
                                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-blue-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" /></svg>
                                </span><br />
                                重塑数字基石
                            </h1>
                        </FadeIn>

                        <FadeIn delay={0.3}>
                            <p className="text-lg text-slate-500 mb-10 leading-[1.8] max-w-xl">
                                摒弃浮躁，回归价值。愚公软件为您提供<b className="text-slate-800">自主可控、精准定制</b>的软件解决方案，助力企业构建坚实的数字护城河。
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.4}>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="group bg-[#1677FF] hover:bg-[#0958D9] text-white h-14 px-8 rounded-xl text-lg font-semibold shadow-[0_10px_20px_-5px_rgba(22,119,255,0.4)] transition-all hover:-translate-y-1 flex items-center justify-center gap-2">
                                    免费咨询 <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button className="h-14 px-8 rounded-xl text-slate-600 font-medium hover:bg-slate-100 transition-colors flex items-center justify-center">
                                    了解愚公
                                </button>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.5}>
                            <div className="mt-12 pt-8 border-t border-slate-200 flex gap-8 lg:gap-16">
                                <div>
                                    <p className="text-3xl font-bold text-slate-900">500+</p>
                                    <p className="text-sm text-slate-500 mt-1">头部企业信赖</p>
                                </div>
                                <div>
                                    <p className="text-3xl font-bold text-slate-900">100%</p>
                                    <p className="text-sm text-slate-500 mt-1">项目交付率</p>
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                    {/* 右侧 3D 舞台 */}
                    <div className="lg:w-1/2 w-full flex justify-center relative">
                        <FadeIn
                            fullWidth={true}
                            direction="right" // 从右边出来更自然
                            delay={0.4}
                            className="w-full flex justify-center"
                        >
                            <Hero3DCard>
                                {/* --- 主控台面板 (Card Base) --- */}
                                <div className="bg-white/90 backdrop-blur-xl rounded-2xl border border-white/60 p-6 sm:p-8 select-none 
                                                shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] transition-shadow duration-500 
                                                hover:shadow-[0_50px_100px_-20px_rgba(22,119,255,0.2)]">

                                    {/* Header */}
                                    <div className="flex justify-between items-center mb-8 pb-6 border-b border-slate-100">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center text-[#1677FF] shadow-inner">
                                                <Logo className="w-7" />
                                            </div>
                                            <div>
                                                <div className="text-base font-bold text-slate-800">企业数字化驾驶舱</div>
                                                <div className="text-xs text-slate-400 mt-0.5">YuGong Enterprise OS v5.0</div>
                                            </div>
                                        </div>
                                        <div className="flex gap-2 items-center bg-green-50 px-3 py-1 rounded-full border border-green-100">
                                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                            <span className="text-xs font-semibold text-green-700">Live</span>
                                        </div>
                                    </div>

                                    {/* Data Grid */}
                                    <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-8">
                                        {/* QPS Card */}
                                        <div className="bg-gradient-to-b from-[#F8FAFC] to-[#F1F5F9] rounded-xl p-5 border border-slate-200 relative overflow-hidden group">
                                            <div className="text-slate-500 text-[10px] font-bold uppercase tracking-wider mb-2">实时吞吐量 (QPS)</div>
                                            <div className="text-3xl font-black text-slate-800 flex items-end gap-2">
                                                84.2k <span className="text-sm text-green-600 font-bold mb-1.5 bg-green-100 px-1.5 rounded">▲ 12%</span>
                                            </div>
                                            <div className="flex items-end gap-1 h-10 mt-4 opacity-80">
                                                {[30, 45, 35, 60, 50, 75, 55, 80, 65, 50, 70, 60].map((h, i) => (
                                                    <div key={i} style={{ height: `${h}%` }} className="flex-1 bg-blue-500 rounded-sm hover:bg-blue-600 transition-colors"></div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Availability Card */}
                                        <div className="bg-white rounded-xl p-5 border border-slate-100 shadow-sm flex flex-col justify-between">
                                            <div>
                                                <div className="text-slate-500 text-[10px] font-bold uppercase tracking-wider mb-2">系统可用性</div>
                                                <div className="text-3xl font-black text-slate-800">99.999%</div>
                                            </div>
                                            <div className="mt-4 flex items-center gap-2 text-xs text-slate-600 bg-slate-50 p-2 rounded-lg border border-slate-100">
                                                <ShieldCheck size={14} className="text-blue-500" />
                                                <span>稳定运行 <span className="font-bold text-slate-800">312</span> 天</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Topology Map */}
                                    <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 relative">
                                        <div className="flex justify-between items-center mb-6">
                                            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">资源拓扑</div>
                                            <div className="text-[10px] font-mono text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">Auto-Scaling: ON</div>
                                        </div>
                                        <div className="flex justify-between items-center px-4 relative py-2">
                                            {/* 连接线 */}
                                            <div className="absolute top-1/2 left-8 right-8 h-[2px] bg-slate-200 -z-10"></div>

                                            {/* 节点图标 */}
                                            {[Globe, Cpu, Database, Lock].map((Icon, idx) => (
                                                <div key={idx} className="w-10 h-10 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center shadow-sm z-10 transition-transform hover:scale-110 hover:border-blue-400 cursor-pointer">
                                                    <Icon size={18} className={idx === 0 || idx === 3 ? "text-blue-500" : "text-slate-400"} />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* --- 关键修改：悬浮元素使用 translateZ --- */}

                                {/* 1. Security (右上) */}
                                <div
                                    style={{ transform: "translateZ(75px)" }}
                                    className="absolute -right-8 sm:-right-16 -top-4 bg-white/95 backdrop-blur shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] p-4 rounded-2xl border border-white flex items-center gap-4 animate-[bounce_5s_infinite]"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center text-green-600">
                                        <ShieldCheck size={20} />
                                    </div>
                                    <div>
                                        <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Security</div>
                                        <div className="text-sm font-bold text-slate-700 whitespace-nowrap">信创安全合规</div>
                                    </div>
                                </div>

                                {/* 2. AI Core (左下) */}
                                <div
                                    style={{ transform: "translateZ(60px)" }}
                                    className="absolute -left-6 sm:-left-12 bottom-32 bg-white/95 backdrop-blur shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] p-4 rounded-2xl border border-white flex items-center gap-4 animate-[bounce_6s_infinite] [animation-delay:2s]"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600">
                                        <Cpu size={20} />
                                    </div>
                                    <div>
                                        <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">AI Core</div>
                                        <div className="text-sm font-bold text-slate-700 whitespace-nowrap">智能决策引擎</div>
                                    </div>
                                </div>

                                {/* 3. Efficiency (右下) */}
                                <div
                                    style={{ transform: "translateZ(90px)" }}
                                    className="absolute -right-4 -bottom-6 bg-[#1677FF] text-white shadow-[0_20px_40px_-10px_rgba(22,119,255,0.4)] p-5 rounded-2xl flex items-center gap-4 animate-[bounce_4s_infinite] [animation-delay:1s]"
                                >
                                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                                        <Zap size={20} fill="white" />
                                    </div>
                                    <div>
                                        <div className="text-[10px] text-blue-100 font-bold uppercase tracking-wider">业务效率</div>
                                        <div className="text-xl font-bold flex items-baseline gap-1">
                                            +42.8%
                                        </div>
                                    </div>
                                </div>

                                {/* 底部辉光 (放在卡片背面) */}
                                <div
                                    style={{ transform: "translateZ(-50px)" }}
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-400/30 rounded-full blur-[100px] -z-10 pointer-events-none"
                                ></div>

                            </Hero3DCard>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    );
}