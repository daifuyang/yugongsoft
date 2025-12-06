'use client';

import {
  ArrowRight,
  Printer,
  Wifi,
  Cpu,
  ScanLine,
  Layers,
  Activity,
  Share2,
  Database,
  Cloud
} from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import { motion } from 'framer-motion';

export default function IoT() {
  return (
    <main className="bg-white font-sans selection:bg-[#1677FF] selection:text-white">
      
      {/* --- Hero Section --- */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#F5F7FA]">
        <div className="absolute inset-0 z-0">
           <div className="absolute top-0 left-0 right-0 h-[600px] bg-gradient-to-b from-[#E6F7FF] to-transparent opacity-70"></div>
           <div className="absolute inset-0 bg-[linear-gradient(to_right,#1677ff08_1px,transparent_1px),linear-gradient(to_bottom,#1677ff08_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="lg:w-1/2 space-y-8">
              <FadeIn delay={0.1} direction="up">
                 <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-100 shadow-sm shadow-blue-100/50">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1677FF] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#1677FF]"></span>
                  </span>
                  <span className="text-sm font-semibold text-[#1677FF] tracking-wide">万物互联 · 智能感知</span>
                </div>
              </FadeIn>
              <FadeIn delay={0.2} direction="up">
                <h1 className="text-5xl lg:text-7xl font-bold text-[#000000E0] leading-[1.1] tracking-tight">
                  硬件对接 / 物联网<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1677FF] to-[#00C6FF]">
                    打通软硬结合最后一公里
                  </span>
                </h1>
              </FadeIn>
              <FadeIn delay={0.3} direction="up">
                <p className="text-lg text-slate-500 leading-relaxed max-w-xl">
                  提供各类智能硬件的 SDK 对接与数据采集服务。连接打印机、扫码枪、传感器、生产设备，实现业务流程的自动化与智能化。
                </p>
              </FadeIn>
               <FadeIn delay={0.4} direction="up">
                <div className="flex flex-wrap gap-4 pt-6">
                  <button className="btn bg-[#1677FF] hover:bg-[#0958D9] text-white px-10 py-4 h-auto rounded-xl font-bold text-lg shadow-xl shadow-blue-500/20 border-none transition-all hover:-translate-y-1 flex items-center gap-2">
                    免费咨询方案
                    <ArrowRight size={20} />
                  </button>
                  <button className="btn bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-10 py-4 h-auto rounded-xl font-bold text-lg shadow-sm hover:shadow-md transition-all">
                    查看硬件清单
                  </button>
                </div>
              </FadeIn>
            </div>
             
            {/* Right: IoT Network Abstract */}
            <div className="lg:w-1/2 relative">
                <FadeIn delay={0.2} direction="left" duration={0.8}>
                    <div className="relative">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl -z-10 animate-pulse"></div>
                        
                        <div className="relative w-full aspect-square max-w-[500px] mx-auto">
                            {/* Central Hub */}
                            <motion.div 
                                animate={{ 
                                    scale: [1, 1.05, 1],
                                    boxShadow: ["0 0 0 0px rgba(22, 119, 255, 0)", "0 0 0 20px rgba(22, 119, 255, 0.1)", "0 0 0 0px rgba(22, 119, 255, 0)"]
                                }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white rounded-full shadow-2xl flex items-center justify-center z-20 border-4 border-blue-50 cursor-pointer"
                            >
                                <Cloud size={48} className="text-[#1677FF]" />
                                <div className="absolute top-2 right-8 w-3 h-3 bg-green-500 rounded-full border-2 border-white animate-ping"></div>
                                <div className="absolute top-2 right-8 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                            </motion.div>

                            {/* Orbiting Devices */}
                            {[
                                { icon: <Printer size={20} />, label: "打印机", angle: 0 },
                                { icon: <ScanLine size={20} />, label: "扫码枪", angle: 60 },
                                { icon: <Cpu size={20} />, label: "传感器", angle: 120 },
                                { icon: <Activity size={20} />, label: "PLC", angle: 180 },
                                { icon: <Wifi size={20} />, label: "网关", angle: 240 },
                                { icon: <Layers size={20} />, label: "RFID", angle: 300 },
                            ].map((item, i) => (
                                <div key={i}>
                                    {/* Device Node */}
                                    <div 
                                        className="absolute top-1/2 left-1/2 w-12 h-12 -ml-6 -mt-6 z-10" 
                                        style={{ transform: `rotate(${item.angle}deg) translate(140px) rotate(-${item.angle}deg)` }}
                                    >
                                        <motion.div
                                            whileHover={{ scale: 1.2, rotate: 10 }}
                                            className="w-12 h-12 bg-white rounded-xl shadow-lg border border-slate-100 flex items-center justify-center text-slate-600 hover:text-[#1677FF] hover:border-blue-200 transition-all cursor-pointer group relative"
                                        >
                                            {item.icon}
                                            <div className="absolute top-full mt-2 text-xs font-bold text-slate-500 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-white px-2 py-1 rounded shadow-sm pointer-events-none">
                                                {item.label}
                                            </div>
                                        </motion.div>
                                    </div>

                                    {/* Data Signal */}
                                    <div className="absolute top-1/2 left-1/2 w-0 h-0 -z-5" style={{ transform: `rotate(${item.angle}deg)` }}>
                                         <motion.div
                                           initial={{ x: 140, opacity: 0 }}
                                           animate={{ x: [140, 40], opacity: [0, 1, 0] }}
                                           transition={{ duration: 2, repeat: Infinity, delay: i * 0.3, ease: "easeInOut" }}
                                           className="absolute top-[-2px] w-1.5 h-1.5 bg-[#1677FF] rounded-full shadow-[0_0_8px_#1677FF]"
                                         />
                                         {/* Static Line Trail */}
                                         <div className="absolute top-[-0.5px] left-0 w-[140px] h-[1px] bg-gradient-to-r from-transparent via-[#1677FF]/10 to-transparent"></div>
                                    </div>
                                </div>
                            ))}
                            
                            {/* Animated Rings */}
                            <div className="absolute inset-10 rounded-full border border-blue-50/60 animate-[spin_20s_linear_infinite]"></div>
                            <div className="absolute inset-24 rounded-full border border-dashed border-slate-200/80 animate-[spin_30s_linear_infinite_reverse]"></div>
                        </div>
                    </div>
                </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* --- Features Grid --- */}
       <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-3 gap-8">
                  {[
                      { icon: <ScanLine size={28} />, title: "外设硬件对接", desc: "熟练对接各类小票打印机、标签打印机、蓝牙扫码枪、读卡器、电子秤等常用外设硬件。" },
                      { icon: <Activity size={28} />, title: "工业设备数采", desc: "通过 PLC、串口、Modbus 等协议，实时采集生产设备的运行状态、产量、故障报警等数据。" },
                      { icon: <Wifi size={28} />, title: "智能家居/园区", desc: "对接智能门锁、摄像头、温湿度传感器、道闸等设备，打造智慧楼宇与智慧园区管理平台。" }
                  ].map((item, i) => (
                      <FadeIn key={i} delay={i * 0.1} direction="up">
                          <div className="p-8 rounded-2xl bg-slate-50 hover:bg-white border border-slate-100 hover:border-blue-100 hover:shadow-xl transition-all duration-300 group h-full">
                              <div className="w-12 h-12 bg-blue-100 text-[#1677FF] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
                              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                              <p className="text-slate-600">{item.desc}</p>
                          </div>
                      </FadeIn>
                  ))}
              </div>
          </div>
      </section>

      {/* --- Protocols & Tech --- */}
      <section className="py-24 bg-[#F5F7FA]">
          <div className="container mx-auto px-6">
              <FadeIn direction="up">
                <div className="text-center max-w-3xl mx-auto mb-16">
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">广泛的协议支持</h2>
                  <p className="text-slate-500 text-lg">兼容主流物联网通信协议，确保设备稳定连接</p>
                </div>
              </FadeIn>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                      "MQTT", "Modbus TCP/RTU", "HTTP / WebSocket", "TCP / UDP",
                      "Bluetooth BLE", "Zigbee", "RS232 / RS485", "OPC UA"
                  ].map((item, i) => (
                      <FadeIn key={i} delay={i * 0.05} direction="up">
                          <div className="bg-white p-4 rounded-xl text-center border border-slate-100 font-mono font-bold text-slate-600 hover:text-[#1677FF] hover:border-blue-200 transition-colors cursor-default">
                              {item}
                          </div>
                      </FadeIn>
                  ))}
              </div>
          </div>
      </section>

       {/* --- CTA --- */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/images/grid.svg')]"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
           <FadeIn direction="up">
             <h2 className="text-4xl font-bold text-white mb-6">连接物理世界与数字世界</h2>
             <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
               立即启动您的物联网项目，让设备更智能。
             </p>
             <button className="btn bg-[#1677FF] hover:bg-[#0958D9] text-white px-12 py-5 h-auto rounded-full font-bold text-xl shadow-xl shadow-blue-500/30 border-none transition-all hover:scale-105">
               预约技术咨询
             </button>
           </FadeIn>
        </div>
      </section>

    </main>
  );
}
