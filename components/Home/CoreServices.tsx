import { Code2, Globe, Database, LayoutTemplate, LineChart, ShieldCheck, ChevronRight } from "lucide-react";
import FadeIn from "@/components/FadeIn"; // 引入我们之前封装的通用动画组件

export default function CoreServices() {
  const services = [
    { icon: <Code2 />, title: "敏捷定制开发", desc: "基于云原生的敏捷开发模式，快速响应业务需求，缩短 40% 交付周期。" },
    { icon: <Globe />, title: "云原生迁移", desc: "帮助企业从传统架构平滑迁移至云端，实现弹性伸缩与高可用。" },
    { icon: <Database />, title: "数据中台构建", desc: "打破数据孤岛，实现数据资产化，为企业决策提供精准支撑。" },
    { icon: <LayoutTemplate />, title: "企业应用集成", desc: "连接 ERP、CRM、OA 等异构系统，实现业务流程自动化流转。" },
    { icon: <LineChart />, title: "商业智能 BI", desc: "可视化数据看板，深入挖掘数据价值，助力管理层洞察市场先机。" },
    { icon: <ShieldCheck />, title: "信创安全适配", desc: "国产化环境适配与安全加固，确保核心业务系统自主可控。" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* 标题部分：整体淡入 */}
        <FadeIn direction="up" duration={0.6}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#000000E0] mb-4">全面覆盖的数字化能力</h2>
            <p className="text-slate-500 text-lg">从咨询规划到落地实施，提供端到端的全栈技术服务。</p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item, idx) => (
            // 卡片部分：交错淡入
            // key={idx} 必须加在 FadeIn 上
            // delay={idx * 0.1} 实现波浪效果：第1个延迟0s，第2个0.1s，第3个0.2s...
            <FadeIn key={idx} delay={idx * 0.1} direction="up" duration={0.5}>
              <div className="group bg-[#FAFAFA] rounded-xl p-8 border border-transparent hover:bg-white hover:border-[#1677FF] hover:shadow-[0_8px_30px_rgba(22,119,255,0.1)] transition-all duration-300 cursor-pointer h-full">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-[#1677FF] mb-6 shadow-sm group-hover:bg-[#1677FF] group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-[#000000E0] mb-3 group-hover:text-[#1677FF] transition-colors">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">{item.desc}</p>
                <div className="mt-6 flex items-center text-[#1677FF] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0">
                  了解更多 <ChevronRight size={16} className="ml-1" />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}