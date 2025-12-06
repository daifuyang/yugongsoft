import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export default function DeliveryProcess() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2 relative">
            <div className="absolute inset-0 bg-[#F5F7FA] rounded-2xl transform rotate-3 z-0"></div>
            <div className="relative z-10 bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#E6F4FF] text-[#1677FF] flex items-center justify-center font-bold text-sm mt-1">1</div>
                  <div>
                    <h4 className="font-bold text-slate-800">需求深度调研</h4>
                    <p className="text-sm text-slate-500 mt-1">专家团队驻场，输出详细蓝图</p>
                  </div>
                </div>
                <div className="w-0.5 h-6 bg-slate-100 ml-4"></div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#FFF7E6] text-[#FA8C16] flex items-center justify-center font-bold text-sm mt-1">2</div>
                  <div>
                    <h4 className="font-bold text-slate-800">敏捷迭代开发</h4>
                    <p className="text-sm text-slate-500 mt-1">双周冲刺，进度实时可见</p>
                  </div>
                </div>
                <div className="w-0.5 h-6 bg-slate-100 ml-4"></div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#F6FFED] text-[#52C41A] flex items-center justify-center font-bold text-sm mt-1">3</div>
                  <div>
                    <h4 className="font-bold text-slate-800">多环境部署交付</h4>
                    <p className="text-sm text-slate-500 mt-1">源码交付，完整知识转移</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-[#000000E0] mb-6">不仅交付代码，<br />更交付<span className="text-[#1677FF]">确定性</span></h2>
            <p className="text-slate-500 mb-8 leading-relaxed text-lg">
              传统的软件外包往往面临延期、超支、质量不可控的风险。愚公软件通过标准化的管理体系，让软件开发像工业生产一样精密可控。
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-slate-700 font-medium">
                <ShieldCheck className="text-[#52C41A]" size={20} /> <span>透明化项目管理，进度实时可查</span>
              </li>
              <li className="flex items-center gap-3 text-slate-700 font-medium">
                <ShieldCheck className="text-[#52C41A]" size={20} /> <span>严格的代码审查与自动化测试</span>
              </li>
              <li className="flex items-center gap-3 text-slate-700 font-medium">
                <ShieldCheck className="text-[#52C41A]" size={20} /> <span>终身售后技术支持</span>
              </li>
            </ul>
            <Link href="/delivery">
              <button className="btn btn-outline border-slate-200 text-slate-600 hover:border-[#1677FF] hover:text-[#1677FF] hover:bg-blue-50 mt-10 px-8 h-12 rounded">
                查看交付标准
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}