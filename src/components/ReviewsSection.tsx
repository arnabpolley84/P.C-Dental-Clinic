import React, { useState } from 'react';
import { GOOGLE_REVIEWS, CLINIC_INFO } from '../data/clinicData';
import { TypewriterText } from './TypewriterText';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2, MessageSquare } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const [activeReviewIndex, setActiveReviewIndex] = useState<number>(0);

  const nextReview = () => {
    setActiveReviewIndex((prev) => (prev + 1) % GOOGLE_REVIEWS.length);
  };

  const prevReview = () => {
    setActiveReviewIndex((prev) => (prev - 1 + GOOGLE_REVIEWS.length) % GOOGLE_REVIEWS.length);
  };

  return (
    <section id="reviews" className="py-20 sm:py-28 bg-white border-b border-slate-200/60 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-50 border border-teal-200/70 text-teal-800 text-xs font-semibold tracking-wider uppercase mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>PATIENT EXPERIENCES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            <TypewriterText
              text="What Our Patients Say"
              speed={28}
              delay={200}
              className="text-slate-900"
            />
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
            Genuine experiences shared by patients on Google Reviews, reflecting our focus on comfort and care.
          </p>
        </div>

        {/* Official Google Scoreboard Banner */}
        <div className="max-w-2xl mx-auto mb-12 p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xs">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white shadow-2xs border border-slate-200 flex items-center justify-center shrink-0">
              {/* Google G SVG */}
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-slate-900">5.0</span>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
              <div className="text-xs text-slate-500">Based on 13 verified Google Reviews</div>
            </div>
          </div>

          <div className="text-center sm:text-right">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-100 text-teal-800">
              <CheckCircle2 className="w-3.5 h-3.5 text-teal-700" />
              <span>100% 5-Star Feedback</span>
            </span>
          </div>
        </div>

        {/* Reviews Cards: Grid on Large, Interactive Carousel on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {GOOGLE_REVIEWS.map((review, idx) => (
            <div
              key={review.id}
              id={`review-card-${idx + 1}`}
              className="relative p-7 rounded-2xl bg-slate-50/70 border border-slate-200/80 shadow-2xs hover:shadow-md hover:bg-white hover:border-teal-600/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header: Stars & Google tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-medium text-slate-500 flex items-center gap-1">
                    <svg className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
                    </svg>
                    Google Review
                  </span>
                </div>

                {/* Highlight banner with typing effect */}
                {review.highlightText && (
                  <div className="mb-4 text-xs font-semibold text-teal-800 bg-teal-50/80 p-2.5 rounded-lg border border-teal-100">
                    "{review.highlightText}"
                  </div>
                )}

                {/* Review Text - Preserved exactly as supplied */}
                <p className="text-slate-700 text-sm leading-relaxed mb-6 italic">
                  "{review.quote}"
                </p>
              </div>

              {/* Author & Verification Footer */}
              <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-slate-900">
                    {review.author}
                  </div>
                  <div className="text-[11px] text-slate-500">
                    Patient on Google
                  </div>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-teal-700 font-medium bg-teal-50 px-2 py-0.5 rounded-full">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Small Notice Regarding Supplied Content Integrity */}
        <div className="mt-8 text-center text-xs text-slate-600">
          Reviews are reproduced directly from P. C. Dental Clinic's public Google Reviews listing.
        </div>

      </div>
    </section>
  );
};
