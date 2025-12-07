import React from "react";
import FadeIn from "@/components/FadeIn";
/**
 * 特性网格：在不同断点下以统一栅格展示 `FeatureCard`
 * - 响应式：`cols` 控制列数，自动包含移动端到桌面端断点
 * - SSR 友好：纯渲染逻辑，无客户端状态或副作用
 */
import FeatureCard from "./FeatureCard";

/** 卡片数据结构 */
interface FeatureItem {
  icon?: React.ReactNode;
  title: string;
  desc: string;
  href?: string;
  ctaText?: string;
}

/** 组件入参 */
interface FeatureGridProps {
  items: FeatureItem[];
  cols?: 1 | 2 | 3 | 4;
  className?: string;
  animated?: boolean;
  startDelay?: number;
  delayStep?: number;
  variant?: 'plain' | 'badge' | 'card';
  size?: 'sm' | 'md' | 'lg';
}

export default function FeatureGrid({ items, cols = 3, className = "", animated = false, startDelay = 0, delayStep = 0.1, variant = 'plain', size = 'md' }: FeatureGridProps) {
  const gridClass =
    cols === 1
      ? "grid grid-cols-1 gap-8"
      : cols === 2
      ? "grid grid-cols-1 md:grid-cols-2 gap-8"
      : cols === 3
      ? "grid grid-cols-1 md:grid-cols-3 gap-8"
      : "grid grid-cols-2 md:grid-cols-4 gap-8";

  return (
    <div className={`${gridClass} ${className}`}>
      {items.map((item, i) => (
        animated ? (
          <FadeIn key={i} delay={startDelay + i * delayStep} direction="up">
            <FeatureCard icon={item.icon} title={item.title} desc={item.desc} href={item.href} ctaText={item.ctaText} className="h-full" variant={variant} size={size} />
          </FadeIn>
        ) : (
          <FeatureCard key={i} icon={item.icon} title={item.title} desc={item.desc} href={item.href} ctaText={item.ctaText} className="h-full" variant={variant} size={size} />
        )
      ))}
    </div>
  );
}
