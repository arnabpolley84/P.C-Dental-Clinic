import React, { useState } from 'react';
import { DENTAL_TREATMENTS } from '../data/clinicData';
import { DentalTreatment } from '../types';
import { SafeImage } from './SafeImage';
import { TypewriterText } from './TypewriterText';
import { ArrowRight, CheckCircle, Info, X, Calendar, Phone } from 'lucide-react';

interface TreatmentsSectionProps {
  onOpenAppointmentModal: () => void;
}

export const TreatmentsSection: React.FC<TreatmentsSectionProps> = ({ onOpenAppointmentModal }) => {
  const [selectedTreatment, setSelectedTreatment] = useState<DentalTreatment | null>(null);

  return (
    <section id="treatments" className="py-20 sm:py-28 bg-slate-50/70 border-b border-slate-200/60 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-100/80 text-teal-800 text-xs font-semibold tracking-wider uppercase mb-4">
            <span>DENTAL CARE CATEGORIES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            <TypewriterText
              text="Our Dental Care"
              speed={28}
              delay={200}
              className="text-slate-900"
            />
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-4">
            Explore general areas of oral health and dental maintenance. Each consultation is personalized around your comfort and health goals.
          </p>

          {/* Editable placeholder note required by instructions */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-amber-50/90 border border-amber-200/70 text-amber-900 text-xs max-w-xl mx-auto text-left sm:text-center">
            <Info className="w-4 h-4 text-amber-700 shrink-0" />
            <span>
              <strong>Note:</strong> General dental categories displayed below are representative placeholders and may be customized by clinic staff according to specific offerings.
            </span>
          </div>
        </div>

        {/* Treatment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DENTAL_TREATMENTS.map((treatment, idx) => (
            <div
              key={treatment.id}
              id={`treatment-card-${treatment.id}`}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-teal-600/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Container with Subtle Biograph Cinematic Gradient */}
                <div className="relative h-52 sm:h-56 overflow-hidden">
                  <SafeImage
                    src={treatment.image}
                    alt={treatment.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle directional gradient overlay on image */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        'linear-gradient(180deg, rgba(15,23,42,0.1) 0%, rgba(15,23,42,0.65) 100%)',
                    }}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide bg-slate-900/80 text-teal-300 backdrop-blur-md border border-white/10">
                      {treatment.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-bold tracking-tight drop-shadow-sm">
                      <TypewriterText
                        text={treatment.title}
                        speed={24}
                        delay={idx * 150}
                        showCursor={false}
                        className="text-white"
                      />
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-slate-600 text-sm leading-relaxed mb-5">
                    {treatment.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {treatment.details.slice(0, 2).map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer CTA */}
              <div className="px-6 pb-6 pt-2">
                <button
                  id={`learn-more-${treatment.id}`}
                  onClick={() => setSelectedTreatment(treatment)}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-slate-200 group-hover:border-teal-600/50 bg-slate-50 group-hover:bg-teal-50 text-slate-800 group-hover:text-teal-900 text-xs font-semibold transition-colors"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Treatment Details Modal */}
      {selectedTreatment && (
        <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-100 animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header Image */}
            <div className="relative h-48 sm:h-56">
              <SafeImage
                src={selectedTreatment.image}
                alt={selectedTreatment.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-transparent" />
              
              <button
                id="treatment-modal-close"
                onClick={() => setSelectedTreatment(null)}
                className="absolute top-3 right-3 p-2 rounded-full bg-slate-900/60 text-white hover:bg-slate-900/90 transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="absolute bottom-4 left-5 right-5 text-white">
                <span className="text-xs font-semibold text-teal-300 uppercase tracking-wider">
                  {selectedTreatment.category}
                </span>
                <h3 className="text-2xl font-bold tracking-tight text-white mt-1">
                  {selectedTreatment.title}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              <p className="text-slate-700 text-sm leading-relaxed mb-5">
                {selectedTreatment.description}
              </p>

              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
                Key Care Focus Areas
              </div>
              <ul className="space-y-2.5 mb-6">
                {selectedTreatment.details.map((point, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="p-3 bg-slate-50 rounded-xl text-[11px] text-slate-500 mb-6 border border-slate-100">
                Notice: Specific clinical recommendations are provided during clinical consultation after examining oral conditions.
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="tel:09007065615"
                  className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-slate-300 text-slate-800 text-xs font-semibold hover:bg-slate-50"
                >
                  <Phone className="w-3.5 h-3.5 text-teal-700" />
                  <span>Call Clinic</span>
                </a>
                <button
                  onClick={() => {
                    setSelectedTreatment(null);
                    onOpenAppointmentModal();
                  }}
                  className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-teal-700 hover:bg-teal-800 text-white text-xs font-semibold shadow-sm"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Consultation</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
