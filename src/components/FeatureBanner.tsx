import React from 'react';
import { SUPPLIED_IMAGES, CLINIC_INFO } from '../data/clinicData';
import { SafeImage } from './SafeImage';
import { TypewriterText } from './TypewriterText';
import { Phone, Calendar, Sparkles } from 'lucide-react';

interface FeatureBannerProps {
  onOpenAppointmentModal: () => void;
}

export const FeatureBanner: React.FC<FeatureBannerProps> = ({ onOpenAppointmentModal }) => {
  return (
    <section className="relative w-full py-24 sm:py-32 bg-slate-950 overflow-hidden select-none">
      {/* Background Image Container with Lenus-style Faded Left Treatment */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-full lg:w-[60%] xl:w-[64%] h-full">
          <SafeImage
            src={SUPPLIED_IMAGES.imageA}
            fallbackSrc={SUPPLIED_IMAGES.modernDentistry}
            alt="P. C. Dental Clinic Kolkata"
            className="w-full h-full object-cover object-[center_35%] lg:object-center filter brightness-100 contrast-[1.04]"
          />

          {/* Directional Left Fade Gradient */}
          <div className="absolute inset-y-0 left-0 w-32 sm:w-56 lg:w-96 bg-gradient-to-r from-slate-950 via-slate-950/75 to-transparent pointer-events-none" />

          {/* Top Fade */}
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-slate-950/75 to-transparent pointer-events-none" />

          {/* Bottom Fade */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/75 to-transparent pointer-events-none" />
        </div>

        {/* Mobile Gradient Overlay for clean readability */}
        <div className="lg:hidden absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/45 pointer-events-none" />
      </div>

      {/* Editorial Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl lg:max-w-[52%]">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950/80 border border-teal-500/30 text-teal-300 text-xs font-semibold tracking-widest uppercase mb-5 backdrop-blur-sm">
            <Sparkles className="w-3 h-3 text-teal-400" />
            <span>PATIENT-FOCUSED COMMITMENT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold text-white tracking-tight leading-[1.15] mb-6 drop-shadow-md">
            <TypewriterText
              text="Your smile is worth caring for."
              speed={34}
              delay={200}
              showCursor={true}
              className="text-white"
            />
          </h2>

          <p className="text-slate-200 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
            Whether it is an overdue check-up or addressing a concern you have put off, 
            our clinic provides a reassuring atmosphere where your comfort always takes center stage.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button
              id="feature-banner-book"
              onClick={onOpenAppointmentModal}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-semibold text-sm shadow-lg shadow-teal-950/60 transition-all active:scale-[0.98]"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule a Consultation</span>
            </button>

            <a
              id="feature-banner-call"
              href={`tel:${CLINIC_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-medium text-sm backdrop-blur-md transition-all active:scale-[0.98]"
            >
              <Phone className="w-4 h-4 text-teal-300" />
              <span>Call {CLINIC_INFO.phoneDisplay}</span>
            </a>
          </div>

          <div className="mt-8 pt-6 border-t border-white/15 text-xs text-slate-400 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
            <span>Serving Baghajatin Colony, Sree Colony & South Kolkata neighborhoods</span>
          </div>

        </div>
      </div>
    </section>
  );
};
