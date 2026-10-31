import React from 'react';
import { Award, Sparkles, Check, Info } from 'lucide-react';
import { CAMPAIGN_CONFIG, PrizeItem } from '../config/campaign';

interface PrizesSectionProps {
  onSelectPrizeImage?: (image: string, title: string) => void;
}

export const PrizesSection: React.FC<PrizesSectionProps> = ({ onSelectPrizeImage }) => {
  const { prizes, financialSummary } = CAMPAIGN_CONFIG;
  const grandPrize = prizes.find((p) => p.isGrand);
  const otherPrizes = prizes.filter((p) => !p.isGrand);

  return (
    <section id="giai-thuong" className="py-16 sm:py-24 bg-[#FAF7F2] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider text-[#800F21] bg-[#800F21]/8 border border-[#800F21]/20 uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A36A]" />
            <span>CƠ CẤU 05 GIẢI THƯỞNG DANH GIÁ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#35271F] tracking-tight mb-4">
            Thiết Bị Vệ Sinh TOTO Cao Cấp
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
            Toàn bộ giải thưởng là sản phẩm chính hãng TOTO 100%, bảo hành chính hãng toàn quốc, mang đến sự tiện nghi và đẳng cấp vượt trội cho ngôi nhà của bạn.
          </p>

          {/* Total Prize & Gift Banner */}
          <div className="mt-6 inline-flex items-center gap-2.5 bg-[#F4EFE6] border border-[#C5A36A]/40 rounded-xl px-5 py-3 text-sm text-[#35271F] shadow-xs">
            <Award className="w-5 h-5 text-[#800F21]" />
            <span className="font-semibold text-sm sm:text-base">
              Tổng giá trị giải thưởng và quà tặng tri ân <strong className="text-[#800F21] font-extrabold text-base sm:text-lg">lên đến 80.000.000 VNĐ</strong>
            </span>
          </div>
        </div>

        {/* 1. GRAND PRIZE SHOWCASE (GIẢI ĐẶC BIỆT) */}
        {grandPrize && (
          <div className="mb-12 sm:mb-16">
            <div className="relative rounded-2xl bg-gradient-to-br from-[#FFFFFF] via-[#FAF7F2] to-[#F5ECE0] border-2 border-[#C5A36A] p-6 sm:p-10 shadow-xl overflow-hidden">
              
              {/* Luxury Badge Ribbons */}
              <div className="absolute top-0 right-0 bg-[#800F21] text-[#FAF7F2] py-1.5 px-6 rounded-bl-xl font-bold text-xs sm:text-sm tracking-wider uppercase shadow-md flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#D4B785]" />
                {grandPrize.rank}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4 sm:pt-0">
                {/* Image Showcase */}
                <div className="lg:col-span-6 flex justify-center">
                  <div
                    onClick={() => onSelectPrizeImage?.(grandPrize.image, grandPrize.name)}
                    className="group relative cursor-pointer overflow-hidden rounded-xl bg-white p-4 sm:p-6 shadow-inner border border-[#C5A36A]/30 w-full max-w-md"
                  >
                    <img
                      src={grandPrize.image}
                      alt={grandPrize.name}
                      className="w-full h-72 sm:h-84 object-contain transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <span className="bg-white/90 text-xs font-semibold px-3 py-1.5 rounded-full shadow text-[#35271F]">
                        Xem ảnh phóng to
                      </span>
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="lg:col-span-6 flex flex-col items-start text-left">
                  <div className="inline-block bg-[#800F21]/10 text-[#800F21] text-xs font-bold px-3 py-1 rounded-md mb-2">
                    {grandPrize.title}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#35271F] mb-2 leading-tight">
                    {grandPrize.name}
                  </h3>
                  
                  {/* Model Code */}
                  <div className="flex items-center gap-2 mb-4 bg-neutral-100/80 px-3 py-1.5 rounded-md border border-neutral-200">
                    <span className="text-xs font-medium text-neutral-500">Mã sản phẩm TOTO:</span>
                    <span className="text-xs sm:text-sm font-bold font-mono text-[#35271F]">
                      {grandPrize.code}
                    </span>
                  </div>

                  {/* Prize Value */}
                  <div className="mb-6">
                    <span className="text-xs uppercase tracking-wider text-neutral-500 block font-medium">
                      Giá trị giải thưởng
                    </span>
                    <span className="text-3xl sm:text-4xl font-extrabold text-[#800F21] tracking-tight">
                      {grandPrize.valueDisplay}
                    </span>
                  </div>

                  {/* Highlights */}
                  <div className="w-full space-y-2.5 mb-6">
                    {grandPrize.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-sm sm:text-base text-neutral-700">
                        <div className="w-5 h-5 rounded-full bg-[#800F21]/10 flex items-center justify-center text-[#800F21] shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                        </div>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Link */}
                  <a
                    href={CAMPAIGN_CONFIG.brand.hotline}
                    className="inline-flex items-center gap-2 bg-[#800F21] hover:bg-[#680b1a] text-white px-6 py-3 rounded-lg font-semibold text-sm shadow-md transition-all active:scale-98"
                  >
                    <span>Tư vấn nhận phiếu tham gia</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2. REMAINING PRIZES GRID (GIẢI NHẤT, NHÌ, BA, KHUYẾN KHÍCH) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {otherPrizes.map((prize: PrizeItem) => (
            <div
              key={prize.id}
              className="flex flex-col bg-white rounded-xl border border-[#C5A36A]/35 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:border-[#C5A36A] group"
            >
              {/* Prize Header Tag */}
              <div className="bg-[#FAF7F2] border-b border-[#C5A36A]/20 p-3.5 text-center">
                <span className="text-xs font-bold tracking-widest text-[#800F21] uppercase">
                  {prize.rank}
                </span>
              </div>

              {/* Prize Image */}
              <div
                onClick={() => onSelectPrizeImage?.(prize.image, prize.name)}
                className="relative p-4 sm:p-5 flex items-center justify-center bg-white cursor-pointer overflow-hidden border-b border-neutral-100 h-60"
              >
                <img
                  src={prize.image}
                  alt={prize.name}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="bg-white/95 text-[11px] font-medium px-2.5 py-1 rounded shadow text-neutral-800">
                    Phóng to
                  </span>
                </div>
              </div>

              {/* Prize Info */}
              <div className="p-5 flex-1 flex flex-col justify-between text-left">
                <div>
                  <h4 className="font-bold text-lg text-[#35271F] mb-1 line-clamp-2 leading-snug">
                    {prize.name}
                  </h4>
                  <div className="text-xs font-mono text-neutral-500 mb-3 bg-neutral-100 inline-block px-2 py-0.5 rounded">
                    {prize.code}
                  </div>

                  {/* Value */}
                  <div className="mb-4">
                    <span className="text-[11px] uppercase tracking-wider text-neutral-500 block font-medium">
                      Giá trị giải thưởng
                    </span>
                    <span className="text-2xl font-extrabold text-[#800F21]">
                      {prize.valueDisplay}
                    </span>
                  </div>

                  {/* Features list */}
                  <ul className="space-y-1.5 text-xs text-neutral-600 mb-4">
                    {prize.features.slice(0, 3).map((f, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-[#C5A36A] font-bold">•</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-neutral-100">
                  <a
                    href={CAMPAIGN_CONFIG.brand.hotline}
                    className="w-full text-center block text-xs font-semibold text-[#800F21] hover:text-[#550714] py-1.5"
                  >
                    Hỏi về sản phẩm & điều kiện &rarr;
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note Box */}
        <div className="mt-12 max-w-4xl mx-auto bg-[#F4EFE6]/70 border border-[#C5A36A]/30 rounded-xl p-4 sm:p-5 flex items-start gap-3.5 text-xs sm:text-sm text-neutral-700">
          <Info className="w-5 h-5 text-[#C5A36A] shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-[#35271F]">Quà tặng tri ân: </span>
            {financialSummary.appreciationGiftNote} Toàn bộ sản phẩm trúng thưởng được bàn giao nguyên đai nguyên kiện với phiếu bảo hành chính hãng TOTO Việt Nam.
          </div>
        </div>

      </div>
    </section>
  );
};
