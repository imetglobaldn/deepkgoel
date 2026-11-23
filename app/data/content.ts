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
    image: "/images/impact/mentoring.webp",
    imageAlt: "Deepak Goel interacting with students at a LEAD career meet in 2011",
    description:
      "Mentoring and guest sessions across B-schools, engineering colleges and professional associations, including IIMs, ISB, IIFT, IITs and BIT.",
  },
  {
    title: "Driving digital transformation",
    image: "/images/impact/digital-transformation.webp",
    imageAlt: "Deepak Goel presenting a Digitally Next digital-media session at SMBConnect",
    description:
      "Through Digitally Next: digital branding, demand generation and personal branding for startups, professionals and corporations.",
  },
  {
    title: "Building professional education",
    image: "/images/impact/professional-education.webp",
    imageAlt: "Deepak Goel teaching participants in an iMET Global master class",
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
  /** Show the whole photo inside the frame instead of filling it (for tall photos). */
  contain?: boolean;
};
export const eventPhotos: EventPhoto[] = [
  {
    id: "msme-award",
    title: "MSME Champions of Change 2026",
    date: "19 November 2026",
    description:
      "Digitally Next was named a Champion of Change for Digital Transformation (AI & Data) at the National Summit & Awards in New Delhi.",
    image: "/images/events/msme-award.jpg",
    alt: "Deepak Goel receiving the MSME Champions of Change 2026 award on stage",
    sourceUrl:
      "https://www.linkedin.com/posts/deegoel_brics-investup-brics-activity-7530653868410662912-d2Zp",
    sourceLabel: "Deepak Goel · LinkedIn",
  },
  {
    id: "msme-press",
    title: "A question for a question",
    date: "19 November 2026",
    description:
      "Asked by reporters whether the government is doing enough for MSMEs, Deepak asked back: are we communicating what is being done?",
    image: "/images/events/msme-press.jpg",
    alt: "Deepak Goel answering reporters’ questions at the MSME Champions of Change summit",
    sourceUrl:
      "https://www.linkedin.com/posts/deegoel_brics-investup-brics-activity-7530653868410662912-d2Zp",
    sourceLabel: "Deepak Goel · LinkedIn",
    contain: true,
  },
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
    contain: true,
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

/** Real event photos for the strip that scrolls on the homepage. Photos shown
    elsewhere on the homepage are left out. Sources are in sources.json. */
export const moments = [
  { src: "/images/events/msme-award.jpg", width: 800, height: 462, alt: "Deepak Goel receiving the MSME Champions of Change 2026 award" },
  { src: "/images/speaking.png", width: 1200, height: 733, alt: "Deepak Goel speaking at the All India Management Association" },
  { src: "/images/moments/smbconnect-award.webp", width: 675, height: 900, alt: "Deepak Goel holding an award at SMBConnect" },
  { src: "/images/moments/imet-teaching.webp", width: 900, height: 662, alt: "Deepak Goel teaching a class at iMET Global" },
  { src: "/images/events/msme-press.jpg", width: 750, height: 1000, alt: "Deepak Goel answering reporters at the MSME Champions of Change summit" },
  { src: "/images/workshop.png", width: 1200, height: 733, alt: "Deepak Goel in conversation with workshop participants" },
  { src: "/images/moments/jaipur.webp", width: 675, height: 900, alt: "Deepak Goel at the SMBConnect event in Jaipur" },
  { src: "/images/moments/msme-stage.webp", width: 800, height: 600, alt: "Award winners on stage at MSME Champions of Change 2026" },
  { src: "/images/events/brics-portrait.jpg", width: 1152, height: 1536, alt: "Deepak Goel at BRICS+ Dialogue 2026 in New Delhi" },
  { src: "/images/moments/imet-classroom.webp", width: 900, height: 506, alt: "A classroom session at iMET Global" },
  { src: "/images/moments/smbconnect-team.webp", width: 675, height: 900, alt: "Deepak Goel with fellow speakers at SMBConnect" },
  { src: "/images/moments/msme-award-group.webp", width: 800, height: 533, alt: "Deepak Goel with the presenters of the MSME Champions of Change award" },
  { src: "/images/events/india-japan-cover.jpg", width: 1152, height: 720, alt: "Cover of Deepak Goel's India-Japan dialogue video" },
];

/** The faint picture behind the heading at the top of an inner page. */
export type IntroImage = {
  src: string;
  /** Which part of the picture to keep in view, as a CSS `object-position`. */
  position?: string;
  /** How strongly it shows, from 0 to 1. Bright photos need less than dark ones. */
  opacity?: number;
  /** How far across the heading area the picture begins. Default "30%". */
  start?: string;
};
// About and Media use real photographs (Media's is a soft-edged crop of
// /images/speaking.png). The others are generated still-life scenes. All are
// recorded in sources.json.
export const introImages = {
  about: { src: "/images/workshop.png", position: "50% 8%", opacity: 0.34 },
  expertise: {
    src: "/images/intro/chess.webp",
    position: "100% 60%",
    opacity: 0.62,
  },
  writing: {
    src: "/images/intro/library.webp",
    position: "100% 40%",
    opacity: 0.5,
  },
  media: {
    src: "/images/intro/speaker.webp",
    position: "100% 0%",
    opacity: 0.42,
    start: "56%",
  },
  quotes: {
    src: "/images/intro/morning.webp",
    position: "50% 44%",
    opacity: 0.3,
    start: "52%",
  },
  contact: {
    src: "/images/intro/conversation.webp",
    position: "100% 62%",
    opacity: 0.78,
  },
} satisfies Record<string, IntroImage>;

export const ventures = [
  {
    title: "Digitally Next",
    category: "Digital branding & growth",
    description:
      "Digital branding, demand generation and personal branding for ambitious businesses and leaders.",
    href: "https://digitallynext.com/",
    preview: "/images/ventures/digitally-next.webp",
  },
  {
    title: "iMET Global",
    category: "Education & professional learning",
    description:
      "Industry-led education and practical upskilling for professionals, startups and growing businesses.",
    href: "https://imetglobal.com/",
    preview: "/images/ventures/imet-global.webp",
  },
  {
    title: "iSoCIAL",
    category: "Community & emerging technology",
    description:
      "Connecting people, ideas and opportunities across the Internet of Things and Big Data community.",
    href: "https://isocialconnect.com/",
    preview: null,
  },
];
export const capabilities = [
  {
    title: "Digital & brand strategy",
    description:
      "Positioning, demand generation, digital communication and personal branding.",
    photo: "/images/expertise/brand-strategy.webp",
    alt: "A full conference hall at an SMBConnect business session",
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
    photo: "/images/expertise/business-growth.webp",
    alt: "Deepak Goel with speakers on the SMBConnect stage",
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
    photo: "/images/moments/imet-teaching.webp",
    alt: "Deepak Goel teaching a class at iMET Global",
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
    photo: "/images/speaking.png",
    alt: "Deepak Goel speaking at the All India Management Association",
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
