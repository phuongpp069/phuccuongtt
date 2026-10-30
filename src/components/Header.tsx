import React, { useState } from 'react';
import { Phone, Menu, X, Gift, FileText, Camera, ShieldCheck } from 'lucide-react';
import { CAMPAIGN_CONFIG } from '../config/campaign';

interface HeaderProps {
  onOpenRules: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenRules }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { brand } = CAMPAIGN_CONFIG;

  const navLinks = [
    { label: 'Giải thưởng', href: '#giai-thuong', icon: Gift },
    { label: 'Cách tham gia', href: '#dieu-kien', icon: ShieldCheck },
    { label: 'Khách hàng tại showroom', href: '#hinh-anh', icon: Camera },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#C5A36A]/20 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20">
          
          {/* Brand lockup */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#800F21] rounded-lg p-1">
            <img
              src={brand.logoImage}
              alt={brand.fullName}
              className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col text-left leading-tight">
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-widest text-[#800F21] uppercase">
                {brand.prefix}
              </span>
              <span className="text-base sm:text-xl font-extrabold tracking-tight text-[#35271F] group-hover:text-[#800F21] transition-colors">
                {brand.name}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-7 text-sm font-medium text-[#35271F]">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-[#800F21] transition-colors py-2 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#800F21] hover:after:w-full after:transition-all"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={onOpenRules}
              className="hover:text-[#800F21] transition-colors py-2 flex items-center gap-1 cursor-pointer"
            >
              <FileText className="w-4 h-4 text-[#C5A36A]" />
              <span>Thể lệ</span>
            </button>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={brand.hotline}
              className="inline-flex items-center gap-2 bg-[#800F21] hover:bg-[#680b1a] text-white px-5 py-2.5 rounded-lg text-sm font-semibold shadow-sm transition-all hover:shadow-md active:scale-98"
            >
              <Phone className="w-4 h-4 animate-pulse text-[#FAF7F2]" />
              <span>Gọi tư vấn: {brand.hotlineDisplay}</span>
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={brand.hotline}
              className="p-2.5 text-[#800F21] bg-[#800F21]/10 rounded-lg"
              title="Gọi hotline"
              aria-label="Gọi hotline tư vấn"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-[#35271F] hover:bg-black/5 focus:outline-none"
              aria-label="Mở danh mục điều hướng"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-[#C5A36A]/20 bg-[#FAF7F2] px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-3 py-2.5 text-base font-medium text-[#35271F] hover:bg-[#800F21]/5 hover:text-[#800F21] rounded-lg"
                >
                  <Icon className="w-5 h-5 text-[#C5A36A]" />
                  <span>{item.label}</span>
                </a>
              );
            })}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRules();
              }}
              className="flex items-center gap-3 px-3 py-2.5 text-base font-medium text-[#35271F] hover:bg-[#800F21]/5 hover:text-[#800F21] rounded-lg text-left cursor-pointer"
            >
              <FileText className="w-5 h-5 text-[#C5A36A]" />
              <span>Thể lệ chi tiết</span>
            </button>
            <div className="pt-2 border-t border-[#C5A36A]/20">
              <a
                href={brand.hotline}
                className="flex items-center justify-center gap-2 w-full bg-[#800F21] text-white py-3 rounded-lg font-semibold text-center shadow"
              >
                <Phone className="w-4 h-4" />
                <span>Gọi ngay: {brand.hotlineDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
