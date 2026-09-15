import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../data/clinicData';
import { GalleryImage } from '../types';
import { SafeImage } from './SafeImage';
import { TypewriterText } from './TypewriterText';
import { Maximize2, X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
    document.body.style.overflow = '';
  };

  const nextImage = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % GALLERY_IMAGES.length);
    }
  };

  const prevImage = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
    }
  };

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-slate-50/70 border-b border-slate-200/60 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-100/80 text-teal-800 text-xs font-semibold tracking-wider uppercase mb-4">
            <Camera className="w-3.5 h-3.5" />
            <span>CLINIC ENVIRONMENT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            <TypewriterText
              text="Clinic Gallery"
              speed={30}
              delay={200}
              className="text-slate-900"
            />
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
            A glimpse into the clean, modern, and comfortable setting prepared for our patients.
          </p>
        </div>

        {/* Gallery Grid - Intelligently arranged to preserve natural aspect ratios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_IMAGES.map((item, index) => (
            <div
              key={item.id}
              id={`gallery-item-${index + 1}`}
              onClick={() => openLightbox(index)}
              className="group relative rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-2xs hover:shadow-xl hover:border-teal-600/40 transition-all duration-300 cursor-pointer h-64 sm:h-72"
            >
              <SafeImage
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Gradient Overlay for Text legibility and hover trigger */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Hover Badge / Expand Button */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-900/60 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Bottom Tag & Title */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[11px] font-semibold text-teal-300 uppercase tracking-wider block mb-1">
                  {item.tag}
                </span>
                <div className="text-sm font-bold text-white tracking-tight">
                  {item.title}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeLightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4">
          <button
            id="lightbox-close-btn"
            onClick={closeLightbox}
            className="absolute top-5 right-5 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close image lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Controls */}
          <button
            id="lightbox-prev-btn"
            onClick={prevImage}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            id="lightbox-next-btn"
            onClick={nextImage}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Active Image with natural aspect preservation */}
          <div className="max-w-4xl max-h-[85vh] flex flex-col items-center justify-center">
            <img
              src={GALLERY_IMAGES[activeLightboxIndex].src}
              alt={GALLERY_IMAGES[activeLightboxIndex].alt}
              referrerPolicy="no-referrer"
              className="max-h-[75vh] w-auto object-contain rounded-xl shadow-2xl"
            />
            <div className="mt-4 text-center text-white">
              <div className="text-sm font-semibold">
                {GALLERY_IMAGES[activeLightboxIndex].title}
              </div>
              <div className="text-xs text-teal-400 mt-0.5">
                {GALLERY_IMAGES[activeLightboxIndex].tag} • Image {activeLightboxIndex + 1} of {GALLERY_IMAGES.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
