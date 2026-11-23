import { QUOTES } from "./quotes";
export { articles, type Article } from "./articles";
export { CAREER, EDUCATION } from "./about";
export { INDUSTRIES, TRAINING } from "./expertise";
export { CONTACT, TYPES } from "./contact";
export { VIDEOS, MEDIA } from "./media";

export const navigation = [
  { label: "About", href: "/about" },
  { label: "Expertise", href: "/expertise" },
  { label: "Writing", href: "/speaking-mind" },
  { label: "Media", href: "/walk-talk" },
  { label: "Quotes", href: "/daily-thumbs-up" },
];
export const weeklyQuotes = [
  ...QUOTES.map((quote, index) => ({
    ...quote,
    id: `archive-${index + 1}`,
    source: "Daily Thumbs Up archive",
    sourceUrl: "https://deepakgoel.in/daily-thumbs-up/",
  })),
  {
    id: "keep-evolving",
    theme: "Keep learning",
    quote: "You need to keep evolving by upskilling yourself.",
    source: "LinkedIn · 30 May 2018",
    sourceUrl:
      "https://www.linkedin.com/pulse/12-board-results-out-didnt-score-90-follow-8-points-deepak-goel",
  },
] as const;
export const weekdays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
] as const;
export const stats = [
  ["18+", "years of professional experience"],
  ["3", "organizations led as Group CEO"],
  ["34K+", "community reach through iSoCIAL"],
  ["6+", "cities across India, US & Europe"],
] as const;
export const expertise = [
  {
    title: "Brand strategy",
    description:
      "Define what makes you relevant. Build the positioning, communication and demand behind a stronger brand.",
  },
  {
    title: "Business growth",
    description:
      "Connect international B2B marketing, business development and the systems that support growth.",
  },
  {
    title: "Practical learning",
    description:
      "Bridge the gap between knowledge and action with industry-led workshops, master classes and mentoring.",
  },
];
export const impact = [
  {
    title: "Mentoring future leaders",
    description:
      "Mentoring and guest sessions across B-schools, engineering colleges and professional associations, including IIMs, ISB, IIFT, IITs and BIT.",
  },
  {
    title: "Driving digital transformation",
    description:
      "Through Digitally Next: digital branding, demand generation and personal branding for startups, professionals and corporations.",
  },
  {
    title: "Building professional education",
    description:
      "Through iMET Global: practical, business-driven upskilling for professionals, MSMEs and startups across India.",
  },
];
export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/deegoel/" },
  { label: "Instagram", href: "https://www.instagram.com/goel.deepak/" },
  {
    label: "Facebook",
    href: "https://www.facebook.com/Deepak-Goel-328341013902489/",
  },
  { label: "X", href: "https://twitter.com/Deegoel" },
];
export type EventPhoto = {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
  alt: string;
  sourceUrl: string;
  sourceLabel: string;
};
export const eventPhotos: EventPhoto[] = [
  {
    id: "brics-stage",
    title: "BRICS+ Dialogue 2026",
    date: "10 September 2026",
    description:
      "Joining business leaders and policymakers in New Delhi for conversations on innovation, collaboration and the Global South.",
    image: "/images/events/brics-stage.jpg",
    alt: "Deepak Goel beside the BRICS CCI stage at BRICS+ Dialogue 2026 in New Delhi",
    sourceUrl:
      "https://www.linkedin.com/posts/digitallynext_brics-newdelhi-dubai-activity-7504249188776542208-N2lH",
    sourceLabel: "Digitally Next · LinkedIn",
  },
  {
    id: "india-japan",
    title: "India–Japan strategic dialogue",
    date: "Shared 24 September 2026",
    description:
      "An InvestUP dialogue exploring cooperation in skills, research and technology. Original video cover from Deepak’s post.",
    image: "/images/events/india-japan-cover.jpg",
    alt: "Cover of Deepak Goel’s India–Japan dialogue video, showing event photographs",
    sourceUrl:
      "https://www.linkedin.com/posts/deegoel_brics-japan-partnerinprogress-activity-7508820026137837568-NKae",
    sourceLabel: "Deepak Goel · LinkedIn video",
  },
  {
    id: "brics-gathering",
    title: "In the room. In the conversation.",
    date: "10 September 2026",
    description:
      "At the Prime Ministers Museum & Library for BRICS+ Dialogue 2026.",
    image: "/images/events/brics-portrait.jpg",
    alt: "Deepak Goel at the BRICS+ Dialogue event display dated 10 September 2026",
    sourceUrl:
      "https://www.linkedin.com/posts/digitallynext_brics-newdelhi-dubai-activity-7504249188776542208-N2lH",
    sourceLabel: "Digitally Next · LinkedIn",
  },
  {
    id: "aima",
    title: "Ideas shared at AIMA",
    date: "From the archive",
    description:
      "Speaking at the All India Management Association. Practical ideas, shared in person.",
    image: "/images/speaking.png",
    alt: "Deepak Goel addressing an audience from the AIMA lectern",
    sourceUrl: "https://deepakgoel.in/",
    sourceLabel: "Deepak Goel · Official archive",
  },
  {
    id: "workshop",
    title: "Learning through conversation",
    date: "From the archive",
    description:
      "Exchanging perspectives with participants during an industry workshop.",
    image: "/images/workshop.png",
    alt: "Deepak Goel talking with industry workshop participants",
    sourceUrl: "https://deepakgoel.in/",
    sourceLabel: "Deepak Goel · Official archive",
  },
];

export const ventures = [
  {
    title: "Digitally Next",
    category: "Digital branding & growth",
    description:
      "Digital branding, demand generation and personal branding for ambitious businesses and leaders.",
    href: "https://digitallynext.com/",
  },
  {
    title: "iMET Global",
    category: "Education & professional learning",
    description:
      "Industry-led education and practical upskilling for professionals, startups and growing businesses.",
    href: "https://imetglobal.com/",
  },
  {
    title: "iSoCIAL",
    category: "Community & emerging technology",
    description:
      "Connecting people, ideas and opportunities across the Internet of Things and Big Data community.",
    href: "https://isocialconnect.com/",
  },
];
export const capabilities = [
  {
    title: "Digital & brand strategy",
    description:
      "Positioning, demand generation, digital communication and personal branding.",
    topics: [
      "Digital branding",
      "Demand generation",
      "Personal & celebrity branding",
    ],
  },
  {
    title: "Business growth",
    description:
      "International B2B marketing, business development and the systems behind sustainable growth.",
    topics: [
      "Strategic management",
      "International marketing",
      "Key accounts & pre-sales",
    ],
  },
  {
    title: "Learning & leadership",
    description:
      "Industry-focused programs that connect practical skills with professional ambitions.",
    topics: [
      "Leadership & team building",
      "Business communication",
      "Industry interface programs",
    ],
  },
  {
    title: "Speaking & mentoring",
    description:
      "Honest perspectives and practical conversations for organizations, institutions and entrepreneurs.",
    topics: [
      "Keynotes & panels",
      "Master classes",
      "Mentoring & guest sessions",
    ],
  },
];
export const videoSources = [
  { id: "TuOqG4dkSVE", start: 141 },
  { id: "vcaluM8AGSQ", start: 302 },
  { id: "PSj2ncFYmbg", start: 0 },
];
