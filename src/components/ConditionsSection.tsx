import React from 'react';
import { Tag, Sparkles, ShieldAlert, Phone, CheckCircle, FileText } from 'lucide-react';
import { CAMPAIGN_CONFIG } from '../config/campaign';

interface ConditionsSectionProps {
  onOpenRules: () => void;
}

export const ConditionsSection: React.FC<ConditionsSectionProps> = ({ onOpenRules }) => {
  const { conditions, brand } = CAMPAIGN_CONFIG;

  return (
    <section id="dieu-kien" className="py-16 sm:py-24 bg-[#F4EFE6]/60 border-y border-[#C5A36A]/20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider text-[#800F21] bg-[#800F21]/8 border border-[#800F21]/20 uppercase mb-3">
            <Tag className="w-3.5 h-3.5 text-[#C5A36A]" />
            <span>QUY ĐỊNH THAM DỰ MINH BẠCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#35271F] tracking-tight mb-4">
            {conditions.title}
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
            {conditions.subtitle}
          </p>
        </div>

        {/* 3 Conditions Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-10">
          {conditions.rules.map((rule) => {
            const isHighlight = rule.highlight;
            return (
              <div
                key={rule.id}
                className={`relative rounded-2xl p-6 sm:p-8 transition-all flex flex-col justify-between ${
                  isHighlight
                    ? 'bg-gradient-to-b from-[#FAF7F2] to-[#FFFFFF] border-2 border-[#800F21] shadow-lg shadow-[#800F21]/5'
                    : 'bg-white border border-[#C5A36A]/30 shadow-sm hover:border-[#C5A36A]/60'
                }`}
              >
                {/* Top Badge */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-md ${
                      isHighlight
                        ? 'bg-[#800F21] text-white'
                        : 'bg-[#C5A36A]/15 text-[#8B6E38]'
                    }`}>
                      {rule.tag}
                    </span>
                    {isHighlight && (
                      <span className="flex items-center gap-1 text-[11px] font-semibold text-[#800F21]">
                        <Sparkles className="w-3.5 h-3.5" />
                        Ưu tiên
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-[#35271F] mb-3 leading-snug">
                    {rule.title}
                  </h3>

                  <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                    {rule.description}
                  </p>
                </div>

                {/* Footer tick */}
                <div className="pt-6 mt-6 border-t border-neutral-100 flex items-center gap-2 text-xs font-medium text-neutral-600">
                  <CheckCircle className="w-4 h-4 text-[#800F21]" />
                  <span>Áp dụng đơn hàng hợp lệ tại showroom</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Strict Max Tickets Constraint Notice Box */}
        <div className="max-w-4xl mx-auto bg-[#800F21]/8 border-2 border-[#800F21]/30 rounded-2xl p-6 sm:p-8 mb-8 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#800F21] text-white flex items-center justify-center shrink-0 shadow">
              <ShieldAlert className="w-6 h-6 text-[#FAF7F2]" />
            </div>
            <div className="flex-1">
              <h4 className="text-base sm:text-lg font-bold text-[#800F21] mb-1">
                Giới Hạn Số Lượng Phiếu & Quà Tặng Tri Ân
              </h4>
              <p className="text-sm sm:text-base text-neutral-800 leading-relaxed font-medium">
                {conditions.maxTicketsNotice}
              </p>
              <p className="text-xs sm:text-sm text-[#800F21] font-semibold mt-2">
                🎁 Bên cạnh các giải bốc thăm, Phú Cường còn dành tặng quà tri ân cho khách hàng theo điều kiện của chương trình.
              </p>
              <p className="text-xs text-neutral-600 mt-2">
                {conditions.disclaimer}
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons Row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={brand.hotline}
            className="inline-flex items-center justify-center gap-2 bg-[#800F21] hover:bg-[#680b1a] text-white px-7 py-3.5 rounded-lg font-semibold text-sm shadow-md transition-all active:scale-98 w-full sm:w-auto"
          >
            <Phone className="w-4 h-4 text-white" />
            <span>Gọi kiểm tra điều kiện đơn hàng</span>
          </a>

          <button
            onClick={onOpenRules}
            className="inline-flex items-center justify-center gap-2 bg-white hover:bg-neutral-50 text-[#35271F] border border-[#C5A36A]/40 hover:border-[#C5A36A] px-6 py-3.5 rounded-lg font-semibold text-sm transition-colors shadow-sm w-full sm:w-auto cursor-pointer"
          >
            <FileText className="w-4 h-4 text-[#C5A36A]" />
            <span>Xem thể lệ chi tiết</span>
          </button>
        </div>

      </div>
    </section>
  );
};
