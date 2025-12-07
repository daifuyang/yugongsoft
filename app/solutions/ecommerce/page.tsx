import * as motion from "framer-motion/client";
import {
  ArrowRight,
  CheckCircle2,
  BarChart3,
  ShoppingBag,
  Smartphone,
  Share2,
  Users,
  TrendingUp,
  CreditCard,
  FileText,
  Search,
  Zap,
  MoreHorizontal,
  Plus,
  Sparkles,
  Flame,
  Tag,
  Shirt
} from 'lucide-react';

import FadeIn from '@/components/FadeIn';
import NumberTicker from '@/components/NumberTicker';
import CtaSection from '@/components/ui/CtaSection';

import FeatureGrid from '@/components/ui/FeatureGrid';

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
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">

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
            <motion.div
              className="lg:w-1/2 relative"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <FadeIn delay={0.2} direction="left" duration={0.8}>
                <div className="relative w-full bg-white rounded-xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-slate-100 overflow-hidden z-10">
                  {/* Browser Header */}
                  <div className="h-10 border-b border-slate-100 bg-slate-50/80 flex items-center px-4 gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2 px-3 py-1 bg-white rounded-md border border-slate-200 text-xs text-slate-400 shadow-sm">
                        <Search size={12} />
                        <span>搜索商品或订单...</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex h-[380px]">
                    {/* Sidebar */}
                    <div className="w-16 border-r border-slate-100 bg-slate-50/30 flex flex-col items-center py-6 gap-6 shrink-0">
                      <div className="w-10 h-10 rounded-xl bg-blue-600 shadow-lg shadow-blue-600/30 text-white flex items-center justify-center"><BarChart3 size={20} /></div>
                      <div className="w-10 h-10 rounded-xl text-slate-400 hover:bg-white hover:text-slate-600 hover:shadow-sm transition-all flex items-center justify-center cursor-pointer"><ShoppingBag size={20} /></div>
                      <div className="w-10 h-10 rounded-xl text-slate-400 hover:bg-white hover:text-slate-600 hover:shadow-sm transition-all flex items-center justify-center cursor-pointer"><Users size={20} /></div>
                      <div className="w-10 h-10 rounded-xl text-slate-400 hover:bg-white hover:text-slate-600 hover:shadow-sm transition-all flex items-center justify-center cursor-pointer"><Share2 size={20} /></div>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 bg-white p-6 overflow-hidden flex flex-col gap-6 relative">
                      {/* Background Grid */}
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f8fafc_1px,transparent_1px),linear-gradient(to_bottom,#f8fafc_1px,transparent_1px)] bg-[size:2rem_2rem] -z-10"></div>

                      {/* Top Stats */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-50/20 border border-blue-100">
                          <div className="text-xs text-blue-600 font-bold mb-1 flex items-center gap-1"><Zap size={12} /> 实时交易额</div>
                          <div className="text-2xl font-bold text-slate-800">¥ 128,420</div>
                          <div className="text-[10px] text-slate-500 mt-1">较昨日 <span className="text-green-600 font-bold">+12.5%</span></div>
                        </div>
                        <div className="p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
                          <div className="text-xs text-slate-500 font-bold mb-1">新增会员</div>
                          <div className="text-2xl font-bold text-slate-800">324</div>
                          <div className="text-[10px] text-slate-500 mt-1">较昨日 <span className="text-blue-600 font-bold">+8.2%</span></div>
                        </div>
                      </div>

                      {/* Chart Section */}
                      <div className="flex-1 rounded-2xl border border-slate-100 bg-white p-5 flex flex-col min-h-0 shadow-sm relative overflow-hidden">
                        <div className="flex justify-between items-center mb-6">
                          <div>
                            <div className="text-sm font-bold text-slate-800">销售趋势</div>
                            <div className="text-[10px] text-slate-400">近7天店铺营收数据</div>
                          </div>
                          <div className="flex gap-2">
                            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                            <div className="w-2 h-2 rounded-full bg-slate-200"></div>
                          </div>
                        </div>
                        <div className="flex-1 flex items-end justify-between gap-2 px-1 pb-1">
                          {[35, 55, 45, 70, 60, 85, 75, 95, 80, 100].map((h, i) => (
                            <motion.div
                              key={i}
                              className="w-full bg-blue-500 rounded-t-sm relative group cursor-pointer"
                              style={{ height: `${h}%`, opacity: 0.1 + (i * 0.08) }}
                              initial={{ scaleY: 0 }}
                              whileInView={{ scaleY: 1 }}
                              transition={{ delay: i * 0.05, duration: 0.5 }}
                              viewport={{ once: true }}
                            >
                              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                                ¥{h * 120}
                              </div>
                            </motion.div>
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
              { value: "200%", label: "GMV年增长", icon: TrendingUp },
              { value: "45%", label: "复购率", icon: Users },
              { value: "10k+", label: "分销员数量", icon: Share2 },
              { value: "30%", label: "获客成本降低", icon: BarChart3 },
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

          <div className="mb-16">
            <FadeIn direction="up">
              <FeatureGrid
                items={[
                  {
                    title: "平台抽成高",
                    desc: "主流电商平台扣点高，广告推广费用贵，商家利润空间被严重压缩。",
                    icon: <CreditCard size={28} />
                  },
                  {
                    title: "客户留存难",
                    desc: "客户属于平台不属于商家，难以进行二次触达和营销，复购率低。",
                    icon: <Users size={28} />
                  },
                  {
                    title: "营销玩法少",
                    desc: "传统电商促销手段单一，缺乏社交裂变属性，难以通过口碑传播带来新客。",
                    icon: <Share2 size={28} />
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
            {/* Feature 1: Micro Store */}
            <FadeIn direction="right">
              <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                <div className="lg:w-1/2 space-y-6">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#1677FF] flex items-center justify-center border border-blue-100">
                    <Smartphone size={28} />
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">品牌微商城，<br />搭建私域流量阵地</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    3分钟快速搭建属于自己的微信小程序/H5商城。丰富的装修组件，拖拽式操作，无需开发即可拥有媲美大厂的商城体验。
                  </p>
                  <ul className="space-y-4 pt-4">
                    {["数十套行业模板一键套用", "可视化装修编辑器", "支持小程序/H5/PC多端同步"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-700">
                        <CheckCircle2 size={20} className="text-[#1677FF] shrink-0" />
                        <span className="font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:w-1/2 flex justify-center lg:justify-end">
                  {/* Phone Frame - Clean & Flat */}
                  <div className="relative w-[320px] h-[640px] bg-white rounded-[3rem] border-[8px] border-slate-900 shadow-2xl overflow-hidden">
                    {/* Status Bar */}
                    <div className="h-8 bg-white flex justify-between items-center px-6 pt-2 shrink-0 select-none">
                      <div className="text-[10px] font-bold text-slate-900">9:41</div>
                      <div className="flex gap-1">
                        <div className="w-3 h-2 bg-slate-900 rounded-[1px]"></div>
                        <div className="w-0.5 h-2 bg-slate-900/30 rounded-[1px]"></div>
                      </div>
                    </div>

                    {/* App Header */}
                    <div className="bg-white px-4 pb-3 shrink-0 border-b border-slate-50">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                          <ShoppingBag size={14} />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-bold text-slate-900">品牌官方旗舰店</div>
                          <div className="text-[10px] text-slate-400">官方认证</div>
                        </div>
                        <MoreHorizontal size={20} className="text-slate-400" />
                      </div>
                      <div className="relative">
                        <Search className="absolute left-3 top-2.5 text-slate-400" size={14} />
                        <div className="w-full bg-slate-50 text-xs py-2.5 pl-9 rounded-full text-slate-500">搜索商品...</div>
                      </div>
                    </div>

                    {/* Content Area */}
                    <div className="p-3 space-y-3 bg-[#F9FAFB] h-full overflow-hidden">
                      {/* Banner */}
                      <div className="h-36 bg-gradient-to-r from-[#1677FF] to-[#4096ff] rounded-2xl flex flex-col justify-center px-6 text-white relative overflow-hidden shadow-sm">
                        <div className="text-xs font-medium opacity-80 mb-1">夏季新品</div>
                        <div className="text-2xl font-bold">新品上市</div>
                        <div className="mt-3 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-[10px] w-fit">立即抢购 &rarr;</div>
                        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
                      </div>

                      {/* Categories */}
                      <div className="flex justify-between px-2">
                        {[
                          { name: '新品', icon: Sparkles, color: 'text-amber-500' },
                          { name: '热销', icon: Flame, color: 'text-red-500' },
                          { name: '折扣', icon: Tag, color: 'text-orange-500' },
                          { name: '男装', icon: Shirt, color: 'text-blue-500' },
                          { name: '女装', icon: ShoppingBag, color: 'text-pink-500' }
                        ].map((item, i) => (
                          <div key={i} className="flex flex-col items-center gap-1.5 cursor-default group">
                            <div className="w-10 h-10 rounded-full bg-white border border-slate-100 flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:border-blue-100 transition-all">
                              <item.icon size={18} className={item.color} />
                            </div>
                            <span className="text-[10px] text-slate-500 group-hover:text-slate-700">{item.name}</span>
                          </div>
                        ))}
                      </div>

                      {/* Product Grid */}
                      <div className="grid grid-cols-2 gap-3 pb-20">
                        {[1, 2, 3, 4].map(i => (
                          <div key={i} className="bg-white p-2 rounded-xl border border-slate-100 shadow-sm">
                            <div className="aspect-square bg-slate-50 rounded-lg mb-2 relative overflow-hidden group">
                              <div className="absolute inset-0 bg-slate-200/50 group-hover:bg-slate-200/30 transition-colors"></div>
                            </div>
                            <div className="h-3 w-3/4 bg-slate-100 rounded mb-1.5"></div>
                            <div className="flex justify-between items-center">
                              <div className="h-3 w-1/3 bg-slate-100 rounded"></div>
                              <div className="w-6 h-6 rounded-full bg-blue-50 text-[#1677FF] flex items-center justify-center">
                                <Plus size={12} />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Feature 2: Distribution */}
            <FadeIn direction="left">
              <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24">
                <div className="lg:w-1/2 space-y-6">
                  <div className="w-14 h-14 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center border border-orange-100">
                    <Share2 size={28} />
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">多级分销裂变，<br />让客户帮你卖货</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    基于社交关系的裂变营销。设置灵活的佣金机制，激励老客户、员工、KOL成为分销员，通过朋友圈分享商品，实现低成本获客。
                  </p>
                  <ul className="space-y-4 pt-4">
                    {["二级分销佣金自动结算", "分销员专属推广海报", "团队业绩奖励机制"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-700">
                        <CheckCircle2 size={20} className="text-orange-500 shrink-0" />
                        <span className="font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:w-1/2 flex justify-center lg:justify-start">
                  {/* Distribution Dashboard Card */}
                  <div className="w-full max-w-[600px] bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
                    {/* Header */}
                    <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                      <div className="flex items-center gap-2">
                        <Users size={18} className="text-slate-500" />
                        <span className="font-bold text-slate-700">分销商管理</span>
                      </div>
                      <div className="text-xs text-slate-400">实时数据</div>
                    </div>

                    {/* Stats Row */}
                    <div className="grid grid-cols-2 divide-x divide-slate-100 border-b border-slate-100">
                      <div className="p-6">
                        <div className="text-xs text-slate-500 mb-1">分销商总数</div>
                        <div className="text-2xl font-bold text-slate-800">12,450</div>
                        <div className="text-xs text-green-600 mt-1 flex items-center gap-1">
                          <TrendingUp size={12} /> +15% 本周
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="text-xs text-slate-500 mb-1">本月佣金发放</div>
                        <div className="text-2xl font-bold text-slate-800">¥ 45,200</div>
                        <div className="text-xs text-orange-600 mt-1">累计 ¥ 1.2M+</div>
                      </div>
                    </div>

                    {/* List */}
                    <div className="p-4">
                      <div className="text-xs font-bold text-slate-400 mb-3 px-2">活跃分销排行</div>
                      <div className="space-y-2">
                        {[
                          { name: "陈思思", level: "金牌分销商", amount: "¥ 2,450", color: "bg-yellow-100 text-yellow-700" },
                          { name: "王大伟", level: "银牌分销商", amount: "¥ 1,820", color: "bg-slate-100 text-slate-600" },
                          { name: "李丽莎", level: "银牌分销商", amount: "¥ 1,640", color: "bg-slate-100 text-slate-600" },
                        ].map((user, i) => (
                          <div key={i} className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-xl transition-colors border border-transparent hover:border-slate-100">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden">
                                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 10}`} alt="avatar" className="w-full h-full" />
                              </div>
                              <div>
                                <div className="text-sm font-bold text-slate-700">{user.name}</div>
                                <div className={`text-[10px] px-1.5 py-0.5 rounded-full w-fit ${user.color}`}>{user.level}</div>
                              </div>
                            </div>
                            <div className="font-mono font-bold text-slate-700">{user.amount}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Feature 3: Marketing */}
            <FadeIn direction="right">
              <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                <div className="lg:w-1/2 space-y-6">
                  <div className="w-14 h-14 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center border border-green-100">
                    <ShoppingBag size={28} />
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">自动化营销，<br />提升转化与客单</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    拼团、秒杀、砍价、满减、优惠券等百种营销玩法。结合用户标签和行为数据，自动化触发营销消息，千人千面。
                  </p>
                  <ul className="space-y-4 pt-4">
                    {["拼团/秒杀等百种营销插件", "新客有礼/复购发券", "智能短信/公众号消息推送"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-700">
                        <CheckCircle2 size={20} className="text-green-500 shrink-0" />
                        <span className="font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:w-1/2 flex justify-center lg:justify-end">
                  {/* Marketing Tools Grid - Clean */}
                  <div className="w-full max-w-lg">
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { name: "拼团活动", icon: Users, color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-100", desc: "邀请好友拼单" },
                        { name: "限时秒杀", icon: Zap, color: "text-red-600", bg: "bg-red-50", border: "border-red-100", desc: "每日0点开抢" },
                        { name: "优惠券", icon: CreditCard, color: "text-orange-600", bg: "bg-orange-50", border: "border-orange-100", desc: "满100减20" },
                        { name: "会员储值", icon: FileText, color: "text-green-600", bg: "bg-green-50", border: "border-green-100", desc: "充值送积分" },
                      ].map((item, i) => (
                        <div
                          key={i}
                          className="bg-white rounded-2xl p-6 border border-slate-100 hover:border-blue-100 hover:shadow-lg transition-all duration-300 cursor-default group"
                        >
                          <div className={`w-12 h-12 rounded-xl ${item.bg} ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                            <item.icon size={24} />
                          </div>
                          <div className="font-bold text-slate-800 text-lg mb-1">{item.name}</div>
                          <div className="text-sm text-slate-500">{item.desc}</div>
                        </div>
                      ))}
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
        title="开启您的电商增长新引擎"
        description={
          <>
            立即体验全渠道电商解决方案，打破增长瓶颈。
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
