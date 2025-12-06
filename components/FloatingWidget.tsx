'use client';
import { useState, useEffect } from 'react';
import { MessageCircle, Phone, ArrowUp, QrCode } from "lucide-react";

export default function FloatingWidget() {
  const [isVisible, setIsVisible] = useState(false);

  // 监听滚动，只在向下滚动一定距离后显示“回到顶部”
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed right-6 bottom-10 z-50 flex flex-col gap-4">
      
      {/* 1. 在线咨询 (核心转化 - 品牌蓝) */}
      <div className="group relative">
        {/* 提示气泡 (Hover显示) */}
        <div className="absolute right-full top-0 mr-4 opacity-0 translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
           <div className="bg-white p-3 rounded-lg shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-slate-100 w-32 text-center">
              {/* 模拟二维码 */}
              <div className="w-24 h-24 bg-slate-100 mx-auto mb-2 flex items-center justify-center rounded">
                  <QrCode className="text-slate-400" size={32}/>
              </div>
              <p className="text-xs text-slate-500 font-medium">微信扫码咨询</p>
              {/* 小三角 */}
              <div className="absolute top-4 -right-1.5 w-3 h-3 bg-white border-t border-r border-slate-100 transform rotate-45"></div>
           </div>
        </div>

        <button className="flex items-center justify-center w-12 h-12 bg-[#1677FF] text-white rounded-xl shadow-[0_8px_20px_rgba(22,119,255,0.3)] hover:bg-[#0958D9] hover:scale-105 transition-all duration-300">
          <MessageCircle size={24} />
        </button>
      </div>

      {/* 2. 电话咨询 (次要 - 白底灰字) */}
      <div className="group relative">
        <div className="absolute right-full top-2 mr-4 opacity-0 translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap">
           <div className="bg-[#1F2937] text-white px-4 py-2 rounded-lg text-sm font-bold shadow-xl flex items-center gap-2">
             <Phone size={14} className="text-[#1677FF]" />
             400-888-6666
             {/* 小三角 */}
             <div className="absolute top-3 -right-1 w-2 h-2 bg-[#1F2937] transform rotate-45"></div>
           </div>
        </div>

        <button className="flex items-center justify-center w-12 h-12 bg-white text-slate-600 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.08)] border border-slate-100 hover:text-[#1677FF] hover:border-[#1677FF] transition-all duration-300">
          <Phone size={22} />
        </button>
      </div>

      {/* 3. 回到顶部 (功能 - 白底) */}
      <button 
        onClick={scrollToTop} 
        className={`flex items-center justify-center w-12 h-12 bg-white text-slate-400 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.08)] border border-slate-100 hover:text-[#1677FF] hover:-translate-y-1 transition-all duration-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <ArrowUp size={22}/>
      </button>
    </div>
  );
}