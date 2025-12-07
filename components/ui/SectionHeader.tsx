/**
 * 标题区组件，用于区块的主标题与副标题展示
 * - SEO 友好：使用语义化 `h2` 作为区块标题；页面级主标题仍使用各页面的 `h1`
 * - 风格一致：继承站点字体与颜色，不做自定义配色
 */
interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  label?: string;
  centered?: boolean;
  className?: string;
  labelClassName?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  label,
  centered = false,
  className = "",
  labelClassName = "text-sm font-semibold text-[#1677FF] tracking-wide",
}: SectionHeaderProps) {
  return (
    <div
      className={`max-w-3xl ${centered ? "mx-auto text-center" : "text-left"} mb-16 ${className}`}
    >
      {label && <span className={labelClassName}>{label}</span>}
      <h2 className="text-3xl font-bold text-slate-900 mb-4">{title}</h2>
      {subtitle && <p className="text-slate-500 text-lg">{subtitle}</p>}
    </div>
  );
}
