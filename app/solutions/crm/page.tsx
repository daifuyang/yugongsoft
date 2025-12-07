'use client';

import {
  ArrowRight,
  CheckCircle2,
  BarChart3,
  Users,
  Smartphone,
  Globe,
  Target,
  ShieldCheck,
  Zap,
  Layers,
  Filter,
  Bell,
  FileText,
  Clock
} from 'lucide-react';

import { motion } from 'framer-motion';
import FadeIn from '@/components/FadeIn';
import NumberTicker from '@/components/NumberTicker';

export default function CRM() {
  return (
    <main className="bg-white font-sans selection:bg-[#1677FF] selection:text-white">

      {/* --- Hero Section: 通透、科技、理性 --- */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-[#F5F7FA]">
        {/* 背景装饰：极简网格 + 顶部光晕 */}
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
                  <span className="text-sm font-semibold text-[#1677FF] tracking-wide">新一代企业级 CRM</span>
                </div>
              </FadeIn>

              <FadeIn delay={0.2} direction="up">
                <h1 className="text-5xl lg:text-6xl font-bold text-[#000000E0] leading-[1.15] tracking-tight">
                  重塑客户关系，<br />
                  <span className="text-[#1677FF]">驱动业绩智能增长</span>
                </h1>
              </FadeIn>

              <FadeIn delay={0.3} direction="up">
                <p className="text-lg text-slate-500 leading-relaxed max-w-xl">
                  不仅仅是记录，更是洞察。从线索获取到成交转化的全链路数字化闭环，帮助企业构建 360° 客户视图，让每一次跟进都更有价值。
                </p>
              </FadeIn>

              <FadeIn delay={0.4} direction="up">
                <div className="flex flex-wrap gap-4 pt-4">
                  <button className="btn bg-[#1677FF] hover:bg-[#0958D9] text-white px-8 py-4 h-auto rounded-xl font-semibold text-lg shadow-lg shadow-blue-500/30 border-none transition-all hover:-translate-y-1 flex items-center gap-2">
                    免费预约演示
                    <ArrowRight size={18} />
                  </button>
                  <button className="btn bg-white hover:bg-slate-50 text-slate-600 border border-slate-200 px-8 py-4 h-auto rounded-xl font-semibold text-lg shadow-sm hover:shadow-md transition-all flex items-center gap-2">
                    <Smartphone size={18} />
                    下载产品白皮书
                  </button>
                </div>
              </FadeIn>
            </div>

            {/* Right: Flat Dashboard UI Mockup */}
            <div className="lg:w-1/2 relative">
              <FadeIn delay={0.2} direction="left" duration={0.8}>
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="relative w-full bg-white rounded-xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-slate-100 overflow-hidden z-10"
                >
                  {/* Window Header */}
                  <div className="h-10 border-b border-slate-100 bg-slate-50/80 flex items-center px-4 gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
                    </div>
                    <div className="ml-4 h-5 w-32 bg-white rounded border border-slate-100"></div>
                  </div>

                  {/* Main Content */}
                  <div className="p-6 grid grid-cols-3 gap-6">
                    {/* Left Column: Main Chart */}
                    <div className="col-span-2 space-y-6">
                      {/* Chart Card */}
                      <div className="bg-white rounded-xl border border-slate-100 p-5 shadow-sm">
                        <div className="flex justify-between items-center mb-6">
                          <div>
                            <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">本季度销售额</div>
                            <div className="text-2xl font-bold text-slate-800 mt-1">¥ 2,458,000</div>
                          </div>
                          <div className="px-2 py-1 rounded bg-green-50 text-green-600 text-xs font-bold">+12.5%</div>
                        </div>

                        {/* Simulated Bar Chart */}
                        <div className="flex items-end justify-between h-32 gap-2">
                          {[35, 48, 42, 58, 45, 65, 55, 78, 62, 85].map((h, i) => (
                            <div key={i} className="w-full bg-[#1677FF] opacity-10 hover:opacity-100 transition-opacity rounded-t-sm relative group" style={{ height: `${h}%` }}>
                              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                ¥{h}k
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Recent Activities List */}
                      <div className="bg-white rounded-xl border border-slate-100 p-5 shadow-sm">
                        <div className="text-sm font-bold text-slate-800 mb-4">最近跟进记录</div>
                        <div className="space-y-3">
                          {[
                            { user: "王总", company: "科技公司", action: "预约演示", time: "10分钟前", color: "bg-blue-100 text-blue-600" },
                            { user: "李经理", company: "贸易集团", action: "发送报价", time: "2小时前", color: "bg-orange-100 text-orange-600" },
                            { user: "张主管", company: "制造企业", action: "签订合同", time: "Yesterday", color: "bg-green-100 text-green-600" },
                          ].map((item, i) => (
                            <div key={i} className="flex items-center justify-between text-sm">
                              <div className="flex items-center gap-3">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${item.color}`}>
                                  {item.user.charAt(0)}
                                </div>
                                <div>
                                  <div className="font-medium text-slate-700">{item.user} <span className="text-slate-400 font-normal">- {item.company}</span></div>
                                  <div className="text-xs text-slate-400">{item.action}</div>
                                </div>
                              </div>
                              <div className="text-xs text-slate-400">{item.time}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Stats & Funnel */}
                    <div className="col-span-1 space-y-4">
                      {/* 1. New Customers */}
                      <FadeIn delay={0.4} direction="right" className="p-4 bg-blue-50/50 rounded-xl border border-blue-100">
                        <div className="flex items-center gap-2 mb-2 text-blue-600">
                          <Users size={16} />
                          <span className="text-xs font-bold">新增客户</span>
                        </div>
                        <div className="text-2xl font-bold text-slate-800">128</div>
                        <div className="w-full bg-blue-200 h-1.5 rounded-full mt-3 overflow-hidden">
                          <div className="bg-blue-500 h-full w-[70%] animate-[width_1s_ease-out_1s_forwards]" style={{ width: '0%' }}></div>
                        </div>
                      </FadeIn>

                      {/* 2. Sales Funnel */}
                      <FadeIn delay={0.6} direction="right" className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                        <div className="text-xs text-slate-400 mb-3">销售漏斗转化</div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-xs">
                            <span className="w-16 text-slate-500">线索</span>
                            <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden"><div className="h-full bg-slate-300 animate-[width_1s_ease-out_1.2s_forwards]" style={{ width: '0%' }}></div></div>
                          </div>
                          <div className="flex items-center gap-2 text-xs">
                            <span className="w-16 text-slate-500">商机</span>
                            <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden"><div className="h-full bg-blue-300 animate-[width_1s_ease-out_1.4s_forwards]" style={{ width: '0%' }}></div></div>
                          </div>
                          <div className="flex items-center gap-2 text-xs">
                            <span className="w-16 text-slate-500">合同</span>
                            <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden"><div className="h-full bg-[#1677FF] animate-[width_1s_ease-out_1.6s_forwards]" style={{ width: '0%' }}></div></div>
                          </div>
                        </div>
                      </FadeIn>

                      {/* 3. Target (Aligned & Enhanced) */}
                      <FadeIn delay={0.8} direction="right" className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center text-green-600">
                            <Target size={16} />
                          </div>
                          <div>
                            <div className="text-[10px] text-slate-500">本月业绩目标</div>
                            <div className="text-sm font-bold text-slate-800">¥ 125k <span className="text-slate-300 font-normal">/ 100k</span></div>
                          </div>
                        </div>
                        <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-green-500 h-full animate-[width_1s_ease-out_1.8s_forwards]" style={{ width: '0%' }}></div>
                        </div>

                      </FadeIn>

                      {/* 4. Todo/Alerts (New) */}
                      <FadeIn delay={1.0} direction="right" className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                        <div className="flex items-center gap-2 mb-3 text-slate-800">
                          <Bell size={16} className="text-[#1677FF]" />
                          <span className="text-xs font-bold">待办提醒</span>
                        </div>
                        <div className="space-y-2.5">
                          <div className="flex items-center justify-between text-xs">
                            <div className="flex items-center gap-2 text-slate-600">
                              <FileText size={12} />
                              <span>待审合同</span>
                            </div>
                            <span className="bg-red-100 text-red-600 px-1.5 py-0.5 rounded font-bold">3</span>
                          </div>
                          <div className="flex items-center justify-between text-xs">
                            <div className="flex items-center gap-2 text-slate-600">
                              <Clock size={12} />
                              <span>今日回访</span>
                            </div>
                            <span className="bg-orange-100 text-orange-600 px-1.5 py-0.5 rounded font-bold">12</span>
                          </div>
                        </div>
                      </FadeIn>

                    </div>
                  </div>
                </motion.div>
              </FadeIn>

              {/* Decorative Background Elements for Depth */}
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -z-10 top-10 -right-10 w-full h-full bg-blue-50 rounded-xl opacity-50 scale-95"
              ></motion.div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -z-20 top-20 -right-20 w-full h-full bg-blue-50 rounded-xl opacity-20 scale-90"
              ></motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* --- Stats Banner: 关键指标 --- */}
      <section className="bg-white border-b border-slate-100">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-100">
            {[
              { value: "30%", label: "销售转化率提升", icon: Zap },
              { value: "50%", label: "客单价增长", icon: BarChart3 },
              { value: "100%", label: "客户资产留存", icon: ShieldCheck },
              { value: "2h", label: "日均效率节省", icon: Clock },
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

      {/* --- Pain Points: 场景化痛点 --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <FadeIn direction="up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-[#000000E0] mb-4">
                别让低效管理，<br className="lg:hidden" />成为企业增长的瓶颈
              </h2>
              <p className="text-slate-500 text-lg">传统的表格记录和“散养式”销售管理，正在吞噬您的利润</p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "客户资产流失",
                desc: "客户资料分散在销售个人手机里，人员离职带走客户，公司资产流失严重。",
                icon: Users
              },
              {
                title: "销售过程黑盒",
                desc: "老板无法掌握销售每天在干什么，见没见客户，聊了什么，业绩预测全靠猜。",
                icon: Filter
              },
              {
                title: "内部撞单内耗",
                desc: "缺乏统一的报备机制，内部销售抢单严重，不仅影响团结，更损害客户体验。",
                icon: Layers
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

      {/* --- Core Features: 左右交替布局 (Bento-like Style) --- */}
      <section className="py-24 bg-[#F5F7FA]">
        <div className="container mx-auto px-6">
          <FadeIn direction="up">
            <div className="text-center mb-20">
              <h2 className="text-3xl font-bold text-[#000000E0] mb-4">全场景数字化赋能</h2>
              <p className="text-slate-500 text-lg">覆盖从线索到回款的每一个关键节点</p>
            </div>
          </FadeIn>

          <div className="space-y-24">
            {/* Feature 1: 公海池 & 线索 */}
            <FadeIn direction="right">
              <div className="flex flex-col lg:flex-row items-center gap-16">
                <div className="lg:w-1/2 space-y-6">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 text-[#1677FF] flex items-center justify-center">
                    <Globe size={24} />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">智能公海池，<br />盘活企业沉睡资产</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    建立公平透明的客户分配机制。支持自定义回收规则（如：15天未跟进自动回收），让资源在团队内高效流动，防止销售“占坑不拉屎”。
                  </p>
                  <ul className="space-y-3 pt-2">
                    {["多维度查重，防止撞单", "灵活的分配与领取规则", "线索清洗与自动补全"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-700">
                        <CheckCircle2 size={18} className="text-[#1677FF]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:w-1/2">
                  <div className="relative bg-white rounded-2xl p-6 shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-6 border-b border-slate-50 pb-4">
                      <div>
                        <div className="text-sm font-bold text-slate-800">公海池资源</div>
                        <div className="text-xs text-slate-400">Public Leads Pool</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        <span className="text-xs font-medium text-slate-500">实时更新</span>
                      </div>
                    </div>

                    {/* List Items */}
                    <div className="space-y-3">
                      {[
                        { name: "上海某电子科技有限公司", source: "官网咨询", time: "10分钟前", tag: "待领取" },
                        { name: "杭州某贸易集团", source: "线下展会", time: "2小时前", tag: "即将回收" },
                        { name: "北京某教育机构", source: "转介绍", time: "1天前", tag: "待领取" },
                        { name: "深圳某物流企业", source: "百度推广", time: "3天前", tag: "即将回收" },
                      ].map((lead, i) => (
                        <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-blue-50/50 transition-colors group cursor-pointer border border-transparent hover:border-blue-100">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-white border border-slate-100 flex items-center justify-center text-xs font-bold text-slate-600 shadow-sm">
                              {lead.name.charAt(0)}
                            </div>
                            <div>
                              <div className="text-sm font-bold text-slate-700 group-hover:text-blue-700">{lead.name}</div>
                              <div className="text-xs text-slate-400 flex items-center gap-1.5">
                                <span>{lead.source}</span>
                                <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                                <span>{lead.time}</span>
                              </div>
                            </div>
                          </div>
                          <div className={`text-xs px-2 py-1 rounded border ${lead.tag === "即将回收"
                              ? "bg-red-50 text-red-600 border-red-100"
                              : "bg-blue-50 text-blue-600 border-blue-100"
                            }`}>
                            {lead.tag}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Floating Alert */}
                    <div className="absolute bottom-6 right-6 bg-slate-900 text-white text-xs px-3 py-2 rounded-lg shadow-xl flex items-center gap-2 animate-bounce">
                      <div className="w-2 h-2 rounded-full bg-red-500"></div>
                      3 条线索即将被强制回收
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-100/50 rounded-full blur-3xl -z-10"></div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Feature 2: 销售漏斗 (Reversed) */}
            <FadeIn direction="left">
              <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
                <div className="lg:w-1/2 space-y-6">
                  <div className="w-12 h-12 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center">
                    <BarChart3 size={24} />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">可视化销售漏斗，<br />精准预测业绩走向</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    告别拍脑袋定目标。系统自动生成销售漏斗图，清晰展示各阶段商机数量及转化率，帮助管理者及时发现销售瓶颈，科学制定改进策略。
                  </p>
                  <ul className="space-y-3 pt-2">
                    {["自定义销售阶段 (SPIN/BANT)", "各阶段转化率自动计算", "业绩目标达成度实时预警"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-700">
                        <CheckCircle2 size={18} className="text-orange-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:w-1/2">
                  <div className="relative bg-white rounded-2xl p-6 shadow-2xl shadow-slate-200/50 border border-slate-100 h-full flex flex-col justify-center">
                    <div className="flex justify-between items-center mb-6">
                      <div className="text-sm font-bold text-slate-800">销售转化漏斗</div>
                      <div className="text-xs text-slate-400">Conversion Funnel</div>
                    </div>

                    <div className="space-y-2 relative">
                      {/* Funnel Layers */}
                      {[
                        { label: "线索 Leads", count: "2,580", percent: "100%", width: "100%", color: "bg-blue-100 text-blue-800" },
                        { label: "商机 Opportunities", count: "1,240", percent: "48%", width: "85%", color: "bg-blue-200 text-blue-900" },
                        { label: "方案 Proposal", count: "860", percent: "33%", width: "70%", color: "bg-blue-400 text-white" },
                        { label: "谈判 Negotiation", count: "420", percent: "16%", width: "55%", color: "bg-blue-500 text-white" },
                        { label: "成交 Closed", count: "360", percent: "14%", width: "40%", color: "bg-[#1677FF] text-white" },
                      ].map((stage, i) => (
                        <div key={i} className="flex flex-col items-center">
                          <div
                            className={`h-12 rounded-lg ${stage.color} flex items-center justify-between px-4 shadow-sm transition-all hover:scale-[1.02] cursor-default`}
                            style={{ width: stage.width }}
                          >
                            <span className="text-xs font-bold whitespace-nowrap">{stage.label}</span>
                            <span className="text-xs font-mono opacity-80">{stage.count}</span>
                          </div>
                          {/* Connector Arrow */}
                          {i < 4 && (
                            <div className="h-3 w-0.5 bg-slate-200 my-0.5"></div>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Stats Summary */}
                    <div className="mt-6 grid grid-cols-2 gap-4 pt-4 border-t border-slate-50">
                      <div className="text-center">
                        <div className="text-xs text-slate-400">总转化率</div>
                        <div className="text-xl font-bold text-[#1677FF]">14.2%</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-slate-400">平均周期</div>
                        <div className="text-xl font-bold text-slate-800">18天</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Feature 3: 移动外勤 */}
            <FadeIn direction="right">
              <div className="flex flex-col lg:flex-row items-center gap-16">
                <div className="lg:w-1/2 space-y-6">
                  <div className="w-12 h-12 rounded-lg bg-green-100 text-green-600 flex items-center justify-center">
                    <Smartphone size={24} />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">移动外勤管理，<br />销售行为全掌握</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    手机端随时随地办公。支持外勤签到打卡、拜访记录拍照上传、语音转文字录入日报。让外勤管理更加透明，让销售从繁琐的填表中解放出来。
                  </p>
                  <ul className="space-y-3 pt-2">
                    {["LBS 实时定位打卡", "名片扫描自动录入", "拜访轨迹回放"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-700">
                        <CheckCircle2 size={18} className="text-green-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:w-1/2 flex justify-center">
                  <div className="relative w-[280px] h-[560px] bg-slate-900 rounded-[3rem] shadow-2xl shadow-slate-400/50 border-[8px] border-slate-900 overflow-hidden">
                    {/* 模拟手机屏幕 */}
                    <div className="w-full h-full bg-slate-50 overflow-hidden relative flex flex-col">
                      {/* Status Bar */}
                      <div className="h-8 bg-white flex justify-between items-center px-6 text-[10px] font-bold text-slate-800 z-20">
                        <span>9:41</span>
                        <div className="flex gap-1">
                          <div className="w-3 h-3 bg-slate-800 rounded-full opacity-20"></div>
                          <div className="w-3 h-3 bg-slate-800 rounded-full opacity-20"></div>
                          <div className="w-3 h-3 bg-slate-800 rounded-full"></div>
                        </div>
                      </div>

                      {/* App Header */}
                      <div className="bg-white px-4 py-3 border-b border-slate-100 flex justify-between items-center z-20">
                        <div className="w-6 h-6 rounded bg-slate-100"></div>
                        <span className="font-bold text-slate-800">外勤签到</span>
                        <div className="w-6 h-6 rounded bg-blue-50 text-blue-500 flex items-center justify-center text-xs">+</div>
                      </div>

                      {/* Map Area (Abstract) */}
                      <div className="h-48 bg-slate-200 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-20"></div>
                        {/* Map Pins */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-blue-500/10 rounded-full animate-ping"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-lg z-10"></div>
                        <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur p-3 rounded-xl shadow-sm text-xs">
                          <div className="font-bold text-slate-800">当前位置</div>
                          <div className="text-slate-500 truncate">上海市浦东新区张江高科园区...</div>
                        </div>
                      </div>

                      {/* Visit List */}
                      <div className="flex-1 bg-white p-4 space-y-4 overflow-y-auto">
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Today</div>
                        {[
                          { time: "09:30", title: "拜访：科技大厦A座", status: "已完成", color: "text-green-500 bg-green-50" },
                          { time: "14:00", title: "客户会议：张经理", status: "进行中", color: "text-blue-500 bg-blue-50" },
                          { time: "16:30", title: "产品演示：华东区", status: "计划中", color: "text-slate-500 bg-slate-100" },
                        ].map((item, i) => (
                          <div key={i} className="flex gap-3 relative">
                            {/* Timeline Line */}
                            {i < 2 && <div className="absolute left-[19px] top-8 bottom-[-20px] w-0.5 bg-slate-100"></div>}

                            <div className="mt-1 w-10 text-xs font-bold text-slate-400 text-right">{item.time}</div>
                            <div className="relative z-10 w-3 h-3 mt-1.5 rounded-full border-2 border-white bg-slate-300 shadow-sm ring-1 ring-slate-100"></div>
                            <div className="flex-1 bg-slate-50 p-3 rounded-xl border border-slate-100">
                              <div className="text-xs font-bold text-slate-800 mb-1">{item.title}</div>
                              <div className={`inline-flex px-1.5 py-0.5 rounded text-[10px] font-bold ${item.color}`}>
                                {item.status}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Bottom Nav */}
                      <div className="bg-white border-t border-slate-100 p-4 pb-6 flex justify-between items-center px-8">
                        <div className="w-6 h-6 rounded-full bg-blue-500"></div>
                        <div className="w-6 h-6 rounded-full bg-slate-200"></div>
                        <div className="w-6 h-6 rounded-full bg-slate-200"></div>
                        <div className="w-6 h-6 rounded-full bg-slate-200"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* --- CTA Section: 底部号召 --- */}
      <section className="py-24 bg-[#1677FF] relative overflow-hidden">
        {/* 背景纹理 */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/grid.svg')] bg-repeat"></div>
        </div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <FadeIn direction="up">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              准备好让业绩翻倍了吗？
            </h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
              加入 2000+ 优秀企业的行列，体验数字化销售管理的魅力。
              <br className="hidden md:block" />
              现在注册，即可获得 15 天全功能免费试用。
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="btn bg-white text-[#1677FF] hover:bg-blue-50 px-10 py-4 h-auto rounded-xl font-bold text-lg shadow-xl transition-all border-none">
                免费预约演示
              </button>
              <button className="btn bg-transparent border border-white/30 text-white hover:bg-white/10 px-10 py-4 h-auto rounded-xl font-bold text-lg transition-all">
                咨询在线客服
              </button>
            </div>
            <div className="mt-8 text-sm text-blue-200/80">
              无需信用卡 · 支持私有化部署 · 7x24小时服务支持
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
