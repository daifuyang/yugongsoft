import {
  ArrowRight,
  CheckCircle2,
  BarChart3,
  ShoppingBag,
  Smartphone,
  Globe,
  Share2,
  Users,
  TrendingUp,
  Package,
  CreditCard,
  FileText
} from 'lucide-react';

import FadeIn from '@/components/FadeIn';
import NumberTicker from '@/components/NumberTicker';

export default function Ecommerce() {
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
                  <span className="text-sm font-semibold text-[#1677FF] tracking-wide">全渠道电商解决方案</span>
                </div>
              </FadeIn>

              <FadeIn delay={0.2} direction="up">
                <h1 className="text-5xl lg:text-6xl font-bold text-[#000000E0] leading-[1.15] tracking-tight">
                  数字化电商，<br />
                  <span className="text-[#1677FF]">私域商城与分销裂变</span>
                </h1>
              </FadeIn>

              <FadeIn delay={0.3} direction="up">
                <p className="text-lg text-slate-500 leading-relaxed max-w-xl">
                  帮助品牌商、零售商快速搭建独立商城。通过社交分销裂变，构建私域流量池，实现销量指数级增长。
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
                    {/* GMV Chart Area */}
                    <div className="bg-white rounded-xl border border-slate-100 p-5 shadow-sm">
                        <div className="flex justify-between items-end mb-4">
                            <div>
                                <div className="text-xs text-slate-400 uppercase tracking-wider">本月 GMV</div>
                                <div className="text-3xl font-bold text-slate-800 mt-1">¥ 1,245,800</div>
                            </div>
                             <div className="px-2 py-1 rounded bg-green-50 text-green-600 text-xs font-bold">+24.5%</div>
                        </div>
                        <div className="flex items-end gap-1 h-24">
                             {[40, 65, 50, 75, 60, 85, 70, 90, 80, 95, 60, 80].map((h, i) => (
                                <div key={i} className="flex-1 bg-[#1677FF] opacity-20 rounded-t-sm" style={{ height: `${h}%` }}></div>
                             ))}
                        </div>
                    </div>
                    
                    {/* Order & User Stats */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-slate-50 p-4 rounded-xl">
                             <div className="flex items-center gap-2 text-slate-500 text-xs mb-2">
                                 <Package size={14} />
                                 待发货订单
                             </div>
                             <div className="text-xl font-bold text-slate-800">156</div>
                        </div>
                         <div className="bg-slate-50 p-4 rounded-xl">
                             <div className="flex items-center gap-2 text-slate-500 text-xs mb-2">
                                 <Users size={14} />
                                 新增分销员
                             </div>
                             <div className="text-xl font-bold text-slate-800">24</div>
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
              { value: "200%", label: "GMV年增长", icon: TrendingUp },
              { value: "45%", label: "复购率", icon: Users },
              { value: "10k+", label: "分销员数量", icon: Share2 },
              { value: "30%", label: "获客成本降低", icon: BarChart3 },
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
                电商运营痛点
              </h2>
              <p className="text-slate-500 text-lg">公域流量越来越贵，私域运营势在必行</p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "平台抽成高",
                desc: "主流电商平台扣点高，广告推广费用贵，商家利润空间被严重压缩。",
                icon: CreditCard
              },
              {
                title: "客户留存难",
                desc: "客户属于平台不属于商家，难以进行二次触达和营销，复购率低。",
                icon: Users
              },
              {
                title: "营销玩法少",
                desc: "传统电商促销手段单一，缺乏社交裂变属性，难以通过口碑传播带来新客。",
                icon: Share2
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
                    <Smartphone size={24} />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">品牌微商城，<br />搭建私域流量阵地</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    3分钟快速搭建属于自己的微信小程序/H5商城。丰富的装修组件，拖拽式操作，无需开发即可拥有媲美大厂的商城体验。
                  </p>
                  <ul className="space-y-3 pt-2">
                    {["数十套行业模板一键套用", "可视化装修编辑器", "支持小程序/H5/PC多端同步"].map((item, i) => (
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
                        <Smartphone size={64} className="text-slate-200" />
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
                    <Share2 size={24} />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">多级分销裂变，<br />让客户帮你卖货</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    基于社交关系的裂变营销。设置灵活的佣金机制，激励老客户、员工、KOL成为分销员，通过朋友圈分享商品，实现低成本获客。
                  </p>
                  <ul className="space-y-3 pt-2">
                    {["二级分销佣金自动结算", "分销员专属推广海报", "团队业绩奖励机制"].map((item, i) => (
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
                        <Share2 size={64} className="text-slate-200" />
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
                    <ShoppingBag size={24} />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">自动化营销，<br />提升转化与客单</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    拼团、秒杀、砍价、满减、优惠券等百种营销玩法。结合用户标签和行为数据，自动化触发营销消息，千人千面。
                  </p>
                  <ul className="space-y-3 pt-2">
                    {["拼团/秒杀等百种营销插件", "新客有礼/复购发券", "智能短信/公众号消息推送"].map((item, i) => (
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
                        <ShoppingBag size={64} className="text-slate-200" />
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
              开启社交电商新时代
            </h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
              立即创建您的品牌商城，抢占私域流量红利。
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
