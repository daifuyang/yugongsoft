import {
  ArrowRight,
  Settings,
  Database,
  Lock,
  Workflow,
  GitMerge,
  Server,
  CheckCircle2,
  LayoutDashboard
} from 'lucide-react';
import FadeIn from '@/components/FadeIn';

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
            <div className="lg:w-1/2 relative">
                <FadeIn delay={0.2} direction="left" duration={0.8}>
                    <div className="relative">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl -z-10"></div>
                        
                        <div className="grid grid-cols-2 gap-6">
                            {/* Block 1: Workflow */}
                            <div className="bg-white p-6 rounded-2xl shadow-xl border border-slate-100 transform translate-y-8">
                                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 mb-4">
                                    <Workflow size={24} />
                                </div>
                                <h3 className="font-bold text-slate-900 text-lg">灵活工作流</h3>
                                <div className="mt-4 space-y-2">
                                    <div className="h-2 w-full bg-slate-100 rounded-full"></div>
                                    <div className="h-2 w-2/3 bg-slate-100 rounded-full"></div>
                                </div>
                            </div>

                            {/* Block 2: Data */}
                            <div className="bg-white p-6 rounded-2xl shadow-xl border border-slate-100 transform -translate-y-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-[#1677FF] mb-4">
                                    <Database size={24} />
                                </div>
                                <h3 className="font-bold text-slate-900 text-lg">数据互通</h3>
                                <div className="mt-4 flex gap-2">
                                    <div className="w-8 h-8 rounded-full bg-slate-100"></div>
                                    <div className="w-8 h-8 rounded-full bg-slate-100"></div>
                                    <div className="w-8 h-8 rounded-full bg-slate-100"></div>
                                </div>
                            </div>

                             {/* Block 3: Security */}
                            <div className="bg-white p-6 rounded-2xl shadow-xl border border-slate-100 col-span-2">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600">
                                        <Lock size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 text-lg">私有化部署</h3>
                                        <p className="text-slate-400 text-sm">数据自主可控，安全合规</p>
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
       <section className="py-24 bg-[#F5F7FA]">
          <div className="container mx-auto px-6">
              <FadeIn direction="up">
                <div className="text-center max-w-3xl mx-auto mb-16">
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">全方位的定制能力</h2>
                  <p className="text-slate-500 text-lg">满足您对企业管理系统的所有想象</p>
                </div>
              </FadeIn>

              <div className="grid md:grid-cols-3 gap-8">
                  {[
                      { icon: <Workflow size={28} />, title: "BPM 工作流引擎", desc: "可视化拖拽配置审批流程，支持会签、转签、退回等复杂审批逻辑。" },
                      { icon: <Database size={28} />, title: "数据中台集成", desc: "打通 ERP、CRM、HR 等异构系统，实现主数据统一管理与分发。" },
                      { icon: <LayoutDashboard size={28} />, title: "BI 商业智能", desc: "内置强大的报表引擎，支持多维分析、钻取，生成可视化经营看板。" },
                      { icon: <GitMerge size={28} />, title: "低代码扩展", desc: "提供低代码开发平台，IT 人员可快速搭建简单的表单与应用。" },
                      { icon: <Lock size={28} />, title: "RBAC 权限控制", desc: "细粒度的权限管理体系，支持字段级、数据行级的权限控制。" },
                      { icon: <Server size={28} />, title: "高并发架构", desc: "采用微服务架构，支持集群部署，轻松应对千万级数据量。" }
                  ].map((item, i) => (
                      <FadeIn key={i} delay={i * 0.1} direction="up">
                          <div className="p-8 rounded-2xl bg-white border border-slate-100 hover:border-blue-100 hover:shadow-xl transition-all duration-300 group">
                              <div className="w-12 h-12 bg-blue-50 text-[#1677FF] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#1677FF] group-hover:text-white transition-colors">{item.icon}</div>
                              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                              <p className="text-slate-600">{item.desc}</p>
                          </div>
                      </FadeIn>
                  ))}
              </div>
          </div>
      </section>

      {/* --- CTA: 底部转化 --- */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/images/grid.svg')]"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
           <FadeIn direction="up">
             <h2 className="text-4xl font-bold text-white mb-6">找不到合适的管理软件？</h2>
             <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
               别再忍受难用的系统了。告诉我们您的需求，为您打造最懂您的业务系统。
             </p>
             <button className="btn bg-[#1677FF] hover:bg-[#0958D9] text-white px-12 py-5 h-auto rounded-full font-bold text-xl shadow-xl shadow-blue-500/30 border-none transition-all hover:scale-105">
               预约需求调研
             </button>
           </FadeIn>
        </div>
      </section>

    </main>
  );
}
