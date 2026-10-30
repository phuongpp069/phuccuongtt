import React from 'react';
import { ShoppingBag, Ticket, PenTool, Trophy, ArrowRight } from 'lucide-react';
import { CAMPAIGN_CONFIG } from '../config/campaign';

const stepIcons = [ShoppingBag, Ticket, PenTool, Trophy];

export const StepsSection: React.FC = () => {
  const { participationSteps } = CAMPAIGN_CONFIG;

  return (
    <section className="py-16 sm:py-20 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-semibold tracking-widest text-[#800F21] uppercase block mb-2">
            HƯỚNG DẪN 4 BƯỚC
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#35271F] tracking-tight">
            Quy Trình Tham Gia Bốc Thăm
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 mt-3">
            Đơn giản, minh bạch và đảm bảo quyền lợi tuyệt đối cho mọi khách hàng của Phú Cường.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {participationSteps.map((item, index) => {
            const Icon = stepIcons[index] || ShoppingBag;
            const isLast = index === participationSteps.length - 1;

            return (
              <div
                key={item.step}
                className="relative bg-white rounded-xl border border-[#C5A36A]/30 p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow group"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="w-9 h-9 rounded-full bg-[#FAF7F2] border border-[#C5A36A]/40 text-[#800F21] font-bold text-base flex items-center justify-center group-hover:bg-[#800F21] group-hover:text-white transition-colors">
                      {item.step}
                    </span>
                    <div className="p-2.5 rounded-lg bg-[#FAF7F2] text-[#C5A36A] group-hover:text-[#800F21] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-bold text-lg text-[#35271F] mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {!isLast && (
                  <div className="hidden lg:block absolute -right-3.5 top-1/2 -translate-y-1/2 z-10 text-[#C5A36A]">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
