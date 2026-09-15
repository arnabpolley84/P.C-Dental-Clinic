import React from 'react';
import { SUPPLIED_IMAGES, CLINIC_INFO } from '../data/clinicData';
import { SafeImage } from './SafeImage';
import { TypewriterText } from './TypewriterText';
import { Phone, Navigation, Calendar } from 'lucide-react';

interface CallToActionProps {
  onOpenAppointmentModal: () => void;
}

export const CallToAction: React.FC<CallToActionProps> = ({ onOpenAppointmentModal }) => {
  return (
    <section className="relative w-full py-20 sm:py-28 bg-slate-950 overflow-hidden select-none">
      {/* Background with Lenus-style Faded Edge Treatment */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-full lg:w-[60%] xl:w-[64%] h-full">
          <SafeImage
            src={SUPPLIED_IMAGES.imageC}
            fallbackSrc={SUPPLIED_IMAGES.dentalOperatory}
            alt="P. C. Dental Clinic atmosphere"
            className="w-full h-full object-cover object-center filter brightness-100 contrast-[1.04]"
          />

          {/* Left Fade Gradient: Softly melts image into the dark container */}
          <div className="absolute inset-y-0 left-0 w-32 sm:w-56 lg:w-96 bg-gradient-to-r from-slate-950 via-slate-950/75 to-transparent pointer-events-none" />

          {/* Top & Bottom edge soft fades */}
          <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-slate-950/75 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-950/75 to-transparent pointer-events-none" />
        </div>

        {/* Mobile overlay for readability */}
        <div className="lg:hidden absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/45 pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl lg:max-w-[52%]">
          <div className="inline-block text-teal-400 text-xs font-semibold tracking-widest uppercase mb-3">
            P. C. DENTAL CLINIC • KOLKATA
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-5">
            <TypewriterText
              text="Let's Take Care of Your Smile"
              speed={28}
              delay={200}
              showCursor={true}
              className="text-white"
            />
          </h2>

          <p className="text-slate-200 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
            Have a question or want to schedule a visit? Get in touch with P. C. Dental Clinic.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              id="cta-call-btn"
              href={`tel:${CLINIC_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-semibold text-sm shadow-lg shadow-teal-950/60 transition-all active:scale-[0.98]"
            >
              <Phone className="w-4 h-4" />
              <span>Call {CLINIC_INFO.phoneDisplay}</span>
            </a>

            <a
              id="cta-directions-btn"
              href={CLINIC_INFO.mapsSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-medium text-sm backdrop-blur-md transition-all active:scale-[0.98]"
            >
              <Navigation className="w-4 h-4 text-teal-300" />
              <span>Get Directions</span>
            </a>

            <button
              id="cta-book-btn"
              onClick={onOpenAppointmentModal}
              className="inline-flex items-center gap-2.5 px-5 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-900 text-slate-200 border border-slate-700 font-medium text-sm backdrop-blur-md transition-all active:scale-[0.98]"
            >
              <Calendar className="w-4 h-4 text-teal-400" />
              <span>Request Appointment</span>
            </button>
          </div>

          <div className="mt-8 text-xs text-slate-400">
            2/220A, Sree Colony, Regent Estate, Baghajatin Colony, Kolkata 700092
          </div>
        </div>
      </div>
    </section>
  );
};
