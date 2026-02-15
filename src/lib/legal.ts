import { site } from "./site";

export type TocItem = { id: string; label: string };

export const termsToc: TocItem[] = [
  { id: "account", label: "1. Account Responsibility" },
  { id: "user-content", label: "2. User Content" },
  { id: "privacy", label: "3. Privacy & Data Usage" },
  { id: "ads", label: "4. Ads & Third-Party" },
  { id: "termination", label: "5. Account Termination" },
  { id: "children", label: "6. Children’s Use" },
  { id: "service", label: "7. Service Disclaimer" },
  { id: "liability", label: "8. Limitation of Liability" },
  { id: "law", label: "9. Governing Law" },
  { id: "future", label: "10. Future Payments" },
  { id: "changes", label: "11. Changes" },
  { id: "contact", label: "12. Contact" },
];

export const privacyToc: TocItem[] = [
  { id: "collect", label: "1. Information We Collect" },
  { id: "use", label: "2. How We Use Data" },
  { id: "storage", label: "3. Data Storage & Security" },
  { id: "sharing", label: "4. Data Sharing" },
  { id: "cookies", label: "5. Cookies & Tracking" },
  { id: "rights", label: "6. Your Rights & Consent" },
  { id: "children", label: "7. Children’s Privacy" },
  { id: "changes", label: "8. Changes" },
  { id: "contact", label: "9. Contact Us" },
];

export const appAboutFeatures = [
  {
    title: "Tourism & Travel",
    desc: "Discover attractions, landmarks, and hidden gems with guides. View train and bus schedules for smooth travel planning.",
  },
  {
    title: "Health & Emergency",
    desc: "Locate hospitals, doctors, and emergency contacts. Access blood donor lists, request blood, and find nearby blood banks.",
  },
  {
    title: "Local Directory",
    desc: "Browse verified listings for restaurants, hotels, educational institutions, pet care centers, hostels, and libraries.",
  },
  {
    title: "Community Services",
    desc: "Post or search for lost and found items, download government forms, and stay informed about essential local services.",
  },
  {
    title: "Housing & Education",
    desc: "Find or list rental properties, search for tuition opportunities, or offer your own.",
  },
  {
    title: "AI Assistance",
    desc: "Get instant answers, directions, and recommendations through our AI-powered chatbot.",
  },
];

export const founders = [
  {
    name: "Abir Romman",
    role: "Founder & Lead Front-End, UI/UX Design, Responsive Implementation & Testing",
    details:
      "Responsible for designing seamless user interfaces, implementing responsive layouts, and ensuring high-quality front-end performance.",
  },
  {
    name: "Tahmid Al Mamun",
    role: "Founder & Lead Back-End, Database, UI/UX Design, API Integration, Testing & Product Oversight",
    details:
      "Leads back-end development, database management, API integration, testing, and overall product oversight to ensure a robust, reliable, and scalable application.",
  },
];

export const supportLinks = {
  email: site.supportEmail,
  website: site.website,
};