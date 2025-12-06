import { Quote } from 'lucide-react';

export default function BrandStory() {
  return (
    <section className="py-24 bg-[#FAFAFA] border-b border-slate-100">
      <div className="container mx-auto px-6">
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
                      <div className="text-4xl font-bold mb-1 text-[#1677FF]">12</div>
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
             <h2 className="text-4xl font-bold text-[#000000E0] mb-6">为什么叫“愚公”？</h2>
             <div className="space-y-6 text-lg text-slate-500 leading-relaxed">
                <p>
                  在这个技术快速迭代、概念层出不穷的时代，我们选择做一个“笨人”。
                </p>
                <p>
                  <strong className="text-slate-800">愚公移山，贵在坚持，重在行动。</strong>
                  软件工程没有捷径。我们不迷信风口，不堆砌概念，只专注于每一个字节的优化，每一个逻辑的闭环。
                </p>
                <p>
                  我们相信，只有用最笨的功夫，才能打磨出最灵巧的软件；只有像移山一样去攻克技术难点，才能为您铺平业务增长的坦途。
                </p>
             </div>
             
             <div className="mt-10 flex items-center gap-4">
                <div className="text-sm">
                   <p className="font-bold text-slate-800">创始人团队</p>
                   <p className="text-slate-400">来自阿里、华为、腾讯的技术骨干</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}