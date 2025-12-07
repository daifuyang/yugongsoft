import * as motion from "framer-motion/client";
import {
  ArrowRight,
  BarChart3,
  PieChart,
  Smartphone,
  TrendingUp,
  Database,
  FileSpreadsheet,
  Server,
  Cpu,
  ArrowUpRight,
  Users,
  MoreHorizontal
} from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import FeatureGrid from '@/components/ui/FeatureGrid';
import TileGrid from '@/components/ui/TileGrid';
import CtaSection from '@/components/ui/CtaSection';

export default function DataAnalysis() {
  return (
    <main className="bg-white font-sans selection:bg-[#1677FF] selection:text-white">

      {/* --- Hero Section --- */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#F5F7FA]">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 right-0 h-[600px] bg-gradient-to-b from-[#E6F7FF] to-transparent opacity-70"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1677ff08_1px,transparent_1px),linear-gradient(to_bottom,#1677ff08_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="lg:w-1/2 space-y-8">
              <FadeIn delay={0.1} direction="up">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-100 shadow-sm shadow-blue-100/50">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1677FF] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#1677FF]"></span>
                  </span>
                  <span className="text-sm font-semibold text-[#1677FF] tracking-wide">数据驱动 · 科学决策</span>
                </div>
              </FadeIn>
              <FadeIn delay={0.2} direction="up">
                <h1 className="text-5xl lg:text-7xl font-bold text-[#000000E0] leading-[1.1] tracking-tight">
                  数据大屏 / 报表中心<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1677FF] to-[#00C6FF]">
                    让数据创造价值
                  </span>
                </h1>
              </FadeIn>
              <FadeIn delay={0.3} direction="up">
                <p className="text-lg text-slate-500 leading-relaxed max-w-xl">
                  打破数据孤岛，将散落在各个系统中的数据汇聚一屏。实时监控经营指标，通过可视化图表洞察业务趋势，辅助管理者科学决策。
                </p>
              </FadeIn>
              <FadeIn delay={0.4} direction="up">
                <div className="flex flex-wrap gap-4 pt-6">
                  <button className="btn bg-[#1677FF] hover:bg-[#0958D9] text-white px-10 py-4 h-auto rounded-xl font-bold text-lg shadow-xl shadow-blue-500/20 border-none transition-all hover:-translate-y-1 flex items-center gap-2">
                    免费获取方案
                    <ArrowRight size={20} />
                  </button>
                  <button className="btn bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-10 py-4 h-auto rounded-xl font-bold text-lg shadow-sm hover:shadow-md transition-all">
                    查看演示 Demo
                  </button>
                </div>
              </FadeIn>
            </div>

            {/* Right: Chart Abstract */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="lg:w-1/2 relative flex justify-center"
            >
              <FadeIn delay={0.2} direction="left" duration={0.8} fullWidth>
                <div className="relative">
                  {/* Background Glows */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[80px] -z-10 opacity-50"></div>
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-100/40 rounded-full blur-2xl -z-10"></div>

                  {/* Main Dashboard Container */}
                  <div className="bg-white rounded-2xl shadow-2xl shadow-blue-900/10 border border-slate-100 p-5 relative z-10 w-full">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-5 pb-3 border-b border-slate-100">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#1677FF] to-[#0050B3] flex items-center justify-center text-white shadow-md shadow-blue-500/20">
                          <BarChart3 size={18} />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-slate-800 tracking-tight">企业数据驾驶舱</div>
                          <div className="text-[10px] text-slate-400 font-medium">Business Intelligence Dashboard</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 bg-slate-50 px-2 py-1 rounded-md border border-slate-100">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-[10px] font-medium text-slate-500">实时连接</span>
                      </div>
                    </div>

                    {/* Content Grid */}
                    <div className="grid grid-cols-12 gap-4 items-stretch">
                      {/* Main Chart Area (Left) */}
                      <div className="col-span-8 flex flex-col gap-4">
                        {/* Revenue Chart */}
                        <div className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-4 border border-slate-100 shadow-sm relative overflow-hidden flex-1 flex flex-col min-h-[180px]">
                          <div className="flex justify-between items-center mb-4 z-10">
                            <div>
                              <div className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Total Revenue</div>
                              <div className="text-lg font-bold text-slate-800 flex items-baseline gap-1">
                                ¥8,245,300
                                <span className="text-[10px] text-green-600 font-medium bg-green-50 px-1 rounded">+12.5%</span>
                              </div>
                            </div>
                          </div>
                          {/* Simulated Chart Bars */}
                          <div className="flex-1 flex items-end justify-between gap-1.5 z-10 px-1">
                            {[35, 50, 45, 70, 60, 85, 75, 95, 80, 100].map((h, i) => (
                              <motion.div
                                key={i}
                                initial={{ height: 0 }}
                                animate={{ height: `${h}%` }}
                                transition={{ duration: 1, delay: i * 0.05 }}
                                className="flex-1 bg-blue-500 rounded-t-sm opacity-90 hover:opacity-100 transition-opacity cursor-pointer"
                                style={{
                                  background: `linear-gradient(to top, #1677FF ${h}%, #69b1ff 100%)`,
                                  boxShadow: '0 4px 6px -1px rgba(22, 119, 255, 0.1)'
                                }}
                              ></motion.div>
                            ))}
                          </div>
                          {/* Grid Lines */}
                          <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
                            <div className="border-b border-slate-200 h-1/4 w-full"></div>
                            <div className="border-b border-slate-200 h-1/4 w-full"></div>
                            <div className="border-b border-slate-200 h-1/4 w-full"></div>
                          </div>
                        </div>

                        {/* Secondary Stats Row */}
                        <div className="grid grid-cols-2 gap-3 h-24">
                          <div className="bg-white rounded-xl p-3 border border-slate-100 shadow-sm flex flex-col justify-between">
                            <div className="flex justify-between items-start mb-2">
                              <div className="text-[10px] text-slate-500">转化率 (CR)</div>
                              <ArrowUpRight size={12} className="text-green-500" />
                            </div>
                            <div className="text-xl font-bold text-slate-800 mb-1">4.8%</div>
                            <div className="w-full bg-slate-100 h-1 rounded-full overflow-hidden">
                              <div className="w-[65%] h-full bg-purple-500 rounded-full"></div>
                            </div>
                          </div>
                          <div className="bg-white rounded-xl p-3 border border-slate-100 shadow-sm flex flex-col justify-between">
                            <div className="flex justify-between items-start mb-2">
                              <div className="text-[10px] text-slate-500">活跃用户 (DAU)</div>
                              <Users size={12} className="text-blue-500" />
                            </div>
                            <div className="text-xl font-bold text-slate-800 mb-1">12.5k</div>
                            <div className="w-full bg-slate-100 h-1 rounded-full overflow-hidden">
                              <div className="w-[82%] h-full bg-blue-500 rounded-full"></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Right Sidebar (Right) */}
                      <div className="col-span-4 flex flex-col gap-4">
                        {/* Regional Distribution */}
                        <div className="bg-white rounded-xl p-4 flex-1 relative overflow-hidden flex flex-col border border-slate-100 shadow-sm min-h-[180px]">
                          <div className="flex justify-between items-start z-10 mb-3">
                            <div className="text-xs font-bold text-slate-800">区域分布</div>
                            <MoreHorizontal size={12} className="text-slate-400" />
                          </div>
                          <div className="space-y-4 relative z-10 flex-1 flex flex-col justify-center">
                            <div className="space-y-1">
                              <div className="flex justify-between text-[10px] text-slate-500">
                                <span>华东区</span>
                                <span className="text-slate-800 font-bold">45%</span>
                              </div>
                              <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                                <motion.div
                                  initial={{ width: 0 }}
                                  animate={{ width: "45%" }}
                                  transition={{ duration: 1, delay: 0.5 }}
                                  className="h-full bg-blue-500 rounded-full"
                                ></motion.div>
                              </div>
                            </div>
                            <div className="space-y-1">
                              <div className="flex justify-between text-[10px] text-slate-500">
                                <span>华南区</span>
                                <span className="text-slate-800 font-bold">32%</span>
                              </div>
                              <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                                <motion.div
                                  initial={{ width: 0 }}
                                  animate={{ width: "32%" }}
                                  transition={{ duration: 1, delay: 0.7 }}
                                  className="h-full bg-cyan-400 rounded-full"
                                ></motion.div>
                              </div>
                            </div>
                            <div className="space-y-1">
                              <div className="flex justify-between text-[10px] text-slate-500">
                                <span>华北区</span>
                                <span className="text-slate-800 font-bold">23%</span>
                              </div>
                              <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                                <motion.div
                                  initial={{ width: 0 }}
                                  animate={{ width: "23%" }}
                                  transition={{ duration: 1, delay: 0.9 }}
                                  className="h-full bg-purple-400 rounded-full"
                                ></motion.div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* System Alerts */}
                        <div className="bg-white rounded-xl p-3 border border-slate-100 shadow-sm h-24 flex flex-col justify-between">
                          {[
                            { label: "库存预警", val: "Low", color: "text-orange-500 bg-orange-50" },
                            { label: "服务器负载", val: "Normal", color: "text-green-500 bg-green-50" }
                          ].map((item, i) => (
                            <div key={i} className="flex items-center justify-between p-1.5 rounded-lg hover:bg-slate-50 transition-colors">
                              <div className="flex items-center gap-2">
                                <div className={`w-1.5 h-1.5 rounded-full ${item.color.split(' ')[0]}`}></div>
                                <span className="text-[10px] text-slate-600">{item.label}</span>
                              </div>
                              <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded ${item.color}`}>{item.val}</span>
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

      {/* --- Features Grid --- */}
      <Section className="py-24 bg-white">
        <SectionHeader
          title="可视化与智能分析"
          subtitle="满足大屏展示、移动驾驶舱与异常预警分析等场景"
          centered
        />
        <FeatureGrid
          items={[
            { icon: <PieChart size={28} />, title: "炫酷可视化大屏", desc: "适用于展厅汇报、指挥中心。支持 3D 地图、实时动态图表，震撼视觉效果，尽显企业实力。" },
            { icon: <Smartphone size={28} />, title: "移动端驾驶舱", desc: "老板专属的数据驾驶舱。随时随地通过手机查看今日营收、订单、库存等关键经营数据。" },
            { icon: <TrendingUp size={28} />, title: "智能预警分析", desc: "自定义预警规则，当数据异常（如库存不足、销量暴跌）时，自动发送消息通知相关人员。" },
          ]}
          cols={3}
          animated
        />
      </Section>

      {/* --- Data Sources & Integration --- */}
      <Section className="py-24 bg-[#F5F7FA]">
        <SectionHeader
          title="多源数据融合"
          subtitle="无缝对接企业现有的各类业务系统"
          centered
        />
        <TileGrid
          items={[
            { title: "Excel / CSV", icon: <FileSpreadsheet size={32} /> },
            { title: "MySQL / Oracle", icon: <Database size={32} /> },
            { title: "ERP / CRM API", icon: <Server size={32} /> },
            { title: "IoT / Hardware", icon: <Cpu size={32} /> },
          ]}
          cols={4}
        />
      </Section>

      {/* --- CTA --- */}
      <CtaSection
        title="让数据开口说话"
        description="立即构建您的企业数据驾驶舱，抢占数字化转型先机。"
        primaryAction={{ label: "预约演示", href: "/contact" }}
      />

    </main>
  );
}
