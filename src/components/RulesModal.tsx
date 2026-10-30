import React, { useEffect } from 'react';
import { X, ShieldCheck, Phone, CheckCircle2 } from 'lucide-react';
import { CAMPAIGN_CONFIG } from '../config/campaign';

interface RulesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RulesModal: React.FC<RulesModalProps> = ({ isOpen, onClose }) => {
  const { rulesModal, brand } = CAMPAIGN_CONFIG;

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="rules-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-[#FAF7F2] rounded-2xl shadow-2xl border-2 border-[#C5A36A]/50 flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 sm:p-6 bg-[#F4EFE6] border-b border-[#C5A36A]/30">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#800F21] text-white rounded-lg">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-semibold text-[#800F21] uppercase tracking-wider block">
                Văn bản quy định chính thức
              </span>
              <h3 id="rules-modal-title" className="text-lg sm:text-xl font-extrabold text-[#35271F]">
                {rulesModal.title}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-neutral-500 hover:text-black hover:bg-neutral-200/60 transition-colors"
            aria-label="Đóng thể lệ"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-8 space-y-6 text-[#35271F] text-sm leading-relaxed">
          {rulesModal.sections.map((section, idx) => (
            <div key={idx} className="bg-white rounded-xl p-4 sm:p-5 border border-[#C5A36A]/20 shadow-xs">
              <h4 className="font-bold text-base text-[#800F21] mb-3 flex items-center gap-2">
                <span>{section.heading}</span>
              </h4>
              <ul className="space-y-2 text-neutral-700">
                {section.points.map((pt, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A36A] shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 bg-[#F4EFE6] border-t border-[#C5A36A]/30 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-neutral-600 text-center sm:text-left">
            Mọi thắc mắc vui lòng liên hệ trực tiếp hotline ban tổ chức.
          </div>
          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <a
              href={brand.hotline}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 bg-[#800F21] text-white px-5 py-2.5 rounded-lg text-xs font-semibold hover:bg-[#680b1a] transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Gọi {brand.hotlineDisplay}</span>
            </a>
            <button
              onClick={onClose}
              className="flex-1 sm:flex-initial px-5 py-2.5 rounded-lg border border-neutral-300 text-neutral-700 hover:bg-neutral-100 text-xs font-semibold transition-colors cursor-pointer"
            >
              Đóng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
