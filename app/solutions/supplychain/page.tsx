import * as motion from "framer-motion/client";
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
  RefreshCw,
  ClipboardCheck,
  AlertCircle,
  Wallet,
  Building2,
  PieChart
} from 'lucide-react';

import FadeIn from '@/components/FadeIn';
import NumberTicker from '@/components/NumberTicker';
import CtaSection from '@/components/ui/CtaSection';
import FeatureGrid from '@/components/ui/FeatureGrid';

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
            <motion.div
              className="lg:w-1/2 relative"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
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
            </motion.div>
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

          <div className="mb-16">
            <FadeIn direction="up">
              <FeatureGrid
                items={[
                  {
                    title: "库存积压/缺货",
                    desc: "库存数据不准，热销品缺货导致客户流失，滞销品积压占用大量资金。",
                    icon: <Package size={28} />
                  },
                  {
                    title: "账实不符",
                    desc: "手工记账容易出错，仓库实物与系统账面数据对不上，每次盘点都是糊涂账。",
                    icon: <FileText size={28} />
                  },
                  {
                    title: "利润核算难",
                    desc: "采购成本波动大，费用分摊复杂，老板不知道每笔订单、每个商品到底赚了多少钱。",
                    icon: <CreditCard size={28} />
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
      <section className="py-24 bg-[#F5F7FA]">
        <div className="container mx-auto px-6">
          <div className="space-y-32">
            {/* Feature 1: Purchase & Sales Loop */}
            <FadeIn direction="right">
              <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                <div className="lg:w-1/2 space-y-6">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#1677FF] flex items-center justify-center border border-blue-100">
                    <Truck size={28} />
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">采购销售闭环，<br />业务流程标准化</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    从采购申请、订单、入库到销售报价、订单、出库，全流程在线流转。支持多级审批，业务数据自动关联，可追溯。
                  </p>
                  <ul className="space-y-4 pt-4">
                    {["一键生成采购/销售合同", "历史价格查询", "信用额度管控"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-700">
                        <CheckCircle2 size={20} className="text-[#1677FF] shrink-0" />
                        <span className="font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:w-1/2 flex justify-center lg:justify-end">
                  {/* Purchase Order Card */}
                  <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
                      {/* Header */}
                      <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
                          <div className="flex items-center gap-2">
                              <FileText size={18} className="text-blue-600"/>
                              <span className="font-bold text-slate-700">采购订单 #PO-20231201</span>
                          </div>
                          <div className="px-2 py-1 rounded text-[10px] bg-blue-100 text-blue-600 font-bold">审批通过</div>
                      </div>

                      {/* Process Steps */}
                      <div className="px-6 py-6 border-b border-slate-100">
                          <div className="flex items-center justify-between relative">
                              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -z-10"></div>
                              {[
                                  { label: "提交订单", active: true },
                                  { label: "主管审批", active: true },
                                  { label: "财务付款", active: true },
                                  { label: "仓库入库", active: false }
                              ].map((step, i) => (
                                  <div key={i} className="flex flex-col items-center bg-white px-1">
                                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold mb-2 border-2 ${step.active ? 'bg-blue-600 border-blue-600 text-white' : 'bg-white border-slate-200 text-slate-300'}`}>
                                          {step.active ? <CheckCircle2 size={14}/> : i + 1}
                                      </div>
                                      <div className={`text-[10px] ${step.active ? 'text-slate-700 font-bold' : 'text-slate-400'}`}>{step.label}</div>
                                  </div>
                              ))}
                          </div>
                      </div>

                      {/* Item List */}
                      <div className="p-4 bg-slate-50/30">
                          <div className="space-y-3">
                              {[
                                  { name: "高性能服务器芯片 X90", qty: "500", price: "¥ 1,200", total: "¥ 600,000" },
                                  { name: "工业级存储模块 2TB", qty: "200", price: "¥ 850", total: "¥ 170,000" }
                              ].map((item, i) => (
                                  <div key={i} className="bg-white p-3 rounded-xl border border-slate-100 flex justify-between items-center shadow-sm">
                                      <div>
                                          <div className="text-sm font-bold text-slate-800">{item.name}</div>
                                          <div className="text-xs text-slate-500 mt-1">数量: {item.qty} | 单价: {item.price}</div>
                                      </div>
                                      <div className="text-sm font-mono font-bold text-slate-700">{item.total}</div>
                                  </div>
                              ))}
                          </div>
                          <div className="mt-4 flex justify-between items-center px-2">
                              <div className="text-xs text-slate-500">共 700 件商品</div>
                              <div className="text-sm font-bold text-slate-800">总计: <span className="text-blue-600">¥ 770,000</span></div>
                          </div>
                      </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Feature 2: Multi-warehouse */}
            <FadeIn direction="left">
              <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24">
                <div className="lg:w-1/2 space-y-6">
                  <div className="w-14 h-14 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center border border-orange-100">
                    <Package size={28} />
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">多仓库智能管理，<br />库存实时精准</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    支持多仓库、多货位管理。实时更新库存数量，支持调拨、盘点、组装拆卸。智能预警上下限，科学建议补货量。
                  </p>
                  <ul className="space-y-4 pt-4">
                    {["批次号/序列号追踪", "保质期预警管理", "库存成本自动核算"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-700">
                        <CheckCircle2 size={20} className="text-orange-500 shrink-0" />
                        <span className="font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:w-1/2 flex justify-center lg:justify-start">
                   {/* Warehouse Card */}
                   <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
                       <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                           <div>
                               <div className="text-lg font-bold text-slate-800">库存分布概览</div>
                               <div className="text-xs text-slate-400">全国 5 大分仓实时数据</div>
                           </div>
                           <Building2 className="text-slate-300" size={24}/>
                       </div>
                       <div className="p-6 space-y-6">
                           {[
                               { name: "华东总仓 (上海)", stock: "85%", count: "12,450", status: "充足", color: "bg-blue-500" },
                               { name: "华南分仓 (深圳)", stock: "45%", count: "4,200", status: "正常", color: "bg-green-500" },
                               { name: "华北分仓 (北京)", stock: "15%", count: "850", status: "预警", color: "bg-red-500" },
                           ].map((wh, i) => (
                               <div key={i}>
                                   <div className="flex justify-between items-end mb-2">
                                       <div className="flex items-center gap-2">
                                           <div className={`w-2 h-2 rounded-full ${wh.color}`}></div>
                                           <span className="text-sm font-bold text-slate-700">{wh.name}</span>
                                       </div>
                                       <div className="text-xs text-slate-500">库存量: <span className="text-slate-900 font-bold">{wh.count}</span></div>
                                   </div>
                                   <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                                       <div className={`h-full rounded-full ${wh.color}`} style={{ width: wh.stock }}></div>
                                   </div>
                                   {wh.status === "预警" && (
                                       <div className="mt-2 flex items-center gap-1.5 text-[10px] text-red-500 bg-red-50 w-fit px-2 py-1 rounded">
                                           <AlertCircle size={10}/>
                                           库存不足，建议立即补货
                                       </div>
                                   )}
                               </div>
                           ))}
                       </div>
                       <div className="bg-slate-50 px-6 py-4 flex justify-between items-center text-xs">
                           <span className="text-slate-500">库存总货值</span>
                           <span className="font-bold text-slate-800 text-base">¥ 12,450,800</span>
                       </div>
                   </div>
                </div>
              </div>
            </FadeIn>
            
             {/* Feature 3: Finance */}
            <FadeIn direction="right">
              <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                <div className="lg:w-1/2 space-y-6">
                  <div className="w-14 h-14 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center border border-green-100">
                    <Wallet size={28} />
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">业财一体化，<br />经营利润一本账</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    业务单据自动生成财务凭证。采购入库自动产生应付，销售出库自动产生应收。实时核算销售毛利，老板随时查看经营报表。
                  </p>
                  <ul className="space-y-4 pt-4">
                    {["应收应付智能对账", "费用分摊与成本核算", "资产负债表/利润表自动生成"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-700">
                        <CheckCircle2 size={20} className="text-green-500 shrink-0" />
                        <span className="font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:w-1/2 flex justify-center lg:justify-end">
                   {/* Finance Card */}
                   <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
                       <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                           <div className="flex items-center gap-3">
                               <div className="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center">
                                   <PieChart size={20}/>
                               </div>
                               <div>
                                   <div className="text-sm font-bold text-slate-800">本月经营概况</div>
                                   <div className="text-[10px] text-slate-400">2023年12月</div>
                               </div>
                           </div>
                           <div className="text-green-600 bg-green-50 px-3 py-1 rounded-full text-xs font-bold">盈利</div>
                       </div>
                       
                       <div className="grid grid-cols-2 divide-x divide-slate-100 border-b border-slate-100">
                           <div className="p-6 text-center">
                               <div className="text-xs text-slate-500 mb-1">销售收入</div>
                               <div className="text-xl font-bold text-slate-800">¥ 845,200</div>
                               <div className="text-[10px] text-green-500 mt-1">↑ 12% 环比</div>
                           </div>
                           <div className="p-6 text-center">
                               <div className="text-xs text-slate-500 mb-1">采购成本</div>
                               <div className="text-xl font-bold text-slate-800">¥ 524,100</div>
                               <div className="text-[10px] text-slate-400 mt-1">占比 62%</div>
                           </div>
                       </div>

                       <div className="p-6 space-y-4">
                           <div className="flex justify-between items-center p-3 bg-slate-50 rounded-xl">
                               <div className="flex items-center gap-3">
                                   <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-blue-500">
                                       <CreditCard size={16}/>
                                   </div>
                                   <span className="text-sm font-bold text-slate-700">毛利润</span>
                               </div>
                               <div className="text-right">
                                   <div className="font-bold text-slate-800">¥ 321,100</div>
                                   <div className="text-[10px] text-slate-400">毛利率 38%</div>
                               </div>
                           </div>
                           <div className="flex justify-between items-center p-3 bg-slate-50 rounded-xl">
                               <div className="flex items-center gap-3">
                                   <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-orange-500">
                                       <Wallet size={16}/>
                                   </div>
                                   <span className="text-sm font-bold text-slate-700">净利润</span>
                               </div>
                               <div className="text-right">
                                   <div className="font-bold text-slate-800">¥ 186,500</div>
                                   <div className="text-[10px] text-slate-400">净利率 22%</div>
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
      <CtaSection
        title="开启供应链协同新时代"
        description={
          <>
            立即体验数字化供应链管理系统，提升协同效率。
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
