import React from "react";

interface ProcessStepCardProps {
  step: string;
  title: string;
  desc: string;
  className?: string;
}

export default function ProcessStepCard({ step, title, desc, className = "" }: ProcessStepCardProps) {
  return (
    <div className={`bg-white p-6 rounded-2xl shadow-sm border border-slate-100 relative group hover:-translate-y-2 transition-transform duration-300 ${className}`}>
      <div className="w-12 h-12 bg-[#1677FF] text-white rounded-xl flex items-center justify-center text-xl font-bold mb-4 shadow-lg shadow-blue-500/30">
        {step}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

