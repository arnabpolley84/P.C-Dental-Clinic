import React from 'react';
import { WHY_CHOOSE_ITEMS } from '../data/clinicData';
import { TypewriterText } from './TypewriterText';
import {
  Heart,
  Users,
  ShieldCheck,
  MapPin,
  Star,
  PhoneCall,
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'comfort':
        return <Heart className="w-5 h-5 text-teal-600" />;
      case 'patient':
        return <Users className="w-5 h-5 text-teal-600" />;
      case 'professional':
        return <ShieldCheck className="w-5 h-5 text-teal-600" />;
      case 'location':
        return <MapPin className="w-5 h-5 text-teal-600" />;
      case 'rating':
        return <Star className="w-5 h-5 text-teal-600 fill-teal-600/20" />;
      case 'contact':
        return <PhoneCall className="w-5 h-5 text-teal-600" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-teal-600" />;
    }
  };

  return (
    <section id="why-us" className="py-20 sm:py-28 bg-white border-b border-slate-200/60 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold tracking-wider uppercase mb-4">
            <span>PATIENT EXPERIENCE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            <TypewriterText
              text="Why Patients Choose P. C. Dental Clinic"
              speed={26}
              delay={200}
              className="text-slate-900"
            />
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            A dental visit should inspire confidence, not concern. Here is what defines our commitment to your care.
          </p>
        </div>

        {/* 6 Elegant, Un-cartoonish Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_CHOOSE_ITEMS.map((item, index) => (
            <div
              key={item.id}
              id={`why-card-${index + 1}`}
              className="group p-7 rounded-xl bg-slate-50/70 border border-slate-200/70 hover:bg-white hover:border-teal-600/30 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-lg bg-white border border-slate-200/90 shadow-2xs flex items-center justify-center mb-5 group-hover:bg-teal-50 group-hover:border-teal-200 transition-colors">
                  {getIcon(item.iconName)}
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2.5 tracking-tight group-hover:text-teal-900 transition-colors">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-medium text-slate-600">
                <span>P. C. Dental Care</span>
                <span className="text-teal-700 opacity-0 group-hover:opacity-100 transition-opacity">
                  Standard of Care
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
