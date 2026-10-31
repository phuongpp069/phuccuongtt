import React, { useState } from 'react';
import { Camera, ZoomIn, Eye } from 'lucide-react';
import { CAMPAIGN_CONFIG, ShowroomPhoto } from '../config/campaign';

interface GallerySectionProps {
  onSelectPhoto: (image: string, title: string) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onSelectPhoto }) => {
  const { showroomPhotos } = CAMPAIGN_CONFIG;
  const [filter, setFilter] = useState<'all' | 'customer' | 'showroom'>('all');

  const filteredPhotos = filter === 'all'
    ? showroomPhotos
    : showroomPhotos.filter(p => p.category === filter);

  return (
    <section id="hinh-anh" className="py-16 sm:py-24 bg-[#FAF7F2] border-t border-[#C5A36A]/20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider text-[#800F21] bg-[#800F21]/8 border border-[#800F21]/20 uppercase mb-3">
            <Camera className="w-3.5 h-3.5 text-[#C5A36A]" />
            <span>KHÔNG GIAN TRẢI NGHIỆM THỰC TẾ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#35271F] tracking-tight mb-4">
            Khách Hàng Tại Showroom Phú Cường
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
            Hình ảnh không gian trưng bày đạt chuẩn TOTO và khoảnh khắc khách hàng trực tiếp trải nghiệm tiện nghi thiết bị vệ sinh cao cấp tại Showroom TOTO Phú Cường (Siêu Thị Nội Thất Phú Cường - 748 Nguyễn Văn Linh, P. Phố Hiến, Hưng Yên).
          </p>

          {/* Filter Tabs */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                filter === 'all'
                  ? 'bg-[#800F21] text-white shadow-sm'
                  : 'bg-white text-neutral-700 hover:bg-[#FAF7F2] border border-[#C5A36A]/30'
              }`}
            >
              Tất cả ({showroomPhotos.length})
            </button>
            <button
              onClick={() => setFilter('customer')}
              className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                filter === 'customer'
                  ? 'bg-[#800F21] text-white shadow-sm'
                  : 'bg-white text-neutral-700 hover:bg-[#FAF7F2] border border-[#C5A36A]/30'
              }`}
            >
              Trải nghiệm thực tế
            </button>
            <button
              onClick={() => setFilter('showroom')}
              className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                filter === 'showroom'
                  ? 'bg-[#800F21] text-white shadow-sm'
                  : 'bg-white text-neutral-700 hover:bg-[#FAF7F2] border border-[#C5A36A]/30'
              }`}
            >
              Không gian trưng bày
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
          {filteredPhotos.map((photo: ShowroomPhoto) => (
            <div
              key={photo.id}
              onClick={() => onSelectPhoto(photo.image, photo.title)}
              className="group relative rounded-xl overflow-hidden bg-neutral-100 border border-[#C5A36A]/25 shadow-sm hover:shadow-md cursor-pointer aspect-4/3 transition-transform duration-300 hover:-translate-y-0.5"
            >
              <img
                src={photo.image}
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                loading="lazy"
              />
              {/* Overlay hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 sm:p-4 text-white">
                <p className="text-xs sm:text-sm font-medium line-clamp-2 leading-snug">
                  {photo.title}
                </p>
                <div className="flex items-center gap-1.5 text-[11px] text-[#D4B785] mt-1.5">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Nhấn để xem chi tiết</span>
                </div>
              </div>

              {/* Quick corner zoom badge */}
              <div className="absolute top-2.5 right-2.5 p-1.5 bg-black/40 backdrop-blur-sm rounded-md text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>

        {/* Footnote about authenticity */}
        <p className="text-center text-xs text-neutral-500 mt-8">
          Toàn bộ hình ảnh thực tế được chụp trực tiếp tại Showroom TOTO Phú Cường.
        </p>

      </div>
    </section>
  );
};
