import * as motion from "framer-motion/client";

import {
  ArrowRight,
  CheckCircle2,
  BarChart3,
  Utensils,
  ShoppingBag,
  Clock,
  Users,
  Zap,
  Bike,
  QrCode,
  FileText,
  ChevronRight,
  ChevronLeft,
  Plus,
  Search,
  MoreHorizontal,
  Wallet,
  Gift
} from 'lucide-react';

import FadeIn from '@/components/FadeIn';
import NumberTicker from '@/components/NumberTicker';
import CtaSection from '@/components/ui/CtaSection';

import FeatureGrid from '@/components/ui/FeatureGrid';
import PhoneMockup from '@/components/ui/PhoneMockup';

export default function Catering() {
  return (
    <main className="bg-white font-sans selection:bg-[#1677FF] selection:text-white">

      {/* --- Hero Section --- */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-[#F5F7FA]">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-[600px] bg-gradient-to-b from-blue-50/80 to-transparent"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1677ff05_1px,transparent_1px),linear-gradient(to_bottom,#1677ff05_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

            {/* Left: Value Proposition */}
            <div className="lg:w-1/2 space-y-8">
              <FadeIn delay={0.1} direction="up">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-blue-100 shadow-sm shadow-blue-100/50 hover:shadow-blue-200 hover:scale-105 transition-all duration-300 cursor-default">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1677FF] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#1677FF]"></span>
                  </span>
                  <span className="text-sm font-semibold text-[#1677FF] tracking-wide">餐饮数字化经营引擎</span>
                </div>
              </FadeIn>

              <FadeIn delay={0.2} direction="up">
                <h1 className="text-5xl lg:text-7xl font-bold text-[#000000E0] leading-[1.1] tracking-tight">
                  智慧餐饮，<br />
                  <span className="text-[#1677FF] inline-block relative">
                    扫码点餐
                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-blue-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                      <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                    </svg>
                  </span>
                  与外卖接单
                </h1>
              </FadeIn>

              <FadeIn delay={0.3} direction="up">
                <p className="text-lg text-slate-500 leading-relaxed max-w-xl">
                  打通堂食、外卖、会员、库存全链路。通过数字化手段提升翻台率，降低人力成本，让每一家餐厅都能高效盈利。
                </p>
              </FadeIn>

              <FadeIn delay={0.4} direction="up">
                <div className="flex flex-wrap gap-4 pt-4">
                  <button className="btn bg-[#1677FF] hover:bg-[#0958D9] text-white px-8 py-4 h-auto rounded-xl font-semibold text-lg shadow-lg shadow-blue-500/30 border-none transition-all hover:-translate-y-1 hover:shadow-blue-500/40 flex items-center gap-2">
                    免费预约演示
                    <ArrowRight size={18} />
                  </button>
                  <button className="btn bg-white hover:bg-slate-50 text-slate-600 border border-slate-200 px-8 py-4 h-auto rounded-xl font-semibold text-lg shadow-sm hover:shadow-md transition-all flex items-center gap-2 hover:-translate-y-1">
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
                {/* Main Container - Scaled Up for Atmosphere */}
                <div className="relative w-full bg-white rounded-2xl shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden transform hover:scale-[1.01] transition-transform duration-500">
                  {/* Header */}
                  <div className="h-14 border-b border-slate-100 bg-slate-50/50 backdrop-blur-sm flex items-center px-6 justify-between">
                    <div className="flex gap-2">
                      <div className="w-3.5 h-3.5 rounded-full bg-red-400"></div>
                      <div className="w-3.5 h-3.5 rounded-full bg-amber-400"></div>
                      <div className="w-3.5 h-3.5 rounded-full bg-green-400"></div>
                    </div>
                    <div className="px-4 py-1.5 bg-white rounded-md border border-slate-200 text-xs text-slate-400 flex items-center gap-2 shadow-sm">
                      <span className="w-2 h-2 rounded-full bg-green-500"></span>
                      yugongsoft.com
                    </div>
                    <div className="w-20"></div>
                  </div>

                  {/* Body */}
                  <div className="p-4 space-y-4 bg-slate-50/30">
                    {/* Stats Row */}
                    <div className="grid grid-cols-3 gap-4">
                      {[
                        { label: "今日营业额", value: "¥ 12,850.00", change: "+12.5%", color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-100" },
                        { label: "实时订单", value: "156", change: "+5.2%", color: "text-orange-600", bg: "bg-orange-50", border: "border-orange-100" },
                        { label: "会员新增", value: "24", change: "+8.1%", color: "text-green-600", bg: "bg-green-50", border: "border-green-100" },
                      ].map((stat, i) => (
                        <div key={i} className={`p-5 rounded-2xl border ${stat.border} ${stat.bg} relative overflow-hidden group`}>
                          <div className="text-sm text-slate-500 mb-2 font-medium">{stat.label}</div>
                          <div className="text-2xl font-bold text-slate-800 tracking-tight">{stat.value}</div>
                          <div className={`text-xs ${stat.color} font-medium mt-2 flex items-center gap-1`}>
                            <Zap size={12} />
                            {stat.change}
                          </div>
                          <div className="absolute -right-6 -bottom-6 opacity-10 group-hover:opacity-20 transition-opacity">
                            <BarChart3 size={80} className={stat.color} />
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Main Content Area */}
                    <div className="flex gap-4">
                      {/* Sidebar */}
                      <div className="w-20 bg-white rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center py-4 gap-4">
                        {[Utensils, ShoppingBag, Users, Wallet].map((Icon, i) => (
                          <div key={i} className={`p-3 rounded-xl cursor-pointer transition-colors ${i === 0 ? 'bg-blue-50 text-blue-600 shadow-sm' : 'text-slate-400 hover:bg-slate-50 hover:text-slate-600'}`}>
                            <Icon size={24} />
                          </div>
                        ))}
                      </div>

                      {/* List */}
                      <div className="flex-1 bg-white rounded-2xl border border-slate-100 shadow-sm p-4">
                        <div className="flex justify-between items-center mb-4">
                          <h3 className="font-bold text-slate-800 text-base">订单列表</h3>
                          <div className="text-xs text-blue-600 bg-blue-50 px-3 py-1.5 rounded-lg cursor-pointer hover:bg-blue-100 transition-colors font-medium">查看全部</div>
                        </div>
                        <div className="space-y-0">
                          {[
                            { id: "#8022", type: "美团", items: "红烧肉, 宫保鸡丁...", price: "¥ 88.00", status: "待配送", statusColor: "text-orange-500 bg-orange-50" },
                            { id: "A05", type: "堂食", items: "清蒸鲈鱼, 米饭...", price: "¥ 128.00", status: "制作中", statusColor: "text-blue-500 bg-blue-50" },
                            { id: "C02", type: "堂食", items: "水煮牛肉...", price: "¥ 56.00", status: "已完成", statusColor: "text-green-500 bg-green-50" },
                          ].map((order, i) => (
                            <div key={i} className="flex items-center justify-between p-4 rounded-xl hover:bg-blue-50 hover:text-blue-60 transition-all group cursor-default">
                              <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500 text-sm font-bold">
                                  {order.type === '美团' ? '外' : '堂'}
                                </div>
                                <div>
                                  <div className="text-base font-bold text-slate-800">{order.id} <span className="text-slate-400 font-normal ml-1 text-xs">| {order.type}</span></div>
                                  <div className="text-sm text-slate-400 truncate max-w-[140px] mt-0.5">{order.items}</div>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="text-base font-bold text-slate-800 font-mono">{order.price}</div>
                                <div className={`text-[10px] px-2 py-1 rounded-md inline-block mt-1 font-medium ${order.statusColor}`}>{order.status}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>

            </motion.div>
          </div>
        </div>
      </section>

      {/* --- Stats Banner --- */}
      <section className="bg-white border-b border-slate-100">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-100">
            {[
              { value: "35%", label: "翻台率提升", icon: Clock },
              { value: "50%", label: "人力成本降低", icon: Users },
              { value: "40%", label: "会员复购率", icon: Users },
              { value: "20%", label: "营业额增长", icon: BarChart3 },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1} direction="up" className="h-full">
                <div className="flex flex-col items-center justify-center text-center px-4 group cursor-default h-full hover:-translate-y-1 transition-transform duration-300">
                  <div className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2 group-hover:text-[#1677FF] transition-colors">
                    <NumberTicker value={item.value} />
                  </div>
                  <div className="text-sm text-slate-500 flex items-center gap-1.5">
                    <item.icon size={14} className="text-slate-400 group-hover:text-[#1677FF] transition-colors" />
                    {item.label}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* --- Pain Points --- */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <FadeIn direction="up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-[#000000E0] mb-4">
                传统餐饮经营的<span className="text-red-500">痛点</span>
              </h2>
              <p className="text-slate-500 text-lg">效率低下、营销困难、数据孤岛，阻碍了餐厅的进一步发展</p>
            </div>
          </FadeIn>

          <div className="mb-16">
            <FadeIn direction="up">
              <FeatureGrid
                items={[
                  {
                    title: "高峰期点餐慢",
                    desc: "用餐高峰期服务员忙不过来，顾客排队点餐体验差，容易流失。",
                    icon: <Clock size={28} />
                  },
                  {
                    title: "外卖接单混乱",
                    desc: "美团、饿了么多平台接单，需要在不同设备间切换，容易漏单错单。",
                    icon: <ShoppingBag size={28} />
                  },
                  {
                    title: "顾客留存难",
                    desc: "顾客吃完就走，无法沉淀为会员，缺乏有效的二次营销手段。",
                    icon: <Users size={28} />
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
      <section className="py-24 bg-[#F5F7FA] overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="space-y-32">

            {/* Feature 1: Scan to Order */}
            <FadeIn direction="right">
              <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                <div className="lg:w-1/2 space-y-6">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 text-[#1677FF] flex items-center justify-center shadow-inner">
                    <QrCode size={24} />
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-slate-900">扫码点餐小程序<br />释放前厅人力</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    顾客落座扫码即可点餐、加菜、结账。支持多人同时点餐、预点餐。大幅缩短点餐时间，提升翻台率，减少服务员工作量。
                  </p>
                  <ul className="space-y-3 pt-4">
                    {["桌台二维码管理", "多人同步点餐", "智能推荐菜品"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-700 bg-white/50 p-2 rounded-lg border border-transparent hover:border-blue-100 hover:bg-white transition-colors w-fit pr-6">
                        <CheckCircle2 size={18} className="text-[#1677FF]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Illustration: Mobile UI (Clean & Flat) */}
                <div className="lg:w-1/2 flex justify-center lg:justify-end relative">
                  {/* Background Glow */}
                  <div className="absolute w-80 h-80 bg-blue-200/40 rounded-full blur-[100px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>

                  <PhoneMockup className="w-[280px] h-[560px] shadow-blue-500/20 z-10">
                    {/* App Header */}
                    <div className="bg-white p-4 flex items-center justify-between border-b border-slate-100 shrink-0">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-slate-100"></div>
                        <div className="text-sm font-bold">愚公小馆</div>
                      </div>
                      <MoreHorizontal size={20} className="text-slate-400" />
                    </div>
                    {/* Menu Content */}
                    <div className="bg-slate-50 flex-1 p-3 space-y-3 overflow-y-auto no-scrollbar">
                      <div className="flex gap-2 overflow-hidden pb-2 shrink-0">
                        <div className="bg-[#1677FF] text-white text-xs px-3 py-1 rounded-full whitespace-nowrap">热销榜</div>
                        <div className="bg-white text-slate-500 text-xs px-3 py-1 rounded-full whitespace-nowrap">折扣菜</div>
                        <div className="bg-white text-slate-500 text-xs px-3 py-1 rounded-full whitespace-nowrap">主食</div>
                      </div>
                      {/* Food Items */}
                      {[1, 2, 3].map((item) => (
                        <div key={item} className="bg-white p-3 rounded-xl flex gap-3 shadow-sm border border-slate-100/50">
                          <div className="w-16 h-16 bg-slate-100 rounded-lg shrink-0"></div>
                          <div className="flex-1">
                            <div className="font-bold text-slate-800 text-sm">招牌红烧肉</div>
                            <div className="text-[10px] text-slate-400 mt-1">月售 1000+ | 好评率 98%</div>
                            <div className="flex justify-between items-end mt-2">
                              <div className="text-[#1677FF] font-bold">¥ 48</div>
                              <div className="w-5 h-5 bg-[#1677FF] rounded-full flex items-center justify-center text-white">
                                <Plus size={12} />
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                      {/* Spacer for Cart Bar */}
                      <div className="h-16"></div>
                    </div>
                    {/* Cart Bar */}
                    <div className="absolute bottom-4 left-4 right-4 bg-slate-800 text-white p-3 rounded-full flex justify-between items-center shadow-xl shadow-slate-900/20 z-10">
                      <div className="flex items-center gap-3 pl-2">
                        <div className="relative">
                          <ShoppingBag size={20} />
                          <div className="absolute -top-2 -right-2 bg-red-500 text-[8px] w-4 h-4 rounded-full flex items-center justify-center">3</div>
                        </div>
                        <div className="font-bold">¥ 128</div>
                      </div>
                      <div className="bg-[#1677FF] px-4 py-1.5 rounded-full text-xs font-bold">去结算</div>
                    </div>
                  </PhoneMockup>
                </div>
              </div>
            </FadeIn>

            {/* Feature 2: Delivery Integration */}
            <FadeIn direction="left">
              <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24">
                <div className="lg:w-1/2 space-y-6">
                  <div className="w-12 h-12 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center shadow-inner">
                    <Bike size={24} />
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-slate-900">外卖聚合接单<br />一站式管理</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    对接美团、饿了么等主流外卖平台。一个后台统一管理所有订单、菜品、库存。支持自动接单、自动打印小票，告别多设备手忙脚乱。
                  </p>
                  <ul className="space-y-3 pt-4">
                    {["多平台订单统一处理", "库存自动同步", "经营数据聚合分析"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-700 bg-white/50 p-2 rounded-lg border border-transparent hover:border-orange-100 hover:bg-white transition-colors w-fit pr-6">
                        <CheckCircle2 size={18} className="text-orange-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Illustration: Dashboard List (Clean & Flat) */}
                <div className="lg:w-1/2 relative flex justify-center lg:justify-start">
                  {/* Background Glow - Expanded */}
                  <div className="absolute w-[500px] h-[500px] bg-orange-100/50 rounded-full blur-[100px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>

                  <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden z-10 transform hover:scale-[1.01] transition-transform duration-500">
                    <div className="p-5 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                      <div className="flex gap-2">
                        <span className="w-3.5 h-3.5 rounded-full bg-slate-300"></span>
                        <span className="w-3.5 h-3.5 rounded-full bg-slate-300"></span>
                      </div>
                      <div className="text-sm font-bold text-slate-500">外卖接单中心</div>
                      <div className="flex gap-2">
                        <div className="bg-white border border-slate-200 p-1.5 rounded-md text-slate-400 shadow-sm">
                          <Search size={14} />
                        </div>
                      </div>
                    </div>
                    <div className="p-0">
                      <table className="w-full text-left text-sm">
                        <thead className="bg-slate-50 text-slate-500">
                          <tr>
                            <th className="p-4 font-medium pl-6">来源</th>
                            <th className="p-4 font-medium">单号</th>
                            <th className="p-4 font-medium">状态</th>
                            <th className="p-4 font-medium text-right pr-6">金额</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                          {[
                            { source: '美团', color: 'bg-yellow-400', id: '#1001', status: '待接单', price: '45.0' },
                            { source: '饿了么', color: 'bg-blue-500', id: '#1002', status: '配送中', price: '32.5' },
                            { source: '美团', color: 'bg-yellow-400', id: '#1003', status: '已完成', price: '88.0' },
                            { source: '饿了么', color: 'bg-blue-500', id: '#1004', status: '已完成', price: '26.0' },
                            { source: '美团', color: 'bg-yellow-400', id: '#1005', status: '已完成', price: '156.0' },
                            { source: '饿了么', color: 'bg-blue-500', id: '#1006', status: '已取消', price: '0.0' },
                          ].map((row, i) => (
                            <tr key={i} className="group hover:bg-blue-50/30 transition-colors">
                              <td className="p-4 pl-6">
                                <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold shadow-sm ${row.color}`}>
                                  {row.source[0]}
                                </div>
                              </td>
                              <td className="p-4 font-mono text-slate-600 font-medium">{row.id}</td>
                              <td className="p-4">
                                <span className={`text-[10px] px-2.5 py-1 rounded-full font-medium ${row.status === '待接单' ? 'bg-red-50 text-red-500 animate-pulse border border-red-100' :
                                    row.status === '配送中' ? 'bg-blue-50 text-blue-500 border border-blue-100' :
                                      'bg-slate-50 text-slate-500 border border-slate-100'
                                  }`}>
                                  {row.status}
                                </span>
                              </td>
                              <td className="p-4 text-right font-bold text-slate-700 pr-6">¥{row.price}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    {/* Footer / Pagination */}
                    <div className="p-4 border-t border-slate-100 bg-slate-50/30 flex justify-between items-center">
                      <div className="text-xs text-slate-400">
                        共 <span className="font-bold text-slate-600">128</span> 条订单
                      </div>
                      <div className="flex gap-2">
                        <button className="p-1.5 rounded-md bg-white border border-slate-200 text-slate-400 hover:text-slate-600 hover:border-slate-300 transition-colors shadow-sm disabled:opacity-50">
                          <ChevronLeft size={14} />
                        </button>
                        <button className="p-1.5 rounded-md bg-white border border-slate-200 text-slate-400 hover:text-slate-600 hover:border-slate-300 transition-colors shadow-sm">
                          <ChevronRight size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Feature 3: Member Marketing */}
            <FadeIn direction="right">
              <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                <div className="lg:w-1/2 space-y-6">
                  <div className="w-12 h-12 rounded-lg bg-green-100 text-green-600 flex items-center justify-center shadow-inner">
                    <Users size={24} />
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-slate-900">会员精准营销<br />提升复购率</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    支付即会员。建立会员等级积分体系，支持储值、优惠券、生日关怀等多种营销玩法。通过数据分析进行精准触达，唤醒沉睡顾客。
                  </p>
                  <ul className="space-y-3 pt-4">
                    {["支付后自动关注", "会员储值营销", "电子优惠券发放"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-700 bg-white/50 p-2 rounded-lg border border-transparent hover:border-green-100 hover:bg-white transition-colors w-fit pr-6">
                        <CheckCircle2 size={18} className="text-green-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Illustration: Member Card & Coupon (Aligned & Flat) */}
                <div className="lg:w-1/2 relative flex justify-center items-center h-[400px]">
                  {/* Background Glow */}
                  <div className="absolute w-64 h-64 bg-green-200/50 rounded-full blur-3xl -top-10 -right-10"></div>

                  <div className="relative w-80 flex flex-col gap-4">
                    {/* Member Card */}
                    <div className="w-full h-48 bg-gradient-to-br from-slate-800 to-black rounded-2xl shadow-2xl text-white p-6 flex flex-col justify-between z-10 border border-slate-700/50">
                      <div className="flex justify-between items-start">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                            <Zap size={16} className="text-yellow-400" />
                          </div>
                          <span className="font-bold tracking-wide">VIP MEMBER</span>
                        </div>
                        <span className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded border border-yellow-500/50">Gold</span>
                      </div>
                      <div>
                        <div className="text-xs text-slate-400 mb-1">BALANCE</div>
                        <div className="text-2xl font-mono font-bold tracking-wider">¥ 2,580.00</div>
                      </div>
                      <div className="flex justify-between items-center text-xs text-slate-400 font-mono">
                        <span>**** 8888</span>
                        <span>12/26</span>
                      </div>
                    </div>

                    {/* Coupon Card (Integrated below) */}
                    <div className="w-full bg-white rounded-xl shadow-lg border border-slate-100 p-4 z-20">
                      <div className="flex justify-between items-center border-b border-dashed border-slate-200 pb-3 mb-3">
                        <div className="flex gap-3 items-center">
                          <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center text-red-500">
                            <Gift size={20} />
                          </div>
                          <div>
                            <div className="font-bold text-slate-800">满减券</div>
                            <div className="text-xs text-slate-400">全场通用</div>
                          </div>
                        </div>
                        <div className="text-xl font-bold text-red-500">¥20</div>
                      </div>
                      <button className="w-full py-2 bg-red-500 text-white text-xs font-bold rounded-lg hover:bg-red-600 transition-colors">
                        立即使用
                      </button>
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
        title="开启智慧餐饮新时代"
        description={
          <>
            立即体验数字化餐饮管理系统，提升门店运营效率。
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
