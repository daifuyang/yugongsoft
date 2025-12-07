import React from 'react';
import FadeIn from '@/components/FadeIn';
import { Metadata } from 'next';
import { 
  Rocket, 
  PenTool, 
  Users, 
  Bot, 
  Layout, 
  Database, 
  Server, 
  ArrowRight, 
  Github,
  ExternalLink,
  BookOpen,
  Layers,
  Code2,
  PieChart,
  Activity,
  Box,
  Settings
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '产品中心 - 愚公软件',
  description: '愚公软件自主研发的技术产品矩阵，涵盖企业级管理系统、TipTap组件库、高性能API服务及行业解决方案。',
};

const products = [
  {
    id: 'admin',
    name: '移山通用管理系统',
    enName: 'Yishan Admin System',
    description: '基于 React 19、Umi 4 与 Ant Design 5 打造的企业级中后台解决方案。采用 Monorepo 架构，内置 RBAC 权限、OpenAPI 自动化对接与完整文档体系。',
    tags: ['React 19', 'Ant Design Pro', 'Umi 4', 'Fastify'],
    icon: <Rocket className="w-8 h-8 text-white" />,
    color: 'bg-blue-600',
    link: 'https://github.com/daifuyang/yishan',
    linkText: 'GitHub 仓库',
    highlight: true
  },
  {
    id: 'tiptap',
    name: '移山 TipTap 组件库',
    enName: 'Yishan TipTap Library',
    description: '基于 TipTap 3 与 Radix UI 构建的 Headless 富文本编辑器组件库。支持 React 框架，提供开箱即用的 Block 级编辑体验与 AI 扩展能力。',
    tags: ['TipTap 3', 'Radix UI', 'Rollup构建'],
    icon: <PenTool className="w-8 h-8 text-white" />,
    color: 'bg-purple-600',
    link: '#',
    linkText: '组件文档'
  },
  {
    id: 'api',
    name: '移山 API 服务引擎',
    enName: 'Yishan API Engine',
    description: '高性能后端服务框架。基于 Fastify 5 + Prisma 6 开发，集成 TypeBox 强类型校验与 JWT 认证，支持 Redis 缓存与 Swagger 文档自动生成。',
    tags: ['Fastify 5', 'Prisma 6', 'TypeBox'],
    icon: <Server className="w-8 h-8 text-white" />,
    color: 'bg-cyan-600',
    link: '#',
    linkText: '架构详情'
  },
  {
    id: 'docs',
    name: '移山文档平台',
    enName: 'Yishan Docs Platform',
    description: '基于 Docusaurus 3 构建的现代化文档站点解决方案。支持 Markdown/MDX 编写，内置全文搜索、版本控制与多语言国际化支持。',
    tags: ['Docusaurus 3', 'React 19', 'MDX'],
    icon: <BookOpen className="w-8 h-8 text-white" />,
    color: 'bg-orange-500',
    link: '#',
    linkText: '查看示例'
  },
  {
    id: 'crm',
    name: '移山 CRM 客户管理',
    enName: 'Yishan CRM',
    description: '深度集成的客户全生命周期管理系统。基于移山 Admin 框架开发，实现线索、商机、合同、回款的全流程闭环管理。',
    tags: ['销售管理', '公海池', '数据分析'],
    icon: <Users className="w-8 h-8 text-white" />,
    color: 'bg-green-600',
    link: '/solutions/crm',
    linkText: '了解方案'
  },
  {
    id: 'agent',
    name: '移山 AI 智能体',
    enName: 'Yishan AI Agent',
    description: '具备自主决策能力的数字员工。能够理解自然语言指令，自动调用系统 API 完成数据查询、报表生成等复杂业务流程。',
    tags: ['自主决策', 'RAG', '自动化'],
    icon: <Bot className="w-8 h-8 text-white" />,
    color: 'bg-indigo-600',
    link: '#',
    linkText: '申请内测'
  },
  {
    id: 'lowcode',
    name: '移山低代码平台',
    enName: 'Yishan Low-Code',
    description: '可视化应用构建平台。通过拖拽组件与配置流程，非技术人员也能快速搭建基于移山架构的企业级应用，大幅降低研发成本。',
    tags: ['拖拽式', '可视化', '快速交付'],
    icon: <Layout className="w-8 h-8 text-white" />,
    color: 'bg-pink-600',
    link: '#',
    linkText: '立即体验'
  }
];

