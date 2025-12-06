import Link from "next/link";
import { Phone, Mail, ShieldCheck, ChevronRight } from "lucide-react";

export default function Footer() {
  return (
    // 背景色使用蚂蚁系的深蓝黑，字体颜色强制为白色系
    <footer className="bg-[#001529] text-white pt-20 pb-10 font-sans border-t border-[#1677FF]/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* 1. 品牌信息列 */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              {/* 深色模式适配 Logo: 将后山改为白色，前山保持青色 */}
              <svg viewBox="0 0 32 32" fill="none" className="w-9 h-9" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 28L14 8L24 28H4Z" fill="#FFFFFF" />
                <path d="M12 28L20 12L28 28H12Z" fill="#22D3EE" className="mix-blend-normal opacity-90" />
              </svg>
              <span className="text-2xl font-bold tracking-wider text-white">愚公软件</span>
            </div>
            
            <p className="text-white/65 text-sm leading-7 max-w-xs">
              以移山之志，铸数字基石。<br/>
              专注为中小企业提供高性价比的数字化解决方案，让技术成为业务增长的坚实引擎。
            </p>
            
            <div className="pt-2 space-y-3">
              <div className="flex items-center gap-3 group cursor-pointer">
                 <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#1677FF] transition-colors">
                    <Phone size={14} className="text-white" />
                 </div>
                 <span className="font-bold text-xl text-white">400-888-6666</span>
              </div>
              <div className="flex items-center gap-3 text-white/65 text-sm group cursor-pointer hover:text-white transition-colors">
                 <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                    <Mail size={14} />
                 </div>
                 <span>contact@yugong.com</span>
              </div>
            </div>
          </div>

          {/* 2. 解决方案 - 增加 hover 效果 */}
          <div>
            <h3 className="text-white font-bold text-base mb-8 relative inline-block after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-0.5 after:bg-[#1677FF]">
                解决方案
            </h3>
            <ul className="space-y-4 text-sm text-white/65">
              {[
                { title: 'CRM客户关系管理', href: '/solutions/crm' },
                { title: '数字工厂MES', href: '/solutions/mes' },
                { title: '智能服务工单', href: '/solutions/workorder' },
                { title: '智慧教育', href: '/solutions/edu' },
                { title: '智慧餐饮', href: '/solutions/catering' },
                { title: '数字化电商', href: '/solutions/ecommerce' },
                { title: '贸易供应链', href: '/solutions/supplychain' },
                { title: 'WMS仓库管理', href: '/solutions/wms' }
              ].map((item) => (
                <li key={item.title}>
                  <Link href={item.href} className="hover:text-[#1677FF] transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-white/20 rounded-full group-hover:bg-[#1677FF] transition-colors"></span>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. 关于我们 */}
          <div>
            <h3 className="text-white font-bold text-base mb-8 relative inline-block after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-0.5 after:bg-[#1677FF]">
                关于我们
            </h3>
            <ul className="space-y-4 text-sm text-white/65">
              {[
                { title: '关于愚公', href: '/about' },
                { title: '产品中心', href: '/products' },
                { title: '成功案例', href: '/cases' },
                { title: '新闻动态', href: '#' },
                { title: '加入我们', href: '/about' }
              ].map((item) => (
                <li key={item.title}>
                    <Link href={item.href} className="hover:text-[#1677FF] transition-colors flex items-center gap-2 group">
                        <span className="w-1 h-1 bg-white/20 rounded-full group-hover:bg-[#1677FF] transition-colors"></span>
                        {item.title}
                    </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. 关注我们 */}
          <div>
            <h3 className="text-white font-bold text-base mb-8 relative inline-block after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-0.5 after:bg-[#1677FF]">
                关注我们
            </h3>
            <div className="flex gap-5">
              {/* 二维码容器：增加白底让它更清晰 */}
              <div className="bg-white p-2 rounded-lg w-32 h-32 shadow-lg shadow-black/20 shrink-0">
                 {/* 模拟二维码图案 */}
                 <div className="w-full h-full bg-[#F5F5F5] flex items-center justify-center text-slate-400 text-xs text-center border border-slate-200 rounded">
                    <span className="scale-90 leading-tight">微信公众号<br/>二维码</span>
                 </div>
              </div>
              <div className="flex flex-col justify-center space-y-3">
                 <div className="space-y-1">
                    <p className="text-white font-medium text-sm">扫码关注公众号</p>
                    <p className="text-white/40 text-xs">获取最新行业白皮书</p>
                 </div>
                 <button className="btn btn-xs btn-outline border-white/30 text-white hover:bg-[#1677FF] hover:border-[#1677FF] font-normal">
                    在线咨询
                 </button>
              </div>
            </div>
          </div>
        </div>

        {/* 底部版权线 */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
           <div className="flex flex-col md:flex-row gap-2 md:gap-8 text-center md:text-left items-center">
              <span>© 2025 愚公软件技术有限公司</span>
              <span className="hidden md:inline text-white/10">|</span>
              <a href="#" className="hover:text-white/80 transition-colors">京ICP备12345678号-1</a>
              <a href="#" className="flex items-center gap-1 hover:text-white/80 transition-colors">
                 <ShieldCheck size={12}/> 京公网安备 11010802020202号
              </a>
           </div>
           <div className="flex gap-6">
              <Link href="#" className="hover:text-white transition-colors">服务条款</Link>
              <Link href="#" className="hover:text-white transition-colors">隐私声明</Link>
              <Link href="#" className="hover:text-white transition-colors">网站地图</Link>
           </div>
        </div>
      </div>
    </footer>
  );
}