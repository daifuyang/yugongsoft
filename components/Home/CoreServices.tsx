import { 
  Code2, 
  Globe, 
  Database, 
  LayoutTemplate, 
  LineChart, 
  ShieldCheck, 
  ChevronRight 
} from "lucide-react";
import FadeIn from "@/components/FadeIn"; // 确保路径正确

export default function CoreServices() {
  const services = [
    { 
      icon: <Code2 strokeWidth={1.5} size={28} />, 
      title: "敏捷定制开发", 
      desc: "基于云原生的敏捷开发模式，快速响应业务需求，缩短 40% 交付周期。" 
    },
    { 
      icon: <Globe strokeWidth={1.5} size={28} />, 
      title: "云原生迁移", 
      desc: "帮助企业从传统架构平滑迁移至云端，实现弹性伸缩与高可用。" 
    },
    { 
      icon: <Database strokeWidth={1.5} size={28} />, 
      title: "数据中台构建", 
      desc: "打破数据孤岛，实现数据资产化，为企业决策提供精准支撑。" 
    },
    { 
      icon: <LayoutTemplate strokeWidth={1.5} size={28} />, 
      title: "企业应用集成", 
      desc: "连接 ERP、CRM、OA 等异构系统，实现业务流程自动化流转。" 
    },
    { 
      icon: <LineChart strokeWidth={1.5} size={28} />, 
      title: "商业智能 BI", 
      desc: "可视化数据看板，深入挖掘数据价值，助力管理层洞察市场先机。" 
    },
    { 
      icon: <ShieldCheck strokeWidth={1.5} size={28} />, 
      title: "信创安全适配", 
      desc: "国产化环境适配与安全加固，确保核心业务系统自主可控。" 
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* 装饰背景：极淡的顶部光晕 */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-slate-50 to-transparent -z-10 pointer-events-none"></div>

      <div className="container mx-auto px-6">
        {/* 标题部分 */}
        <FadeIn direction="up" duration={0.6}>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[#1677FF] font-semibold tracking-wider text-sm uppercase mb-3 block">Our Capabilities</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
              全面覆盖的数字化能力
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              从咨询规划到落地实施，提供端到端的全栈技术服务，<br className="hidden md:block" />让技术成为业务增长的核心驱动力。
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, idx) => (
            <FadeIn key={idx} delay={idx * 0.1} direction="up" duration={0.5} className="h-full">
              <div className="group relative h-full flex flex-col justify-between
                              bg-slate-50 hover:bg-white rounded-2xl p-8 
                              border border-slate-100 hover:border-blue-100/50 
                              transition-all duration-300 cursor-pointer overflow-hidden
                              hover:shadow-[0_20px_40px_-15px_rgba(22,119,255,0.1)] hover:-translate-y-1">
                
                {/* 上半部分内容 */}
                <div>
                  {/* 图标容器 */}
                  <div className="w-14 h-14 rounded-xl bg-blue-50/50 flex items-center justify-center text-[#1677FF] mb-6 
                                  transition-all duration-300 group-hover:bg-[#1677FF] group-hover:text-white group-hover:scale-110 shadow-sm group-hover:shadow-blue-200">
                    {item.icon}
                  </div>

                  {/* 文字内容 */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#1677FF] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-7 mb-6">
                    {item.desc}
                  </p>
                </div>

                {/* 底部链接 - 关键修改：默认可见(灰色)，Hover变蓝 */}
                <div className="pt-2 flex items-center font-semibold text-sm transition-all duration-300
                                text-slate-400 group-hover:text-[#1677FF]">
                  <span>了解更多解决方案</span>
                  {/* 箭头：Hover时向右移动 */}
                  <ChevronRight 
                    size={16} 
                    className="ml-1 transition-transform duration-300 group-hover:translate-x-1" 
                  />
                </div>

                {/* 装饰：右上角微弱的背景纹理 (可选) */}
                <div className="absolute -right-6 -top-6 w-24 h-24 bg-blue-50 rounded-full blur-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}