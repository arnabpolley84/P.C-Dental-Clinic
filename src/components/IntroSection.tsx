import React from 'react';
import { SUPPLIED_IMAGES, CLINIC_INFO } from '../data/clinicData';
import { SafeImage } from './SafeImage';
import { TypewriterText } from './TypewriterText';
import { ArrowRight, CheckCircle2, Shield, HeartHandshake, Phone } from 'lucide-react';

interface IntroSectionProps {
  onOpenAppointmentModal: () => void;
}

export const IntroSection: React.FC<IntroSectionProps> = ({ onOpenAppointmentModal }) => {
  return (
    <section className="relative py-16 sm:py-24 bg-white border-b border-slate-100 overflow-hidden">
      {/* Subtle background ambient tint */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/70 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Large Visual with Cinematic Gradient Edge */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200/60 group bg-slate-950">
              <SafeImage
                src={SUPPLIED_IMAGES.imageB}
                fallbackSrc={SUPPLIED_IMAGES.consultationRoom}
                alt="P. C. Dental Clinic welcoming treatment environment"
                className="w-full h-[400px] sm:h-[480px] object-cover object-[center_35%] filter brightness-100 contrast-[1.03] group-hover:scale-[1.02] transition-transform duration-700"
              />
              {/* Soft bottom faded gradient overlay ensuring high image clarity */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

              {/* Floating verified badge in image */}
              <div className="absolute bottom-5 left-5 right-5 sm:right-auto bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-lg border border-slate-100/80 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-teal-100 text-teal-800 flex items-center justify-center shrink-0">
                  <HeartHandshake className="w-5 h-5 text-teal-700" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-teal-800">
                    Patient-First Environment
                  </div>
                  <div className="text-sm font-bold text-slate-900">
                    Comfort & Gentle Attention
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative subtle backdrop accent */}
            <div className="hidden sm:block absolute -bottom-4 -left-4 w-40 h-40 bg-teal-50 rounded-2xl -z-10" />
          </div>

          {/* Right Column: Editorial Typography & Content */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Small eyebrow label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200/60 text-teal-800 text-xs font-semibold tracking-wider uppercase mb-4 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-600" />
              <span>WELCOME TO P. C. DENTAL CLINIC</span>
            </div>

            {/* Large Heading with Typing Effect */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-slate-900 tracking-tight leading-[1.2] mb-6">
              <TypewriterText
                text="Dental Care Designed Around You"
                speed={30}
                delay={200}
                showCursor={true}
                className="text-slate-900"
              />
            </h2>

            {/* Typing effect paragraph */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6">
              <TypewriterText
                text="At P. C. Dental Clinic, our focus is to provide a welcoming and professional environment where patients can feel comfortable discussing their dental needs."
                speed={16}
                delay={500}
                showCursor={false}
                className="text-slate-600"
              />
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
              We understand that visiting a dental clinic can bring questions or anxiety. 
              Our clinic in Baghajatin is structured around patient comfort, clear communication, 
              and unhurried personal attention so that each visit feels reassuring and dignified.
            </p>

            {/* Key feature pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
              <div className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Relaxed & clean clinical setting</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Unhurried patient consultations</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Convenient Baghajatin location</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>5.0 / 5 Google rating standard</span>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                id="intro-discover-cta"
                href="#about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold transition-colors shadow-sm"
              >
                <span>Discover Our Clinic</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                id="intro-call-cta"
                href={`tel:${CLINIC_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-300 hover:border-teal-600 text-slate-800 hover:text-teal-700 text-sm font-semibold transition-colors bg-white"
              >
                <Phone className="w-4 h-4 text-teal-600" />
                <span>Call {CLINIC_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
