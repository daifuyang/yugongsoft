import * as motion from "framer-motion/client";
import {
  ArrowRight,
  Database,
  Lock,
  Workflow,
  GitMerge,
  Server,
  LayoutDashboard
} from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import FeatureGrid from '@/components/ui/FeatureGrid';
import CtaSection from '@/components/ui/CtaSection';

export default function CustomSystem() {
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
                  <span className="text-sm font-semibold text-[#1677FF] tracking-wide">量身定制 · 贴合业务</span>
                </div>
              </FadeIn>
              <FadeIn delay={0.2} direction="up">
                <h1 className="text-5xl lg:text-7xl font-bold text-[#000000E0] leading-[1.1] tracking-tight">
                  业务系统定制开发<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1677FF] to-[#00C6FF]">
                    打造企业数字化引擎
                  </span>
                </h1>
              </FadeIn>
              <FadeIn delay={0.3} direction="up">
                <p className="text-lg text-slate-500 leading-relaxed max-w-xl">
                  拒绝臃肿的通用软件。根据您的业务流程量身定制 CRM、ERP、OA、进销存等管理系统，让软件适应业务，而非业务迁就软件。
                </p>
              </FadeIn>
              <FadeIn delay={0.4} direction="up">
                <div className="flex flex-wrap gap-4 pt-6">
                  <button className="btn bg-[#1677FF] hover:bg-[#0958D9] text-white px-10 py-4 h-auto rounded-xl font-bold text-lg shadow-xl shadow-blue-500/20 border-none transition-all hover:-translate-y-1 flex items-center gap-2">
                    免费获取方案
                    <ArrowRight size={20} />
                  </button>
                  <button className="btn bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-10 py-4 h-auto rounded-xl font-bold text-lg shadow-sm hover:shadow-md transition-all">
                    了解开发流程
                  </button>
                </div>
              </FadeIn>
            </div>

            {/* Right: Abstract Visualization */}
            <motion.div
              className="lg:w-1/2 relative flex items-center justify-center"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}

            >
              <FadeIn delay={0.2} direction="left" fullWidth duration={0.8}>
                <div className="relative w-full aspect-4/3 mx-auto perspective-1000">
                  {/* Background Glow */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-100/40 blur-[80px] rounded-full -z-20"></div>

                  {/* Browser Window Frame */}
                  <div className="w-full h-full bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col transform rotate-y-[-5deg] rotate-x-[5deg] hover:rotate-0 transition-transform duration-500 ease-out group">
                    {/* Title Bar */}
                    <div className="h-10 bg-slate-50 border-b border-slate-100 flex items-center px-4 gap-2 shrink-0">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      </div>
                      <div className="mx-auto w-1/3 h-5 bg-slate-100 rounded-md"></div>
                    </div>

                    {/* Content Area - Flowchart */}
                    <div className="flex-1 bg-slate-50/30 p-8 relative overflow-hidden flex items-center justify-center">
                      {/* Grid Background */}
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:24px_24px] opacity-40"></div>

                      {/* Flowchart Skeleton */}
                      <div className="relative z-10 flex flex-col items-center gap-6 w-full max-w-sm">

                        {/* Start Node */}
                        <div className="px-6 py-2.5 rounded-full bg-white border border-slate-200 shadow-sm text-slate-500 text-xs font-bold tracking-wide flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                          START PROCESS
                        </div>

                        {/* Arrow Down */}
                        <div className="w-px h-6 bg-slate-300"></div>

                        {/* Process Level 1 */}
                        <div className="grid grid-cols-2 gap-8 w-full">
                          {/* Node A */}
                          <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-4 flex flex-col gap-3 relative hover:-translate-y-1 transition-transform duration-300">
                            <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
                              <Workflow size={18} />
                            </div>
                            <div className="space-y-1.5">
                              <div className="w-12 h-1.5 bg-slate-100 rounded-full"></div>
                              <div className="w-20 h-1.5 bg-slate-100 rounded-full"></div>
                            </div>
                            {/* Connector Top */}
                            <div className="absolute -top-6 left-1/2 w-px h-6 bg-slate-300 -translate-x-1/2"></div>
                            {/* Connector Horizontal (Pseudo) */}
                            <div className="absolute -top-6 left-1/2 w-[calc(50%+1rem)] h-px bg-slate-300 -translate-x-0 origin-left"></div>
                          </div>

                          {/* Node B */}
                          <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-4 flex flex-col gap-3 relative hover:-translate-y-1 transition-transform duration-300">
                            <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center text-orange-500">
                              <Database size={18} />
                            </div>
                            <div className="space-y-1.5">
                              <div className="w-16 h-1.5 bg-slate-100 rounded-full"></div>
                              <div className="w-10 h-1.5 bg-slate-100 rounded-full"></div>
                            </div>
                            {/* Connector Top */}
                            <div className="absolute -top-6 left-1/2 w-px h-6 bg-slate-300 -translate-x-1/2"></div>
                            {/* Connector Horizontal (Pseudo) */}
                            <div className="absolute -top-6 right-1/2 w-[calc(50%+1rem)] h-px bg-slate-300 translate-x-0 origin-right"></div>
                          </div>
                        </div>

                        {/* Arrow Merge */}
                        <div className="relative w-full h-6">
                          <div className="absolute top-0 left-1/4 w-px h-3 bg-slate-300 ml-4"></div>
                          <div className="absolute top-0 right-1/4 w-px h-3 bg-slate-300 mr-4"></div>
                          <div className="absolute top-3 left-1/4 right-1/4 h-px bg-slate-300 mx-4"></div>
                          <div className="absolute top-3 left-1/2 w-px h-3 bg-slate-300 -translate-x-1/2"></div>
                        </div>

                        {/* Decision Node */}
                        <div className="w-10 h-10 rotate-45 bg-white border border-slate-200 shadow-sm flex items-center justify-center z-10">
                          <div className="-rotate-45 text-slate-400">
                            <GitMerge size={16} />
                          </div>
                        </div>

                        {/* Arrow Down */}
                        <div className="w-px h-6 bg-slate-300"></div>

                        {/* End Node */}
                        <div className="px-8 py-3 rounded-lg bg-[#1677FF] shadow-lg shadow-blue-500/20 text-white text-xs font-bold flex items-center gap-2 transform hover:scale-105 transition-transform">
                          <Server size={14} />
                          DEPLOYMENT READY
                        </div>

                      </div>

                      {/* Floating Elements / Decorations */}
                      <div className="absolute top-12 right-8 p-2 bg-white/90 backdrop-blur rounded-md shadow border border-slate-100 animate-[bounce_3s_infinite]">
                        <div className="flex gap-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div>
                          <div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div>
                          <div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div>
                        </div>
                      </div>
                      <div className="absolute bottom-20 left-8 p-3 bg-white/90 backdrop-blur rounded-lg shadow-lg border border-slate-100 animate-[bounce_4s_infinite] animation-delay-1000">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-green-500"></div>
                          <div className="w-12 h-1.5 bg-slate-100 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- Comparison: 为什么选择定制开发 --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <FadeIn direction="up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">定制开发 VS 通用软件</h2>
              <p className="text-slate-500 text-lg">与其削足适履，不如量体裁衣</p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-12">
            {/* 通用软件 */}
            <FadeIn direction="right" className="h-full">
              <div className="bg-slate-50 rounded-3xl p-10 h-full border border-slate-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-slate-200 text-slate-500 px-4 py-1 rounded-bl-xl text-sm font-bold">传统模式</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">通用 SaaS 软件</h3>
                <ul className="space-y-4">
                  {[
                    "功能臃肿，80% 的功能用不上，操作复杂",
                    "流程固化，难以适应企业的特殊业务逻辑",
                    "数据存储在云端，存在数据泄露风险",
                    "按年付费，长期使用成本高昂",
                    "二次开发困难，难以响应业务变化"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600">
                      <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center shrink-0 text-slate-500 text-xs">✕</div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            {/* 定制开发 */}
            <FadeIn direction="left" className="h-full">
              <div className="bg-blue-50 rounded-3xl p-10 h-full border border-blue-100 relative overflow-hidden shadow-lg shadow-blue-500/5">
                <div className="absolute top-0 right-0 bg-[#1677FF] text-white px-4 py-1 rounded-bl-xl text-sm font-bold">推荐模式</div>
                <h3 className="text-2xl font-bold text-[#1677FF] mb-6">愚公定制开发</h3>
                <ul className="space-y-4">
                  {[
                    "按需开发，界面简洁，流程完全贴合业务",
                    "灵活性强，随业务发展随时调整功能模块",
                    "支持私有化部署，数据掌握在自己手中",
                    "一次性付费，拥有系统所有权，无后续年费",
                    "提供源码交付，自主可控，无后顾之忧"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-800">
                      <div className="w-6 h-6 rounded-full bg-[#1677FF] flex items-center justify-center shrink-0 text-white text-xs">✓</div>
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* --- Features Grid --- */}
      <Section className="py-24 bg-[#F5F7FA]">
        <SectionHeader
          title="全方位的定制能力"
          subtitle="满足您对企业管理系统的所有想象"
          centered
        />
        <FeatureGrid
          items={[
            { icon: <Workflow size={28} />, title: "BPM 工作流引擎", desc: "可视化拖拽配置审批流程，支持会签、转签、退回等复杂审批逻辑。" },
            { icon: <Database size={28} />, title: "数据中台集成", desc: "打通 ERP、CRM、HR 等异构系统，实现主数据统一管理与分发。" },
            { icon: <LayoutDashboard size={28} />, title: "BI 商业智能", desc: "内置强大的报表引擎，支持多维分析、钻取，生成可视化经营看板。" },
            { icon: <GitMerge size={28} />, title: "低代码扩展", desc: "提供低代码开发平台，IT 人员可快速搭建简单的表单与应用。" },
            { icon: <Lock size={28} />, title: "RBAC 权限控制", desc: "细粒度的权限管理体系，支持字段级、数据行级的权限控制。" },
            { icon: <Server size={28} />, title: "高并发架构", desc: "采用微服务架构，支持集群部署，轻松应对千万级数据量。" },
          ]}
          cols={3}
          animated
          variant="card"
        />
      </Section>

      {/* --- CTA: 底部转化 --- */}
      <CtaSection
        title="找不到合适的管理软件？"
        description="别再忍受难用的系统了。告诉我们您的需求，为您打造最懂您的业务系统。"
        primaryAction={{ label: "预约需求调研", href: "/contact" }}
      />

    </main>
  );
}
