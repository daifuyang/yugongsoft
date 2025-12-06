import {
  ArrowRight,
  CheckCircle2,
  BarChart3,
  ClipboardList,
  Smartphone,
  MessageSquare,
  Clock,
  ShieldCheck,
  Zap,
  Users,
  Settings,
  MapPin,
  Wrench,
  FileText
} from 'lucide-react';

import FadeIn from '@/components/FadeIn';
import NumberTicker from '@/components/NumberTicker';

export default function WorkOrder() {
  return (
    <main className="bg-white font-sans selection:bg-[#1677FF] selection:text-white">

      {/* --- Hero Section --- */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-[#F5F7FA]">
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
                  <span className="text-sm font-semibold text-[#1677FF] tracking-wide">智能售后运维系统</span>
                </div>
              </FadeIn>

              <FadeIn delay={0.2} direction="up">
                <h1 className="text-5xl lg:text-6xl font-bold text-[#000000E0] leading-[1.15] tracking-tight">
                  智能服务工单，<br />
                  <span className="text-[#1677FF]">售后运维高效流转</span>
                </h1>
              </FadeIn>

              <FadeIn delay={0.3} direction="up">
                <p className="text-lg text-slate-500 leading-relaxed max-w-xl">
                  连接客户、客服与现场工程师。从报修接入、智能派单到现场服务的全流程数字化闭环，提升响应速度与客户满意度。
                </p>
              </FadeIn>

              <FadeIn delay={0.4} direction="up">
                <div className="flex flex-wrap gap-4 pt-4">
                  <button className="btn bg-[#1677FF] hover:bg-[#0958D9] text-white px-8 py-4 h-auto rounded-xl font-semibold text-lg shadow-lg shadow-blue-500/30 border-none transition-all hover:-translate-y-1 flex items-center gap-2">
                    免费预约演示
                    <ArrowRight size={18} />
                  </button>
                  <button className="btn bg-white hover:bg-slate-50 text-slate-600 border border-slate-200 px-8 py-4 h-auto rounded-xl font-semibold text-lg shadow-sm hover:shadow-md transition-all flex items-center gap-2">
                    <FileText size={18} />
                    查看解决方案
                  </button>
                </div>
              </FadeIn>
            </div>

            {/* Right: Dashboard Mockup */}
            <div className="lg:w-1/2 relative">
              <FadeIn delay={0.2} direction="left" duration={0.8}>
                <div className="relative w-full bg-white rounded-xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-slate-100 overflow-hidden">
                  <div className="h-10 border-b border-slate-100 bg-slate-50/80 flex items-center px-4 gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
                    </div>
                    <div className="ml-4 h-5 w-32 bg-white rounded border border-slate-100"></div>
                  </div>

                  <div className="p-6 space-y-6">
                    {/* Stats Row */}
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                        <div className="text-xs text-blue-600 font-bold mb-1">待处理工单</div>
                        <div className="text-2xl font-bold text-slate-800">12</div>
                      </div>
                      <div className="bg-orange-50 p-4 rounded-xl border border-orange-100">
                        <div className="text-xs text-orange-600 font-bold mb-1">进行中</div>
                        <div className="text-2xl font-bold text-slate-800">8</div>
                      </div>
                      <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                        <div className="text-xs text-green-600 font-bold mb-1">今日完成</div>
                        <div className="text-2xl font-bold text-slate-800">24</div>
                      </div>
                    </div>

                    {/* Work Order List */}
                    <div className="bg-white rounded-xl border border-slate-100 p-5 shadow-sm">
                      <div className="text-sm font-bold text-slate-800 mb-4 flex justify-between">
                        <span>实时工单监控</span>
                        <span className="text-[#1677FF] text-xs font-normal cursor-pointer">查看全部</span>
                      </div>
                      <div className="space-y-3">
                        {[
                          { id: "WO-20231001", type: "设备维修", status: "待派单", time: "5分钟前", priority: "high" },
                          { id: "WO-20231002", type: "定期巡检", status: "进行中", time: "30分钟前", priority: "normal" },
                          { id: "WO-20231003", type: "安装调试", status: "已完成", time: "1小时前", priority: "normal" },
                        ].map((item, i) => (
                          <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                            <div className="flex items-center gap-3">
                              <div className={`w-2 h-2 rounded-full ${item.priority === 'high' ? 'bg-red-500' : 'bg-blue-500'}`}></div>
                              <div>
                                <div className="text-sm font-medium text-slate-700">{item.type} <span className="text-slate-400 text-xs">#{item.id}</span></div>
                              </div>
                            </div>
                            <div className={`text-xs px-2 py-1 rounded ${
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
                </div>
              </FadeIn>
              
              {/* Decorative Background */}
              <div className="absolute -z-10 top-10 -right-10 w-full h-full bg-blue-50 rounded-xl opacity-50 scale-95"></div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Stats Banner --- */}
      <section className="bg-white border-b border-slate-100">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-100">
            {[
              { value: "45%", label: "响应速度提升", icon: Zap },
              { value: "98%", label: "SLA达成率", icon: CheckCircle2 },
              { value: "30%", label: "服务成本降低", icon: BarChart3 },
              { value: "99%", label: "客户满意度", icon: Users },
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

      {/* --- Pain Points --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <FadeIn direction="up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-[#000000E0] mb-4">
                解决售后服务难题
              </h2>
              <p className="text-slate-500 text-lg">告别混乱的电话报修和纸质工单，让服务更加专业</p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
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

      {/* --- Core Features --- */}
      <section className="py-24 bg-[#F5F7FA]">
        <div className="container mx-auto px-6">
          <div className="space-y-24">
            {/* Feature 1 */}
            <FadeIn direction="right">
              <div className="flex flex-col lg:flex-row items-center gap-16">
                <div className="lg:w-1/2 space-y-6">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 text-[#1677FF] flex items-center justify-center">
                    <ClipboardList size={24} />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">全渠道统一接入，<br />智能自动派单</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    整合电话、微信公众号、小程序、网页等多渠道报修请求。内置智能派单引擎，根据工程师技能、位置、忙闲状态自动最优分配，或开启抢单模式。
                  </p>
                  <ul className="space-y-3 pt-2">
                    {["微信一键扫码报修", "基于LBS的就近派单", "SLA超时自动升级预警"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-700">
                        <CheckCircle2 size={18} className="text-[#1677FF]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:w-1/2">
                  <div className="relative bg-white rounded-2xl p-2 shadow-2xl shadow-slate-200/50 border border-white">
                    <div className="aspect-[4/3] bg-slate-50 rounded-xl flex items-center justify-center border border-slate-100">
                        <ClipboardList size={64} className="text-slate-200" />
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Feature 2 */}
            <FadeIn direction="left">
              <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
                <div className="lg:w-1/2 space-y-6">
                  <div className="w-12 h-12 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center">
                    <Smartphone size={24} />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">移动端现场服务，<br />标准化作业流程</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    工程师通过手机APP接单、签到、记录故障、拍照上传、在线报价、电子签名。规范现场服务动作，确保服务质量一致性。
                  </p>
                  <ul className="space-y-3 pt-2">
                    {["现场定位签到", "标准SOP作业指引", "客户电子签名确认"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-700">
                        <CheckCircle2 size={18} className="text-orange-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:w-1/2">
                   <div className="relative bg-white rounded-2xl p-2 shadow-2xl shadow-slate-200/50 border border-white">
                    <div className="aspect-[4/3] bg-slate-50 rounded-xl flex items-center justify-center border border-slate-100">
                        <Smartphone size={64} className="text-slate-200" />
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
            
             {/* Feature 3 */}
            <FadeIn direction="right">
              <div className="flex flex-col lg:flex-row items-center gap-16">
                <div className="lg:w-1/2 space-y-6">
                  <div className="w-12 h-12 rounded-lg bg-green-100 text-green-600 flex items-center justify-center">
                    <Settings size={24} />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">备件库存管理，<br />以换代修更高效</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    关联备件库存系统，工程师现场可查询备件库存并申请领用。支持个人库、网点库、总库多级管理，自动统计备件消耗与成本。
                  </p>
                  <ul className="space-y-3 pt-2">
                    {["移动端备件查询与申请", "旧件回收管理", "服务成本自动核算"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-700">
                        <CheckCircle2 size={18} className="text-green-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:w-1/2">
                   <div className="relative bg-white rounded-2xl p-2 shadow-2xl shadow-slate-200/50 border border-white">
                    <div className="aspect-[4/3] bg-slate-50 rounded-xl flex items-center justify-center border border-slate-100">
                        <Wrench size={64} className="text-slate-200" />
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

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
              提升服务口碑，从现在开始
            </h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
              让每一次服务都成为下一次成交的开始。
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
