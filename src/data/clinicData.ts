import {
  ClinicInformation,
  HeroSlide,
  DentalTreatment,
  GoogleReview,
  WhyChooseItem,
  GalleryImage
} from '../types';

export const CLINIC_INFO: ClinicInformation = {
  nameEn: 'P. C. Dental Clinic',
  nameBn: 'পি. সি. ডেন্টাল ক্লিনিক',
  addressLine1: '2/220A, Sree Colony',
  addressLine2: 'Regent Estate, Baghajatin Colony',
  area: 'Baghajatin',
  city: 'Kolkata',
  statePincode: 'West Bengal 700092',
  phoneDisplay: '090070 65615',
  phoneRaw: '09007065615',
  plusCode: 'F9MC+X4 Kolkata, West Bengal',
  googleRating: 5.0,
  totalReviews: 13,
  category: 'Dental Clinic',
  mapsSearchUrl: 'https://www.google.com/maps/search/?api=1&query=P.+C.+Dental+Clinic+2%2F220A+Sree+Colony+Regent+Estate+Baghajatin+Colony+Kolkata+West+Bengal+700092',
  mapsEmbedUrl: 'https://maps.google.com/maps?q=2%2F220A%2C+Sree+Colony%2C+Regent+Estate%2C+Baghajatin+Colony%2C+Kolkata%2C+West+Bengal+700092&t=&z=16&ie=UTF8&iwloc=&output=embed',
};

// Supplied images from prompt with high-resolution =s1600 and verified dental clinic imagery
export const SUPPLIED_IMAGES = {
  imageA: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnvGrUZwlVNY9UHLk3fjljkgXNuImrUDGTQ84fYH9GqrWE2TUGJ6QTYJjcSKSYp6aCHF7dybqJEBFXfQT-pU0qJzOSdTINkZ8NSogKsDiQy0EQYOKKYQKoq8OCMdxrzMdoJrUlL=s1600',
  imageB: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWn4Pkb5kH4motPXVfsREc2ljECfIxH2yd4-l-4MGgWizniIRiOeFFMjV13-MQq4Fk12n4MQyKen_A5UVYO8uOV-N-UzEvxlVRl1o5azIupBWYp6aBZ-beEdlZp0goJxlNQ0VsUZ=s1600',
  imageC: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkBY4dSKHS-Bo9glVjk715anBBhNjjuAezb4VRonjSZQRYBd6-LjGLjq4Rg8-D4nWfKmrg4Sv0TxNsBRNmnvZ_XcJVSLENN4ypJzvIvtBrguUFluOUF2rehtLEMI-vyW_7Kym-6=s1600',
  // Tasteful, high-resolution clean dental clinical images as secondary fallbacks
  dentalOperatory: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1600&q=85',
  modernDentistry: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1600&q=85',
  receptionLounge: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600&q=85',
  consultationRoom: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1600&q=85',
  gentleCare: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1600&q=85',
};

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'slide-1',
    image: SUPPLIED_IMAGES.imageA,
    eyebrow: 'WELCOME TO P. C. DENTAL CLINIC',
    heading: 'A Healthier Smile Starts Here',
    supportingCopy: 'Professional and patient-focused dental care in Kolkata, designed around comfort, confidence and your individual needs.',
    primaryCtaText: 'Book an Appointment',
    primaryCtaAction: '#contact',
    secondaryCtaText: 'Call 090070 65615',
    secondaryCtaAction: 'tel:09007065615',
  },
  {
    id: 'slide-2',
    image: SUPPLIED_IMAGES.imageB,
    eyebrow: 'EXPERT PATIENT ATTENTION',
    heading: 'Your Smile Deserves Expert Care',
    supportingCopy: 'A welcoming dental clinic focused on creating a comfortable experience for every patient.',
    primaryCtaText: 'Explore Our Treatments',
    primaryCtaAction: '#treatments',
    secondaryCtaText: 'Contact Us',
    secondaryCtaAction: '#contact',
  },
  {
    id: 'slide-3',
    image: SUPPLIED_IMAGES.imageC,
    eyebrow: 'COMFORT IN EVERY VISIT',
    heading: 'Comfortable Care. Confident Smiles.',
    supportingCopy: 'From your first visit to ongoing dental care, discover a professional environment where your comfort comes first.',
    primaryCtaText: 'Learn More',
    primaryCtaAction: '#about',
    secondaryCtaText: 'Why Choose Us',
    secondaryCtaAction: '#why-us',
  },
  {
    id: 'slide-4',
    image: SUPPLIED_IMAGES.dentalOperatory,
    eyebrow: 'CONVENIENT BAGHAJATIN LOCATION',
    heading: 'Modern Dental Care, Close to Home',
    supportingCopy: 'Conveniently located in Baghajatin, Kolkata, P. C. Dental Clinic is here to make quality dental care easier to access.',
    primaryCtaText: 'Find Our Clinic',
    primaryCtaAction: '#location',
    secondaryCtaText: 'Call 090070 65615',
    secondaryCtaAction: 'tel:09007065615',
  },
  {
    id: 'slide-5',
    image: SUPPLIED_IMAGES.modernDentistry,
    eyebrow: 'START YOUR DENTAL JOURNEY',
    heading: 'Ready to Take Care of Your Smile?',
    supportingCopy: 'Get in touch with P. C. Dental Clinic to discuss your dental care needs.',
    primaryCtaText: 'Book an Appointment',
    primaryCtaAction: '#contact',
    secondaryCtaText: 'Call Now',
    secondaryCtaAction: 'tel:09007065615',
  },
];

