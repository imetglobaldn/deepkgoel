// Content source: https://deepakgoel.in/walk-talk/

export type Video = { title: string; desc: string; category: string };

export const VIDEOS: Video[] = [
  {
    title:
      "Why companies don't get desired results from their digital campaigns?",
    desc: "Common mistakes businesses make with digital marketing campaigns and how to fix them.",
    category: "Digital Strategy",
  },
  {
    title: "How not to be any other Trainer or Coach",
    desc: "What sets apart truly impactful trainers and coaches from the crowd.",
    category: "Personal Branding",
  },
  {
    title: "4 Key Must-haves for Chief Digital Officers",
    desc: "Essential qualities every Chief Digital Officer needs for meaningful digital transformation.",
    category: "Leadership",
  },
];

export type MediaItem = {
  title: string;
  source: string;
  date: string;
  image: string;
};

export const MEDIA: MediaItem[] = [
  {
    title: "Digital PR & Social Media meet at Press Club of India",
    source: "Times of India",
    date: "May 4, 2023",
    image: "/images/press/press-1.jpeg",
  },
  {
    title: "Indian Express Delhi",
    source: "Indian Express",
    date: "May 4, 2023",
    image: "/images/press/press-2.jpg",
  },
  {
    title: "प्रेस क्लब ऑफ इंडिया और पीआर सोसाइटी - राष्ट्रीय पीआर दिवस",
    source: "Press Club of India",
    date: "Apr 27, 2023",
    image: "/images/press/press-3.jpeg",
  },
  {
    title: "PR and media professionals celebrate National Public Relations Day",
    source: "Press Club of India",
    date: "Apr 27, 2023",
    image: "/images/press/press-4.jpeg",
  },
  {
    title: "DMRC's Sh. Anuj Dayal Receives Lifetime Achievement Award",
    source: "PR Event",
    date: "Apr 24, 2023",
    image: "/images/press/press-5.jpeg",
  },
  {
    title: "Celebration of National PR Day",
    source: "Press Club of India",
    date: "Apr 24, 2023",
    image: "/images/press/press-6.jpg",
  },
  {
    title: "Glimpses of National PR Day Celebration",
    source: "Event Gallery",
    date: "Apr 24, 2023",
    image: "/images/press/press-7.jpg",
  },
];
