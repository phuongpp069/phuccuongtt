import React from 'react';
import { Phone, ArrowDown, Calendar, Sparkles, Award, CheckCircle2 } from 'lucide-react';
import { CAMPAIGN_CONFIG } from '../config/campaign';
import { getCampaignStatus } from '../utils/dateStatus';

export const Hero: React.FC = () => {
  const { brand, timeline, hero, financialSummary } = CAMPAIGN_CONFIG;
  const statusInfo = getCampaignStatus(timeline.startDateStr, timeline.endDateStr);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF7F2] via-[#F5EFE6] to-[#FAF7F2] pt-6 sm:pt-10 pb-12 sm:pb-20 border-b border-[#C5A36A]/20">
      {/* Background architectural glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C5A36A]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#800F21]/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left / Top Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status & Sub-badge row */}
            <div className="flex flex-wrap items-center gap-2.5 mb-4">
              <span className={`px-3 py-1 rounded-full text-xs font-semibold tracking-wide flex items-center gap-1.5 ${statusInfo.badgeClass}`}>
                <span className="w-2 h-2 rounded-full bg-current animate-ping opacity-75" />
                {statusInfo.label}
              </span>
              <span className="text-xs font-medium uppercase tracking-widest text-[#800F21] bg-[#800F21]/8 border border-[#800F21]/20 px-3 py-1 rounded-full">
                {hero.badge}
              </span>
            </div>

            {/* Campaign Subtitle */}
            <div className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold tracking-wide text-[#C5A36A] uppercase mb-2">
              <Sparkles className="w-4 h-4 text-[#C5A36A]" />
              <span>{hero.subTitle}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#35271F] tracking-tight leading-[1.15] mb-5 whitespace-pre-line">
              {hero.mainTitle}
            </h1>

            {/* Summary Highlight Box */}
            <div className="w-full bg-[#FAF7F2] border border-[#C5A36A]/40 rounded-xl p-4 sm:p-5 shadow-sm mb-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-[#C5A36A]/25">
                
                {/* Prize Pool Highlight */}
                <div className="flex items-start gap-3.5 pr-0 sm:pr-4">
                  <div className="p-2.5 bg-[#800F21]/10 rounded-lg shrink-0 text-[#800F21]">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-neutral-500 block font-medium">
                      Tổng giá trị giải thưởng & quà tặng
                    </span>
                    <span className="text-2xl sm:text-3xl font-extrabold text-[#800F21] block tracking-tight">
                      {financialSummary.totalClaimValue}
                    </span>
                    <span className="text-[11px] text-neutral-600 mt-1 block leading-relaxed">
                      {financialSummary.appreciationGiftNote}
                    </span>
                  </div>
                </div>

                {/* Timeline Box */}
                <div className="flex items-start gap-3.5 pt-3 sm:pt-0 sm:pl-4">
                  <div className="p-2.5 bg-[#C5A36A]/15 rounded-lg shrink-0 text-[#8B6E38]">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-neutral-500 block font-medium">
                      Thời gian & Địa điểm áp dụng
                    </span>
                    <span className="text-base sm:text-lg font-bold text-[#35271F] block">
                      {timeline.dateDisplay}
                    </span>
                    <span className="text-[11px] sm:text-xs text-[#800F21] font-semibold mt-1 block">
                      📍 {brand.fullAddressDisplay || `${brand.venueName} - ${brand.address}`}
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed mb-6 sm:mb-8 max-w-2xl">
              {hero.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              <a
                href={brand.hotline}
                className="inline-flex items-center justify-center gap-2.5 bg-[#800F21] hover:bg-[#6b0c1b] text-white px-7 py-3.5 rounded-lg font-semibold text-base shadow-md hover:shadow-lg transition-all active:scale-98"
              >
                <Phone className="w-5 h-5 text-white" />
                <span>{hero.ctaPrimary}</span>
              </a>

              <a
                href="#giai-thuong"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-neutral-50 text-[#35271F] border border-[#C5A36A]/40 hover:border-[#C5A36A] px-6 py-3.5 rounded-lg font-semibold text-base transition-colors shadow-sm"
              >
                <span>{hero.ctaSecondary}</span>
                <ArrowDown className="w-4 h-4 text-[#800F21]" />
              </a>
            </div>

            {/* Trust points */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-6 text-xs text-neutral-600 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#800F21]" />
                100% Thiết bị TOTO chính hãng
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#800F21]" />
                Quay số minh bạch tại Showroom
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#800F21]" />
                Tối đa 03 phiếu / khách hàng
              </span>
            </div>

          </div>

          {/* Right Banner / Image Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#C5A36A]/40 shadow-xl bg-white group">
              <img
                src={hero.bannerImage}
                alt="Banner chương trình Tri Ân Khách Hàng - Bốc Thăm Trúng Thưởng Showroom TOTO Phú Cường"
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-102"
                loading="eager"
              />
              {/* Subtle gold badge watermark */}
              <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md text-[#FAF7F2] text-[11px] px-3 py-1 rounded-md border border-[#C5A36A]/40">
                Showroom TOTO Phú Cường
              </div>
            </div>

            {/* Floating Quick Feature Card */}
           
          </div>

        </div>
      </div>
    </section>
  );
};
