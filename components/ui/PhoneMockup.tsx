import React from 'react';

interface PhoneMockupProps {
  children: React.ReactNode;
  className?: string;
  /**
   * 状态栏时间，默认 "9:41"
   */
  time?: string;
}

/**
 * 手机样机组件
 * - 采用 Clean & Flat 风格
 * - 包含状态栏
 * - 适用于展示移动端界面
 */
export default function PhoneMockup({ children, className = "", time = "9:41" }: PhoneMockupProps) {
  return (
    <div className={`relative mx-auto border-slate-900 bg-slate-900 border-[8px] rounded-[3rem] h-[640px] w-[320px] shadow-2xl overflow-hidden ring-1 ring-slate-900/5 ${className}`}>
      {/* Screen Container */}
      <div className="rounded-[2.5rem] overflow-hidden w-full h-full bg-white flex flex-col relative">
        
        {/* Status Bar */}
        <div className="h-8 bg-white flex justify-between items-center px-6 pt-2 shrink-0 select-none z-20">
          <div className="text-[10px] font-bold text-slate-900">{time}</div>
          <div className="flex gap-1">
            <div className="w-3 h-2 bg-slate-900 rounded-[1px]"></div>
            <div className="w-0.5 h-2 bg-slate-900/30 rounded-[1px]"></div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 relative flex flex-col overflow-hidden">
            {children}
        </div>

      </div>
    </div>
  );
}
