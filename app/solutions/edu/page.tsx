import * as motion from "framer-motion/client";

import {
  ArrowRight,
  CheckCircle2,
  Users,
  Calendar,
  CreditCard,
  MessageCircle,
  BookOpen,
  FileText,
  Clock,
  MoreHorizontal,
  User
} from 'lucide-react';

import FadeIn from '@/components/FadeIn';
import NumberTicker from '@/components/NumberTicker';
import CtaSection from '@/components/ui/CtaSection';

import FeatureGrid from '@/components/ui/FeatureGrid';

export default function Education() {
  return (
    <main className="bg-white font-sans selection:bg-[#1677FF] selection:text-white">

      {/* --- Hero Section --- */}
      <section className="relative pt-32 pb-32 lg:pt-48 lg:pb-40 overflow-hidden bg-[#F5F7FA]">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-[#E6F7FF] to-transparent opacity-60"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1677ff05_1px,transparent_1px),linear-gradient(to_bottom,#1677ff05_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

            {/* Left: Value Proposition */}
            <div className="lg:w-1/2 space-y-10">
              <FadeIn delay={0.1} direction="up">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-blue-100 shadow-sm shadow-blue-100/50">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1677FF] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#1677FF]"></span>
                  </span>
                  <span className="text-sm font-semibold text-[#1677FF] tracking-wide">教培机构数字化专家</span>
                </div>
              </FadeIn>

              <FadeIn delay={0.2} direction="up">
                <h1 className="text-5xl lg:text-7xl font-bold text-[#000000E0] leading-[1.15] tracking-tight">
                  智慧教育，<br />
                  <span className="text-[#1677FF]">培训机构教务管理</span>
                </h1>
              </FadeIn>

              <FadeIn delay={0.3} direction="up">
                <p className="text-xl text-slate-500 leading-relaxed max-w-xl">
                  专为教培机构打造的运营管理平台。涵盖招生、排课、消课、家校互通、财务核算全场景，助力机构降本增效，口碑业绩双增长。
                </p>
              </FadeIn>

              <FadeIn delay={0.4} direction="up">
                <div className="flex flex-wrap gap-5 pt-6">
                  <button className="btn bg-[#1677FF] hover:bg-[#0958D9] text-white px-10 py-4 h-auto rounded-xl font-semibold text-lg shadow-lg shadow-blue-500/30 border-none transition-all hover:-translate-y-1 flex items-center gap-2">
                    免费预约演示
                    <ArrowRight size={20} />
                  </button>
                  <button className="btn bg-white hover:bg-slate-50 text-slate-600 border border-slate-200 px-10 py-4 h-auto rounded-xl font-semibold text-lg shadow-sm hover:shadow-md transition-all flex items-center gap-2">
                    <FileText size={20} />
                    查看解决方案
                  </button>
                </div>
              </FadeIn>
            </div>

            {/* Right: Dashboard Mockup */}
            <div className="lg:w-1/2 relative">
              <FadeIn delay={0.2} direction="left" duration={0.8}>
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="relative w-full bg-white rounded-xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-slate-100 overflow-hidden"
                >
                  <div className="h-10 border-b border-slate-100 bg-slate-50/80 flex items-center px-4 gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
                    </div>
                    <div className="ml-4 h-5 w-32 bg-white rounded border border-slate-100"></div>
                  </div>

                  <div className="p-8 space-y-8">
                    {/* Course Schedule Grid */}
                    <div className="bg-white rounded-xl border border-slate-100 p-6 shadow-sm">
                      <div className="flex justify-between items-center mb-6">
                        <div className="text-base font-bold text-slate-800">今日课表 (2023-10-24)</div>
                        <div className="flex gap-2 text-xs">
                          <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full font-medium">少儿编程</span>
                          <span className="px-3 py-1 bg-orange-50 text-orange-600 rounded-full font-medium">机器人</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-4 gap-3 text-xs text-center">
                        <div className="p-3 bg-slate-50 rounded-lg text-slate-500 font-medium">09:00</div>
                        <div className="col-span-3 p-3 bg-blue-50 text-blue-700 rounded-lg border border-blue-100 text-left pl-4 relative overflow-hidden group hover:shadow-md transition-shadow cursor-pointer">
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500"></div>
                          <div className="font-bold text-sm mb-1">Python入门班 - A教室</div>
                          <div className="text-blue-500 text-xs flex items-center gap-2">
                            <Users size={12} />
                            张老师 | 12人
                          </div>
                        </div>

                        <div className="p-3 bg-slate-50 rounded-lg text-slate-500 font-medium">10:30</div>
                        <div className="col-span-3 p-3 bg-green-50 text-green-700 rounded-lg border border-green-100 text-left pl-4 relative overflow-hidden group hover:shadow-md transition-shadow cursor-pointer">
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-500"></div>
                          <div className="font-bold text-sm mb-1">乐高搭建基础 - B教室</div>
                          <div className="text-green-500 text-xs flex items-center gap-2">
                            <Users size={12} />
                            李老师 | 8人
                          </div>
                        </div>

                        <div className="p-3 bg-slate-50 rounded-lg text-slate-500 font-medium">14:00</div>
                        <div className="col-span-3 p-3 bg-orange-50 text-orange-700 rounded-lg border border-orange-100 text-left pl-4 relative overflow-hidden group hover:shadow-md transition-shadow cursor-pointer">
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-orange-500"></div>
                          <div className="font-bold text-sm mb-1">C++竞赛集训 - A教室</div>
                          <div className="text-orange-500 text-xs flex items-center gap-2">
                            <Users size={12} />
                            王教授 | 15人
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-6">
                      <div className="p-5 bg-slate-50 rounded-xl border border-slate-100">
                        <div className="text-xs text-slate-500 mb-2 font-medium">今日消课金额</div>
                        <div className="text-2xl font-bold text-slate-800">¥ 12,800</div>
                      </div>
                      <div className="p-5 bg-slate-50 rounded-xl border border-slate-100">
                        <div className="text-xs text-slate-500 mb-2 font-medium">新增试听学员</div>
                        <div className="text-2xl font-bold text-slate-800">8 <span className="text-xs font-medium text-green-600 bg-green-100 px-1.5 py-0.5 rounded ml-1">+2</span></div>
                      </div>
                    </div>

                  </div>
                </motion.div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* --- Stats Banner --- */}
      <section className="bg-white border-b border-slate-100">
        <div className="container mx-auto px-6 py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-100">
            {[
              { value: "80%", label: "排课效率提升", icon: Calendar },
              { value: "30%", label: "续费率增长", icon: Users },
              { value: "0", label: "课消财务误差", icon: CreditCard },
              { value: "100%", label: "家校满意度", icon: MessageCircle },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1} direction="up" className="h-full">
                <div className="flex flex-col items-center justify-center text-center px-6 group cursor-default h-full">
                  <div className="text-4xl lg:text-5xl font-bold text-slate-900 mb-3 group-hover:text-[#1677FF] transition-colors">
                    <NumberTicker value={item.value} />
                  </div>
                  <div className="text-base text-slate-500 flex items-center gap-2">
                    <item.icon size={16} className="text-slate-400" />
                    {item.label}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* --- Pain Points --- */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <FadeIn direction="up">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#000000E0] mb-6">
                教培机构管理痛点
              </h2>
              <p className="text-slate-500 text-xl">告别繁琐的Excel排课和手工记账，专注于教学质量</p>
            </div>
          </FadeIn>

          <div className="mb-16">
            <FadeIn direction="up">
              <FeatureGrid
                items={[
                  {
                    title: "排课易冲突",
                    desc: "老师、教室、时间资源匹配难，手动排课容易撞车，调整麻烦。",
                    icon: <Calendar size={32} />
                  },
                  {
                    title: "课消统计乱",
                    desc: "学员请假、补课情况多，手工统计课消容易出错，导致财务对账困难。",
                    icon: <CreditCard size={32} />
                  },
                  {
                    title: "家校沟通累",
                    desc: "课后反馈靠微信群发，通知不到位，家长看不到孩子成长，续费难。",
                    icon: <MessageCircle size={32} />
                  }
                ]}
                cols={3}
                animated
                variant="badge"
                size="lg"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* --- Core Features --- */}
      <section className="py-32 bg-[#F5F7FA]">
        <div className="container mx-auto px-6">
          <div className="space-y-40">
            {/* Feature 1 */}
            <FadeIn direction="right">
              <div className="flex flex-col lg:flex-row items-center gap-24">
                <div className="lg:w-1/2 space-y-8">
                  <div className="w-14 h-14 rounded-xl bg-blue-100 text-[#1677FF] flex items-center justify-center">
                    <Calendar size={28} />
                  </div>
                  <h3 className="text-4xl font-bold text-slate-900 leading-tight">智能排课引擎，<br />资源利用最大化</h3>
                  <p className="text-xl text-slate-600 leading-relaxed">
                    支持一对一、班课等多种教学模式。自动检测老师、教室时间冲突，一键生成课表。支持临时调课、代课，自动通知家长和老师。
                  </p>
                  <ul className="space-y-4 pt-4">
                    {["可视化排课界面", "冲突自动检测预警", "排课变更自动通知"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-700 text-lg">
                        <CheckCircle2 size={20} className="text-[#1677FF]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:w-1/2">
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative bg-white rounded-2xl p-6 shadow-2xl shadow-slate-200/50 border border-slate-100"
                  >
                    {/* Detailed Calendar Mockup */}
                    <div className="bg-white rounded-xl border border-slate-100 overflow-hidden">
                      <div className="flex border-b border-slate-100">
                        <div className="w-14 py-3 bg-slate-50 text-center text-xs font-medium text-slate-500 border-r border-slate-100">时间</div>
                        <div className="flex-1 grid grid-cols-3">
                          <div className="py-3 text-center text-xs font-bold text-slate-600 border-r border-slate-100 bg-slate-50/50">周一</div>
                          <div className="py-3 text-center text-xs font-bold text-[#1677FF] bg-blue-50/30 border-r border-slate-100">周二</div>
                          <div className="py-3 text-center text-xs font-bold text-slate-600 bg-slate-50/50">周三</div>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="w-14 border-r border-slate-100 bg-slate-50/30">
                          {[9, 10, 11, 12, 13, 14].map(h => (
                            <div key={h} className="h-20 flex items-start justify-center pt-2 text-[10px] font-medium text-slate-400 border-b border-slate-100 last:border-0">
                              {h}:00
                            </div>
                          ))}
                        </div>
                        <div className="flex-1 grid grid-cols-3 relative bg-[linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:100%_5rem]">
                          {/* Class Block 1 */}
                          <div className="absolute top-4 left-2 right-2 h-32 bg-blue-50 border-l-4 border-blue-500 rounded-r-md p-2 text-xs hover:shadow-md transition-shadow cursor-pointer">
                            <div className="font-bold text-blue-900 mb-1">少儿编程 L1</div>
                            <div className="text-blue-600 text-[10px] flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                                A201 教室
                            </div>
                            <div className="mt-2 flex -space-x-1.5">
                                <div className="w-5 h-5 rounded-full bg-blue-200 border border-white text-[8px] flex items-center justify-center text-blue-600">张</div>
                                <div className="w-5 h-5 rounded-full bg-blue-200 border border-white text-[8px] flex items-center justify-center text-blue-600">王</div>
                            </div>
                          </div>

                          {/* Class Block 2 (Conflict) - Now integrated in the table */}
                          <div className="absolute top-44 left-[34%] right-[34%] h-32 bg-red-50/80 border-l-4 border-red-500 rounded-r-md p-2 text-xs shadow-sm ring-1 ring-red-100 z-10 bg-[linear-gradient(45deg,#fee2e2_25%,#fef2f2_25%,#fef2f2_50%,#fee2e2_50%,#fee2e2_75%,#fef2f2_75%,#fef2f2_100%)] bg-[size:10px_10px]">
                            <div className="flex items-center gap-1 font-bold text-red-700 mb-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                              冲突警报
                            </div>
                            <div className="text-red-600 text-[10px]">教室已被占用</div>
                            <div className="mt-2 text-[10px] text-red-500 font-medium bg-white/50 rounded px-1 py-0.5 inline-block border border-red-100">
                                建议更换: B102
                            </div>
                          </div>

                          {/* Class Block 3 */}
                          <div className="absolute top-60 left-[67%] right-2 h-32 bg-green-50 border-l-4 border-green-500 rounded-r-md p-2 text-xs hover:shadow-md transition-shadow cursor-pointer">
                            <div className="font-bold text-green-900 mb-1">乐高机器人</div>
                            <div className="text-green-600 text-[10px] flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                                B103 教室
                            </div>
                             <div className="mt-2 flex -space-x-1.5">
                                <div className="w-5 h-5 rounded-full bg-green-200 border border-white text-[8px] flex items-center justify-center text-green-600">李</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </FadeIn>

            {/* Feature 2 */}
            <FadeIn direction="left">
              <div className="flex flex-col lg:flex-row-reverse items-center gap-24">
                <div className="lg:w-1/2 space-y-8">
                  <div className="w-14 h-14 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center">
                    <BookOpen size={28} />
                  </div>
                  <h3 className="text-4xl font-bold text-slate-900 leading-tight">学员全生命周期管理，<br />提升转化与留存</h3>
                  <p className="text-xl text-slate-600 leading-relaxed">
                    从线索录入、试听安排、报名缴费到分班排课、课后反馈、续费提醒，全流程数字化管理。360° 学员画像，助力精准营销。
                  </p>
                  <ul className="space-y-4 pt-4">
                    {["招生线索跟进", "电子合同与收据", "成长档案记录"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-700 text-lg">
                        <CheckCircle2 size={20} className="text-orange-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:w-1/2">
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative bg-white rounded-2xl p-8 shadow-2xl shadow-slate-200/50 border border-white"
                  >
                    {/* Student CRM Board Mockup */}
                    <div className="grid grid-cols-3 gap-3 bg-slate-50/50 p-1 rounded-xl">
                      {/* Column 1: Leads */}
                      <div className="flex flex-col gap-2 h-full">
                        <div className="flex justify-between items-center px-2 py-1.5">
                          <span className="font-bold text-slate-700 text-xs flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-orange-400"></span>
                            新线索
                          </span>
                          <span className="bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded text-[10px] font-medium border border-slate-200">3</span>
                        </div>
                        <div className="space-y-2">
                          {[
                            { name: "王女士", tag: "咨询Python", time: "10分钟前", avatar: "王", color: "bg-orange-100 text-orange-600" },
                            { name: "张先生", tag: "咨询乐高", time: "2小时前", avatar: "张", color: "bg-blue-100 text-blue-600" },
                            { name: "陈女士", tag: "少儿绘画", time: "昨天", avatar: "陈", color: "bg-purple-100 text-purple-600" }
                          ].map((item, i) => (
                            <div key={i} className="bg-white p-2.5 rounded-lg shadow-sm border border-slate-100 hover:shadow-md transition-shadow cursor-pointer group">
                              <div className="flex items-center gap-2 mb-2">
                                <div className={`w-6 h-6 rounded-full ${item.color} flex items-center justify-center text-[10px] font-bold`}>{item.avatar}</div>
                                <span className="text-xs font-bold text-slate-700 group-hover:text-[#1677FF] transition-colors">{item.name}</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-[10px] text-slate-500 bg-slate-50 px-1.5 py-0.5 rounded border border-slate-100">{item.tag}</span>
                                <span className="text-[10px] text-slate-300">{item.time}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Column 2: Follow Up */}
                      <div className="flex flex-col gap-2 h-full">
                        <div className="flex justify-between items-center px-2 py-1.5">
                          <span className="font-bold text-slate-700 text-xs flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                            跟进中
                          </span>
                          <span className="bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded text-[10px] font-medium border border-slate-200">2</span>
                        </div>
                        <div className="space-y-2">
                            <div className="bg-white p-2.5 rounded-lg shadow-sm border border-blue-200 ring-1 ring-blue-50 cursor-pointer relative overflow-hidden">
                              <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-bl-xl"></div>
                              <div className="flex items-center gap-2 mb-2">
                                <div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-[10px] font-bold">刘</div>
                                <span className="text-xs font-bold text-slate-800">刘浩宇</span>
                              </div>
                              <div className="text-[10px] text-slate-500 mb-1.5">已预约试听: 周六 10:00</div>
                              <div className="w-full bg-slate-100 h-1 rounded-full overflow-hidden">
                                <div className="bg-blue-500 h-full w-2/3"></div>
                              </div>
                            </div>
                            
                            <div className="bg-white p-2.5 rounded-lg shadow-sm border border-slate-100 hover:shadow-md transition-shadow cursor-pointer">
                              <div className="flex items-center gap-2 mb-2">
                                <div className="w-6 h-6 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center text-[10px] font-bold">赵</div>
                                <span className="text-xs font-bold text-slate-800">赵雅</span>
                              </div>
                              <div className="text-[10px] text-slate-500">意向强烈，待签约</div>
                            </div>
                        </div>
                      </div>

                      {/* Column 3: Enrolled */}
                      <div className="flex flex-col gap-2 h-full">
                        <div className="flex justify-between items-center px-2 py-1.5">
                          <span className="font-bold text-slate-700 text-xs flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-green-500"></span>
                            已报名
                          </span>
                          <span className="bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded text-[10px] font-medium border border-slate-200">1</span>
                        </div>
                         <div className="space-y-2">
                            <div className="bg-white p-2.5 rounded-lg shadow-sm border-l-2 border-l-green-500 border-y border-r border-slate-100 opacity-80 hover:opacity-100 transition-opacity cursor-pointer">
                              <div className="flex items-center gap-2 mb-2">
                                <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-[10px] font-bold">孙</div>
                                <span className="text-xs font-bold text-slate-800">孙一鸣</span>
                              </div>
                              <div className="flex items-center justify-between">
                                <div className="text-[10px] text-slate-500">已缴费</div>
                                <div className="text-[10px] font-bold text-green-600">￥3999</div>
                              </div>
                            </div>
                         </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </FadeIn>

            {/* Feature 3 */}
            <FadeIn direction="right">
              <div className="flex flex-col lg:flex-row items-center gap-24">
                <div className="lg:w-1/2 space-y-8">
                  <div className="w-14 h-14 rounded-xl bg-green-100 text-green-600 flex items-center justify-center">
                    <MessageCircle size={28} />
                  </div>
                  <h3 className="text-4xl font-bold text-slate-900 leading-tight">家校互通小程序，<br />服务体验升级</h3>
                  <p className="text-xl text-slate-600 leading-relaxed">
                    家长端小程序可查看课表、接收上课提醒、查看课堂点评和作业、在线请假、在线缴费续费。增强家校粘性，提升服务满意度。
                  </p>
                  <ul className="space-y-4 pt-4">
                    {["课后点评图文/视频", "作业在线提交批改", "积分商城兑换"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-700 text-lg">
                        <CheckCircle2 size={20} className="text-green-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:w-1/2">
                  {/* Mobile Mockup - iPhone 14 Pro Style */}
                  <div className="relative mx-auto w-[280px] h-[580px] bg-slate-900 rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(50,50,93,0.25),0_30px_60px_-30px_rgba(0,0,0,0.3)] border-[6px] border-slate-900 ring-4 ring-slate-800 overflow-hidden">
                    {/* Dynamic Island */}
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-full z-30 flex items-center justify-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-800/50"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-800/50"></div>
                    </div>
                    
                    {/* Screen Content */}
                    <div className="w-full h-full bg-[#F5F7FA] overflow-hidden relative flex flex-col pt-10">
                       {/* Status Bar Mock */}
                       <div className="absolute top-3 left-6 right-6 flex justify-between text-[10px] font-medium text-white z-40">
                          <span>9:41</span>
                          <div className="flex gap-1">
                             <div className="w-3 h-3">
                                <div className="w-full h-full border border-white/50 rounded-sm relative">
                                    <div className="absolute inset-0.5 bg-white rounded-[1px]"></div>
                                </div>
                             </div>
                          </div>
                       </div>

                       {/* App Header */}
                       <div className="px-5 pb-4 flex items-center justify-between bg-white pt-2">
                           <div className="text-lg font-bold text-slate-900">我的孩子</div>
                           <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 overflow-hidden flex items-center justify-center text-xs text-slate-400">
                              <User size={20} />
                           </div>
                       </div>

                       {/* Scrollable Body */}
                       <div className="flex-1 overflow-y-auto px-4 pb-4 space-y-4 no-scrollbar">
                           {/* Student Card */}
                           <div className="bg-gradient-to-br from-[#1677FF] to-[#0050b3] rounded-2xl p-5 text-white shadow-lg shadow-blue-500/20 relative overflow-hidden group cursor-pointer">
                               {/* Decorative circles */}
                               <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-colors"></div>
                               
                               <div className="flex items-center gap-4 relative z-10">
                                   <div className="w-12 h-12 rounded-full bg-white/20 border-2 border-white/30 flex items-center justify-center text-lg font-bold backdrop-blur-sm shadow-inner">
                                     乐
                                   </div>
                                   <div>
                                     <div className="text-lg font-bold">乐乐小朋友</div>
                                     <div className="text-xs text-blue-100/90 mt-1 flex items-center gap-1">
                                        <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></div>
                                        剩余课时: 24 节
                                     </div>
                                   </div>
                               </div>
                           </div>

                           {/* Grid Menu */}
                           <div className="grid grid-cols-4 gap-2">
                              {[
                                  { label: "课程表", icon: Calendar, color: "text-blue-500", bg: "bg-blue-50" },
                                  { label: "课后点评", icon: MessageCircle, color: "text-green-500", bg: "bg-green-50" },
                                  { label: "在线请假", icon: Clock, color: "text-orange-500", bg: "bg-orange-50" },
                                  { label: "更多服务", icon: MoreHorizontal, color: "text-slate-500", bg: "bg-slate-50" },
                              ].map((item, i) => (
                                  <div key={i} className="flex flex-col items-center gap-2 cursor-pointer group">
                                      <div className={`w-12 h-12 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform`}>
                                          <item.icon size={20} />
                                      </div>
                                      <span className="text-[10px] font-medium text-slate-600">{item.label}</span>
                                  </div>
                              ))}
                           </div>

                           {/* Notification / Feed */}
                           <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100/50">
                               <div className="flex justify-between items-center mb-3">
                                   <h4 className="font-bold text-slate-800 text-sm">最新动态</h4>
                                   <span className="text-[10px] text-slate-400">10:30</span>
                               </div>
                               <div className="flex gap-3">
                                   <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0 border border-green-200">
                                       <MessageCircle size={14} />
                                   </div>
                                   <div>
                                       <div className="text-xs text-slate-600 leading-relaxed mb-2">
                                          <span className="font-bold text-slate-800">李老师</span> 发布了课堂点评：乐乐今天在编程课上表现很棒，逻辑思维很清晰！👍
                                       </div>
                                       <div className="flex gap-2">
                                           <div className="w-12 h-12 bg-slate-100 rounded-lg border border-slate-200"></div>
                                           <div className="w-12 h-12 bg-slate-100 rounded-lg border border-slate-200"></div>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>

                       {/* Bottom Tab Bar Mock */}
                       <div className="h-14 bg-white border-t border-slate-100 flex items-center justify-around px-4 pb-2">
                            {[1,2,3].map((i) => (
                                <div key={i} className="flex flex-col items-center gap-1 text-slate-400 cursor-pointer">
                                <div className="w-5 h-5 border-[1.5px] border-current rounded-md"></div>
                            </div>
                            ))}
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* --- CTA Section --- */}
      <CtaSection
        title="开启智慧教育新篇章"
        description={
          <>
            立即体验数字化教务管理系统，提升教学质量与管理效率。
            <br className="hidden md:block" />
            现在注册，即可获得 15 天全功能免费试用。
            <div className="mt-8 text-sm text-blue-200/80">
              支持私有化部署 · 7x24小时服务支持
            </div>
          </>
        }
        primaryAction={{ label: "免费预约演示", href: "/contact" }}
        secondaryAction={{ label: "咨询在线客服", href: "/contact" }}
      />
    </main>
  );
}
