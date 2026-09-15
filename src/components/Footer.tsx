import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { Phone, MapPin, Compass, ArrowUp, Star } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Treatments', href: '#treatments' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-sm border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Col 1: Clinic Identity & Overview (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-teal-500" />
              <span className="text-xl font-bold text-white tracking-tight font-sans">
                {CLINIC_INFO.nameEn}
              </span>
            </div>

            <div className="text-sm font-medium text-teal-400">
              {CLINIC_INFO.nameBn}
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Dedicated to patient comfort, gentle dental consultations, and dependable oral healthcare 
              in Baghajatin Colony, Kolkata.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-300 pt-1">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-semibold text-white">5.0 / 5</span>
              <span className="text-slate-500">• 13 Google Reviews</span>
            </div>
          </div>

          {/* Col 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3">
            <div className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </div>
            <ul className="space-y-2 text-xs sm:text-sm">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="hover:text-teal-400 transition-colors text-slate-400"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Location & Phone (4 cols) */}
          <div className="lg:col-span-4 space-y-3.5">
            <div className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Contact & Location
            </div>

            <div className="flex items-start gap-2.5 text-xs text-slate-300">
              <MapPin className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
              <div>
                <div>{CLINIC_INFO.addressLine1}, {CLINIC_INFO.addressLine2}</div>
                <div>{CLINIC_INFO.city}, {CLINIC_INFO.statePincode}</div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-400 pl-6">
              <Compass className="w-3.5 h-3.5 text-teal-600" />
              <span>Plus Code: {CLINIC_INFO.plusCode}</span>
            </div>

            <div className="pt-2">
              <a
                id="footer-call-btn"
                href={`tel:${CLINIC_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-teal-700 hover:bg-teal-600 text-white text-xs font-semibold shadow-xs transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Now: {CLINIC_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} {CLINIC_INFO.nameEn} ({CLINIC_INFO.nameBn}). All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>Category: {CLINIC_INFO.category}</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 hover:text-teal-400 transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
