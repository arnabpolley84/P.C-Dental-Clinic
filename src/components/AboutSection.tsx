import React from 'react';
import { CLINIC_INFO, SUPPLIED_IMAGES } from '../data/clinicData';
import { SafeImage } from './SafeImage';
import { TypewriterText } from './TypewriterText';
import { Star, ShieldCheck, Heart, MapPin, Sparkles, Building2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-slate-50/70 border-b border-slate-200/60 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-100/80 text-teal-800 text-xs font-semibold tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ABOUT P. C. DENTAL CLINIC</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-5">
            <TypewriterText
              text="A Dental Clinic You Can Feel Comfortable With"
              speed={28}
              delay={200}
              as="span"
              className="text-slate-900"
            />
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Providing thoughtful dental consultations and patient-first oral healthcare in Baghajatin, Kolkata.
          </p>
        </div>

        {/* Narrative & Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Main Story Card (8 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-slate-200/80 flex flex-col justify-between">
            <div>
              <div className="text-xs uppercase tracking-widest text-slate-600 font-semibold mb-3">
                Our Dental Philosophy
              </div>
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-4">
                Prioritizing patient comfort, respect, and clear understanding.
              </h3>
              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  At P. C. Dental Clinic (পি. সি. ডেন্টাল ক্লিনিক), we believe that exceptional dental care begins 
                  with genuine empathy. For many individuals, scheduling a dental appointment comes with natural 
                  hesitation. That is why our clinic has been thoughtfully arranged to offer a peaceful, dignified, 
                  and reassuring experience.
                </p>
                <p>
                  Every patient is met with courteous attention, clear communication regarding their oral health, 
                  and a relaxed consultation environment where questions are always welcomed and addressed without haste.
                </p>
                <p>
                  Conveniently situated in Baghajatin Colony, Kolkata, we are dedicated to supporting our neighborhood 
                  with reliable, compassionate dental care tailored to individuals and families alike.
                </p>
              </div>
            </div>

            {/* Core Values Strip */}
            <div className="grid grid-cols-3 gap-4 pt-8 mt-8 border-t border-slate-100 text-center">
              <div className="p-3 rounded-xl bg-slate-50">
                <Heart className="w-5 h-5 text-teal-600 mx-auto mb-1.5" />
                <div className="font-semibold text-slate-900 text-sm">Gentle Care</div>
                <div className="text-xs text-slate-600">Patient-centered</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-50">
                <ShieldCheck className="w-5 h-5 text-teal-600 mx-auto mb-1.5" />
                <div className="font-semibold text-slate-900 text-sm">Hygiene First</div>
                <div className="text-xs text-slate-600">Sterilized setup</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-50">
                <Building2 className="w-5 h-5 text-teal-600 mx-auto mb-1.5" />
                <div className="font-semibold text-slate-900 text-sm">Local Clinic</div>
                <div className="text-xs text-slate-600">Baghajatin, Kolkata</div>
              </div>
            </div>
          </div>

          {/* Official Google Listing Badge & Image Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Google Rating Official Card */}
            <div className="bg-white rounded-2xl p-7 shadow-sm border border-slate-200/80">
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-md bg-blue-50 text-blue-700">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
                  </svg>
                  Google Verified Rating
                </span>
                <span className="text-xs text-slate-600 font-medium">Public Google Listing</span>
              </div>

              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-5xl font-extrabold text-slate-900 tracking-tight">5.0</span>
                <div className="flex flex-col">
                  <div className="flex text-amber-400 mb-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-slate-700">Based on 13 Google Reviews</span>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                Patients consistently appreciate our gentle bedside manner, clinical cleanliness, 
                and attentive approach based on verified feedback provided on Google.
              </p>
            </div>

            {/* Visual Image Preview */}
            <div className="relative rounded-2xl overflow-hidden shadow-sm border border-slate-200/80 grow min-h-[240px] bg-slate-900 group">
              <SafeImage
                src={SUPPLIED_IMAGES.imageC}
                fallbackSrc={SUPPLIED_IMAGES.receptionLounge}
                alt="P. C. Dental Clinic environment"
                className="w-full h-full object-cover object-center filter brightness-100 contrast-[1.03] group-hover:scale-[1.02] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent flex items-end p-5">
                <div className="text-white text-xs">
                  <div className="font-semibold text-sm">P. C. Dental Clinic</div>
                  <div className="text-slate-200">{CLINIC_INFO.addressLine1}, {CLINIC_INFO.area}, Kolkata</div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
