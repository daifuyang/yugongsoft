import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

/**
 * 特性卡片：用于展示图标 + 标题 + 描述的统一卡片样式
 * - 约束：保留品牌既有配色与阴影风格，不在组件内部引入新的颜色变量
 * - 用法：搭配 `FeatureGrid` 使用，或在列表中单独使用
 */

/** 入参说明 */
interface FeatureCardProps {
  icon?: React.ReactNode;
  title: string;
  desc: string;
  className?: string;
  variant?: 'plain' | 'badge' | 'card';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  ctaText?: string;
}

export default function FeatureCard({
  icon,
  title,
  desc,
  className = "",
  variant = 'plain',
  size = 'lg',
  href,
  ctaText = "了解更多解决方案"
}: FeatureCardProps) {
  // 尺寸配置映射
  const sizeMap = {
    sm: {
      padding: 'p-5',
      title: 'text-lg',
      iconBox: 'w-10 h-10 rounded-lg',
      mb: 'mb-4'
    },
    md: {
      padding: 'p-6',
      title: 'text-xl',
      iconBox: 'w-12 h-12 rounded-xl',
      mb: 'mb-5'
    },
    lg: {
      padding: 'p-8',
      title: 'text-2xl',
      iconBox: 'w-14 h-14 rounded-2xl',
      mb: 'mb-6'
    }
  };

  const currentSize = sizeMap[size];

  // 基础容器样式
  const baseContainer = `${currentSize.padding} transition-all duration-300 group ${className}`;

  // 变体样式逻辑
  const variantStyles = {
    plain: `bg-slate-50 rounded-2xl hover:bg-white border border-slate-100 hover:shadow-xl`,
    badge: `rounded-2xl bg-slate-50 hover:bg-white border border-slate-100 hover:border-blue-100 hover:shadow-xl`,
    card: `rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-100 hover:-translate-y-1`
  };

  const plainContainer = `${baseContainer} ${variantStyles[variant]}`;

  const linkContainer = `group relative h-full flex flex-col justify-between bg-slate-50 hover:bg-white rounded-2xl border border-slate-100 hover:border-blue-100/50 transition-all duration-300 cursor-pointer overflow-hidden hover:shadow-[0_20px_40px_-15px_rgba(22,119,255,0.1)] hover:-translate-y-1 ${currentSize.padding} ${className}`;

  const CardInner = () => (
    <>
      {icon && (
        <div className={currentSize.mb}>
          {variant === 'badge' ? (
            <div className={`${currentSize.iconBox} bg-blue-50 text-[#1677FF] flex items-center justify-center group-hover:scale-110 transition-transform group-hover:bg-[#1677FF] group-hover:text-white duration-300`}>
              {icon}
            </div>
          ) : variant === 'card' ? (
            <div className={`${currentSize.iconBox} bg-blue-50 text-[#1677FF] flex items-center justify-center group-hover:scale-110 transition-transform group-hover:bg-[#1677FF] group-hover:text-white duration-300`}>
              {icon}
            </div>
          ) : (
            <div className="text-slate-300 group-hover:text-[#1677FF] transition-colors flex">
              {icon}
            </div>
          )}
        </div>
      )}

      <h3 className={`${currentSize.title} font-bold text-slate-900 mb-3 group-hover:text-[#1677FF] transition-colors`}>{title}</h3>
      <p className="text-slate-500 leading-relaxed">{desc}</p>

      {href && (
        <div className="pt-4 flex items-center font-semibold text-sm transition-all duration-300 text-slate-400 group-hover:text-[#1677FF]">
          <span>{ctaText}</span>
          <ChevronRight size={16} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      )}

      {href && (
        <div className="absolute -right-6 -top-6 w-24 h-24 bg-blue-50 rounded-full blur-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none"></div>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={linkContainer}>
        <CardInner />
      </Link>
    );
  }

  return (
    <div className={plainContainer}>
      <CardInner />
    </div>
  );
}
