export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  url: string;
  external: boolean;
  image?: string;
};

export type SortOrder = "date" | "fave";

const projects: Project[] = [
  {
    slug: "barclaysmen",
    title: "Barclaysmen",
    description:
      "An interactive football guessing game. Test your knowledge of Premier League players across every club.",
    tags: ["Game", "Node", "TypeScript"],
    url: "https://barclaysmenweb.netlify.app",
    external: true,
    image: "/images/barclaysmen.jpg",
  },
  {
    slug: "tekmate",
    title: "TekMate",
    description:
      "A concept site management app built from personal experience on the tools. Uses OCR to digitise paperwork and remove the manual pain points of running a construction site.",
    tags: ["React Native", "TypeScript", "Google Cloud Vision", "GPT-4o", "Node.js", "iOS"],
    url: "/projects/tekmate",
    external: false,
    image: "/images/TM8_Leaderboard.png",
  },
  {
    slug: "groove-digging",
    title: "Groove Digging",
    description:
      "A design concept page for music lovers, built around a personal vinyl collection. Heavy focus on UI design with real records used as the visual foundation.",
    tags: ["Design", "UI", "Music", "React"],
    url: "https://groovedigging.netlify.app",
    external: true,
    image: "/images/groove-digging.jpg",
  },
  {
    slug: "filtering-filters",
    title: "Filtering Filters",
    description:
      "Uses the SERP API to query Google AI and web scrapes two pages to surface filter matches — automating what would otherwise be a manual comparison process.",
    tags: ["Node.js", "TypeScript", "SERP API", "Google AI Overview", "Web Scraping"],
    url: "/projects/filtering-filters",
    external: false,
    image: "/images/comFil.png",
  },
  {
    slug: "football-clip-finder",
    title: "Football Clip Finder",
    description:
      "Upload a football clip and Whisper transcribes the commentary into searchable, timestamped segments. Full auth, cloud file storage, and vault sharing between users.",
    tags: ["Python", "FastAPI", "Whisper", "React", "TypeScript", "Supabase", "AWS S3", "Redis"],
    url: "/projects/football-clip-finder",
    external: false,
  },
  {
    slug: "nc-news",
    title: "NC News",
    description:
      "My first project — a Reddit-style news platform with a fully tested REST API backend and a React frontend. The first time I built and consumed my own API.",
    tags: ["REST API", "PostgreSQL", "Express", "React", "Jest", "Supertest"],
    url: "/projects/nc-news",
    external: false,
  },
  {
    slug: "dev-toolbox",
    title: "Dev Toolbox",
    description:
      "A single-page browser utility for formatting JSON/XML, encoding Base64 and URLs, and transforming text — no install needed.",
    tags: ["Tool", "Vanilla JS", "HTML"],
    url: "/projects/dev-toolbox",
    external: false,
    image: "/images/dev-toolbox.svg",
  },
];

// Slug order for each sort mode
const sortOrders: Record<SortOrder, string[]> = {
  date: [
    "barclaysmen",
    "tekmate",
    "groove-digging",
    "filtering-filters",
    "dev-toolbox",
    "nc-news",
    "football-clip-finder",
  ],
  fave: [
    "barclaysmen",
    "football-clip-finder",
    "nc-news",
    "groove-digging",
    "tekmate",
    "filtering-filters",
    "dev-toolbox",
  ],
};

export function getSortedProjects(order: SortOrder): Project[] {
  const slugs = sortOrders[order];
  return slugs
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter(Boolean) as Project[];
}

export default projects;
