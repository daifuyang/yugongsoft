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
  Smartphone
} from 'lucide-react';

import FadeIn from '@/components/FadeIn';
import NumberTicker from '@/components/NumberTicker';

export default function Edu() {
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
                  <span className="text-sm font-semibold text-[#1677FF] tracking-wide">教培机构数字化专家</span>
                </div>
              </FadeIn>

              <FadeIn delay={0.2} direction="up">
                <h1 className="text-5xl lg:text-6xl font-bold text-[#000000E0] leading-[1.15] tracking-tight">
                  智慧教育，<br />
                  <span className="text-[#1677FF]">培训机构教务管理</span>
                </h1>
              </FadeIn>

              <FadeIn delay={0.3} direction="up">
                <p className="text-lg text-slate-500 leading-relaxed max-w-xl">
                  专为教培机构打造的运营管理平台。涵盖招生、排课、消课、家校互通、财务核算全场景，助力机构降本增效，口碑业绩双增长。
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
                    {/* Course Schedule Grid */}
                    <div className="bg-white rounded-xl border border-slate-100 p-5 shadow-sm">
                       <div className="flex justify-between items-center mb-4">
                         <div className="text-sm font-bold text-slate-800">今日课表 (2023-10-24)</div>
                         <div className="flex gap-2 text-xs">
                           <span className="px-2 py-1 bg-blue-50 text-blue-600 rounded">少儿编程</span>
                           <span className="px-2 py-1 bg-orange-50 text-orange-600 rounded">机器人</span>
                         </div>
                       </div>
                       <div className="grid grid-cols-4 gap-2 text-xs text-center">
                         <div className="p-2 bg-slate-50 rounded text-slate-500">09:00</div>
                         <div className="col-span-3 p-2 bg-blue-100 text-blue-700 rounded border border-blue-200 text-left pl-3">
                           <div className="font-bold">Python入门班 - A教室</div>
                           <div className="text-blue-500 text-[10px]">张老师 | 12人</div>
                         </div>
                         
                         <div className="p-2 bg-slate-50 rounded text-slate-500">10:30</div>
                         <div className="col-span-3 p-2 bg-green-100 text-green-700 rounded border border-green-200 text-left pl-3">
                           <div className="font-bold">乐高搭建基础 - B教室</div>
                           <div className="text-green-500 text-[10px]">李老师 | 8人</div>
                         </div>

                          <div className="p-2 bg-slate-50 rounded text-slate-500">14:00</div>
                          <div className="col-span-3 p-2 bg-orange-100 text-orange-700 rounded border border-orange-200 text-left pl-3">
                           <div className="font-bold">C++竞赛集训 - A教室</div>
                           <div className="text-orange-500 text-[10px]">王教授 | 15人</div>
                         </div>
                       </div>
                    </div>
                    
                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-slate-50 rounded-xl">
                            <div className="text-xs text-slate-500 mb-1">今日消课金额</div>
                            <div className="text-xl font-bold text-slate-800">¥ 12,800</div>
                        </div>
                        <div className="p-4 bg-slate-50 rounded-xl">
                            <div className="text-xs text-slate-500 mb-1">新增试听学员</div>
                            <div className="text-xl font-bold text-slate-800">8 <span className="text-xs font-normal text-green-600">+2</span></div>
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
              { value: "80%", label: "排课效率提升", icon: Calendar },
              { value: "30%", label: "续费率增长", icon: Users },
              { value: "0", label: "课消财务误差", icon: CreditCard },
              { value: "100%", label: "家校满意度", icon: MessageCircle },
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
                教培机构管理痛点
              </h2>
              <p className="text-slate-500 text-lg">告别繁琐的Excel排课和手工记账，专注于教学质量</p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
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
                    <Calendar size={24} />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">智能排课引擎，<br />资源利用最大化</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    支持一对一、班课等多种教学模式。自动检测老师、教室时间冲突，一键生成课表。支持临时调课、代课，自动通知家长和老师。
                  </p>
                  <ul className="space-y-3 pt-2">
                    {["可视化排课界面", "冲突自动检测预警", "排课变更自动通知"].map((item, i) => (
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
                        <Calendar size={64} className="text-slate-200" />
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
                    <BookOpen size={24} />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">学员全生命周期管理，<br />提升转化与留存</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    从线索录入、试听安排、报名缴费到分班排课、课后反馈、续费提醒，全流程数字化管理。360° 学员画像，助力精准营销。
                  </p>
                  <ul className="space-y-3 pt-2">
                    {["招生线索跟进", "电子合同与收据", "成长档案记录"].map((item, i) => (
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
                        <Users size={64} className="text-slate-200" />
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
                    <MessageCircle size={24} />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">家校互通小程序，<br />服务体验升级</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    家长端小程序可查看课表、接收上课提醒、查看课堂点评和作业、在线请假、在线缴费续费。增强家校粘性，提升服务满意度。
                  </p>
                  <ul className="space-y-3 pt-2">
                    {["课后点评图文/视频", "作业在线提交批改", "积分商城兑换"].map((item, i) => (
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
                        <Smartphone size={64} className="text-slate-200" />
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
              打造一流的教培机构
            </h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
              已有 5000+ 机构选择我们，实现数字化转型。
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
