import React from 'react';
import { Phone, FileText, ArrowUp } from 'lucide-react';
import { CAMPAIGN_CONFIG } from '../config/campaign';

interface FooterProps {
  onOpenRules: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenRules }) => {
  const { brand, timeline } = CAMPAIGN_CONFIG;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#241B15] text-[#FAF7F2] border-t-2 border-[#C5A36A]/40 pt-12 pb-24 sm:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pb-10 border-b border-white/10">
          
          {/* Brand lockup */}
          <div className="md:col-span-5 flex flex-col items-start text-left">
            <div className="flex items-center gap-3.5 mb-4">
              <img
                src={brand.logoImage}
                alt={brand.fullName}
                className="h-12 w-auto object-contain bg-white/5 p-1 rounded-md"
              />
              <div className="flex flex-col text-left leading-tight">
                <span className="text-[11px] font-semibold tracking-widest text-[#D4B785] uppercase">
                  {brand.prefix}
                </span>
                <span className="text-xl font-extrabold tracking-tight text-white">
                  {brand.name}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-neutral-400 max-w-sm leading-relaxed mb-3">
              Đại lý chính hãng phân phối thiết bị vệ sinh cao cấp TOTO Nhật Bản.
            </p>

            <div className="text-xs text-neutral-300 mb-3 flex flex-col gap-0.5">
              <span className="text-[#D4B785] font-semibold">📍 {brand.venueName || 'Siêu Thị Nội Thất Phú Cường'}</span>
              <span>{brand.address}</span>
            </div>

            <div className="text-xs text-[#D4B785]">
              Chương trình: <strong>{timeline.title}</strong> ({timeline.dateDisplay})
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 flex flex-col items-start text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D4B785] mb-3">
              Liên kết chương trình
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-neutral-300">
              <li>
                <a href="#giai-thuong" className="hover:text-[#D4B785] transition-colors">
                  Cơ cấu 05 giải thưởng TOTO
                </a>
              </li>
              <li>
                <a href="#dieu-kien" className="hover:text-[#D4B785] transition-colors">
                  Điều kiện nhận phiếu bốc thăm
                </a>
              </li>
              <li>
                <a href="#hinh-anh" className="hover:text-[#D4B785] transition-colors">
                  Hình ảnh khách hàng tại showroom
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenRules}
                  className="hover:text-[#D4B785] transition-colors flex items-center gap-1.5 cursor-pointer text-left"
                >
                  <FileText className="w-3.5 h-3.5 text-[#D4B785]" />
                  <span>Thể lệ chi tiết & quy định nhận thưởng</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="md:col-span-3 flex flex-col items-start text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D4B785] mb-3">
              Hỗ trợ khách hàng
            </h4>
            <div className="mb-3">
              <span className="text-xs text-neutral-400 block">Hotline tư vấn:</span>
              <a
                href={brand.hotline}
                className="text-lg font-bold text-white hover:text-[#D4B785] transition-colors flex items-center gap-2 mt-0.5"
              >
                <Phone className="w-4 h-4 text-[#800F21]" />
                <span>{brand.hotlineDisplay}</span>
              </a>
            </div>
            <div className="text-xs text-neutral-400">
              Website: <a href="https://phucuongtt.com" className="text-white hover:underline">{brand.websiteDomain}</a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>© {new Date().getFullYear()} {brand.fullName}. Bản quyền thuộc về Showroom TOTO Phú Cường.</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-[#D4B785] hover:text-white transition-colors cursor-pointer"
          >
            <span>Về đầu trang</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