export const WHY_CHOOSE_ITEMS: WhyChooseItem[] = [
  {
    id: 'why-1',
    title: 'Comfort-Focused Experience',
    description: 'A welcoming environment designed to help patients feel at ease from the moment they step into the clinic.',
    iconName: 'comfort',
  },
  {
    id: 'why-2',
    title: 'Patient-Centred Attention',
    description: 'Clear communication, unhurried consultations, and dedicated attention to your individual dental concerns.',
    iconName: 'patient',
  },
  {
    id: 'why-3',
    title: 'Professional Environment',
    description: 'A clean, calm, and professional setting maintained with modern hygiene standards for your dental care journey.',
    iconName: 'professional',
  },
  {
    id: 'why-4',
    title: 'Convenient Location',
    description: 'Easily accessible at Sree Colony, Regent Estate, Baghajatin Colony, Kolkata, serving local families.',
    iconName: 'location',
  },
  {
    id: 'why-5',
    title: 'Trusted by Patients',
    description: 'The clinic holds a 5.0/5 rating based on 13 verified Google reviews reflecting genuine patient satisfaction.',
    iconName: 'rating',
  },
  {
    id: 'why-6',
    title: 'Easy Contact',
    description: 'Reach the clinic directly by phone for appointment bookings, consultation timings, and prompt enquiries.',
    iconName: 'contact',
  },
];

/**
 * General dental care categories provided as editable placeholders.
 * NOTE FOR CLINIC STAFF: These categories represent standard dental practice areas
 * and should be reviewed and customized according to specific clinical offerings.
 */
export const DENTAL_TREATMENTS: DentalTreatment[] = [
  {
    id: 'general-care',
    title: 'General Dental Care',
    category: 'Essential Oral Care',
    description: 'Comprehensive examinations, diagnosis, and routine maintenance to support ongoing oral health and well-being.',
    details: [
      'Thorough clinical oral examinations',
      'Assessment of teeth, gums, and oral tissues',
      'Personalized hygiene recommendations',
      'Routine dental wellness check-ups'
    ],
    image: SUPPLIED_IMAGES.imageA,
  },
  {
    id: 'preventive-care',
    title: 'Preventive Dental Care',
    category: 'Protection & Hygiene',
    description: 'Proactive oral care aimed at safeguarding teeth and gums before complications or discomfort develop.',
    details: [
      'Plaque and calculus management guidance',
      'Preventive enamel protection',
      'Diet and daily oral hygiene advice',
      'Early detection of dental issues'
    ],
    image: SUPPLIED_IMAGES.imageB,
  },
  {
    id: 'consultation',
    title: 'Oral Health Consultation',
    category: 'Diagnosis & Advice',
    description: 'Attentive, one-on-one discussions to understand your dental concerns and plan appropriate care comfortably.',
    details: [
      'Detailed discussion of symptoms and needs',
      'Step-by-step explanation of options',
      'Clear answers to patient questions',
      'Comfort-focused care planning'
    ],
    image: SUPPLIED_IMAGES.imageC,
  },
  {
    id: 'restorative-care',
    title: 'Restorative Dental Care',
    category: 'Function & Health',
    description: 'Care focused on restoring damaged, sensitive, or decayed teeth to maintain natural comfort and chew functionality.',
    details: [
      'Treatment for dental sensitivity',
      'Restoration of damaged tooth structure',
      'Focus on gentle, comfortable execution',
      'Preservation of natural tooth structure'
    ],
    image: SUPPLIED_IMAGES.modernDentistry,
  },
  {
    id: 'cosmetic-care',
    title: 'Cosmetic Dental Care',
    category: 'Smile Enhancement',
    description: 'Aesthetic smile solutions designed to boost confidence through clean, natural-looking enhancements.',
    details: [
      'Teeth appearance consultation',
      'Stain removal and cosmetic polishing',
      'Natural-looking aesthetic alignments',
      'Confidence-focused smile design'
    ],
    image: SUPPLIED_IMAGES.gentleCare,
  },
  {
    id: 'family-care',
    title: 'Family Dental Care',
    category: 'All Age Groups',
    description: 'Comfortable, patient dental care tailored for both young members and elders with a patient-friendly demeanor.',
    details: [
      'Welcoming atmosphere for anxious patients',
      'Gentle approach for all age groups',
      'Preventive dental habits for children',
      'Dedicated care for seniors'
    ],
    image: SUPPLIED_IMAGES.consultationRoom,
  },
];

