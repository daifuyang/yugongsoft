import React from 'react';
import Image from 'next/image';
import { 
  ArrowRight, 
  Target, 
  ShieldCheck, 
  Users, 
  Lightbulb, 
  Award,
  Globe2,
  Heart,
  Quote,
  CheckCircle2,
  Building2,
  Briefcase,
  LayoutDashboard,
  BarChart3,
  ShoppingCart,
  Settings,
  Search,
  Bell,
  Menu,
  MoreHorizontal,
  Code2,
  GitBranch,
  Terminal,
  Cpu,
  Zap,
  Layers,
  Sparkles
} from 'lucide-react';

import FadeIn from '@/components/FadeIn';
import NumberTicker from '@/components/NumberTicker';

export const metadata = {
  title: '关于我们 - 愚公软件 YuGong Software',
  description: '愚公软件致力于以愚公移山的精神，通过技术创新为中国企业提供世界级的数字化转型解决方案。12年深耕，服务3000+企业。',
};

export default function About() {
  return (
    <main className="bg-white font-sans selection:bg-[#1677FF] selection:text-white">
      
      {/* --- Hero Section --- */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 overflow-hidden bg-[#F5F7FA]">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 right-0 h-[600px] bg-gradient-to-b from-blue-50/80 to-transparent"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1677ff08_1px,transparent_1px),linear-gradient(to_bottom,#1677ff08_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
          
          {/* Subtle Decorative Blobs */}
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-200/20 rounded-full blur-[80px] animate-pulse"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-200/20 rounded-full blur-[80px]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <FadeIn direction="up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-blue-100 shadow-sm shadow-blue-100/50 mb-8">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1677FF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#1677FF]"></span>
              </span>
              <span className="text-sm font-semibold text-[#1677FF] tracking-wide">关于愚公软件</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1} direction="up">
            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.15] tracking-tight mb-8">
              以技术移万仞之山<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1677FF] to-[#4096ff]">筑企业数字基石</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2} direction="up">
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-12 font-light">
              我们相信，数字化转型是一场漫长而艰难的征途。愚公软件秉持“咬定青山不放松”的信念，用最前沿的技术和最扎实的服务，帮助每一家中国企业跨越数字鸿沟。
            </p>
          </FadeIn>
        </div>
      </section>

      {/* --- Brand Story Section (Overlapping Layout) --- */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Left: Image with Overlapping Cards */}
            <div className="lg:w-1/2 relative">
              <FadeIn direction="right">
                <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-slate-100 bg-white">
                  {/* SaaS Business Dashboard UI - B/S Architecture Style */}
                  <div className="w-full h-[500px] relative flex flex-col bg-slate-50">
                     {/* Browser Header */}
                     <div className="h-10 border-b border-slate-200 flex items-center px-4 gap-4 bg-white">
                        <div className="flex gap-2">
                           <div className="w-3 h-3 rounded-full bg-red-400"></div>
                           <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                           <div className="w-3 h-3 rounded-full bg-green-400"></div>
                        </div>
                        {/* Address Bar */}
                        <div className="flex-1 max-w-lg bg-slate-100 h-7 rounded-md flex items-center px-3 text-xs text-slate-500 font-mono">
                           <span className="text-slate-400 mr-2">https://</span>
                           www.yugongsoft.com/dashboard
                        </div>
                     </div>
                     
                     {/* App Layout */}
                     <div className="flex-1 flex overflow-hidden">
                        {/* Sidebar */}
                        <div className="w-16 bg-white border-r border-slate-200 flex flex-col items-center py-6 gap-6">
                           <div className="w-8 h-8 rounded-lg bg-[#1677FF] flex items-center justify-center text-white mb-4">
                              <Target size={18} />
                           </div>
                           <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#1677FF] flex items-center justify-center">
                              <LayoutDashboard size={18} />
                           </div>
                           <div className="w-8 h-8 rounded-lg text-slate-400 hover:text-slate-600 flex items-center justify-center transition-colors">
                              <ShoppingCart size={18} />
                           </div>
                           <div className="w-8 h-8 rounded-lg text-slate-400 hover:text-slate-600 flex items-center justify-center transition-colors">
                              <Users size={18} />
                           </div>
                           <div className="w-8 h-8 rounded-lg text-slate-400 hover:text-slate-600 flex items-center justify-center transition-colors">
                              <BarChart3 size={18} />
                           </div>
                           <div className="mt-auto w-8 h-8 rounded-lg text-slate-400 hover:text-slate-600 flex items-center justify-center transition-colors">
                              <Settings size={18} />
                           </div>
                        </div>

                        {/* Main Content Area */}
                        <div className="flex-1 flex flex-col min-w-0 bg-slate-50/50">
                           {/* Top Navigation */}
                           <div className="h-16 bg-white border-b border-slate-100 flex items-center justify-between px-8">
                              <div>
                                 <h3 className="text-lg font-bold text-slate-900">Dashboard Overview</h3>
                                 <p className="text-xs text-slate-500">Welcome back, Administrator</p>
                              </div>
                              <div className="flex items-center gap-4">
                                 <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                                    <Search size={16} />
                                 </div>
                                 <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 relative">
                                    <Bell size={16} />
                                    <span className="absolute top-1 right-2 w-2 h-2 rounded-full bg-red-500 border border-white"></span>
                                 </div>
                                 <div className="w-8 h-8 rounded-full bg-blue-100 border border-blue-200"></div>
                              </div>
                           </div>

                           {/* Dashboard Content */}
                           <div className="flex-1 p-8 overflow-hidden">
                              <div className="grid grid-cols-3 gap-6 mb-8">
                                 {/* Stat Card 1 */}
                                 <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
                                    <div className="flex justify-between items-start mb-4">
                                       <div className="p-2 bg-blue-50 rounded-lg text-[#1677FF]">
                                          <Briefcase size={20} />
                                       </div>
                                       <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">+12.5%</span>
                                    </div>
                                    <div className="text-slate-500 text-xs font-medium mb-1">Total Revenue</div>
                                    <div className="text-2xl font-bold text-slate-900">¥1,284,590</div>
                                 </div>
                                 {/* Stat Card 2 */}
                                 <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
                                    <div className="flex justify-between items-start mb-4">
                                       <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600">
                                          <ShoppingCart size={20} />
                                       </div>
                                       <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">+8.2%</span>
                                    </div>
                                    <div className="text-slate-500 text-xs font-medium mb-1">Active Orders</div>
                                    <div className="text-2xl font-bold text-slate-900">3,428</div>
                                 </div>
                                 {/* Stat Card 3 */}
                                 <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
                                    <div className="flex justify-between items-start mb-4">
                                       <div className="p-2 bg-amber-50 rounded-lg text-amber-600">
                                          <Users size={20} />
                                       </div>
                                       <span className="text-xs font-medium text-slate-500 bg-slate-50 px-2 py-1 rounded-full">+2.4%</span>
                                    </div>
                                    <div className="text-slate-500 text-xs font-medium mb-1">New Customers</div>
                                    <div className="text-2xl font-bold text-slate-900">892</div>
                                 </div>
                              </div>

                              {/* Main Chart Area Simulation */}
                              <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-6 h-48 relative overflow-hidden flex flex-col">
                                 <div className="flex justify-between items-center mb-6">
                                    <h4 className="text-sm font-bold text-slate-800">Sales Analytics</h4>
                                    <div className="flex gap-2">
                                       <div className="w-20 h-2 rounded bg-slate-100"></div>
                                       <div className="w-8 h-8 rounded bg-slate-50 flex items-center justify-center text-slate-400">
                                          <MoreHorizontal size={16} />
                                       </div>
                                    </div>
                                 </div>
                                 <div className="flex-1 flex items-end justify-between gap-2 px-2">
                                    {[35, 55, 40, 70, 50, 85, 65, 90, 75, 60, 80, 95].map((h, i) => (
                                       <div key={i} className="w-full bg-blue-50 hover:bg-blue-100 transition-colors rounded-t-sm relative group" style={{ height: `${h}%` }}>
                                          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                                             Data Point {i + 1}
                                          </div>
                                       </div>
                                    ))}
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right: Story Content */}
            <div className="lg:w-1/2 space-y-8">
              <FadeIn direction="up" delay={0.2}>
                <div className="flex items-start gap-4">
                   <Quote className="text-[#1677FF]/20 shrink-0" size={48} />
                   <div>
                      <h2 className="text-3xl font-bold text-[#000000E0] mb-6">
                        为什么叫“愚公”？
                      </h2>
                      <p className="text-slate-600 leading-relaxed mb-6">
                        《列子·汤问》中，愚公面对太行、王屋二山，不畏艰难，挖山不止。
                      </p>
                      <p className="text-slate-600 leading-relaxed mb-6">
                        在今天，企业数字化转型面临着数据孤岛、流程割裂、系统老化等“新大山”。我们取名“愚公”，就是要有<b>“不畏难、不投机、长期主义”</b>的精神。
                      </p>
                      <p className="text-slate-600 leading-relaxed">
                        我们不追求短期的流量风口，而是潜心打磨每一个代码模块，优化每一个业务流程。我们相信，技术没有捷径，只有一步一个脚印的积累，才能为客户搬走阻碍发展的“大山”。
                      </p>
                   </div>
                </div>
              </FadeIn>
              
              <FadeIn direction="up" delay={0.3}>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  {[
                    "坚持自研底层架构",
                    "100% 交付成功率承诺",
                    "7x24小时 专家级服务",
                    "开源社区积极贡献者"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-slate-700 font-medium">
                      <CheckCircle2 size={18} className="text-[#1677FF]" />
                      {item}
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* --- Stats Section --- */}
      <section className="bg-[#1677FF] text-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/20">
            {[
              { value: "12", label: "年行业经验", suffix: "+" },
              { value: "150", label: "研发工程师", suffix: "+" },
              { value: "50", label: "软件著作权", suffix: "+" },
              { value: "98", label: "客户续费率", suffix: "%" },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1} direction="up">
                <div className="px-4">
                  <div className="text-4xl lg:text-5xl font-bold mb-2 flex justify-center items-baseline">
                    <NumberTicker value={item.value} />
                    <span className="text-2xl ml-1 opacity-80">{item.suffix}</span>
                  </div>
                  <div className="text-blue-100 text-sm lg:text-base">{item.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* --- Culture/Values --- */}
      <section className="py-24 bg-[#F5F7FA]">
        <div className="container mx-auto px-6">
          <FadeIn direction="up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-[#000000E0] mb-4">
                我们的价值观
              </h2>
              <p className="text-slate-500 text-lg">做正确的事，而不是容易的事</p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: "值得信赖",
                desc: "不仅是交付代码，更是交付信任。我们对客户的数据安全和系统稳定性负责到底。"
              },
              {
                icon: Lightbulb,
                title: "持续创新",
                desc: "拥抱变化，不断探索前沿技术（AI、IoT、大数据），为客户创造超预期的价值。"
              },
              {
                icon: Heart,
                title: "成就客户",
                desc: "客户的成功是我们存在的唯一理由。深入业务一线，解决最真实的痛点。"
              }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1} direction="up" className="h-full">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full text-center group">
                  <div className="w-16 h-16 mx-auto bg-blue-50 rounded-2xl flex items-center justify-center text-[#1677FF] mb-6 group-hover:scale-110 transition-transform">
                    <item.icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* --- Team/Office Section --- */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 space-y-8">
              <FadeIn direction="up">
                 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-600 mb-4 border border-blue-100">
                    <Award size={14} />
                    工程信仰
                 </div>
                 <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
                   把代码写成<br />
                   <span className="text-[#1677FF]">经得起时间考验的资产</span>
                 </h2>
                 <p className="text-slate-600 text-lg leading-relaxed mb-6">
                   我们拒绝“一次性代码”。愚公软件引入工业级研发标准，建立了一套涵盖 120+ 项检查点的质量红线。从架构设计到最终交付，每一个字节都经过精雕细琢。
                 </p>
                 <div className="space-y-4">
                    <div className="flex items-start gap-3">
                       <div className="mt-1 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                          <CheckCircle2 size={12} strokeWidth={3} />
                       </div>
                       <div>
                          <h4 className="font-bold text-slate-900">确定性交付</h4>
                          <p className="text-sm text-slate-500 mt-1">杜绝“黑盒”开发，通过全链路数字化管理，让进度可控、质量可见。</p>
                       </div>
                    </div>
                    <div className="flex items-start gap-3">
                       <div className="mt-1 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                          <CheckCircle2 size={12} strokeWidth={3} />
                       </div>
                       <div>
                          <h4 className="font-bold text-slate-900">资产级代码</h4>
                          <p className="text-sm text-slate-500 mt-1">高内聚、低耦合的架构设计，确保系统在未来 5-10 年依然易于维护与扩展。</p>
                       </div>
                    </div>
                 </div>
                 <div className="pt-8">
                   <button className="group flex items-center gap-2 text-[#1677FF] font-semibold hover:text-blue-700 transition-colors">
                     探索我们的研发体系
                     <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                   </button>
                 </div>
              </FadeIn>
            </div>
            
            <div className="lg:w-1/2">
               <FadeIn delay={0.2} direction="left">
                  <div className="relative">
                     {/* Background Glow */}
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-100/30 rounded-full blur-3xl -z-10"></div>
                     
                     <div className="grid grid-cols-2 gap-5">
                        {/* Card 1: CI/CD Pipeline */}
                        <div className="col-span-2 bg-slate-900 rounded-2xl p-6 shadow-xl border border-slate-800 relative overflow-hidden group">
                           <div className="absolute top-0 right-0 p-4 opacity-10 text-white">
                              <GitBranch size={100} />
                           </div>
                           <div className="relative z-10">
                              <div className="flex items-center gap-3 mb-6">
                                 <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
                                    <GitBranch size={20} />
                                 </div>
                                 <div>
                                    <div className="text-white font-bold">DevOps 流水线</div>
                                    <div className="text-slate-400 text-xs">Automated CI/CD Pipeline</div>
                                 </div>
                              </div>
                              {/* Pipeline Visualization */}
                              <div className="flex items-center justify-between gap-2">
                                 {['Build', 'Test', 'Scan', 'Deploy'].map((step, i) => (
                                    <React.Fragment key={step}>
                                       <div className="flex flex-col items-center gap-2">
                                          <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${i === 3 ? 'border-green-500 bg-green-500/20 text-green-500' : 'border-blue-500 bg-blue-500/20 text-blue-500'}`}>
                                             {i === 0 && <Code2 size={14} />}
                                             {i === 1 && <Target size={14} />}
                                             {i === 2 && <ShieldCheck size={14} />}
                                             {i === 3 && <Zap size={14} />}
                                          </div>
                                          <span className="text-[10px] text-slate-400 font-mono">{step}</span>
                                       </div>
                                       {i < 3 && <div className="h-0.5 flex-1 bg-slate-700"></div>}
                                    </React.Fragment>
                                 ))}
                              </div>
                           </div>
                        </div>

                        {/* Card 2: Clean Code */}
                        <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                           <div className="flex flex-col h-full justify-between">
                              <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600 mb-4">
                                 <Code2 size={20} />
                              </div>
                              <div>
                                 <div className="text-3xl font-bold text-slate-900 mb-1">Zero</div>
                                 <div className="text-slate-500 text-sm font-medium">技术债务容忍度</div>
                              </div>
                           </div>
                        </div>

                        {/* Card 3: AI Coding */}
                        <div className="bg-gradient-to-br from-[#1677FF] to-[#0050b3] rounded-2xl p-6 shadow-lg text-white relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                           <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                           <div className="relative z-10 flex flex-col h-full justify-between">
                              <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center text-white mb-4">
                                 <Sparkles size={20} />
                              </div>
                              <div>
                                 <div className="text-lg font-bold mb-1">AI 辅助编程</div>
                                 <div className="text-blue-100 text-xs opacity-90 leading-relaxed">
                                    智能补全 · 代码生成 · 效能倍增
                                 </div>
                              </div>
                           </div>
                        </div>

                        {/* Card 4: Performance */}
                        <div className="col-span-2 bg-white rounded-2xl p-6 shadow-lg border border-slate-100 flex items-center justify-between relative overflow-hidden">
                           <div className="flex items-center gap-4">
                              <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                                 <Cpu size={24} />
                              </div>
                              <div>
                                 <div className="text-slate-900 font-bold">极致性能优化</div>
                                 <div className="text-slate-500 text-xs">Server Response Time &lt; 50ms</div>
                              </div>
                           </div>
                           <div className="flex gap-1">
                              {[1,2,3,4,5].map(i => (
                                 <div key={i} className="w-1.5 h-6 bg-green-500 rounded-full opacity-100"></div>
                              ))}
                              <div className="w-1.5 h-6 bg-slate-200 rounded-full"></div>
                           </div>
                        </div>
                     </div>
                  </div>
               </FadeIn>
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
          <FadeIn direction="up">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              准备好开始数字化转型了吗？
            </h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
              与3000+优秀企业一起，选择愚公软件，选择确定的未来。
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="btn bg-white text-[#1677FF] hover:bg-blue-50 px-10 py-4 h-auto rounded-xl font-bold text-lg shadow-xl transition-all border-none">
                免费预约演示
              </button>
              <button className="btn bg-transparent border border-white/30 text-white hover:bg-white/10 px-10 py-4 h-auto rounded-xl font-bold text-lg transition-all">
                咨询在线客服
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

    </main>
  );
}
