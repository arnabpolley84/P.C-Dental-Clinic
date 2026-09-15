export interface HeroSlide {
  id: string;
  image: string;
  eyebrow?: string;
  heading: string;
  supportingCopy: string;
  primaryCtaText: string;
  primaryCtaAction: string;
  secondaryCtaText?: string;
  secondaryCtaAction?: string;
}

export interface DentalTreatment {
  id: string;
  title: string;
  category: string;
  description: string;
  details: string[];
  image: string;
}

export interface GoogleReview {
  id: string;
  author: string;
  rating: number;
  timeAgo: string;
  quote: string;
  highlightText?: string;
  verified: boolean;
}

export interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
  iconName: 'comfort' | 'patient' | 'professional' | 'location' | 'rating' | 'contact';
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  tag: string;
}

export interface ClinicInformation {
  nameEn: string;
  nameBn: string;
  addressLine1: string;
  addressLine2: string;
  area: string;
  city: string;
  statePincode: string;
  phoneDisplay: string;
  phoneRaw: string;
  plusCode: string;
  googleRating: number;
  totalReviews: number;
  category: string;
  mapsSearchUrl: string;
  mapsEmbedUrl: string;
}
