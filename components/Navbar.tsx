'use client';

import Link from "next/link";
import {
  ChevronDown,
  Factory,
  Users,
  ClipboardList,
  GraduationCap,
  Utensils,
  ShoppingBag,
  Truck,
  Package,
  Menu,
  X
} from "lucide-react";
import Logo from "./Logo";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // 增加一个滚动监听，滚动后导航栏背景变实，体验更好
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 解决方案下拉菜单数据 - 专注中小企业高频场景
  const solutions = [
    {
      title: "CRM客户关系管理",
      desc: "销售自动化与客户洞察",
      icon: <Users size={18} />,
      href: "/solutions/crm"
    },
    {
      title: "数字工厂MES",
      desc: "轻量级生产进度追踪",
      icon: <Factory size={18} />,
      href: "/solutions/mes"
    },
    {
      title: "智能服务工单",
      desc: "售后运维高效流转",
      icon: <ClipboardList size={18} />,
      href: "/solutions/workorder"
    },
    {
      title: "智慧教育",
      desc: "培训机构教务管理",
      icon: <GraduationCap size={18} />,
      href: "/solutions/edu"
    },
    {
      title: "智慧餐饮",
      desc: "扫码点餐与外卖接单",
      icon: <Utensils size={18} />,
      href: "/solutions/catering"
    },
    {
      title: "数字化电商",
      desc: "私域商城与分销裂变",
      icon: <ShoppingBag size={18} />,
      href: "/solutions/ecommerce"
    },
    {
      title: "贸易供应链",
      desc: "进销存与财务一体化",
      icon: <Truck size={18} />,
      href: "/solutions/supplychain"
    },
    {
      title: "WMS仓库管理",
      desc: "条码出入库精细管理",
      icon: <Package size={18} />,
      href: "/solutions/wms"
    },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-300 ${
        // 核心修改：加强边框颜色 (border-slate-200) 并保持微弱背景，解决与白色 Hero 融合的问题
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200"
          : "bg-white/80 backdrop-blur-sm border-b border-slate-200"
      }`}
    >
      <div className="container mx-auto px-6 h-full flex justify-between items-center">

        {/* --- Logo --- */}
        <Link href="/" className="flex items-center gap-2 group">
          <Logo className="w-9 h-9 group-hover:scale-105 transition-transform duration-300" />
          <span className="text-2xl font-bold text-slate-800 tracking-wider font-sans">
            愚公软件
          </span>
        </Link>

        {/* --- Desktop Navigation --- */}
        <div className="hidden lg:flex items-center gap-8">
          <Link href="/" className="text-slate-600 hover:text-[#1677FF] font-medium text-[15px] transition-colors">
            首页
          </Link>

          {/* 解决方案 (Dropdown) */}
          <div className="group relative h-full flex items-center">
            <button className="flex items-center gap-1 text-slate-600 hover:text-[#1677FF] font-medium text-[15px] transition-colors py-8 outline-none cursor-pointer">
              解决方案
              <ChevronDown size={14} className="group-hover:-rotate-180 transition-transform duration-300" />
            </button>

            {/* Dropdown Panel */}
            <div className="absolute top-full -left-4 pt-2 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300">
              <div className="w-[500px] bg-white rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-slate-100 p-2 grid grid-cols-2 gap-2">
                {solutions.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#F0F7FF] group/item transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-slate-50 text-slate-500 flex items-center justify-center group-hover/item:bg-[#1677FF] group-hover/item:text-white transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <div className="font-bold text-slate-800 text-sm group-hover/item:text-[#1677FF] transition-colors">
                        {item.title}
                      </div>
                      <div className="text-xs text-slate-400 mt-0.5">
                        {item.desc}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/products" className="text-slate-600 hover:text-[#1677FF] font-medium text-[15px] transition-colors">
            产品中心
          </Link>
          <Link href="/cases" className="text-slate-600 hover:text-[#1677FF] font-medium text-[15px] transition-colors">
            客户案例
          </Link>
          <Link href="/about" className="text-slate-600 hover:text-[#1677FF] font-medium text-[15px] transition-colors">
            关于我们
          </Link>
        </div>

        {/* --- Right Actions --- */}
        <div className="flex items-center gap-4">
          <a className="hidden lg:flex btn btn-primary bg-[#1677FF] hover:bg-[#0958D9] text-white font-medium px-6 h-10 min-h-0 rounded-full shadow-lg shadow-blue-500/20 border-none transition-all">
            预约演示
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-slate-600 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* --- Mobile Menu --- */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-100 shadow-xl p-4 flex flex-col gap-2 animate-in slide-in-from-top-2 duration-200 h-[calc(100vh-80px)] overflow-y-auto">
          <Link href="/" className="text-slate-600 font-medium p-3 hover:bg-slate-50 rounded-lg">首页</Link>

          <div className="bg-slate-50 rounded-lg p-3">
            <div className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">解决方案</div>
            <div className="grid grid-cols-2 gap-2">
              {solutions.map((item, i) => (
                <Link key={i} href={item.href} className="flex flex-col items-center justify-center gap-1 text-slate-600 p-3 bg-white rounded border border-slate-100 text-center hover:border-[#1677FF] hover:text-[#1677FF]">
                  {item.icon}
                  <span className="text-xs font-bold">{item.title}</span>
                </Link>
              ))}
            </div>
          </div>

          <Link href="/products" className="text-slate-600 font-medium p-3 hover:bg-slate-50 rounded-lg">产品与服务</Link>
          <Link href="/cases" className="text-slate-600 font-medium p-3 hover:bg-slate-50 rounded-lg">客户案例</Link>
          <Link href="/about" className="text-slate-600 font-medium p-3 hover:bg-slate-50 rounded-lg">关于我们</Link>
          <button className="btn btn-primary w-full mt-4 bg-[#1677FF] border-none h-12 rounded-lg text-lg shadow-lg shadow-blue-500/20">预约演示</button>
        </div>
      )}
    </nav>
  );
}