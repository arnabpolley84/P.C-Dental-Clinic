import React, { useState } from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { TypewriterText } from './TypewriterText';
import {
  MapPin,
  Phone,
  Clock,
  Navigation,
  Compass,
  CheckCircle2,
  Calendar,
  Send,
} from 'lucide-react';

export const LocationSection: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    preferredDate: '',
    concern: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-white border-b border-slate-200/60 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-50 border border-teal-200/70 text-teal-800 text-xs font-semibold tracking-wider uppercase mb-4">
            <MapPin className="w-3.5 h-3.5" />
            <span>FIND & REACH US</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            <TypewriterText
              text="Location & Appointments"
              speed={28}
              delay={200}
              className="text-slate-900"
            />
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
            Conveniently situated in Baghajatin Colony, Kolkata. Connect with us by phone or visit our clinic.
          </p>
        </div>

        {/* Two Column Layout: Clinic Info + Interactive Map on Left, Quick Appointment Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Location Details & Embedded Map (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Primary Details Card */}
            <div className="bg-slate-50/80 rounded-2xl p-7 sm:p-8 border border-slate-200/80 shadow-2xs">
              <div className="flex items-start justify-between gap-4 mb-6 pb-6 border-b border-slate-200/70">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                    {CLINIC_INFO.nameEn}
                  </h3>
                  <div className="text-sm font-semibold text-teal-700 mt-0.5">
                    {CLINIC_INFO.nameBn}
                  </div>
                  <span className="inline-block mt-2 text-xs font-medium text-slate-500 bg-white px-2.5 py-1 rounded-md border border-slate-200">
                    Category: {CLINIC_INFO.category}
                  </span>
                </div>

                <div className="text-right shrink-0">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">Google Rating</div>
                  <div className="text-lg font-bold text-slate-900 flex items-center justify-end gap-1">
                    <span className="text-amber-500">★</span> 5.0 / 5
                  </div>
                  <div className="text-[11px] text-slate-500">13 Reviews</div>
                </div>
              </div>

              {/* Address & Contacts */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <div className="flex items-start gap-2.5 text-slate-700">
                    <MapPin className="w-4 h-4 text-teal-700 shrink-0 mt-1" />
                    <div className="text-sm leading-relaxed">
                      <div className="font-semibold text-slate-900">Clinic Address:</div>
                      <div>{CLINIC_INFO.addressLine1}</div>
                      <div>{CLINIC_INFO.addressLine2}</div>
                      <div>{CLINIC_INFO.city}, {CLINIC_INFO.statePincode}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-slate-600 mt-3 pl-6">
                    <Compass className="w-3.5 h-3.5 text-slate-600" />
                    <span>Plus Code: <strong>{CLINIC_INFO.plusCode}</strong></span>
                  </div>
                </div>

                <div>
                  <div className="flex items-start gap-2.5 text-slate-700">
                    <Phone className="w-4 h-4 text-teal-700 shrink-0 mt-1" />
                    <div className="text-sm leading-relaxed">
                      <div className="font-semibold text-slate-900">Direct Phone:</div>
                      <a
                        href={`tel:${CLINIC_INFO.phoneRaw}`}
                        className="text-teal-700 font-bold hover:underline"
                      >
                        {CLINIC_INFO.phoneDisplay}
                      </a>
                      <div className="text-xs text-slate-500 mt-0.5">
                        Available for enquiries & appointments
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 text-slate-700 mt-4">
                    <Clock className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                    <div className="text-xs text-slate-600">
                      <span className="font-semibold text-slate-800">Visit Timing:</span>
                      <div>Consultation by scheduled appointment or telephone confirmation.</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons: Get Directions & Call */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-200/70">
                <a
                  id="get-directions-link"
                  href={CLINIC_INFO.mapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white text-xs font-semibold shadow-xs transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions on Google Maps</span>
                </a>

                <a
                  id="call-clinic-btn"
                  href={`tel:${CLINIC_INFO.phoneRaw}`}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 text-xs font-semibold transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-teal-700" />
                  <span>Call {CLINIC_INFO.phoneDisplay}</span>
                </a>
              </div>
            </div>

            {/* Embedded Google Maps with fallback link */}
            <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden border border-slate-200 shadow-2xs">
              <iframe
                title="P. C. Dental Clinic Google Map"
                src={CLINIC_INFO.mapsEmbedUrl}
                className="w-full h-full border-0"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm text-xs font-medium text-slate-700">
                <a
                  href={CLINIC_INFO.mapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-700 flex items-center gap-1"
                >
                  <span>Open in Google Maps</span>
                  <Navigation className="w-3 h-3 text-teal-600" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Appointment / Enquiry Form (5 cols) */}
          <div className="lg:col-span-5 bg-slate-50/80 rounded-2xl p-7 sm:p-8 border border-slate-200/80 shadow-2xs">
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-800 bg-teal-100/70 px-2.5 py-1 rounded-md mb-2">
                <Calendar className="w-3.5 h-3.5 text-teal-700" />
                <span>APPOINTMENT REQUEST</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                Request a Consultation
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Fill in your details below and our clinic team will contact you to confirm suitable consultation timing.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-6 bg-teal-50 border border-teal-200 rounded-xl text-center space-y-3 animate-in fade-in duration-300">
                <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-slate-900">
                  Request Received
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. P. C. Dental Clinic will reach you shortly at{' '}
                  <strong>{formData.phone}</strong>.
                </p>
                <div className="pt-2">
                  <a
                    href={`tel:${CLINIC_INFO.phoneRaw}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-800 hover:underline"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Need immediate booking? Call {CLINIC_INFO.phoneDisplay}</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="patient-name" className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    id="patient-name"
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600"
                  />
                </div>

                <div>
                  <label htmlFor="patient-phone" className="block text-xs font-semibold text-slate-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    id="patient-phone"
                    type="tel"
                    required
                    placeholder="090070 65615"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600"
                  />
                </div>

                <div>
                  <label htmlFor="preferred-date" className="block text-xs font-semibold text-slate-700 mb-1">
                    Preferred Date (Optional)
                  </label>
                  <input
                    id="preferred-date"
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600"
                  />
                </div>

                <div>
                  <label htmlFor="patient-concern" className="block text-xs font-semibold text-slate-700 mb-1">
                    Reason for Visit / General Concern
                  </label>
                  <textarea
                    id="patient-concern"
                    rows={3}
                    placeholder="e.g. Routine checkup, toothache, consultation"
                    value={formData.concern}
                    onChange={(e) => setFormData({ ...formData, concern: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600 resize-none"
                  />
                </div>

                <button
                  id="submit-appointment-btn"
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-teal-700 hover:bg-teal-800 text-white text-xs font-semibold shadow-xs transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Appointment Request</span>
                </button>

                <p className="text-[11px] text-slate-600 text-center">
                  Or call directly at <a href={`tel:${CLINIC_INFO.phoneRaw}`} className="text-teal-700 font-bold underline">{CLINIC_INFO.phoneDisplay}</a>
                </p>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
