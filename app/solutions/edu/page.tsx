'use client';

import {
  ArrowRight,
  CheckCircle2,
  BarChart3,
  GraduationCap,
  Users,
  Calendar,
  CreditCard,
  MessageCircle,
  BookOpen,
  PieChart,
  FileText,
  Smartphone,
  Clock,
  MoreHorizontal
} from 'lucide-react';

import { motion } from 'framer-motion';
import FadeIn from '@/components/FadeIn';
import NumberTicker from '@/components/NumberTicker';

export default function Edu() {
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

              {/* Decorative Background */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -z-10 top-12 -right-12 w-full h-full bg-blue-50 rounded-xl opacity-50 scale-95"
              ></motion.div>
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

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "排课易冲突",
                desc: "老师、教室、时间资源匹配难，手动排课容易撞车，调整麻烦。",
                icon: Calendar
              },
              {
                title: "课消统计乱",
                desc: "学员请假、补课情况多，手工统计课消容易出错，导致财务对账困难。",
                icon: CreditCard
              },
              {
                title: "家校沟通累",
                desc: "课后反馈靠微信群发，通知不到位，家长看不到孩子成长，续费难。",
                icon: MessageCircle
              }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1} direction="up" className="h-full">
                <div className="group bg-[#F8FAFC] hover:bg-white rounded-3xl p-10 border border-slate-100 hover:border-blue-100 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 h-full">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-[#1677FF] group-hover:scale-110 transition-all mb-8">
                    <item.icon size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-lg">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
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
                    className="relative bg-white rounded-2xl p-6 shadow-2xl shadow-slate-200/50 border border-white"
                  >
                    {/* Detailed Calendar Mockup */}
                    <div className="bg-white rounded-xl border border-slate-100 overflow-hidden">
                      <div className="flex border-b border-slate-100">
                        <div className="w-16 py-3 bg-slate-50 text-center text-xs font-medium text-slate-500 border-r border-slate-100">时间</div>
                        <div className="flex-1 grid grid-cols-3">
                          <div className="py-3 text-center text-xs font-bold text-slate-700 border-r border-slate-100">周一</div>
                          <div className="py-3 text-center text-xs font-bold text-[#1677FF] bg-blue-50/50 border-r border-slate-100">周二</div>
                          <div className="py-3 text-center text-xs font-bold text-slate-700">周三</div>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="w-16 border-r border-slate-100">
                          {[9, 10, 11, 12, 13, 14].map(h => (
                            <div key={h} className="h-16 flex items-center justify-center text-xs text-slate-400 border-b border-slate-50 last:border-0">
                              {h}:00
                            </div>
                          ))}
                        </div>
                        <div className="flex-1 grid grid-cols-3 relative bg-[linear-gradient(to_bottom,#f8fafc_1px,transparent_1px)] bg-[size:100%_4rem]">
                          {/* Class Block 1 */}
                          <div className="absolute top-4 left-2 right-2 h-24 bg-blue-100 border-l-4 border-blue-500 rounded p-2 text-xs shadow-sm">
                            <div className="font-bold text-blue-800">少儿编程 L1</div>
                            <div className="text-blue-600 mt-1">A201 教室</div>
                          </div>

                          {/* Class Block 2 (Conflict) */}
                          <div className="absolute top-36 left-[34%] right-[34%] h-24 bg-red-50 border-l-4 border-red-500 rounded p-2 text-xs shadow-sm ring-2 ring-red-100 z-10">
                            <div className="flex items-center gap-1 font-bold text-red-800">
                              <span>冲突警报</span>
                            </div>
                            <div className="text-red-600 mt-1">教室已被占用</div>
                          </div>

                          {/* Class Block 3 */}
                          <div className="absolute top-48 left-[67%] right-2 h-24 bg-green-100 border-l-4 border-green-500 rounded p-2 text-xs shadow-sm">
                            <div className="font-bold text-green-800">乐高机器人</div>
                            <div className="text-green-600 mt-1">B103 教室</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Floating Tooltip */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-800 text-white px-4 py-2 rounded-lg shadow-xl text-sm font-medium z-20 flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                      检测到资源冲突
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
                    <div className="grid grid-cols-3 gap-4">
                      {/* Column 1: Leads */}
                      <div className="bg-slate-50 rounded-xl p-3 flex flex-col gap-3 h-full">
                        <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                          <span className="font-bold text-slate-700 text-sm">新线索</span>
                          <span className="bg-slate-200 text-slate-600 px-1.5 rounded text-xs">3</span>
                        </div>
                        {[1, 2, 3].map(i => (
                          <div key={i} className="bg-white p-3 rounded-lg shadow-sm border border-slate-100">
                            <div className="flex items-center gap-2 mb-2">
                              <div className="w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-xs font-bold">李</div>
                              <span className="text-sm font-bold text-slate-800">李子涵妈妈</span>
                            </div>
                            <div className="text-xs text-slate-500">咨询少儿编程...</div>
                          </div>
                        ))}
                      </div>

                      {/* Column 2: Follow Up */}
                      <div className="bg-blue-50 rounded-xl p-3 flex flex-col gap-3 h-full">
                        <div className="flex justify-between items-center pb-2 border-b border-blue-100">
                          <span className="font-bold text-blue-800 text-sm">跟进中</span>
                          <span className="bg-blue-200 text-blue-700 px-1.5 rounded text-xs">2</span>
                        </div>
                        <div className="bg-white p-3 rounded-lg shadow-sm border border-blue-100 ring-2 ring-blue-200">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold">王</div>
                            <span className="text-sm font-bold text-slate-800">王小明</span>
                          </div>
                          <div className="text-xs text-slate-500">已预约周六试听</div>
                        </div>
                        <div className="bg-white p-3 rounded-lg shadow-sm border border-blue-100 ring-2 ring-blue-200">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold">王</div>
                            <span className="text-sm font-bold text-slate-800">王小明</span>
                          </div>
                          <div className="text-xs text-slate-500">已预约周六试听</div>
                        </div>
                      </div>

                      {/* Column 3: Enrolled */}
                      <div className="bg-green-50 rounded-xl p-3 flex flex-col gap-3 h-full">
                        <div className="flex justify-between items-center pb-2 border-b border-green-100">
                          <span className="font-bold text-green-800 text-sm">已报名</span>
                          <span className="bg-green-200 text-green-700 px-1.5 rounded text-xs">1</span>
                        </div>
                        <div className="bg-white p-3 rounded-lg shadow-sm border border-green-100 opacity-60">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs font-bold">张</div>
                            <span className="text-sm font-bold text-slate-800">张伟</span>
                          </div>
                          <div className="text-xs text-slate-500">已缴费 ￥3999</div>
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
                  {/* Mobile Mockup */}
                  <div className="relative mx-auto w-[280px] bg-white rounded-[2.5rem] shadow-[0_30px_60px_-12px_rgba(0,0,0,0.12)] border-[8px] border-slate-50 ring-1 ring-slate-200/50">
                    {/* Notch */}
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-6 bg-slate-100 rounded-full z-20"></div>

                    <div className="bg-[#F5F7FA] w-full h-[500px] rounded-[2rem] overflow-hidden relative flex flex-col">
                      {/* Header */}
                      <div className="bg-white px-4 pt-12 pb-2 shadow-sm z-10">
                        <div className="text-lg font-bold text-center">我的孩子</div>
                      </div>

                      {/* Body */}
                      <div className="flex-1 h-0 px-2 py-4">
                        <div className='h-full rounded-2xl overflow-hidden space-y-4'>
                          {/* Student Card */}
                          <div className="bg-gradient-to-r from-[#1677FF] to-blue-500 rounded-2xl p-4 text-white shadow-lg shadow-blue-500/30">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-lg font-bold border border-white/30">
                                乐
                              </div>
                              <div>
                                <div className="font-bold">乐乐小朋友</div>
                                <div className="text-xs text-blue-100 opacity-90">剩余课时: 24节</div>
                              </div>
                            </div>
                          </div>

                          {/* Actions Grid */}
                          <div className="grid grid-cols-4 gap-2 bg-white p-4 rounded-xl shadow-sm">
                            {[
                              { label: "课程表", icon: Calendar, color: "text-blue-500", bg: "bg-blue-50" },
                              { label: "课后点评", icon: MessageCircle, color: "text-green-500", bg: "bg-green-50" },
                              { label: "请假", icon: Clock, color: "text-orange-500", bg: "bg-orange-50" },
                              { label: "更多", icon: MoreHorizontal, color: "text-slate-500", bg: "bg-slate-50" },
                            ].map((item, i) => (
                              <div key={i} className="flex flex-col items-center gap-1.5">
                                <div className={`w-10 h-10 rounded-full ${item.bg} ${item.color} flex items-center justify-center`}>
                                  <item.icon size={18} />
                                </div>
                                <span className="text-[10px] text-slate-600">{item.label}</span>
                              </div>
                            ))}
                          </div>

                          {/* Notification Card */}
                          <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 mb-2 overflow-hidden">
                            <div className="flex justify-between items-center mb-3">
                              <div className="text-sm font-bold text-slate-800">最新点评</div>
                              <div className="text-[10px] text-slate-400">10:30</div>
                            </div>
                            <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-lg">
                              乐乐今天在编程课上表现很棒，能够独立完成循环结构的编写，逻辑思维很清晰！👍
                            </p>
                            <div className="mt-3 flex gap-2">
                              <div className="w-16 h-12 bg-slate-100 rounded-lg"></div>
                              <div className="w-16 h-12 bg-slate-100 rounded-lg"></div>
                            </div>
                          </div>
                        </div>
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
      <section className="py-32 bg-[#1677FF] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/grid.svg')] bg-repeat"></div>
        </div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <FadeIn direction="up">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
              打造一流的教培机构
            </h2>
            <p className="text-blue-100 text-xl mb-12 max-w-2xl mx-auto">
              已有 5000+ 机构选择我们，实现数字化转型。
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="btn bg-white text-[#1677FF] hover:bg-blue-50 px-12 py-5 h-auto rounded-xl font-bold text-xl shadow-xl transition-all border-none">
                免费预约演示
              </button>
              <button className="btn bg-transparent border border-white/30 text-white hover:bg-white/10 px-12 py-5 h-auto rounded-xl font-bold text-xl transition-all">
                咨询在线客服
              </button>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
