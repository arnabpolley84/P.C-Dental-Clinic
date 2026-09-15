import React, { useState, useEffect } from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { Phone, Calendar, Menu, X, Clock, MapPin } from 'lucide-react';

interface HeaderProps {
  onOpenAppointmentModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenAppointmentModal }) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

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
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Subtle top emergency/contact bar on desktop */}
      <div className="hidden md:block bg-slate-900 text-slate-300 text-xs py-1.5 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 text-slate-300 font-medium">
              <MapPin className="w-3.5 h-3.5 text-teal-400 shrink-0" />
              <span className="truncate">Sree Colony, Regent Estate, Baghajatin, Kolkata</span>
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-teal-400 shrink-0" />
              <span>5.0★ Google Rated Dental Care</span>
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <a
              id="topbar-phone-link"
              href={`tel:${CLINIC_INFO.phoneRaw}`}
              className="flex items-center gap-1.5 text-white hover:text-teal-300 transition-colors font-medium whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-teal-400 shrink-0" />
              <span>Call: {CLINIC_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 border-b ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-slate-200/80 py-3.5'
            : 'bg-white/90 backdrop-blur-sm border-slate-200/60 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Brand */}
          <a
            id="brand-logo-link"
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#hero');
            }}
            className="flex flex-col group text-left shrink-0"
          >
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-teal-600 group-hover:scale-125 transition-transform duration-300" />
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 font-sans whitespace-nowrap">
                P. C. Dental Clinic
              </span>
            </div>
            <span className="text-[11px] sm:text-xs text-teal-800 font-medium pl-4 tracking-wide whitespace-nowrap">
              {CLINIC_INFO.nameBn}
            </span>
          </a>

          {/* Desktop Navigation Links - Single line strictly guaranteed */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <button
                key={link.label}
                id={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => handleNavClick(link.href)}
                className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-teal-700 transition-colors whitespace-nowrap rounded-md hover:bg-slate-50"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden sm:flex items-center space-x-3 shrink-0">
            <a
              id="header-call-cta"
              href={`tel:${CLINIC_INFO.phoneRaw}`}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-teal-700 shrink-0" />
              <span>{CLINIC_INFO.phoneDisplay}</span>
            </a>

            <button
              id="header-book-cta"
              onClick={onOpenAppointmentModal}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-teal-700 hover:bg-teal-800 shadow-sm transition-all whitespace-nowrap"
            >
              <Calendar className="w-3.5 h-3.5 shrink-0" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              id="mobile-quick-call"
              href={`tel:${CLINIC_INFO.phoneRaw}`}
              className="p-2 rounded-lg bg-teal-50 text-teal-700 hover:bg-teal-100 transition-colors sm:hidden"
              aria-label="Call clinic"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-slate-700 hover:text-teal-700 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-600"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-slate-900/60 backdrop-blur-sm transition-opacity">
          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-white shadow-2xl flex flex-col justify-between p-6 overflow-y-auto">
            <div>
              {/* Header inside drawer */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div>
                  <div className="font-bold text-slate-900 text-lg">P. C. Dental Clinic</div>
                  <div className="text-xs text-teal-700">{CLINIC_INFO.nameBn}</div>
                </div>
                <button
                  id="mobile-drawer-close"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-md text-slate-500 hover:text-slate-800 hover:bg-slate-100"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation links - guaranteed single line */}
              <div className="mt-6 flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <button
                    key={link.label}
                    id={`mobile-nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={() => handleNavClick(link.href)}
                    className="text-left py-3 px-3 rounded-lg text-base font-medium text-slate-800 hover:text-teal-700 hover:bg-teal-50/70 transition-colors whitespace-nowrap"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Drawer Bottom Actions */}
            <div className="pt-6 border-t border-slate-100 space-y-3">
              <a
                id="drawer-phone-cta"
                href={`tel:${CLINIC_INFO.phoneRaw}`}
                className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl border border-slate-200 text-sm font-semibold text-slate-800 hover:bg-slate-50"
              >
                <Phone className="w-4 h-4 text-teal-700" />
                <span>Call {CLINIC_INFO.phoneDisplay}</span>
              </a>

              <button
                id="drawer-book-cta"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAppointmentModal();
                }}
                className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-teal-700 hover:bg-teal-800 text-white text-sm font-semibold shadow"
              >
                <Calendar className="w-4 h-4" />
                <span>Book an Appointment</span>
              </button>

              <div className="text-[11px] text-center text-slate-500 pt-1">
                5.0★ Verified Google Rating (13 Reviews)
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
