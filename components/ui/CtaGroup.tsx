import Link from "next/link";

/**
 * CTA 按钮组：统一“主要行动 + 次要行动”的布局与样式
 * - 主要按钮采用品牌蓝；次要按钮为白底描边，保持既有风格
 * - 使用 `next/link` 保证路由跳转与 SEO 友好
 */

/** 行动项 */
interface Cta {
  label: string;
  href: string;
}

/** 入参说明 */
interface CtaGroupProps {
  primary: Cta;
  secondary?: Cta;
}

export default function CtaGroup({ primary, secondary }: CtaGroupProps) {
  return (
    <div className="flex flex-wrap gap-4">
      <Link href={primary.href}>
        <button className="btn bg-[#1677FF] hover:bg-[#0958D9] text-white px-10 py-4 h-auto rounded-xl font-bold text-lg shadow-xl shadow-blue-500/20 border-none transition-all hover:-translate-y-1">
          {primary.label}
        </button>
      </Link>
      {secondary && (
        <Link href={secondary.href}>
          <button className="btn bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-10 py-4 h-auto rounded-xl font-bold text-lg shadow-sm hover:shadow-md transition-all">
            {secondary.label}
          </button>
        </Link>
      )}
    </div>
  );
}
