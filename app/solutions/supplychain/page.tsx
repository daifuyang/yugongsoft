import {
  ArrowRight,
  CheckCircle2,
  BarChart3,
  Truck,
  Package,
  FileText,
  CreditCard,
  Users,
  TrendingUp,
  LayoutGrid,
  Settings,
  RefreshCw
} from 'lucide-react';

import FadeIn from '@/components/FadeIn';
import NumberTicker from '@/components/NumberTicker';

export default function SupplyChain() {
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
                  <span className="text-sm font-semibold text-[#1677FF] tracking-wide">新一代进销存系统</span>
                </div>
              </FadeIn>

              <FadeIn delay={0.2} direction="up">
                <h1 className="text-5xl lg:text-6xl font-bold text-[#000000E0] leading-[1.15] tracking-tight">
                  贸易供应链，<br />
                  <span className="text-[#1677FF]">进销存与财务一体化</span>
                </h1>
              </FadeIn>

              <FadeIn delay={0.3} direction="up">
                <p className="text-lg text-slate-500 leading-relaxed max-w-xl">
                  打通采购、销售、库存、财务全流程。实时掌握库存动态，精准核算经营利润，助力企业实现业财一体化管理。
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
                    {/* Key Metrics */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-slate-50 rounded-xl">
                             <div className="text-xs text-slate-500 mb-1">库存总成本</div>
                             <div className="text-xl font-bold text-slate-800">¥ 4,580,000</div>
                        </div>
                        <div className="p-4 bg-slate-50 rounded-xl">
                             <div className="text-xs text-slate-500 mb-1">本月销售毛利</div>
                             <div className="text-xl font-bold text-slate-800">¥ 865,400</div>
                        </div>
                    </div>

                    {/* Stock Alert Table */}
                    <div className="bg-white rounded-xl border border-slate-100 p-5 shadow-sm">
                       <div className="flex justify-between items-center mb-4">
                         <div className="text-sm font-bold text-slate-800">库存预警</div>
                         <div className="text-xs text-red-500 bg-red-50 px-2 py-1 rounded">3项需补货</div>
                       </div>
                       <table className="w-full text-xs text-left">
                           <thead>
                               <tr className="text-slate-400 border-b border-slate-100">
                                   <th className="pb-2 font-normal">商品名称</th>
                                   <th className="pb-2 font-normal">当前库存</th>
                                   <th className="pb-2 font-normal">预警值</th>
                                   <th className="pb-2 font-normal text-right">状态</th>
                               </tr>
                           </thead>
                           <tbody className="text-slate-700">
                               <tr className="border-b border-slate-50">
                                   <td className="py-3">高端显卡 RTX4090</td>
                                   <td className="py-3 font-bold">5</td>
                                   <td className="py-3">10</td>
                                   <td className="py-3 text-right text-red-500">缺货</td>
                               </tr>
                               <tr className="border-b border-slate-50">
                                   <td className="py-3">智能手环 Pro</td>
                                   <td className="py-3 font-bold">120</td>
                                   <td className="py-3">50</td>
                                   <td className="py-3 text-right text-green-500">充足</td>
                               </tr>
                               <tr>
                                   <td className="py-3">无线降噪耳机</td>
                                   <td className="py-3 font-bold">8</td>
                                   <td className="py-3">15</td>
                                   <td className="py-3 text-right text-red-500">缺货</td>
                               </tr>
                           </tbody>
                       </table>
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
              { value: "50%", label: "库存周转率", icon: RefreshCw },
              { value: "99%", label: "库存准确率", icon: CheckCircle2 },
              { value: "30%", label: "资金占用减少", icon: CreditCard },
              { value: "2h", label: "日均对账节省", icon: Users },
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
                供应链管理难题
              </h2>
              <p className="text-slate-500 text-lg">库存积压资金周转难，账目混乱利润核算难</p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "库存积压/缺货",
                desc: "库存数据不准，热销品缺货导致客户流失，滞销品积压占用大量资金。",
                icon: Package
              },
              {
                title: "账实不符",
                desc: "手工记账容易出错，仓库实物与系统账面数据对不上，每次盘点都是糊涂账。",
                icon: FileText
              },
              {
                title: "利润核算难",
                desc: "采购成本波动大，费用分摊复杂，老板不知道每笔订单、每个商品到底赚了多少钱。",
                icon: CreditCard
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
                    <Truck size={24} />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">采购销售闭环，<br />业务流程标准化</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    从采购申请、订单、入库到销售报价、订单、出库，全流程在线流转。支持多级审批，业务数据自动关联，可追溯。
                  </p>
                  <ul className="space-y-3 pt-2">
                    {["一键生成采购/销售合同", "历史价格查询", "信用额度管控"].map((item, i) => (
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
                        <Truck size={64} className="text-slate-200" />
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
                    <Package size={24} />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">多仓库智能管理，<br />库存实时精准</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    支持多仓库、多货位管理。实时更新库存数量，支持调拨、盘点、组装拆卸。智能预警上下限，科学建议补货量。
                  </p>
                  <ul className="space-y-3 pt-2">
                    {["批次号/序列号追踪", "保质期预警管理", "库存成本自动核算(移动加权平均)"].map((item, i) => (
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
                        <Package size={64} className="text-slate-200" />
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
                    <CreditCard size={24} />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">业财一体化，<br />经营利润一本账</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    业务单据自动生成财务凭证。采购入库自动产生应付，销售出库自动产生应收。实时核算销售毛利，老板随时查看经营报表。
                  </p>
                  <ul className="space-y-3 pt-2">
                    {["应收应付智能对账", "费用分摊与成本核算", "资产负债表/利润表自动生成"].map((item, i) => (
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
                        <CreditCard size={64} className="text-slate-200" />
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
              提升供应链竞争力
            </h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
              已有 3000+ 贸易企业选择我们，实现降本增效。
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
