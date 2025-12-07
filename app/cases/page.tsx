'use client';
import React, { useState } from 'react';
import FadeIn from '@/components/FadeIn';
import { 
  GraduationCap, Leaf, FlaskConical, 
  Car, Utensils, ShoppingCart, 
  Activity, Truck, LineChart,
  Database, ShieldCheck, Code2
} from 'lucide-react';

// 定义案例数据结构
interface CaseStudy {
  id: number;
  company: string;
  category: string;
  industry: string; // 用于筛选
  description: string;
  tags: string[];
  icon: React.ReactNode;
  color: string;
  result?: string; // 关键成果
}

// 扩展案例数据到 9 个
const cases: CaseStudy[] = [
  {
    id: 1,
    company: '上海某消防教育有限公司',
    category: '教育培训',
    industry: 'edu',
    description: '完成定制小程序与APP开发。构建全方位的线上教育平台，包含线上学习、在线考试、报名管理等核心功能，助力企业实现数字化教学转型。',
    tags: ['小程序开发', 'APP开发', '在线教育', '考试系统'],
    icon: <GraduationCap className="w-8 h-8 text-white" />,
    color: 'bg-blue-500',
    result: '学员在线率提升 200%'
  },
  {
    id: 2,
    company: '上海某环保有限公司',
    category: '环保科技',
    industry: 'enterprise',
    description: '打造垂直领域的CRM定制SaaS系统。针对环保行业特性，深入业务流程，实现客户管理、项目追踪、数据分析的一体化解决方案。',
    tags: ['CRM系统', 'SaaS定制', '行业解决方案'],
    icon: <Leaf className="w-8 h-8 text-white" />,
    color: 'bg-green-500',
    result: '销售转化率提升 45%'
  },
  {
    id: 3,
    company: '杭州某化工上市集团',
    category: '化工制造',
    industry: 'manufacturing',
    description: '作为深度服务商，提供全方位的数字化支持。包括定制化模块开发、系统集成及长期技术维护，助力集团实现智能制造与精细化管理。',
    tags: ['定制开发', '深度服务', '模块开发', '上市集团'],
    icon: <FlaskConical className="w-8 h-8 text-white" />,
    color: 'bg-orange-500',
    result: '年节省运维成本 120万+'
  },
  {
    id: 4,
    company: '苏州某新能源汽车零部件厂',
    category: '智能制造',
    industry: 'manufacturing',
    description: '实施生产执行系统 (MES) 升级，实现车间设备互联互通。通过实时数据采集与可视化看板，达成生产全过程的质量追溯与效率监控。',
    tags: ['MES系统', '设备联网', '生产可视化', '质量追溯'],
    icon: <Car className="w-8 h-8 text-white" />,
    color: 'bg-indigo-500',
    result: '生产效率提升 30%'
  },
  {
    id: 5,
    company: '北京某大型连锁餐饮集团',
    category: '智慧餐饮',
    industry: 'retail',
    description: '构建一体化连锁门店管理系统，打通供应链、库存与前端销售数据。配套开发会员营销小程序，实现线上线下流量闭环。',
    tags: ['连锁管理', '供应链协同', '会员小程序', '新零售'],
    icon: <Utensils className="w-8 h-8 text-white" />,
    color: 'bg-red-500',
    result: '库存周转率提升 40%'
  },
  {
    id: 6,
    company: '深圳某跨境电商独角兽',
    category: '跨境电商',
    industry: 'retail',
    description: '研发全球供应链管理系统 (SCM) 及多语言商城前端。集成智能仓储 WMS 模块，支持多币种结算与海外仓物流对接。',
    tags: ['SCM系统', '跨境商城', 'WMS集成', '多语言'],
    icon: <ShoppingCart className="w-8 h-8 text-white" />,
    color: 'bg-purple-500',
    result: '订单处理速度提升 3倍'
  },
  {
    id: 7,
    company: '成都某医疗器械有限公司',
    category: '医疗物联',
    industry: 'iot',
    description: '搭建医疗设备物联网监控平台。通过 4G/5G 模组实现设备远程状态监测、故障预警与固件升级，大幅降低售后维护成本。',
    tags: ['物联网平台', '远程运维', '数据采集', '故障预警'],
    icon: <Activity className="w-8 h-8 text-white" />,
    color: 'bg-teal-500',
    result: '设备故障响应缩短至 10分钟'
  },
  {
    id: 8,
    company: '广州某物流仓储园区',
    category: '智慧物流',
    industry: 'enterprise',
    description: '定制开发智慧园区管理系统，集成车辆调度、月台管理与自动化立体库接口。实现物流园区的人、车、货数字化高效协同。',
    tags: ['园区管理', '车辆调度', '自动化集成', '物流协同'],
    icon: <Truck className="w-8 h-8 text-white" />,
    color: 'bg-slate-600',
    result: '园区吞吐量提升 25%'
  },
  {
    id: 9,
    company: '南京某金融科技服务商',
    category: '金融科技',
    industry: 'enterprise',
    description: '构建大数据风控分析平台。整合多源企业征信数据，利用可视化大屏展示实时风险指标，为金融机构提供精准的决策支持。',
    tags: ['大数据风控', '数据可视化', '企业征信', '决策支持'],
    icon: <LineChart className="w-8 h-8 text-white" />,
    color: 'bg-cyan-600',
    result: '风险识别准确率 98%+'
  }
];

