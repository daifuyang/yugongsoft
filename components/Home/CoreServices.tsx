import { AppWindow, Settings, Globe, BarChart3, Wrench, Printer } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import FeatureGrid from "@/components/ui/FeatureGrid";

export default function CoreServices() {
  const services = [
    { 
      icon: <AppWindow strokeWidth={1.5} size={28} />, 
      title: "小程序/APP开发", 
      desc: "覆盖微信、抖音主流平台，抢占移动端流量红利，让客户随时随地找到您。",
      href: "/services/app-dev"
    },
    { 
      icon: <Settings strokeWidth={1.5} size={28} />, 
      title: "业务系统定制", 
      desc: "贴合业务流程的 CRM、ERP、进销存，拒绝臃肿难用，只做最适合您的功能。",
      href: "/services/custom-system"
    },
    { 
      icon: <Globe strokeWidth={1.5} size={28} />, 
      title: "企业官网建设", 
      desc: "高端品牌形象设计，配套 SEO 搜索引擎优化，提升企业公信力与获客能力。",
      href: "/services/website"
    },
    { 
      icon: <BarChart3 strokeWidth={1.5} size={28} />, 
      title: "数据大屏/报表", 
      desc: "经营数据一目了然，手机端随时查看今日营收、订单量，辅助老板科学决策。",
      href: "/services/data-analysis"
    },
    { 
      icon: <Wrench strokeWidth={1.5} size={28} />, 
      title: "旧系统维护/二开", 
      desc: "接手老旧系统维护，修复 Bug，开发新功能，让老系统焕发新生。",
      href: "/services/legacy-system"
    },
    { 
      icon: <Printer strokeWidth={1.5} size={28} />, 
      title: "硬件对接/物联网", 
      desc: "连接打印机、扫码枪、生产设备、传感器，实现数据自动采集与上传。",
      href: "/services/iot"
    },
  ];

  return (
    <Section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-slate-50 to-transparent -z-10 pointer-events-none"></div>

      <FadeIn direction="up" duration={0.6}>
        <SectionHeader
          label="Our Services"
          labelClassName="text-sm font-semibold text-[#1677FF] tracking-wider uppercase mb-3 block"
          title="实用落地的技术服务"
          subtitle={"从咨询规划到落地实施，提供高性价比的全栈技术服务，让技术真正解决业务问题，带来实实在在的增长。"}
          centered
        />
      </FadeIn>

      <FeatureGrid
        items={services.map((s) => ({ href: s.href, icon: s.icon, title: s.title, desc: s.desc, ctaText: "了解更多解决方案" }))}
        cols={3}
        animated
        variant="badge"
        size="lg"
      />
    </Section>
  );
}
