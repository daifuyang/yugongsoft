'use client';
import { useState } from 'react';
import { 
  Factory, 
  Landmark, 
  ShoppingBag, 
  Building2, 
  ArrowRight, 
  CheckCircle2,
  Cpu
} from 'lucide-react';
// 1. 引入动画库
import { motion, AnimatePresence } from 'framer-motion';

const solutions = [
  {
    id: 'manufacture',
    label: '智能制造',
    icon: <Factory size={18}/>,
    title: '工业 4.0 智慧工厂',
    desc: '深度融合 IT 与 OT 技术，将生产线数据转化为可执行的商业洞察。实现从订单到交付的全链路数字化追踪。',
    points: ['MES 生产执行系统定制', '设备预测性维护 (IoT)', '供应链协同管理平台'],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'finance',
    label: '智慧金融',
    icon: <Landmark size={18}/>,
    title: '新一代分布式金融核心',
    desc: '基于云原生微服务架构，支撑亿级高并发交易。在保障资金绝对安全的前提下，通过 AI 赋能精准营销与风控。',
    points: ['智能风控中台', '信贷全流程管理', '金融级数据安全加密'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'retail',
    label: '新零售',
    icon: <ShoppingBag size={18}/>,
    title: '全渠道零售中台',
    desc: '打通线上线下人货场，构建统一的会员、商品、订单中心。让数据流动起来，提升库存周转率与客户复购率。',
    points: ['私域流量运营平台', '全渠道库存共享', '门店数字化改造'],
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'gov',
    label: '数字政务',
    icon: <Building2 size={18}/>,
    title: '城市数据大脑',
    desc: '打破部门数据壁垒，实现政务服务一网通办。通过大数据分析辅助城市治理决策，提升公共服务效能。',
    points: ['政务数据共享交换平台', '智慧城市驾驶舱', '互联网+政务服务'],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop'
  }
];

export default function IndustrySolutions() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-24 bg-[#F0F7FF] relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1677ff0a_1px,transparent_1px),linear-gradient(to_bottom,#1677ff0a_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-50 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#000000E0] mb-4">深耕行业，<span className="text-[#1677FF]">专精特新</span></h2>
          <p className="text-slate-500 text-lg">不只是通用软件，我们为您提供切中行业痛点的深度解决方案。</p>
        </div>

        {/* 主体卡片 */}
        <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 overflow-hidden border border-white flex flex-col lg:flex-row min-h-[500px]">
          
          {/* 左侧：导航菜单 */}
          <div className="lg:w-1/3 border-r border-slate-100 bg-white p-6 flex flex-col gap-2 justify-center z-20 relative">
            {solutions.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(index)}
                className={`group flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300 ${
                  activeTab === index 
                    ? 'bg-[#E6F4FF] text-[#1677FF]' 
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                  activeTab === index 
                    ? 'bg-[#1677FF] text-white' 
                    : 'bg-slate-100 text-slate-500 group-hover:bg-white group-hover:text-[#1677FF] group-hover:shadow-sm'
                }`}>
                  {item.icon}
                </div>
                <span className="font-bold text-lg">{item.label}</span>
                {activeTab === index && <ArrowRight className="ml-auto" size={18}/>}
              </button>
            ))}
          </div>

          {/* 右侧：内容展示区 */}
          <div className="lg:w-2/3 relative group overflow-hidden bg-slate-50">
             
             {/* 2. 使用 AnimatePresence 实现切换时的进出动画 */}
             <AnimatePresence mode="wait">
                <motion.div 
                    key={activeTab} // 关键：key 变化触发动画
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 w-full h-full"
                >
                    {/* 背景图容器 */}
                    <div className="absolute inset-0">
                        {/* 图片增加轻微缩放动画 */}
                        <motion.img 
                            initial={{ scale: 1.05 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.8 }}
                            src={solutions[activeTab].image} 
                            alt={solutions[activeTab].title}
                            className="w-full h-full object-cover" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent/20 lg:via-white/80"></div>
                    </div>

                    {/* 文字内容 */}
                    <div className="relative z-10 p-8 lg:p-12 h-full flex flex-col justify-center">
                        <motion.div 
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.1 }}
                            className="inline-flex items-center gap-2 text-[#1677FF] font-bold tracking-widest text-xs uppercase mb-4"
                        >
                            <Cpu size={14} /> Industry Solution
                        </motion.div>
                        
                        <motion.h3 
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-3xl font-bold text-slate-900 mb-6"
                        >
                            {solutions[activeTab].title}
                        </motion.h3>
                        
                        <motion.p 
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-slate-600 text-lg leading-relaxed mb-8 max-w-lg"
                        >
                            {solutions[activeTab].desc}
                        </motion.p>
                        
                        <div className="space-y-4 mb-8">
                            {solutions[activeTab].points.map((point, i) => (
                                <motion.div 
                                    key={i} 
                                    initial={{ x: -10, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.4 + (i * 0.1) }} // 交错动画
                                    className="flex items-center gap-3 bg-white/60 backdrop-blur-sm p-3 rounded-lg border border-white shadow-sm w-fit"
                                >
                                    <CheckCircle2 className="text-[#52C41A]" size={18} />
                                    <span className="text-slate-800 font-medium">{point}</span>
                                </motion.div>
                            ))}
                        </div>

                        <motion.button 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7 }}
                            className="btn btn-primary w-fit px-8 rounded bg-[#1677FF] border-none hover:bg-[#0958D9] shadow-lg shadow-blue-500/20 text-white"
                        >
                            获取该方案报价
                        </motion.button>
                    </div>
                </motion.div>
             </AnimatePresence>

          </div>

        </div>
      </div>
    </section>
  );
}