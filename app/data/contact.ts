import {
  Mic,
  GraduationCap,
  Users,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

// Content source: https://deepakgoel.in/book-your-time/

export type AppointmentType = {
  num: string;
  title: string;
  desc: string;
  icon: LucideIcon;
};

export const TYPES: AppointmentType[] = [
  {
    num: "01",
    title: "Keynote Speaking",
    desc: "Inspiring talks at conferences, summits and corporate events.",
    icon: Mic,
  },
  {
    num: "02",
    title: "Master Class",
    desc: "In-depth workshops on digital branding, marketing and strategy.",
    icon: GraduationCap,
  },
  {
    num: "03",
    title: "Guest Sessions",
    desc: "B-School lectures, panel discussions and academic sessions.",
    icon: Users,
  },
  {
    num: "04",
    title: "Other",
    desc: "Consulting, collaboration, mentoring or any other inquiry.",
    icon: Sparkles,
  },
];

export const CONTACT = {
  email: "deepak@digitallynext.com",
  whatsapp: "+91 98104 09943",
  whatsappHref: "https://wa.me/919810409943",
  address: [
    "DigitallyNext · iMET Global",
    "Business India Complex, Uday Park,",
    "Adjacent to August Kranti Marg,",
    "Behind South Ex-II, Delhi 110049",
  ],
} as const;
