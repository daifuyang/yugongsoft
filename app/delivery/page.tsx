'use client';

import {
  Code2,
  CheckCircle2,
  FileText,
  Layout,
  Database,
  ShieldCheck,
  Clock
} from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import Link from 'next/link';

export default function DeliveryStandard() {
  return (
    <main className="bg-white font-sans selection:bg-[#1677FF] selection:text-white">
      
      {/* --- Hero Section --- */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#F5F7FA]">
        <div className="absolute inset-0 z-0">
           <div className="absolute top-0 left-0 right-0 h-[600px] bg-gradient-to-b from-[#E6F7FF] to-transparent opacity-70"></div>
           <div className="absolute inset-0 bg-[linear-gradient(to_right,#1677ff08_1px,transparent_1px),linear-gradient(to_bottom,#1677ff08_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <FadeIn delay={0.1} direction="up">
             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-100 shadow-sm shadow-blue-100/50 mb-8">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1677FF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#1677FF]"></span>
              </span>
              <span className="text-sm font-semibold text-[#1677FF] tracking-wide">ISO 级交付标准</span>
            </div>
          </FadeIn>
          <FadeIn delay={0.2} direction="up">
            <h1 className="text-5xl lg:text-7xl font-bold text-[#000000E0] leading-[1.1] tracking-tight mb-6">
              拒绝“烂尾”<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1677FF] to-[#00C6FF]">
                交付确定性与信任
              </span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.3} direction="up">
            <p className="text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto">
              我们深知软件外包行业的痛点。因此，愚公软件制定了严苛的标准化交付SOP，从需求调研到最终上线，每一个环节都有据可依，确保项目按时、按质、按量交付。
            </p>
          </FadeIn>
        </div>
      </section>

      {/* --- The 6-Step Process --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
            <FadeIn direction="up">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">全流程标准化作业</h2>
                    <p className="text-slate-500 text-lg">六大阶段，32个关键节点，环环相扣</p>
                </div>
            </FadeIn>

            <div className="relative">
                {/* Connecting Line (Desktop) */}
                <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 z-0"></div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 lg:gap-6 relative z-10">
                    {[
                        { step: "01", title: "需求调研", desc: "业务梳理、原型设计、PRD文档" },
                        { step: "02", title: "UI/UE设计", desc: "风格定义、高保真UI图、交互设计" },
                        { step: "03", title: "程序开发", desc: "架构设计、前端开发、后端开发" },
                        { step: "04", title: "测试验收", desc: "单元测试、集成测试、压力测试" },
                        { step: "05", title: "部署上线", desc: "服务器配置、域名解析、正式发布" },
                        { step: "06", title: "运维保障", desc: "故障排查、定期备份、功能迭代" },
                    ].map((item, i) => (
                        <FadeIn key={i} delay={i * 0.1} direction="up">
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 relative group hover:-translate-y-2 transition-transform duration-300 h-full">
                                <div className="w-12 h-12 bg-[#1677FF] text-white rounded-xl flex items-center justify-center text-xl font-bold mb-4 shadow-lg shadow-blue-500/30 relative z-10">
                                    {item.step}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* --- Deliverables --- */}
      <section className="py-24 bg-[#F5F7FA]">
        <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
                <div className="lg:w-1/2">
                    <FadeIn direction="right">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">交付物清单</h2>
                        <p className="text-slate-500 text-lg mb-8">
                            我们坚持 <span className="font-bold text-slate-800">源码交付</span>。除了可运行的系统，您还将获得完整的开发资产，确保对项目的绝对控制权。
                        </p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { icon: <Code2 size={18} />, text: "前后端完整源代码" },
                                { icon: <Database size={18} />, text: "数据库设计文档 / SQL脚本" },
                                { icon: <Layout size={18} />, text: "UI 源文件 (Figma/Sketch)" },
                                { icon: <FileText size={18} />, text: "产品需求文档 (PRD)" },
                                { icon: <FileText size={18} />, text: "接口文档 (API Docs)" },
                                { icon: <FileText size={18} />, text: "系统部署与操作手册" },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
                                    <div className="text-[#1677FF]">{item.icon}</div>
                                    <span className="text-slate-700 font-medium text-sm">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </FadeIn>
                </div>
                <div className="lg:w-1/2 relative">
                    <FadeIn direction="left">
                        <div className="bg-white p-8 rounded-2xl shadow-2xl border border-slate-100 relative z-10 rotate-2 hover:rotate-0 transition-transform duration-500">
                            <div className="absolute -top-4 -right-4 bg-[#1677FF] text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                                100% 知识产权归属
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
                                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-[#1677FF]">
                                        <FileText size={20} />
                                    </div>
                                    <div>
                                        <div className="font-bold text-slate-800">Project_Handover.zip</div>
                                        <div className="text-xs text-slate-400">245 MB · 包含所有开发资产</div>
                                    </div>
                                </div>
                                <div className="space-y-2 pl-2">
                                    <div className="flex items-center gap-3 text-sm text-slate-600">
                                        <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
                                        <span>/src (Source Code)</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-slate-600">
                                        <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
                                        <span>/docs (Design & Requirements)</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-slate-600">
                                        <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
                                        <span>/database (SQL Dumps)</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-slate-600">
                                        <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
                                        <span>README.md (Deployment Guide)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-0 right-0 w-full h-full bg-slate-100 rounded-2xl -z-10 rotate-6 scale-95"></div>
                    </FadeIn>
                </div>
            </div>
        </div>
      </section>

      {/* --- SLA & Guarantee --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
            <FadeIn direction="up">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">服务级别协议 (SLA)</h2>
                    <p className="text-slate-500 text-lg">不仅是口头承诺，更是写入合同的法律条款</p>
                </div>
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-8">
                <FadeIn delay={0.1} direction="up">
                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 text-center hover:border-blue-200 transition-colors">
                        <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center text-blue-500 shadow-sm mb-6">
                            <ShieldCheck size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">1年免费质保</h3>
                        <p className="text-slate-600">
                            验收通过后一年内，提供免费的 Bug 修复与技术支持服务，确保系统稳定运行。
                        </p>
                    </div>
                </FadeIn>
                <FadeIn delay={0.2} direction="up">
                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 text-center hover:border-blue-200 transition-colors">
                        <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center text-green-500 shadow-sm mb-6">
                            <Clock size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">7x24h 应急响应</h3>
                        <p className="text-slate-600">
                            遇到紧急故障（如服务器宕机），技术团队承诺在 30 分钟内响应，2 小时内出具解决方案。
                        </p>
                    </div>
                </FadeIn>
                <FadeIn delay={0.3} direction="up">
                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 text-center hover:border-blue-200 transition-colors">
                        <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center text-purple-500 shadow-sm mb-6">
                            <CheckCircle2 size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">按阶段付款</h3>
                        <p className="text-slate-600">
                            3-4-3 或 4-4-2 付款方式。每个阶段验收合格后才支付下一笔款项，保障您的资金安全。
                        </p>
                    </div>
                </FadeIn>
            </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/images/grid.svg')]"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
           <FadeIn direction="up">
             <h2 className="text-4xl font-bold text-white mb-6">准备好开始您的项目了吗？</h2>
             <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
               专业的团队，标准化的流程，为您打造高品质的软件产品。
             </p>
             <Link href="/">
                <button className="btn bg-[#1677FF] hover:bg-[#0958D9] text-white px-12 py-5 h-auto rounded-full font-bold text-xl shadow-xl shadow-blue-500/30 border-none transition-all hover:scale-105">
                  联系我们，免费获取方案
                </button>
             </Link>
           </FadeIn>
        </div>
      </section>

    </main>
  );
}
