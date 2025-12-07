import Link from 'next/link';

/**
 * CTA 区域 (Call To Action)
 * 
 * 用于页面底部的行动号召区域，使用品牌色背景，强调转化。
 * 包含标题、描述文案以及主次两个操作按钮。
 * 
 * @example
 * <CtaSection
 *   title="准备好升级您的数字化引擎了吗？"
 *   description="每天有超过 100 家企业选择与我们同行。"
 *   primaryAction={{ label: "免费获取报价", href: "/contact" }}
 *   secondaryAction={{ label: "联系我们", href: "/about" }}
 * />
 */

interface Action {
  label: string;
  href: string;
  onClick?: () => void;
}

interface CtaSectionProps {
  /** 标题 */
  title: string;
  /** 描述文本 */
  description?: React.ReactNode;
  /** 主要行动按钮 (白底蓝字) */
  primaryAction: Action;
  /** 次要行动按钮 (白色描边) */
  secondaryAction?: Action;
  /** 额外的自定义类名 */
  className?: string;
}

export default function CtaSection({
  title,
  description,
  primaryAction,
  secondaryAction,
  className = ""
}: CtaSectionProps) {
  return (
    <section className={`py-24 bg-[#1677FF] text-white relative overflow-hidden ${className}`}>
      {/* 背景装饰：波纹光效 */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
           <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
        </svg>
      </div>
      {/* 网格纹理 */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>
      
      {/* 光晕效果 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white rounded-full blur-[150px] opacity-10"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">
          {title}
        </h2>
        
        {description && (
          <div className="text-blue-100 mb-12 max-w-2xl mx-auto text-xl opacity-90 font-light">
            {description}
          </div>
        )}
        
        <div className="flex flex-col sm:flex-row justify-center gap-5">
          {/* Primary Button */}
          {primaryAction.onClick ? (
             <button onClick={primaryAction.onClick} className="btn bg-white text-[#1677FF] hover:bg-blue-50 border-none btn-lg px-10 h-14 min-h-0 rounded font-bold shadow-2xl shadow-blue-900/20 text-lg">
                {primaryAction.label}
             </button>
          ) : (
             <Link href={primaryAction.href}>
                <button className="btn bg-white text-[#1677FF] hover:bg-blue-50 border-none btn-lg px-10 h-14 min-h-0 rounded font-bold shadow-2xl shadow-blue-900/20 text-lg">
                  {primaryAction.label}
                </button>
             </Link>
          )}

          {/* Secondary Button */}
          {secondaryAction && (
             secondaryAction.onClick ? (
                <button onClick={secondaryAction.onClick} className="btn btn-outline border-white/60 text-white hover:bg-white/10 hover:border-white btn-lg px-10 h-14 min-h-0 rounded font-normal text-lg">
                    {secondaryAction.label}
                </button>
             ) : (
                <Link href={secondaryAction.href}>
                    <button className="btn btn-outline border-white/60 text-white hover:bg-white/10 hover:border-white btn-lg px-10 h-14 min-h-0 rounded font-normal text-lg">
                    {secondaryAction.label}
                    </button>
                </Link>
             )
          )}
        </div>
      </div>
    </section>
  );
}
