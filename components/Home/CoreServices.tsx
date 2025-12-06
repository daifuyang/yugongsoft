import { 
  AppWindow, 
  Settings, 
  Globe, 
  BarChart3, 
  Wrench, 
  Printer, 
  ChevronRight 
} from "lucide-react";
import FadeIn from "@/components/FadeIn"; // 确保路径正确

export default function CoreServices() {
  const services = [
    { 
      icon: <AppWindow strokeWidth={1.5} size={28} />, 
      title: "小程序/APP开发", 
      desc: "覆盖微信、抖音主流平台，抢占移动端流量红利，让客户随时随地找到您。" 
    },
    { 
      icon: <Settings strokeWidth={1.5} size={28} />, 
      title: "业务系统定制", 
      desc: "贴合业务流程的 CRM、ERP、进销存，拒绝臃肿难用，只做最适合您的功能。" 
    },
    { 
      icon: <Globe strokeWidth={1.5} size={28} />, 
      title: "企业官网建设", 
      desc: "高端品牌形象设计，配套 SEO 搜索引擎优化，提升企业公信力与获客能力。" 
    },
    { 
      icon: <BarChart3 strokeWidth={1.5} size={28} />, 
      title: "数据大屏/报表", 
      desc: "经营数据一目了然，手机端随时查看今日营收、订单量，辅助老板科学决策。" 
    },
    { 
      icon: <Wrench strokeWidth={1.5} size={28} />, 
      title: "旧系统维护/二开", 
      desc: "接手老旧系统维护，修复 Bug，开发新功能，让老系统焕发新生。" 
    },
    { 
      icon: <Printer strokeWidth={1.5} size={28} />, 
      title: "硬件对接/物联网", 
      desc: "连接打印机、扫码枪、生产设备、传感器，实现数据自动采集与上传。" 
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
            <span className="text-[#1677FF] font-semibold tracking-wider text-sm uppercase mb-3 block">Our Services</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
              实用落地的技术服务
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              从咨询规划到落地实施，提供高性价比的全栈技术服务，<br className="hidden md:block" />让技术真正解决业务问题，带来实实在在的增长。
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