import {
  ArrowRight,
  CheckCircle2,
  BarChart3,
  Utensils,
  Smartphone,
  ShoppingBag,
  Clock,
  Users,
  Zap,
  Bike,
  QrCode,
  FileText
} from 'lucide-react';

import FadeIn from '@/components/FadeIn';
import NumberTicker from '@/components/NumberTicker';

export default function Catering() {
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
                  <span className="text-sm font-semibold text-[#1677FF] tracking-wide">餐饮数字化经营引擎</span>
                </div>
              </FadeIn>

              <FadeIn delay={0.2} direction="up">
                <h1 className="text-5xl lg:text-6xl font-bold text-[#000000E0] leading-[1.15] tracking-tight">
                  智慧餐饮，<br />
                  <span className="text-[#1677FF]">扫码点餐与外卖接单</span>
                </h1>
              </FadeIn>

              <FadeIn delay={0.3} direction="up">
                <p className="text-lg text-slate-500 leading-relaxed max-w-xl">
                  打通堂食、外卖、会员、库存全链路。通过数字化手段提升翻台率，降低人力成本，让每一家餐厅都能高效盈利。
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
                    {/* Top Stats */}
                    <div className="flex gap-4">
                        <div className="flex-1 bg-orange-50 p-4 rounded-xl border border-orange-100">
                            <div className="text-xs text-orange-600 font-bold mb-1">今日营业额</div>
                            <div className="text-2xl font-bold text-slate-800">¥ 8,540</div>
                        </div>
                         <div className="flex-1 bg-blue-50 p-4 rounded-xl border border-blue-100">
                            <div className="text-xs text-blue-600 font-bold mb-1">订单数</div>
                            <div className="text-2xl font-bold text-slate-800">128</div>
                        </div>
                    </div>

                    {/* Order List */}
                    <div className="bg-white rounded-xl border border-slate-100 p-5 shadow-sm">
                       <div className="flex justify-between items-center mb-4">
                         <div className="text-sm font-bold text-slate-800">实时订单</div>
                         <div className="text-xs text-slate-400">更新于 12:30</div>
                       </div>
                       <div className="space-y-3">
                           <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg border-l-4 border-orange-400">
                               <div>
                                   <div className="font-bold text-slate-700 text-sm">A05号桌 <span className="font-normal text-xs text-slate-500">(堂食)</span></div>
                                   <div className="text-xs text-slate-400 mt-1">红烧肉, 宫保鸡丁...</div>
                               </div>
                               <div className="text-right">
                                   <div className="font-bold text-slate-800">¥ 128</div>
                                   <div className="text-[10px] text-orange-500 bg-orange-100 px-1.5 py-0.5 rounded inline-block mt-1">制作中</div>
                               </div>
                           </div>
                           <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg border-l-4 border-blue-400">
                               <div>
                                   <div className="font-bold text-slate-700 text-sm">#8022 <span className="font-normal text-xs text-slate-500">(美团)</span></div>
                                   <div className="text-xs text-slate-400 mt-1">麻婆豆腐, 米饭...</div>
                               </div>
                               <div className="text-right">
                                   <div className="font-bold text-slate-800">¥ 35</div>
                                   <div className="text-[10px] text-blue-500 bg-blue-100 px-1.5 py-0.5 rounded inline-block mt-1">待配送</div>
                               </div>
                           </div>
                           <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg border-l-4 border-green-400">
                               <div>
                                   <div className="font-bold text-slate-700 text-sm">C02号桌 <span className="font-normal text-xs text-slate-500">(堂食)</span></div>
                                   <div className="text-xs text-slate-400 mt-1">水煮鱼...</div>
                               </div>
                               <div className="text-right">
                                   <div className="font-bold text-slate-800">¥ 88</div>
                                   <div className="text-[10px] text-green-500 bg-green-100 px-1.5 py-0.5 rounded inline-block mt-1">已完成</div>
                               </div>
                           </div>
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
              { value: "30%", label: "翻台率提升", icon: Clock },
              { value: "50%", label: "人力成本降低", icon: Users },
              { value: "40%", label: "会员复购率", icon: Users },
              { value: "20%", label: "营业额增长", icon: BarChart3 },
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
                餐饮经营难题
              </h2>
              <p className="text-slate-500 text-lg">传统餐饮模式下，效率低下且营销困难</p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "高峰期点餐慢",
                desc: "用餐高峰期服务员忙不过来，顾客排队点餐体验差，容易流失。",
                icon: Clock
              },
              {
                title: "外卖接单混乱",
                desc: "美团、饿了么多平台接单，需要在不同设备间切换，容易漏单错单。",
                icon: ShoppingBag
              },
              {
                title: "顾客留存难",
                desc: "顾客吃完就走，无法沉淀为会员，缺乏有效的二次营销手段。",
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
                    <QrCode size={24} />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">扫码点餐小程序，<br />释放前厅人力</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    顾客落座扫码即可点餐、加菜、结账。支持多人同时点餐、预点餐。大幅缩短点餐时间，提升翻台率，减少服务员工作量。
                  </p>
                  <ul className="space-y-3 pt-2">
                    {["桌台二维码管理", "多人同步点餐", "智能推荐菜品"].map((item, i) => (
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
                        <QrCode size={64} className="text-slate-200" />
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
                    <Bike size={24} />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">外卖聚合接单，<br />一站式管理</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    对接美团、饿了么等主流外卖平台。一个后台统一管理所有订单、菜品、库存。支持自动接单、自动打印小票，告别多设备手忙脚乱。
                  </p>
                  <ul className="space-y-3 pt-2">
                    {["多平台订单统一处理", "库存自动同步", "经营数据聚合分析"].map((item, i) => (
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
                        <Bike size={64} className="text-slate-200" />
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
                    <Users size={24} />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">会员精准营销，<br />提升复购率</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    支付即会员。建立会员等级积分体系，支持储值、优惠券、生日关怀等多种营销玩法。通过数据分析进行精准触达，唤醒沉睡顾客。
                  </p>
                  <ul className="space-y-3 pt-2">
                    {["支付后自动关注", "会员储值营销", "电子优惠券发放"].map((item, i) => (
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
                        <Users size={64} className="text-slate-200" />
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
              让餐厅经营更简单
            </h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
              助力 10000+ 餐饮门店实现数字化升级。
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