export default function ProductsPage() {
  return (
    <main className="bg-white min-h-screen selection:bg-[#1677FF] selection:text-white">
      {/* Hero Section - Consistent with About Page */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 overflow-hidden bg-[#F5F7FA]">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 right-0 h-[600px] bg-gradient-to-b from-blue-50/80 to-transparent"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1677ff08_1px,transparent_1px),linear-gradient(to_bottom,#1677ff08_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
          
          {/* Subtle Decorative Blobs */}
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-200/20 rounded-full blur-[80px] animate-pulse"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-200/20 rounded-full blur-[80px]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <FadeIn direction="up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-blue-100 shadow-sm shadow-blue-100/50 mb-8">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1677FF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#1677FF]"></span>
              </span>
              <span className="text-sm font-semibold text-[#1677FF] tracking-wide">愚公产品矩阵</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1} direction="up">
            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.15] tracking-tight mb-8">
              全栈式数字化<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1677FF] to-[#4096ff]">产品体系</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2} direction="up">
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-12 font-light">
              从底层开发框架到上层行业应用，我们提供全栈式的数字化产品体系，帮助企业构建稳固的技术底座，让数字化转型更简单、更高效。
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Featured Product (Highlight) - Normal Flow */}
      <section className="container mx-auto px-6 py-20">
        <FadeIn delay={0.2}>
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl shadow-blue-900/5 border border-slate-100 flex flex-col md:flex-row gap-12 items-center relative overflow-hidden">
             {/* 背景装饰 */}
             <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-blue-50/30 to-transparent -z-10"></div>

             <div className="flex-1 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-primary rounded-full text-xs font-bold uppercase tracking-wide border border-blue-100">
                   <Layers size={14} />
                   Core Framework
                </div>
                <h2 className="text-3xl font-bold text-slate-900">
                  移山通用管理系统
                  <span className="block text-lg font-normal text-slate-500 mt-2">Yishan Universal Management System</span>
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed">
                  一套基于 <strong>React 19</strong> 与 <strong>Ant Design Pro</strong> 的现代化 Monorepo 解决方案。
                  集成了 Umi 4 前端框架、Fastify 5 高性能后端与 Prisma 6 ORM。
                  内置完善的 RBAC 权限体系与 OpenAPI 自动化工具，让企业级开发回归业务本质。
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                   <span className="badge badge-neutral badge-outline text-xs py-3">React 19</span>
                   <span className="badge badge-neutral badge-outline text-xs py-3">Umi 4</span>
                   <span className="badge badge-neutral badge-outline text-xs py-3">Ant Design 5</span>
                   <span className="badge badge-neutral badge-outline text-xs py-3">Fastify 5</span>
                </div>
                <div className="flex flex-wrap gap-4 pt-4">
                   <a 
                     href="https://admin.zerocmf.com" 
                     target="_blank"
                     className="btn bg-primary hover:bg-blue-700 text-white border-none px-8 rounded-xl shadow-lg shadow-blue-500/30 flex items-center gap-2"
                   >
                     <ExternalLink size={18} />
                     在线演示
                   </a>
                   <a 
                     href="https://github.com/daifuyang/yishan" 
                     target="_blank"
                     className="btn btn-outline border-slate-200 hover:bg-slate-50 text-slate-700 rounded-xl px-8 flex items-center gap-2 bg-white"
                   >
                     <Github size={18} />
                     GitHub 源码
                   </a>
                </div>
             </div>
             <div className="flex-1 w-full relative perspective-1000">
                {/* High Fidelity Admin Dashboard Mockup */}
                <div className="rounded-xl overflow-hidden shadow-2xl shadow-blue-900/10 border border-slate-200 bg-white aspect-[16/10] flex flex-col relative group rotate-y-[-5deg] rotate-x-[5deg] hover:rotate-0 transition-transform duration-500 ease-out">
                    
                    {/* Browser Header */}
                    <div className="h-8 bg-slate-50 border-b border-slate-100 flex items-center px-4 gap-2">
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-400"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                            <div className="w-3 h-3 rounded-full bg-green-400"></div>
                        </div>
                        <div className="flex-1 ml-4 bg-white border border-slate-200 rounded h-5 flex items-center px-2 shadow-sm">
                             <div className="text-[10px] text-slate-400 font-mono">admin.zerocmf.com/dashboard</div>
                        </div>
                    </div>

                    {/* App Container */}
                    <div className="flex-1 flex overflow-hidden">
                        {/* Sidebar */}
                        <div className="w-48 bg-slate-900 text-slate-300 flex flex-col py-4 hidden sm:flex">
                            <div className="px-4 mb-6 flex items-center gap-2 text-white font-bold">
                               <div className="w-6 h-6 rounded bg-primary flex items-center justify-center"><Box size={14} /></div>
                               <span>Admin</span>
                            </div>
                            <div className="space-y-1 px-2">
                                <div className="flex items-center gap-3 px-3 py-2 bg-primary text-white rounded-lg text-xs font-medium">
                                    <PieChart size={14} /> Dashboard
                                </div>
                                <div className="flex items-center gap-3 px-3 py-2 hover:bg-slate-800 rounded-lg text-xs font-medium transition-colors">
                                    <Users size={14} /> User Management
                                </div>
                                <div className="flex items-center gap-3 px-3 py-2 hover:bg-slate-800 rounded-lg text-xs font-medium transition-colors">
                                    <Activity size={14} /> Analytics
                                </div>
                                <div className="flex items-center gap-3 px-3 py-2 hover:bg-slate-800 rounded-lg text-xs font-medium transition-colors">
                                    <Settings size={14} /> Settings
                                </div>
                            </div>
                            <div className="mt-auto px-4">
                                <div className="bg-slate-800 rounded-lg p-3">
                                    <div className="text-[10px] text-slate-400 mb-2">Storage Usage</div>
                                    <div className="w-full h-1.5 bg-slate-700 rounded-full overflow-hidden">
                                        <div className="w-3/4 h-full bg-primary rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="flex-1 bg-slate-50 p-4 sm:p-6 flex flex-col gap-4 sm:gap-6 overflow-hidden relative">
                            {/* Header */}
                            <div className="flex justify-between items-center">
                                <div>
                                    <h3 className="text-lg font-bold text-slate-800">Dashboard Overview</h3>
                                    <p className="text-xs text-slate-500">Welcome back, Administrator</p>
                                </div>
                                <div className="flex gap-2">
                                    <div className="w-8 h-8 rounded-full bg-white border border-slate-200 shadow-sm"></div>
                                </div>
                            </div>

                            {/* Stats Grid */}
                            <div className="grid grid-cols-3 gap-3 sm:gap-4">
                                <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
                                    <div className="text-[10px] sm:text-xs text-slate-400 mb-1">Revenue</div>
                                    <div className="text-sm sm:text-lg font-bold text-slate-800">¥128k</div>
                                    <div className="text-[10px] text-green-500 flex items-center gap-1 mt-1">
                                        <ArrowRight className="rotate-[-45deg]" size={10} /> 12%
                                    </div>
                                </div>
                                <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
                                    <div className="text-[10px] sm:text-xs text-slate-400 mb-1">Users</div>
                                    <div className="text-sm sm:text-lg font-bold text-slate-800">24k</div>
                                     <div className="text-[10px] text-blue-500 flex items-center gap-1 mt-1">
                                        <ArrowRight className="rotate-[-45deg]" size={10} /> 8%
                                    </div>
                                </div>
                                 <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
                                    <div className="text-[10px] sm:text-xs text-slate-400 mb-1">Orders</div>
                                    <div className="text-sm sm:text-lg font-bold text-slate-800">1.2k</div>
                                     <div className="text-[10px] text-orange-500 flex items-center gap-1 mt-1">
                                        <ArrowRight className="rotate-[-45deg]" size={10} /> 3%
                                    </div>
                                </div>
                            </div>

                            {/* Chart Area */}
                            <div className="flex-1 bg-white rounded-xl border border-slate-100 shadow-sm p-4 relative overflow-hidden flex flex-col">
                                 <div className="flex items-center justify-between mb-4">
                                    <div className="text-sm font-bold text-slate-800">Traffic Analysis</div>
                                    <div className="flex gap-2">
                                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                                        <div className="w-2 h-2 rounded-full bg-blue-200"></div>
                                    </div>
                                 </div>
                                 <div className="flex items-end gap-2 flex-1 px-2 pb-2">
                                    {[40, 65, 45, 80, 55, 70, 48, 85, 60].map((h, i) => (
                                        <div key={i} className="flex-1 flex gap-1 h-full items-end group/bar">
                                            <div style={{height: `${h}%`}} className="flex-1 bg-primary rounded-t-sm opacity-80 group-hover/bar:opacity-100 transition-opacity"></div>
                                            <div style={{height: `${h * 0.6}%`}} className="flex-1 bg-blue-100 rounded-t-sm"></div>
                                        </div>
                                    ))}
                                 </div>
                            </div>
                        </div>
                    </div>

                    {/* Floating Code Editor Overlay */}
                    <div className="absolute -right-12 bottom-8 w-64 bg-slate-900 rounded-lg shadow-2xl border border-slate-700 p-4 transform translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 delay-100 hidden sm:block">
                        <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-700">
                            <div className="flex gap-1.5">
                               <div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div>
                               <div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div>
                            </div>
                            <div className="text-[10px] text-slate-400 font-mono flex items-center gap-1">
                                <Code2 size={10} /> config.ts
                            </div>
                        </div>
                        <div className="space-y-1.5 font-mono text-[10px]">
                            <div className="flex gap-2">
                                <span className="text-slate-500">1</span>
                                <span className="text-purple-400">export</span> <span className="text-blue-400">const</span> <span className="text-yellow-200">theme</span> = {'{'}
                            </div>
                             <div className="flex gap-2">
                                <span className="text-slate-500">2</span>
                                <span className="pl-2 text-blue-300">primary</span>: <span className="text-green-300">'#1677FF'</span>,
                            </div>
                            <div className="flex gap-2">
                                <span className="text-slate-500">3</span>
                                <span className="pl-2 text-blue-300">layout</span>: <span className="text-green-300">'mix'</span>,
                            </div>
                            <div className="flex gap-2">
                                <span className="text-slate-500">4</span>
                                <span className="pl-2 text-blue-300">splitMenus</span>: <span className="text-orange-300">true</span>,
                            </div>
                             <div className="flex gap-2">
                                <span className="text-slate-500">5</span>
                                {'}'};
                            </div>
                        </div>
                    </div>
                </div>
             </div>
          </div>
        </FadeIn>
      </section>

      {/* Product Grid */}
      <section className="container mx-auto px-6 pb-20">
        <div className="flex items-center justify-between mb-10">
          <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
            <span className="w-1 h-6 bg-primary rounded-full"></span>
            生态组件与应用
          </h3>
          <div className="text-sm text-slate-500">共 {products.length} 款产品</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.filter(p => p.id !== 'admin').map((product, index) => (
            <FadeIn key={product.id} delay={index * 0.1}>
              <div className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-primary/20 h-full flex flex-col">
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-12 h-12 rounded-lg ${product.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {product.icon}
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="text-primary" />
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors">
                    {product.name}
                  </h4>
                  <p className="text-xs text-slate-400 font-medium mb-3 uppercase tracking-wider">
                    {product.enName}
                  </p>
                  <p className="text-slate-500 text-sm leading-relaxed h-16 line-clamp-3">
                    {product.description}
                  </p>
                </div>

                <div className="mt-auto pt-4 border-t border-slate-50 flex items-center justify-between">
                   <div className="flex gap-2 flex-wrap">
                      {product.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="px-2 py-1 bg-slate-100 text-slate-500 text-[10px] rounded font-medium">
                          {tag}
                        </span>
                      ))}
                   </div>
                   <Link href={product.link} className="text-sm font-semibold text-primary hover:underline flex items-center gap-1">
                      {product.linkText}
                   </Link>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </main>
  );
}