const categories = [
  { id: 'all', name: '全部案例' },
  { id: 'manufacturing', name: '智能制造' },
  { id: 'enterprise', name: '企业服务' },
  { id: 'retail', name: '智慧零售' },
  { id: 'edu', name: '教育培训' },
  { id: 'iot', name: '物联网' },
];

export default function CasesPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredCases = activeCategory === 'all' 
    ? cases 
    : cases.filter(c => c.industry === activeCategory);

  return (
    <main className="bg-base-200 min-h-screen pb-20">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-base-content">
              客户<span className="text-primary">案例</span>
            </h1>
            <p className="text-lg text-slate-500 text-center max-w-2xl mx-auto">
              我们与各行业领军企业深度合作，通过技术创新解决实际业务挑战，
              打造具有行业影响力的数字化标杆案例。
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="container mx-auto px-6 pt-8 pb-4 sticky top-20 z-30 bg-base-200/95 backdrop-blur-sm">
        <FadeIn delay={0.2}>
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-primary text-white shadow-lg shadow-blue-500/30'
                    : 'bg-white text-slate-600 hover:bg-blue-50 hover:text-primary'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Cases Grid */}
      <section className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCases.map((item, index) => (
            <FadeIn key={item.id} delay={index * 0.05} className="h-full">
              <div className="group relative h-full bg-white rounded-2xl p-8 shadow-ant hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary/20 flex flex-col overflow-hidden">
                
                {/* 顶部装饰条 */}
                <div className={`absolute top-0 left-0 w-full h-1 ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

                {/* Header: Icon + Category */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-14 h-14 rounded-xl ${item.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  <div className="text-xs font-bold text-primary/80 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">
                    {item.category}
                  </div>
                </div>

                {/* Content */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-base-content mb-3 group-hover:text-primary transition-colors line-clamp-1" title={item.company}>
                    {item.company}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 mb-4 h-[4.5rem]">
                    {item.description}
                  </p>
                  
                  {/* Key Result Highlight */}
                  {item.result && (
                    <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-100">
                      <ShieldCheck className="w-4 h-4 text-green-500" />
                      <span>{item.result}</span>
                    </div>
                  )}
                </div>

                {/* Tags */}
                <div className="mt-auto pt-4 flex flex-wrap gap-2 border-t border-slate-100">
                  {item.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-2.5 py-0.5 bg-base-200 text-slate-500 text-[11px] rounded md:rounded-md font-medium group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        
        {filteredCases.length === 0 && (
          <div className="text-center py-20 text-slate-400">
            <p>暂无该分类案例</p>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-12">
        <FadeIn>
          <div className="bg-gradient-to-r from-primary to-blue-600 rounded-3xl p-12 text-center text-white shadow-ant relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">准备好开启您的数字化转型了吗？</h2>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                无论您是初创企业还是大型集团，我们都能为您提供量身定制的解决方案。
              </p>
              <a href="/#contact" className="btn bg-white text-primary hover:bg-blue-50 border-none rounded-xl px-8 shadow-lg">
                立即咨询
              </a>
            </div>
            
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute top-[-50%] left-[-10%] w-[500px] h-[500px] rounded-full bg-white blur-3xl"></div>
              <div className="absolute bottom-[-50%] right-[-10%] w-[500px] h-[500px] rounded-full bg-white blur-3xl"></div>
            </div>
          </div>
        </FadeIn>
      </section>
    </main>
  );
}
