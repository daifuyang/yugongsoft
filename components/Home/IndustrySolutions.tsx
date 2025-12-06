'use client';
import { useState, useEffect, useRef } from 'react';
import {
  Users,
  Factory,
  ClipboardList,
  GraduationCap,
  Utensils,
  ShoppingBag,
  Truck,
  Package,
  ArrowRight,
  CheckCircle2,
  Pause,
  Play
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const solutions = [
  {
    id: 'crm',
    label: 'CRM客管',
    icon: <Users size={18} />,
    title: 'CRM 客户关系管理',
    desc: '帮您管好每一个客户。从线索获取到成交转化的全流程管理，防止销售撞单、客户流失。',
    metrics: [
      { value: '30%', label: '销售转化率提升' },
      { value: '0', label: '客户资料丢失' }
    ],
    capabilities: ['公海池管理', '销售漏斗', '跟进记录'],
    points: ['客户资源永久保存', '销售外勤打卡', '业绩自动统计'],
    image: '/images/home/crm.jpg'
  },
  {
    id: 'mes',
    label: '数字工厂',
    icon: <Factory size={18} />,
    title: '轻量级 MES 生产管理',
    desc: '手机扫码报工，实时掌握生产进度。告别纸质单据，让车间管理透明化、数字化。',
    metrics: [
      { value: '90%', label: '生产数据准确率' },
      { value: '50%', label: '统计耗时减少' }
    ],
    capabilities: ['扫码报工', '计件工资', '生产看板'],
    points: ['手机实时看进度', '自动计算员工工资', '订单延期预警'],
    image: '/images/home/industry.jpg'
  },
  {
    id: 'workorder',
    label: '智能工单',
    icon: <ClipboardList size={18} />,
    title: '售后服务工单系统',
    desc: '专为售后维修、上门服务设计。客户扫码报修，师傅接单上门，服务过程全记录。',
    metrics: [
      { value: '2h', label: '平均响应缩短' },
      { value: '100%', label: '服务过程留痕' }
    ],
    capabilities: ['微信报修', '智能派单', '服务评价'],
    points: ['客户无需下载APP', '师傅轨迹可追踪', '电子保修卡'],
    image: '/images/home/workorder.jpg'
  },
  {
    id: 'edu',
    label: '智慧教育',
    icon: <GraduationCap size={18} />,
    title: '培训机构教务管理',
    desc: '招生、排课、消课、家校互通一站式解决。让老师专注教学，让家长放心托管。',
    metrics: [
      { value: '40%', label: '教务效率提升' },
      { value: '98%', label: '家长满意度' }
    ],
    capabilities: ['智能排课', '学员考勤', '家校互动'],
    points: ['课时自动统计', '上课通知微信推送', '成长档案记录'],
    image: '/images/home/edu.jpg'
  },
  {
    id: 'catering',
    label: '智慧餐饮',
    icon: <Utensils size={18} />,
    title: '餐饮扫码点餐系统',
    desc: '涵盖扫码点餐、外卖接单、后厨打印。支持连锁管理，帮您打造私域会员体系。',
    metrics: [
      { value: '30%', label: '翻台率提升' },
      { value: '20%', label: '人力成本节省' }
    ],
    capabilities: ['扫码点餐', '外卖聚合', '会员营销'],
    points: ['无需购买昂贵设备', '支持多人同时点餐', '储值卡营销'],
    image: '/images/home/catering.jpg'
  },
  {
    id: 'ecommerce',
    label: '数字电商',
    icon: <ShoppingBag size={18} />,
    title: '私域商城小程序',
    desc: '搭建属于自己的品牌商城。支持分销裂变、直播带货，把客户握在自己手里。',
    metrics: [
      { value: '2倍', label: '复购率提升' },
      { value: '0%', label: '平台扣点' }
    ],
    capabilities: ['分销裂变', '拼团秒杀', '直播带货'],
    points: ['千人千面推荐', '会员积分体系', '全渠道订单统一'],
    image: '/images/home/ecommerce.jpg'
  },
  {
    id: 'supplychain',
    label: '供应链',
    icon: <Truck size={18} />,
    title: '贸易供应链管理',
    desc: '采购、销售、库存、财务一体化管理。理清每一笔账，管好每一件货。',
    metrics: [
      { value: '30%', label: '资金周转率提升' },
      { value: '100%', label: '账实相符' }
    ],
    capabilities: ['进销存', '多币种', '财务核算'],
    points: ['业务财务一体化', '应收应付预警', '批次保质期管理'],
    image: '/images/home/supplychain.jpg'
  },
  {
    id: 'wms',
    label: 'WMS仓库',
    icon: <Package size={18} />,
    title: 'WMS 智能仓储',
    desc: '条码化管理，入库、出库、盘点全流程扫码。精准定位货位，杜绝发错货。',
    metrics: [
      { value: '99.9%', label: '库存准确率' },
      { value: '50%', label: '拣货效率提升' }
    ],
    capabilities: ['条码管理', '货位指引', '手持PDA'],
    points: ['防止错发漏发', '库存实时预警', '先进先出管理'],
    image: '/images/home/wms.jpg'
  }
];

export default function IndustrySolutions() {
  const [activeTab, setActiveTab] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // 自动轮播逻辑
  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setActiveTab((prev) => (prev + 1) % solutions.length);
      }, 5000); // 5秒切换一次
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying]);

  // 手动切换时暂停轮播，或者重置计时器（这里选择暂停一小会儿，简化起见，手动交互后保持播放状态但重置计时可能更好，或者提供暂停按钮）
  // 为了更好的体验，当用户 hover 到区域时暂停
  const handleMouseEnter = () => setIsPlaying(false);
  const handleMouseLeave = () => setIsPlaying(true);

  return (
    <section className="py-24 bg-[#F0F7FF] relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1677ff0a_1px,transparent_1px),linear-gradient(to_bottom,#1677ff0a_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-50 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#000000E0] mb-4">深耕行业，<span className="text-[#1677FF]">专精特新</span></h2>
          <p className="text-slate-500 text-lg">不只是通用软件，我们为您提供切中行业痛点的深度解决方案。</p>
        </div>

        {/* 主体卡片 */}
        <div 
          className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 overflow-hidden border border-white flex flex-col lg:flex-row min-h-[650px]"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >

          {/* 左侧：导航菜单 - 移动端优化为横向滚动 */}
          <div className="lg:w-1/3 border-r border-slate-100 bg-white p-4 lg:p-6 flex flex-row lg:flex-col gap-2 lg:gap-2 overflow-x-auto lg:overflow-visible z-20 relative no-scrollbar">
            {solutions.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(index)}
                className={`group flex items-center gap-3 lg:gap-4 p-3 lg:p-4 rounded-xl text-left transition-all duration-300 relative overflow-hidden flex-shrink-0 lg:flex-shrink ${activeTab === index
                    ? 'bg-gradient-to-r from-[#F0F7FF] to-white border-b-4 lg:border-b-0 lg:border-l-4 border-[#1677FF] shadow-sm'
                    : 'text-slate-600 hover:bg-slate-50 lg:hover:pl-5 border-b-4 lg:border-b-0 lg:border-l-4 border-transparent'
                  }`}
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${activeTab === index
                    ? 'bg-[#1677FF] text-white scale-110 shadow-md shadow-blue-200'
                    : 'bg-slate-100 text-slate-500 group-hover:bg-white group-hover:text-[#1677FF] group-hover:shadow-sm'
                  }`}>
                  {item.icon}
                </div>
                <span className={`font-bold text-lg transition-colors whitespace-nowrap ${activeTab === index ? 'text-[#1677FF]' : ''}`}>
                  {item.label}
                </span>
                {activeTab === index && (
                  <motion.div
                    layoutId="activeArrow"
                    className="ml-auto text-[#1677FF] hidden lg:block"
                  >
                    <ArrowRight size={18} />
                  </motion.div>
                )}
              </button>
            ))}
          </div>

          {/* 右侧：内容展示区 */}
          <div className="lg:w-2/3 relative group overflow-hidden bg-slate-50 flex-1">

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 w-full h-full"
              >
                {/* 背景图容器 */}
                <div className="absolute inset-0">
                  <motion.img
                    initial={{ scale: 1.05 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8 }}
                    src={solutions[activeTab].image}
                    alt={solutions[activeTab].title}
                    className="w-full h-full object-cover"
                  />
                  {/* 优化渐变遮罩：左侧纯白，中间过渡，右侧保留更多图片细节 */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white from-10% via-white/80 via-60% to-transparent"></div>
                </div>

                {/* 文字内容 */}
                <div className="relative z-10 p-8 lg:p-12 h-full flex flex-col justify-center max-w-3xl">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-2 mb-6"
                  >
                    <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-[#1677FF]">
                      {solutions[activeTab].icon}
                    </div>
                    <span className="text-[#1677FF] font-bold tracking-wider uppercase text-sm">
                      {solutions[activeTab].label}
                    </span>
                  </motion.div>

                  <motion.h3
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4 leading-tight"
                  >
                    {solutions[activeTab].title}
                  </motion.h3>

                  <motion.p
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-slate-600 text-lg leading-relaxed mb-8"
                  >
                    {solutions[activeTab].desc}
                  </motion.p>

                  {/* 核心能力标签 */}
                  <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.25 }}
                    className="flex flex-wrap gap-2 mb-10"
                  >
                    {solutions[activeTab].capabilities.map((cap, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 bg-white border border-slate-200 text-slate-600 text-sm font-medium rounded-lg shadow-sm"
                      >
                        {cap}
                      </span>
                    ))}
                  </motion.div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-10">
                    {/* 核心价值 Points */}
                    <motion.div
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">核心价值</h4>
                      <ul className="space-y-3">
                        {solutions[activeTab].points.map((point, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-slate-700">
                            <CheckCircle2 size={18} className="text-[#1677FF] mt-0.5 shrink-0" />
                            <span className="font-medium">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>

                    {/* 核心成果 Metrics */}
                    <motion.div
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.35 }}
                    >
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">成效数据</h4>
                      <div className="flex flex-col gap-5">
                        {solutions[activeTab].metrics.map((metric, i) => (
                          <div key={i} className="flex flex-col">
                            <span className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight leading-none mb-1">
                              {metric.value}
                            </span>
                            <span className="text-sm font-medium text-slate-500">
                              {metric.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="flex items-center gap-4"
                  >
                    <button className="text-white bg-[#1677FF] hover:bg-blue-700 px-6 py-3 rounded-lg font-medium text-lg inline-flex items-center gap-2 group transition-all w-fit shadow-lg shadow-blue-200 hover:shadow-blue-300">
                      <span>查看方案详情</span>
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    
                    {/* 播放控制提示 (可选) */}
                    <button 
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="w-10 h-10 rounded-full bg-slate-100 text-slate-400 hover:text-[#1677FF] flex items-center justify-center transition-colors"
                      title={isPlaying ? "暂停轮播" : "开始轮播"}
                    >
                      {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>

          </div>

        </div>
      </div>
    </section>
  );
}
