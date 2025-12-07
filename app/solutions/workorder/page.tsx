'use client';

import {
  ArrowRight,
  CheckCircle2,
  BarChart3,
  ClipboardList,
  Smartphone,
  MessageSquare,
  Clock,
  Zap,
  Users,
  Settings,
  Wrench,
  FileText,
  MapPin,
  Calendar,
  Package,
  AlertCircle
} from 'lucide-react';

import { motion } from 'framer-motion';
import FadeIn from '@/components/FadeIn';
import NumberTicker from '@/components/NumberTicker';

export default function WorkOrder() {
  return (
    <main className="bg-white font-sans selection:bg-[#1677FF] selection:text-white">

      {/* --- Hero Section --- */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 overflow-hidden bg-[#F5F7FA]">
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
                  <span className="text-sm font-semibold text-[#1677FF] tracking-wide">智能售后运维系统</span>
                </div>
              </FadeIn>

              <FadeIn delay={0.2} direction="up">
                <h1 className="text-5xl lg:text-7xl font-bold text-[#000000E0] leading-[1.1] tracking-tight">
                  智能服务工单，<br />
                  <span className="text-[#1677FF]">售后运维高效流转</span>
                </h1>
              </FadeIn>

              <FadeIn delay={0.3} direction="up">
                <p className="text-xl text-slate-500 leading-relaxed max-w-xl">
                  连接客户、客服与现场工程师。从报修接入、智能派单到现场服务的全流程数字化闭环，提升响应速度与客户满意度。
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
                  className="relative w-full bg-white rounded-xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-slate-100 overflow-hidden z-10"
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
                    {/* Stats Row */}
                    <div className="grid grid-cols-3 gap-6">
                      <div className="bg-blue-50 p-5 rounded-xl border border-blue-100">
                        <div className="text-xs text-blue-600 font-bold mb-1">待处理工单</div>
                        <div className="text-3xl font-bold text-slate-800">12</div>
                      </div>
                      <div className="bg-orange-50 p-5 rounded-xl border border-orange-100">
                        <div className="text-xs text-orange-600 font-bold mb-1">进行中</div>
                        <div className="text-3xl font-bold text-slate-800">8</div>
                      </div>
                      <div className="bg-green-50 p-5 rounded-xl border border-green-100">
                        <div className="text-xs text-green-600 font-bold mb-1">今日完成</div>
                        <div className="text-3xl font-bold text-slate-800">24</div>
                      </div>
                    </div>

                    {/* Work Order List */}
                    <div className="bg-white rounded-xl border border-slate-100 p-6 shadow-sm">
                      <div className="text-sm font-bold text-slate-800 mb-5 flex justify-between">
                        <span>实时工单监控</span>
                        <span className="text-[#1677FF] text-xs font-normal cursor-pointer">查看全部</span>
                      </div>
                      <div className="space-y-4">
                        {[
                          { id: "WO-20231001", type: "设备维修", status: "待派单", time: "5分钟前", priority: "high" },
                          { id: "WO-20231002", type: "定期巡检", status: "进行中", time: "30分钟前", priority: "normal" },
                          { id: "WO-20231003", type: "安装调试", status: "已完成", time: "1小时前", priority: "normal" },
                        ].map((item, i) => (
                          <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                            <div className="flex items-center gap-4">
                              <div className={`w-2.5 h-2.5 rounded-full ${item.priority === 'high' ? 'bg-red-500' : 'bg-blue-500'}`}></div>
                              <div>
                                <div className="text-sm font-medium text-slate-700">{item.type} <span className="text-slate-400 text-xs">#{item.id}</span></div>
                              </div>
                            </div>
                            <div className={`text-xs px-2.5 py-1 rounded ${
                              item.status === '待派单' ? 'bg-red-100 text-red-600' :
                              item.status === '进行中' ? 'bg-blue-100 text-blue-600' :
                              'bg-green-100 text-green-600'
                            }`}>
                              {item.status}
                            </div>
                          </div>
                        ))}
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
              { value: "45%", label: "响应速度提升", icon: Zap },
              { value: "98%", label: "SLA达成率", icon: CheckCircle2 },
              { value: "30%", label: "服务成本降低", icon: BarChart3 },
              { value: "99%", label: "客户满意度", icon: Users },
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
                解决售后服务难题
              </h2>
              <p className="text-slate-500 text-xl">告别混乱的电话报修和纸质工单，让服务更加专业</p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "报修渠道杂乱",
                desc: "电话、微信、邮件多渠道报修，信息容易遗漏，客服录单工作量大。",
                icon: MessageSquare
              },
              {
                title: "服务进度不透明",
                desc: "客户不知道工程师什么时候上门，修到哪一步了，反复催单体验差。",
                icon: Clock
              },
              {
                title: "工程师管理难",
                desc: "在外人员位置不知晓，工时难统计，绩效考核缺乏数据支撑。",
                icon: Users
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
                    <ClipboardList size={28} />
                  </div>
                  <h3 className="text-4xl font-bold text-slate-900 leading-tight">全渠道统一接入，<br />智能自动派单</h3>
                  <p className="text-xl text-slate-600 leading-relaxed">
                    整合电话、微信公众号、小程序、网页等多渠道报修请求。内置智能派单引擎，根据工程师技能、位置、忙闲状态自动最优分配，或开启抢单模式。
                  </p>
                  <ul className="space-y-4 pt-4">
                    {["微信一键扫码报修", "基于LBS的就近派单", "SLA超时自动升级预警"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-700 text-lg">
                        <CheckCircle2 size={20} className="text-[#1677FF]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:w-1/2">
                  <div className="relative w-full bg-white rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-slate-100 overflow-hidden">
                    {/* Header */}
                    <div className="h-12 border-b border-slate-100 bg-slate-50 flex items-center px-6 justify-between">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      </div>
                      <div className="text-sm text-slate-400 font-medium">智能调度中心</div>
                    </div>
                    {/* Content */}
                    <div className="flex h-80">
                      {/* Sidebar List */}
                      <div className="w-1/3 border-r border-slate-100 p-4 space-y-3">
                         <div className="text-sm font-bold text-slate-700 mb-3">待派工单 (3)</div>
                         {[1, 2, 3].map((i) => (
                           <div key={i} className="p-3 bg-white border border-slate-100 rounded-xl shadow-sm flex items-start gap-3">
                             <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 shrink-0"></div>
                             <div className="space-y-2 w-full">
                               <div className="h-2.5 w-3/4 bg-slate-200 rounded"></div>
                               <div className="h-2 w-1/2 bg-slate-100 rounded"></div>
                             </div>
                           </div>
                         ))}
                      </div>
                      {/* Map Area */}
                      <div className="w-2/3 bg-slate-50 relative p-6 overflow-hidden">
                        {/* Grid Lines */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-50"></div>
                        
                        {/* Map Pins */}
                        <motion.div 
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ delay: 0.2 }}
                          className="absolute top-1/3 left-1/3"
                        >
                           <div className="relative group cursor-pointer">
                             <div className="w-10 h-10 bg-[#1677FF] rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30 text-white z-10 relative group-hover:scale-110 transition-transform">
                               <Users size={18} />
                             </div>
                             <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0.5 h-4 bg-slate-300"></div>
                             <div className="absolute top-0 left-0 w-10 h-10 bg-[#1677FF] rounded-full animate-ping opacity-20"></div>
                             
                             {/* Tooltip */}
                             <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white px-3 py-1.5 rounded-lg text-xs font-medium shadow-xl border border-slate-100 whitespace-nowrap z-20 text-slate-700">
                               张师傅 (空闲)
                             </div>
                           </div>
                        </motion.div>

                         <motion.div 
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ delay: 0.4 }}
                          className="absolute bottom-1/3 right-1/3"
                        >
                           <div className="relative group cursor-pointer">
                             <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center shadow-lg shadow-orange-500/30 text-white z-10 relative group-hover:scale-110 transition-transform">
                               <Wrench size={18} />
                             </div>
                              {/* Tooltip */}
                             <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white px-3 py-1.5 rounded-lg text-xs font-medium shadow-xl border border-slate-100 whitespace-nowrap z-20 text-slate-700">
                               维修中
                             </div>
                           </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Feature 2 */}
            <FadeIn direction="left">
              <div className="flex flex-col lg:flex-row-reverse items-center gap-24">
                <div className="lg:w-1/2 space-y-8">
                  <div className="w-14 h-14 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center">
                    <Smartphone size={28} />
                  </div>
                  <h3 className="text-4xl font-bold text-slate-900 leading-tight">移动端现场服务，<br />标准化作业流程</h3>
                  <p className="text-xl text-slate-600 leading-relaxed">
                    工程师通过手机APP接单、签到、记录故障、拍照上传、在线报价、电子签名。规范现场服务动作，确保服务质量一致性。
                  </p>
                  <ul className="space-y-4 pt-4">
                    {["现场定位签到", "标准SOP作业指引", "客户电子签名确认"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-700 text-lg">
                        <CheckCircle2 size={20} className="text-orange-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:w-1/2">
                   {/* Light & Modern Phone Mockup */}
                   <div className="relative mx-auto w-[300px] bg-white rounded-[3rem] shadow-[0_30px_60px_-12px_rgba(0,0,0,0.12)] border-[8px] border-slate-50 ring-1 ring-slate-200/50">
                    {/* Modern Dynamic Island / Notch */}
                    <div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 h-7 bg-slate-100 rounded-full z-20 flex items-center justify-center gap-2 shadow-inner">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
                      <div className="w-10 h-1 rounded-full bg-slate-200/80"></div>
                    </div>

                    <div className="bg-white w-full h-[540px] rounded-[2.5rem] overflow-hidden relative flex flex-col">
                      {/* App Header */}
                      <div className="bg-[#1677FF] h-44 p-6 pt-14 text-white relative shrink-0 overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 blur-2xl"></div>
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-10 -mb-10 blur-xl"></div>
                        
                        <div className="relative z-10">
                          <div className="flex justify-between items-center mb-6">
                            <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                              <ArrowRight size={14} className="rotate-180 text-white" />
                            </div>
                            <div className="font-semibold text-lg tracking-wide">任务详情</div>
                            <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                              <div className="w-1 h-1 bg-white rounded-full"></div>
                              <div className="w-1 h-1 bg-white rounded-full mx-0.5"></div>
                              <div className="w-1 h-1 bg-white rounded-full"></div>
                            </div>
                          </div>
                          <div className="text-3xl font-bold mb-1 tracking-tight">WO-202310</div>
                          <div className="flex items-center gap-2 mt-2">
                            <span className="bg-white/20 px-2 py-0.5 rounded text-xs font-medium backdrop-blur-sm">设备故障维修</span>
                            <span className="bg-red-400/80 px-2 py-0.5 rounded text-xs font-medium backdrop-blur-sm text-white">紧急</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Body Content */}
                      <div className="flex-1 bg-slate-50 relative flex flex-col">
                        {/* Timeline Card - Floating overlap */}
                        <div className="mx-4 -mt-6 bg-white rounded-2xl shadow-sm p-5 border border-slate-100 relative z-10">
                           <div className="space-y-6 relative pl-2">
                             {/* Continuous Vertical Line */}
                             <div className="absolute left-[19px] top-2 bottom-2 w-[2px] bg-slate-100"></div>

                             {[
                               { title: "出发前往", time: "09:30", status: "completed" },
                               { title: "到达签到", time: "10:15", status: "completed" },
                               { title: "维修作业", time: "进行中", status: "active" },
                               { title: "完工签字", time: "待定", status: "pending" },
                             ].map((step, i) => (
                               <div key={i} className="flex items-center gap-4 relative group">
                                 {/* Dot */}
                                 <div className={`w-4 h-4 rounded-full border-[3px] shrink-0 z-10 bg-white transition-all duration-300 ${
                                   step.status === 'completed' ? 'border-[#1677FF] bg-[#1677FF]' :
                                   step.status === 'active' ? 'border-[#1677FF] scale-125 shadow ring-2 ring-blue-100' :
                                   'border-slate-300'
                                 }`}></div>
                                 
                                 {/* Content */}
                                 <div className="flex-1 flex justify-between items-center bg-white">
                                   <span className={`text-sm font-medium transition-colors ${
                                     step.status === 'active' ? 'text-[#1677FF] font-bold' : 
                                     step.status === 'completed' ? 'text-slate-700' : 'text-slate-400'
                                   }`}>
                                     {step.title}
                                   </span>
                                   <span className={`text-xs px-2 py-0.5 rounded-full ${
                                     step.status === 'active' ? 'bg-blue-50 text-blue-600' : 'bg-slate-50 text-slate-400'
                                   }`}>
                                     {step.time}
                                   </span>
                                 </div>
                               </div>
                             ))}
                           </div>
                        </div>
                        
                        {/* Bottom Actions */}
                        <div className="mt-auto p-5 pb-8 space-y-3 bg-white border-t border-slate-100">
                          <div className="bg-[#1677FF] text-white py-3.5 rounded-xl text-center font-bold text-base shadow-lg shadow-blue-500/25 cursor-pointer hover:bg-blue-600 hover:scale-[1.02] active:scale-[0.98] transition-all">
                            上传维修照片
                          </div>
                          <div className="flex gap-3">
                             <div className="flex-1 bg-slate-50 text-slate-600 py-3 rounded-xl text-center font-medium text-xs border border-slate-100 hover:bg-slate-100 cursor-pointer transition-colors">
                               转单申请
                             </div>
                             <div className="flex-1 bg-slate-50 text-slate-600 py-3 rounded-xl text-center font-medium text-xs border border-slate-100 hover:bg-slate-100 cursor-pointer transition-colors">
                               需要协助
                             </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
            
             {/* Feature 3 */}
            <FadeIn direction="right">
              <div className="flex flex-col lg:flex-row items-center gap-24">
                <div className="lg:w-1/2 space-y-8">
                  <div className="w-14 h-14 rounded-xl bg-green-100 text-green-600 flex items-center justify-center">
                    <Settings size={28} />
                  </div>
                  <h3 className="text-4xl font-bold text-slate-900 leading-tight">备件库存管理，<br />以换代修更高效</h3>
                  <p className="text-xl text-slate-600 leading-relaxed">
                    关联备件库存系统，工程师现场可查询备件库存并申请领用。支持个人库、网点库、总库多级管理，自动统计备件消耗与成本。
                  </p>
                  <ul className="space-y-4 pt-4">
                    {["移动端备件查询与申请", "旧件回收管理", "服务成本自动核算"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-700 text-lg">
                        <CheckCircle2 size={20} className="text-green-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:w-1/2">
                   <div className="relative w-full bg-white rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-slate-100 overflow-hidden p-8">
                     <div className="flex items-center justify-between mb-8">
                       <div className="flex items-center gap-4">
                         <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-green-600">
                           <Package size={24} />
                         </div>
                         <div>
                           <div className="text-lg font-bold text-slate-800">备件库存查询</div>
                           <div className="text-sm text-slate-400">北京·总仓</div>
                         </div>
                       </div>
                       <div className="px-4 py-1.5 bg-green-50 rounded-full text-sm font-medium text-green-600">库存充足</div>
                     </div>
                     
                     <div className="space-y-6">
                       {[
                         { name: "高压电机组件", id: "PJ-8802", stock: 85, total: 100 },
                         { name: "精密传感器", id: "PJ-2201", stock: 12, total: 100 },
                         { name: "控制主板 V2", id: "PJ-9932", stock: 45, total: 100 },
                       ].map((item, i) => (
                         <div key={i} className="space-y-3">
                           <div className="flex justify-between text-base">
                             <span className="font-medium text-slate-700">{item.name}</span>
                             <span className={`font-bold ${item.stock < 20 ? 'text-red-500' : 'text-slate-600'}`}>{item.stock}件</span>
                           </div>
                           <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden">
                             <motion.div 
                               initial={{ width: 0 }}
                               whileInView={{ width: `${(item.stock / item.total) * 100}%` }}
                               transition={{ duration: 1, delay: i * 0.2 }}
                               className={`h-full rounded-full ${item.stock < 20 ? 'bg-red-500' : 'bg-green-500'}`}
                             />
                           </div>
                         </div>
                       ))}
                     </div>
                     
                     <div className="mt-8 pt-6 border-t border-slate-50 flex gap-4">
                       <button className="flex-1 py-3 bg-slate-50 hover:bg-slate-100 text-slate-600 text-base font-medium rounded-xl transition-colors">调拨申请</button>
                       <button className="flex-1 py-3 bg-[#1677FF] hover:bg-blue-600 text-white text-base font-medium rounded-xl transition-colors shadow-lg shadow-blue-500/20">立即领用</button>
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
              提升服务口碑，从现在开始
            </h2>
            <p className="text-blue-100 text-xl mb-12 max-w-2xl mx-auto">
              让每一次服务都成为下一次成交的开始。
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
