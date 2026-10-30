import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface LightboxModalProps {
  isOpen: boolean;
  image: string;
  title: string;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  image,
  title,
  onClose,
}) => {
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
      aria-label={title || 'Hình ảnh phóng to'}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="Đóng cửa sổ ảnh"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Modal content container */}
      <div
        className="relative max-w-5xl max-h-[90vh] flex flex-col items-center bg-[#FAF7F2] rounded-2xl overflow-hidden shadow-2xl border border-[#C5A36A]/40"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full max-h-[75vh] flex items-center justify-center bg-black/5 p-2 sm:p-4 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="max-h-[75vh] max-w-full object-contain rounded-lg"
          />
        </div>

        {title && (
          <div className="w-full p-4 sm:p-5 bg-[#FAF7F2] border-t border-[#C5A36A]/20 text-center">
            <h4 className="text-sm sm:text-base font-semibold text-[#35271F]">
              {title}
            </h4>
          </div>
        )}
      </div>
    </div>
  );
};
