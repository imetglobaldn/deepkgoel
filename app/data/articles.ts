import archive from "./articles.json";

const titles = [
  "Why alternative MBAs are gaining popularity",
  "How alternative MBAs are changing education",
  "7 social platforms to watch: a 2021 perspective",
  "Your first 1,000 followers. Earned honestly.",
  "What trainers, coaches and consultants often miss",
  "Tools for better content writing",
];
const excerpts = [
  "How specialized programs in digital media, data science and IoT are changing management education.",
  "How digital media, data science and IoT are reshaping professional education.",
  "A look back at the social platforms challenging the market in 2021.",
  "An honest approach to building your first audience on LinkedIn and Instagram.",
  "Why expertise and qualifications alone may not earn the recognition a professional deserves.",
  "A practical look at tools that support clearer writing for digital and social media.",
];
const contents = [
  [
    ["Digital media", "Digital media as an integral channel"],
    ["Growth of technology", "Growth of technology"],
    ["Rise of alternative MBA", "Rise of alternative MBA"],
  ],
  [
    ["New-age technologies", "Influence of new-age technologies"],
    ["Alternative MBAs", "Hastening rise to alternative MBAs"],
    ["New education policy", "New education policy"],
    ["Conclusion", "Conclusion"],
  ],
  [
    ["Wanelo", "Wanelo:"],
    ["SlideShare", "2. Slide Share:"],
    ["Shots", "3. Shots:"],
    ["Ello", "4. Ello:"],
    ["Hyper", "5. Hyper:"],
    ["Bebo", "6. Bebo:"],
    ["This", "7. This:"],
    ["Conclusion", "Conclusion:"],
  ],
  [
    ["Common strategies", "Some Common Strategies"],
    ["LinkedIn", "Getting First 1,000 Followers On LinkedIn"],
    ["Instagram", "Getting first 1,000 followers on Instagram"],
  ],
  [
    ["Your personal brand", "So what you should be doing?"],
    ["Building a plan", "What you need to work on as a Full Fledged Plan"],
    ["Web essentials", "Power 1-"],
    ["Visual impact", "Power 2-"],
    ["Marketing content", "Power 3-"],
    ["Internet & email", "Power 4-"],
    ["Digital media", "Power 5-"],
  ],
  [
    ["Grammarly", "Grammarly is a tool"],
    ["Scrivener", "Scrivener is the second tool"],
    ["Hemingway", "Hemingway is one another"],
    ["WordRake", "WordRake is a PC tool"],
  ],
];
export type ArticleSection = { id: string; label: string; blockIndex: number };
export const articles = archive.map((article, index) => ({
  ...article,
  displayTitle: titles[index],
  shortExcerpt: excerpts[index],
  href: `/speaking-mind/${article.slug}`,
  // The original address carries the publication date as /YYYY/MM/DD/.
  publishedAt: article.sourceUrl
    .match(/\/(\d{4})\/(\d{2})\/(\d{2})\//)
    ?.slice(1)
    .join("-"),
  sections: [
    { id: "overview", label: "Overview", blockIndex: -1 },
    ...contents[index].map(([label, prefix]) => ({
      id: label.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      label,
      blockIndex: article.blocks.findIndex((block) =>
        block.text.startsWith(prefix),
      ),
    })),
  ] satisfies ArticleSection[],
}));
export type Article = (typeof articles)[number];
