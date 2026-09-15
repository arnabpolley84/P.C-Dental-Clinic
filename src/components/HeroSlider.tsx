import React, { useState, useEffect, useRef, useCallback } from 'react';
import { HERO_SLIDES, CLINIC_INFO } from '../data/clinicData';
import { TypewriterText } from './TypewriterText';
import { ChevronLeft, ChevronRight, Phone, Calendar, Star, ShieldCheck, MapPin } from 'lucide-react';

interface HeroSliderProps {
  onOpenAppointmentModal: () => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({ onOpenAppointmentModal }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const totalSlides = HERO_SLIDES.length;

  const nextSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = (index: number) => {
    setCurrentSlideIndex(index);
  };

  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      nextSlide();
    }, 6500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, nextSlide]);

  const currentSlide = HERO_SLIDES[currentSlideIndex];

  const handleCtaClick = (action: string) => {
    if (action === '#contact' || action === '#appointment') {
      onOpenAppointmentModal();
      return;
    }
    if (action.startsWith('tel:')) {
      window.location.href = action;
      return;
    }
    const element = document.querySelector(action);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      aria-label="Dental Clinic Showcase"
      className="relative w-full min-h-[90vh] lg:min-h-[820px] bg-[#0A101D] overflow-hidden pt-20 sm:pt-24 flex items-center justify-start select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Image Slides with Smooth Crossfade & Lenus-inspired Faded Edge Treatment */}
      {HERO_SLIDES.map((slide, index) => {
        const isActive = index === currentSlideIndex;
        return (
          <div
            key={slide.id}
            aria-hidden={!isActive}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            {/*
              Right-aligned Hero Image Canvas (62% width on desktop, full width on mobile)
              Image remains completely crisp, vibrant and bright (filter brightness-100 contrast-[1.04])
              without heavy full-screen dark tints.
            */}
            <div className="absolute top-0 right-0 w-full lg:w-[62%] xl:w-[64%] h-full">
              <img
                src={slide.image}
                alt="P. C. Dental Clinic Kolkata"
                className="w-full h-full object-cover object-[center_30%] lg:object-[center_right] filter brightness-100 contrast-[1.04]"
                referrerPolicy="no-referrer"
                loading={index === 0 ? 'eager' : 'lazy'}
              />

              {/* 1. Left Edge Fade Gradient: Gracefully melts image into the dark hero background behind the text */}
              <div className="absolute inset-y-0 left-0 w-28 sm:w-48 lg:w-96 bg-gradient-to-r from-[#0A101D] via-[#0A101D]/75 to-transparent pointer-events-none" />

              {/* 2. Top Edge Fade: Seamless blend under sticky navigation */}
              <div className="absolute inset-x-0 top-0 h-24 sm:h-32 bg-gradient-to-b from-[#0A101D]/80 to-transparent pointer-events-none" />

              {/* 3. Subtle Right Edge Vignette */}
              <div className="hidden lg:block absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#0A101D]/30 to-transparent pointer-events-none" />
            </div>

            {/* Mobile Responsive Gradient: Allows image to be clearly visible while maintaining text contrast */}
            <div className="lg:hidden absolute inset-0 bg-gradient-to-t from-[#0A101D] via-[#0A101D]/80 to-[#0A101D]/40 pointer-events-none" />
          </div>
        );
      })}

      {/* Bottom Transition Gradient into the next page section */}
      <div className="absolute inset-x-0 bottom-0 h-28 sm:h-40 lg:h-48 bg-gradient-to-t from-[#FAFAFA] via-[#FAFAFA]/80 to-transparent pointer-events-none z-10" />

      {/* Hero Foreground Content Overlay (Positioned on Left 54%) */}
      <div className="relative z-20 max-w-7xl mx-auto w-full h-full px-4 sm:px-6 lg:px-8 flex flex-col justify-center py-12 sm:py-16 lg:py-24">
        <div className="max-w-xl lg:max-w-[54%] xl:max-w-[52%]">
          {/* Eyebrow badge with typing effect */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-950/80 border border-teal-500/30 text-teal-300 text-xs sm:text-xs font-semibold tracking-wider uppercase mb-5 backdrop-blur-sm shadow-xs">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            <TypewriterText
              text={currentSlide.eyebrow || 'WELCOME TO P. C. DENTAL CLINIC'}
              speed={20}
              delay={150}
              triggerKey={currentSlideIndex}
              showCursor={false}
              className="font-medium tracking-wider"
            />
          </div>

          {/* Main Cinematic Heading with Strong Typing Animation */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] xl:text-[60px] font-bold text-white tracking-tight leading-[1.14] mb-6 min-h-[90px] sm:min-h-[120px] lg:min-h-[140px] drop-shadow-md">
            <TypewriterText
              text={currentSlide.heading}
              speed={32}
              delay={250}
              triggerKey={currentSlideIndex}
              showCursor={true}
              cursorChar="|"
              className="text-white"
            />
          </h1>

          {/* Supporting Copy */}
          <p className="text-slate-200 text-base sm:text-lg lg:text-xl font-normal leading-relaxed mb-8 max-w-xl text-balance drop-shadow-sm min-h-[56px] sm:min-h-[64px]">
            {currentSlide.supportingCopy}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8">
            <button
              id="hero-primary-cta"
              onClick={() => handleCtaClick(currentSlide.primaryCtaAction)}
              className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-semibold text-sm sm:text-base shadow-lg shadow-teal-900/40 hover:shadow-teal-800/60 transition-all duration-200 active:scale-[0.98]"
            >
              <Calendar className="w-4 h-4 shrink-0" />
              <span>{currentSlide.primaryCtaText}</span>
            </button>

            {currentSlide.secondaryCtaText && (
              <button
                id="hero-secondary-cta"
                onClick={() => handleCtaClick(currentSlide.secondaryCtaAction || 'tel:09007065615')}
                className="inline-flex items-center justify-center gap-2.5 px-5 sm:px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-medium text-sm sm:text-base backdrop-blur-md transition-all duration-200 active:scale-[0.98]"
              >
                <Phone className="w-4 h-4 text-teal-300 shrink-0" />
                <span>{currentSlide.secondaryCtaText}</span>
              </button>
            )}
          </div>

          {/* Trust Highlights Strip below Hero CTA */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-300">
            <div className="flex items-center gap-1.5">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-semibold text-white ml-1">5.0 / 5</span>
              <span className="text-slate-400">(13 Google Reviews)</span>
            </div>

            <div className="hidden sm:inline-block w-1 h-1 rounded-full bg-slate-600" />

            <div className="flex items-center gap-1.5 text-slate-300">
              <ShieldCheck className="w-4 h-4 text-teal-400" />
              <span>Comfort-First Patient Care</span>
            </div>

            <div className="hidden sm:inline-block w-1 h-1 rounded-full bg-slate-600" />

            <div className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-4 h-4 text-teal-400" />
              <span>Baghajatin, Kolkata</span>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Navigation Controls & Indicators */}
      <div className="absolute bottom-6 right-4 sm:right-8 lg:right-12 z-20 flex items-center gap-3 bg-slate-950/70 backdrop-blur-md px-3.5 py-2 rounded-full border border-white/15 shadow-xl">
        {/* Previous button */}
        <button
          id="hero-prev-btn"
          onClick={prevSlide}
          aria-label="Previous slide"
          className="p-1.5 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Slide Indicators */}
        <div className="flex items-center gap-2">
          {HERO_SLIDES.map((slide, idx) => (
            <button
              key={slide.id}
              id={`hero-indicator-${idx + 1}`}
              onClick={() => goToSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`transition-all duration-300 rounded-full h-1.5 ${
                idx === currentSlideIndex
                  ? 'w-6 bg-teal-400'
                  : 'w-2 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>

        {/* Next button */}
        <button
          id="hero-next-btn"
          onClick={nextSlide}
          aria-label="Next slide"
          className="p-1.5 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
