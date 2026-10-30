import React from 'react';
import { Phone, MapPin, ExternalLink, MessageCircle, Clock, ShieldCheck } from 'lucide-react';
import { CAMPAIGN_CONFIG } from '../config/campaign';

export const ContactSection: React.FC = () => {
  const { brand, timeline } = CAMPAIGN_CONFIG;

  const hasFanpage = Boolean(brand.fanpageUrl && brand.fanpageUrl.trim().length > 0);
  const hasZalo = Boolean(brand.zaloUrl && brand.zaloUrl.trim().length > 0);
  const hasGoogleMaps = Boolean(brand.googleMapsUrl && brand.googleMapsUrl.trim().length > 0);

  return (
    <section id="lien-he" className="py-16 sm:py-24 bg-[#FAF7F2] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl bg-gradient-to-br from-[#35271F] via-[#2A1E17] to-[#1F1610] text-[#FAF7F2] p-8 sm:p-14 overflow-hidden border border-[#C5A36A]/40 shadow-2xl">
          {/* Subtle gold decorative gradient background */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A36A]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#800F21]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider text-[#D4B785] bg-white/10 border border-[#C5A36A]/40 uppercase mb-4">
              <ShieldCheck className="w-4 h-4" />
              <span>SHOWROOM CHÍNH THỨC</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
              Ghé Phú Cường Trải Nghiệm Sản Phẩm & Nhận Phiếu Dự Thưởng
            </h2>

            <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
              Trực tiếp tham quan hệ thống bàn cầu thông minh NEOREST, nắp rửa điện tử WASHLET và các bộ sưu tập sen vòi TOTO cao cấp tại Showroom Phú Cường.
            </p>

            {/* Central Info Cards Grid: Hotline & Showroom Address */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-8">
              
              {/* Address Highlight Box */}
              <div className="flex flex-col justify-between bg-white/5 border border-[#C5A36A]/40 rounded-2xl p-5 text-left backdrop-blur-md">
                <div className="flex items-start gap-3.5 mb-3">
                  <div className="w-11 h-11 rounded-xl bg-[#C5A36A]/20 text-[#D4B785] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#D4B785] font-semibold block">
                      Địa chỉ Showroom Phú Cường
                    </span>
                    <p className="text-base sm:text-lg font-bold text-white mt-1 leading-snug">
                      {brand.address}
                    </p>
                  </div>
                </div>

                {hasGoogleMaps && (
                  <a
                    href={brand.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[#D4B785] hover:text-white transition-colors pt-2 border-t border-white/10"
                  >
                    <span>Mở chỉ đường trên Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

              {/* Hotline Highlight Box */}
              <div className="flex flex-col justify-between bg-white/5 border border-[#C5A36A]/40 rounded-2xl p-5 text-left backdrop-blur-md">
                <div className="flex items-start gap-3.5 mb-3">
                  <div className="w-11 h-11 rounded-xl bg-[#800F21] text-white flex items-center justify-center shrink-0 shadow-md">
                    <Phone className="w-5 h-5 animate-pulse" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#D4B785] font-semibold block">
                      Hotline tư vấn chương trình
                    </span>
                    <a
                      href={brand.hotline}
                      className="text-2xl sm:text-3xl font-bold text-white hover:text-[#D4B785] transition-colors block tracking-wide mt-0.5"
                    >
                      {brand.hotlineDisplay}
                    </a>
                  </div>
                </div>

                <a
                  href={brand.hotline}
                  className="inline-flex items-center justify-center gap-2 bg-[#800F21] hover:bg-[#680b1a] text-white py-2.5 px-4 rounded-xl font-semibold text-xs transition-all active:scale-98 text-center"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Bấm gọi hotline ngay</span>
                </a>
              </div>

            </div>

            {/* Program Timeline reminder */}
            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-neutral-300 mb-6">
              <Clock className="w-4 h-4 text-[#D4B785]" />
              <span>Chương trình áp dụng từ: <strong>{timeline.dateDisplay}</strong></span>
            </div>

            {/* Optional extra social channels */}
            {(hasFanpage || hasZalo) && (
              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm">
                {hasZalo && (
                  <a
                    href={brand.zaloUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-blue-600/80 hover:bg-blue-600 text-white px-3.5 py-1.5 rounded-lg text-xs font-medium"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Nhắn Zalo</span>
                  </a>
                )}

                {hasFanpage && (
                  <a
                    href={brand.fanpageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-[#1877F2]/80 hover:bg-[#1877F2] text-white px-3.5 py-1.5 rounded-lg text-xs font-medium"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Facebook Fanpage</span>
                  </a>
                )}
              </div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
};
