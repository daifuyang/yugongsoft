import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWidget from "@/components/FloatingWidget";

// 引入拆分后的组件
import Hero from "@/components/home/Hero";
import LogoWall from "@/components/home/LogoWall";
import CoreServices from "@/components/home/CoreServices";
import IndustrySolutions from "@/components/home/IndustrySolutions"; // 新增
import DeliveryProcess from "@/components/home/DeliveryProcess";
import BrandStory from "@/components/home/BrandStory"; // 新增
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <main className="bg-white font-sans antialiased text-slate-600 selection:bg-[#1677FF] selection:text-white">
      {/* 顶部导航 */}
      <Navbar />

      {/* 1. 首屏 Hero */}
      <Hero />

      {/* 2. 品牌墙 */}
      <LogoWall />

      {/* 3. 核心能力 (Grid) */}
      <CoreServices />

      {/* 4. 行业解决方案 (Tabs) - NEW */}
      <IndustrySolutions />

      {/* 5. 交付流程 */}
      <DeliveryProcess />

      {/* 6. 品牌故事 - NEW */}
      <BrandStory />

      {/* 7. 底部号召 */}
      <CTA />

      {/* 底部 Footer */}
      <Footer />
      
      {/* 悬浮组件 */}
      <FloatingWidget />
    </main>
  );
}