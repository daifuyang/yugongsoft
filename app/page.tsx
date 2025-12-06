import FloatingWidget from "@/components/FloatingWidget";

// 引入拆分后的组件
import Hero from "@/components/Home/Hero";
import LogoWall from "@/components/Home/LogoWall";
import CoreServices from "@/components/Home/CoreServices";
import IndustrySolutions from "@/components/Home/IndustrySolutions"; // 新增
import DeliveryProcess from "@/components/Home/DeliveryProcess";
import BrandStory from "@/components/Home/BrandStory"; // 新增
import CTA from "@/components/Home/CTA";

export default function Home() {
  return (
    <main className="bg-white font-sans antialiased text-slate-600 selection:bg-[#1677FF] selection:text-white">
      {/* 1. 首屏 Hero */}
      <Hero />

      {/* 2. 品牌墙 */}
      <LogoWall />

      {/* 3. 核心能力 (Grid) */}
      <CoreServices />

      {/* 4. 行业解决方案 (Tabs) */}
      <IndustrySolutions />

      {/* 5. 交付流程 */}
      <DeliveryProcess />

      {/* 6. 品牌故事  */}
      <BrandStory />

      {/* 7. 底部号召 */}
      <CTA />
      
      {/* 悬浮组件 */}
      <FloatingWidget />
    </main>
  );
}