// Preserved verbatim Google reviews supplied by user
export const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    id: 'rev-1',
    author: 'Verified Google Reviewer',
    rating: 5,
    timeAgo: 'Google Reviews',
    quote: "It's rare to find a doctor like Dr. Uma Shankar Sinha Roy in today's world. He embodies a unique blend of compassion, knowledge, expertise, and warmth. He has not turned his medical skills into a profit-driven venture. A remarkable experience! A highly appreciated and recommended doctor.",
    highlightText: 'Compassion, knowledge, expertise, and warmth. A remarkable experience!',
    verified: true,
  },
  {
    id: 'rev-2',
    author: 'Verified Google Reviewer',
    rating: 5,
    timeAgo: 'Google Reviews',
    quote: "Very polite and sweet. I have a very complicated oral problem. He is very patient. He examined advised and performed the procedure. I am always sceptical with oral procedure. But I should say Dr Uma Shankar has done everything where i did not get any chance to get frightened. Excellent.",
    highlightText: 'Very patient. Advised and performed the procedure where I did not get any chance to get frightened.',
    verified: true,
  },
  {
    id: 'rev-3',
    author: 'Verified Google Reviewer',
    rating: 5,
    timeAgo: 'Google Reviews',
    quote: "Really good service ! The doctor and staff were very friendly. Clinic is very clean and has advanced equipments. Dr. Jina Iftikar who did my cleaning did an amazing job and I felt very comfortable. I highly recommend this clinic.",
    highlightText: 'Clinic is very clean and has advanced equipments... felt very comfortable. Highly recommend!',
    verified: true,
  },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 'gal-1',
    src: SUPPLIED_IMAGES.imageA,
    alt: 'P. C. Dental Clinic facilities and clinical care',
    title: 'Clinic Operatory & Treatment Space',
    tag: 'Clinic Environment',
  },
  {
    id: 'gal-2',
    src: SUPPLIED_IMAGES.imageB,
    alt: 'P. C. Dental Clinic patient care setup',
    title: 'Modern Dental Equipment',
    tag: 'Equipment',
  },
  {
    id: 'gal-3',
    src: SUPPLIED_IMAGES.imageC,
    alt: 'P. C. Dental Clinic welcoming environment',
    title: 'Patient Consultation Area',
    tag: 'Consultation',
  },
  {
    id: 'gal-4',
    src: SUPPLIED_IMAGES.dentalOperatory,
    alt: 'High standard hygienic dental setup',
    title: 'Sterilized Dental Station',
    tag: 'Hygiene Standards',
  },
  {
    id: 'gal-5',
    src: SUPPLIED_IMAGES.modernDentistry,
    alt: 'Precision dental instruments and light',
    title: 'Comfortable Patient Setup',
    tag: 'Patient Comfort',
  },
  {
    id: 'gal-6',
    src: SUPPLIED_IMAGES.receptionLounge,
    alt: 'Clean and calm clinic ambience',
    title: 'Welcoming Clinic Ambience',
    tag: 'Interior',
  },
];
