import React from "react";

/**
 * 通用 `Section` 容器组件
 * - 语义化区块容器，统一外边距与网格容器规范（`container mx-auto px-6`）
 * - SSR 友好：纯函数式渲染，无副作用；可在 Next.js App Router 服务端渲染使用
 * - 风格约束：仅提供结构与间距，遵循现有网站配色与样式，不自行覆盖颜色
 */

/** 组件入参 */
interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  as?: "section" | "div";
}

export default function Section({
  children,
  className = "py-24",
  containerClassName = "",
  as = "section",
}: SectionProps) {
  const Tag: "section" | "div" = as;
  return (
    <Tag className={className}>
      <div className={`container mx-auto px-6 ${containerClassName}`}>{children}</div>
    </Tag>
  );
}

