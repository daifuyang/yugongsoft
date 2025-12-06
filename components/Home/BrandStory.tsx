import { Quote } from 'lucide-react';

export default function BrandStory() {
  return (
    <section className="py-24 bg-[#FAFAFA] border-b border-slate-100">
      <div className="container mx-auto px-6">
        {/* 标题部分 - 模仿 CoreServices 风格 */}
        <div className="text-center max-w-3xl mx-auto mb-16">
           <span className="text-[#1677FF] font-semibold tracking-wider text-sm uppercase mb-3 block">About Us</span>
           <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
             关于我们
           </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
             <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-12">
                   <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" className="rounded-2xl shadow-lg object-cover h-64 w-full" alt="团队协作"/>
                   <div className="bg-[#1677FF] p-6 rounded-2xl text-white text-center">
                      <div className="text-4xl font-bold mb-1">80+</div>
                      <div className="text-sm opacity-80">全栈技术专家</div>
                   </div>
                </div>
                <div className="space-y-4">
                   <div className="bg-white p-6 rounded-2xl text-slate-800 text-center border border-slate-100 shadow-sm">
                      <div className="text-4xl font-bold mb-1 text-[#1677FF]">10</div>
                      <div className="text-sm text-slate-500">年专注研发</div>
                   </div>
                   <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop" className="rounded-2xl shadow-lg object-cover h-64 w-full" alt="会议讨论"/>
                </div>
             </div>
          </div>

          <div className="lg:w-1/2">
             <div className="mb-6 text-[#1677FF]">
               <Quote size={48} className="opacity-20" />
             </div>
             <h2 className="text-4xl font-bold text-[#000000E0] mb-6">以“愚公”之名，行匠人之事</h2>
             <div className="space-y-6 text-lg text-slate-500 leading-relaxed">
                <p>
                  在这个技术快速迭代的时代，我们选择做一名沉下心来的<strong className="text-slate-800">数字工匠</strong>。我们将“愚公移山”的精神内化为具体的工作准则：
                </p>
                
                <ul className="space-y-6 mt-2">
                  <li className="flex gap-4">
                    <span className="text-[#1677FF] font-bold text-xl pt-1">01.</span>
                    <div>
                      <h4 className="text-slate-800 font-bold text-lg mb-1">复杂问题简单化</h4>
                      <p className="text-base leading-7">如同移山必先碎石，我们将庞大的业务系统拆解为清晰、可控的微服务架构，让复杂变得有序。</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-[#1677FF] font-bold text-xl pt-1">02.</span>
                    <div>
                      <h4 className="text-slate-800 font-bold text-lg mb-1">简单问题极致化</h4>
                      <p className="text-base leading-7">不放过任何一个细节。从一行代码的性能优化到像素级的 UI 打磨，用极致的专注铸就卓越品质。</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-[#1677FF] font-bold text-xl pt-1">03.</span>
                    <div>
                      <h4 className="text-slate-800 font-bold text-lg mb-1">成就客户，方能成就自己</h4>
                      <p className="text-base leading-7">不仅是交付软件，更是为您移走业务增长路上的“大山”。客户的成功，是我们存在的唯一理由。</p>
                    </div>
                  </li>
                </ul>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}