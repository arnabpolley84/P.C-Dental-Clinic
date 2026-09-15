import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSlider } from './components/HeroSlider';
import { IntroSection } from './components/IntroSection';
import { AboutSection } from './components/AboutSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { TreatmentsSection } from './components/TreatmentsSection';
import { FeatureBanner } from './components/FeatureBanner';
import { ReviewsSection } from './components/ReviewsSection';
import { GallerySection } from './components/GallerySection';
import { LocationSection } from './components/LocationSection';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';
import { CLINIC_INFO } from './data/clinicData';
import { Phone, Calendar } from 'lucide-react';

export default function App() {
  const [appointmentModalOpen, setAppointmentModalOpen] = useState<boolean>(false);

  const handleOpenAppointmentModal = () => {
    setAppointmentModalOpen(true);
  };

  const handleCloseAppointmentModal = () => {
    setAppointmentModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-slate-800 flex flex-col font-sans selection:bg-teal-700 selection:text-white">
      {/* Premium Sticky Navigation Header */}
      <Header onOpenAppointmentModal={handleOpenAppointmentModal} />

      {/* Main Content Sections */}
      <main className="grow">
        {/* 1. Cinematic Hero Slider with Biograph-inspired Left Faded Gradient */}
        <HeroSlider onOpenAppointmentModal={handleOpenAppointmentModal} />

        {/* 2. Intro Section (City Smiles structure inspired 2-column layout) */}
        <IntroSection onOpenAppointmentModal={handleOpenAppointmentModal} />

        {/* 3. About the Clinic with 5.0 Google Rating Badge */}
        <AboutSection />

        {/* 4. Why Patients Choose P. C. Dental Clinic (6 refined feature blocks) */}
        <WhyChooseUs />

        {/* 5. Dental Care Treatments Categories */}
        <TreatmentsSection onOpenAppointmentModal={handleOpenAppointmentModal} />

        {/* 6. Editorial Healthcare Image Feature Banner ("Your smile is worth caring for.") */}
        <FeatureBanner onOpenAppointmentModal={handleOpenAppointmentModal} />

        {/* 7. Google Reviews & Testimonials Showcase */}
        <ReviewsSection />

        {/* 8. Gallery with Lightbox */}
        <GallerySection />

        {/* 9. Location, Map, Clinic Details & Consultation Request */}
        <LocationSection />

        {/* 10. Pre-footer Call to Action with Left Faded Gradient */}
        <CallToAction onOpenAppointmentModal={handleOpenAppointmentModal} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Appointment / Consultation Modal */}
      <AppointmentModal
        isOpen={appointmentModalOpen}
        onClose={handleCloseAppointmentModal}
      />

      {/* Mobile Floating Action Bar for 1-tap Contact & Booking */}
      <div className="sm:hidden fixed bottom-4 left-4 right-4 z-40 flex items-center gap-2 bg-slate-900/90 backdrop-blur-md p-2 rounded-2xl border border-slate-800 shadow-2xl">
        <a
          id="mobile-sticky-call"
          href={`tel:${CLINIC_INFO.phoneRaw}`}
          className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-800 text-white text-xs font-semibold hover:bg-slate-700 active:scale-95 transition-all"
        >
          <Phone className="w-3.5 h-3.5 text-teal-400" />
          <span>Call Clinic</span>
        </a>
        <button
          id="mobile-sticky-book"
          onClick={handleOpenAppointmentModal}
          className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-teal-600 text-white text-xs font-semibold hover:bg-teal-500 active:scale-95 transition-all shadow-sm"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book Visit</span>
        </button>
      </div>
    </div>
  );
}
