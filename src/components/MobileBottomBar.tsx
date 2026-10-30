import React from 'react';
import { Phone, Gift } from 'lucide-react';
import { CAMPAIGN_CONFIG } from '../config/campaign';

export const MobileBottomBar: React.FC = () => {
  const { brand } = CAMPAIGN_CONFIG;

  return (
    <aside
      aria-label="Thanh tác vụ nhanh trên thiết bị di động"
      className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-t border-[#C5A36A]/40 p-2.5 pb-safe shadow-[0_-4px_20px_rgba(0,0,0,0.1)]"
    >
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <a
          href="#giai-thuong"
          className="flex-1 flex items-center justify-center gap-1.5 py-3 px-2 rounded-lg border border-[#C5A36A]/60 bg-white text-[#35271F] font-semibold text-xs active:bg-neutral-100 transition-colors shadow-xs"
        >
          <Gift className="w-4 h-4 text-[#800F21]" />
          <span>Xem 5 giải thưởng</span>
        </a>

        <a
          href={brand.hotline}
          className="flex-1 flex items-center justify-center gap-1.5 py-3 px-2 rounded-lg bg-[#800F21] text-white font-semibold text-xs active:bg-[#680b1a] transition-all shadow-md animate-pulse"
        >
          <Phone className="w-4 h-4" />
          <span>Gọi: {brand.hotlineDisplay}</span>
        </a>
      </div>
    </aside>
  );
};
