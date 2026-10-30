import React, { useState } from 'react';
import { HelpCircle, ChevronDown, FileText, Phone } from 'lucide-react';
import { CAMPAIGN_CONFIG } from '../config/campaign';

interface FaqSectionProps {
  onOpenRules: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenRules }) => {
  const { faqs, brand } = CAMPAIGN_CONFIG;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 sm:py-24 bg-[#F4EFE6]/50 border-t border-[#C5A36A]/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider text-[#800F21] bg-[#800F21]/8 border border-[#800F21]/20 uppercase mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#C5A36A]" />
            <span>GIẢI ĐÁP THẮC MẮC</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#35271F] tracking-tight">
            Câu Hỏi Thường Gặp
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 mt-3">
            Những thông tin cần biết để quý khách an tâm tham gia chương trình tri ân.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-xl border border-[#C5A36A]/30 overflow-hidden shadow-xs transition-all"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-[#35271F] hover:text-[#800F21] transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#C5A36A] transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180 text-[#800F21]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 sm:pb-5 text-sm sm:text-base text-neutral-700 leading-relaxed border-t border-neutral-100 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA for more questions */}
        <div className="mt-10 p-5 bg-white rounded-xl border border-[#C5A36A]/30 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <p className="font-bold text-[#35271F] text-base">Bạn còn câu hỏi khác?</p>
            <p className="text-xs sm:text-sm text-neutral-600">Đội ngũ chuyên viên TOTO Phú Cường sẵn sàng hỗ trợ trực tiếp qua hotline.</p>
          </div>
          <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
            <button
              onClick={onOpenRules}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg border border-[#C5A36A]/50 text-xs font-semibold text-[#35271F] hover:bg-[#FAF7F2] cursor-pointer"
            >
              <FileText className="w-4 h-4 text-[#C5A36A]" />
              <span>Xem thể lệ</span>
            </button>
            <a
              href={brand.hotline}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#800F21] text-white text-xs font-semibold hover:bg-[#680b1a] shadow"
            >
              <Phone className="w-4 h-4" />
              <span>Gọi tư vấn ngay</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
