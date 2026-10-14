/**
 * Portfolio content.
 *
 * Source of truth: the audited CV. Keep every employment date, qualification, skill and
 * accomplishment here consistent with that CV. Do not add metrics,
 * certifications, profile URLs or experience that the CV does not state.
 */

export type ExternalLink = {
  label: string;
  /** `null` keeps the link hidden on the site until a verified URL is supplied. */
  href: string | null;
};

export type Profile = {
  name: string;
  shortName: string;
  title: string;
  tagline: string;
  location: string;
  email: string;
  summary: readonly string[];
  /** Absolute production URL, used for canonical and Open Graph metadata. */
  siteUrl: string | null;
  links: {
    github: ExternalLink;
    linkedin: ExternalLink;
  };
  cv: {
    /** Path under /public. Only rendered when `published` is true. */
    href: string;
    /**
     * Keep `false` until the public CV PDF has been reviewed and approved and
     * copied into /public. See README.md, "Publishing the CV".
     */
    published: boolean;
  };
};

export type SkillGroup = {
  id: string;
  title: string;
  icon: SkillIcon;
  skills: readonly string[];
  /** Shown as a badge when the CV qualifies the group (e.g. project experience). */
  note?: string;
};

export type SkillIcon =
  | "web"
  | "frontend"
  | "database"
  | "mobile"
  | "ai"
  | "design"
  | "productivity";

export type Project = {
  id: string;
  title: string;
  context: string;
  year: string;
  role?: string;
  description: string;
  tags: readonly string[];
  /** Explains why no demo, source or screenshots are shown. */
  disclosure?: string;
  href?: string;
};

export type Experience = {
  id: string;
  role: string;
  company: string;
  start: string;
  end: string;
  /** Machine-readable dates for <time dateTime>. `end` is omitted while current. */
  startDate: string;
  endDate?: string;
  location: string;
  highlights: readonly string[];
};

export type Education = {
  id: string;
  qualification: string;
  institution: string;
  year: string;
};

export type Training = {
  id: string;
  title: string;
  provider: string;
  date: string;
  dateTime: string;
};

export type NavItem = {
  id: string;
  label: string;
};

export const profile: Profile = {
  name: "Jayson Soriano Emeterio",
  shortName: "Jayson Emeterio",
  title: "Full Stack Developer",
  tagline:
    "I build and maintain internal business systems, database-driven applications and system integrations.",
  location: "Marilao, Bulacan, Philippines",
  email: "emeteriojayson.pdm@gmail.com",
  summary: [
    "I'm a Full Stack Developer with professional experience developing and maintaining internal business systems, database-driven applications and system integrations.",
    "My background spans web and mobile application development, relational databases, troubleshooting and UI/UX design. It is supported by earlier professional experience as a graphic artist, which still shapes how I approach layouts and interfaces.",
    "I use Claude Code, ChatGPT and GitHub Copilot to assist with implementation planning, coding, debugging, refactoring and documentation. Their outputs are always reviewed and tested before use.",
  ],
  // TODO: set to the production URL (e.g. "https://example.com") once deployed.
  siteUrl: null,
  links: {
    // TODO: supply and verify the real GitHub profile URL before setting href.
    github: { label: "GitHub", href: null },
    // TODO: supply and verify the real LinkedIn profile URL before setting href.
    linkedin: { label: "LinkedIn", href: null },
  },
  cv: {
    href: "/Jayson-Emeterio-CV.pdf",
    published: false,
  },
};

export const navItems: readonly NavItem[] = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export const skillGroups: readonly SkillGroup[] = [
  {
    id: "web-backend",
    title: "Web & Backend",
    icon: "web",
    skills: [
      "PHP",
      "Laravel",
      "JavaScript",
      "jQuery",
      "HTML",
      "CSS",
      "JSON",
      "API/system integration",
    ],
  },
  {
    id: "databases",
    title: "Databases",
    icon: "database",
    skills: ["MySQL", "PostgreSQL", "Microsoft SQL Server"],
  },
  {
    id: "frontend",
    title: "Frontend & Frameworks",
    icon: "frontend",
    note: "Project experience",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "mobile-desktop",
    title: "Mobile & Desktop",
    icon: "mobile",
    skills: ["Android Studio", "Java", "XML", "C#", "Visual Basic", "NetBeans"],
  },
  {
    id: "ai-assisted",
    title: "AI-Assisted Development",
    icon: "ai",
    skills: [
      "Claude Code",
      "ChatGPT",
      "GitHub Copilot",
      "Coding assistance",
      "Debugging",
      "Refactoring",
      "Implementation planning",
      "Documentation",
    ],
  },
  {
    id: "design-it",
    title: "Design & IT Support",
    icon: "design",
    skills: [
      "Adobe Photoshop",
      "Adobe Illustrator",
      "CorelDRAW",
      "Blender 3D",
      "Hardware/network troubleshooting",
      "Software installation",
    ],
  },
  {
    id: "productivity",
    title: "Productivity",
    icon: "productivity",
    skills: ["Microsoft Excel", "Word", "Access", "PowerPoint"],
  },
];

export const projects: readonly Project[] = [
  {
    id: "live-birds",
    title: "Dressing Plant Management System, Asset Tagging and Distributor System",
    context: "Vitarich Corporation",
    year: "2022",
    description:
      "Developed an internal business system at Vitarich Corporation.",
    tags: ["Internal business system"],
    disclosure:
      "Internal company system. Details, screenshots and data are not publicly shared.",
  },
  {
    id: "e-pabile",
    title: "E-Pabile Mobile and Web Application",
    context: "Pambayang Dalubhasaan ng Marilao",
    year: "2021",
    role: "Lead Programmer",
    description:
      "Served as Lead Programmer for the BSIT thesis/capstone project, a mobile and web application.",
    tags: ["Mobile", "Web", "Capstone project"],
  },
  {
    id: "portfolio",
    title: "Developer Portfolio",
    context: "Personal project",
    year: "2026",
    description:
      "This website. A responsive, accessible single-page portfolio built with the Next.js App Router, strict TypeScript and Tailwind CSS.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "kalikasan-spa",
    title: "Kalikasan Spa",
    context: "Live website",
    year: "2026",
    description:
      "A spa website presenting the spa's services, featured experiences and customer feedback, with booking inquiries directed to the spa's Facebook page.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    href: "https://kalikasan-spa.vercel.app",
  },
  {
    id: "inventory-wms",
    title: "Inventory Warehouse Management System",
    context: "Web application",
    year: "2026",
    description:
      "A web-based inventory and warehouse management system that tracks stock by bin location and supports receiving, putaway, transfers, stock counts, adjustments and department issues, with reports and an audit trail.",
    tags: ["Laravel", "PHP", "MariaDB", "Bootstrap", "jQuery"],
    disclosure:
      "Login required. Credentials, screenshots and data are not publicly shared.",
  },
];

export const experience: readonly Experience[] = [
  {
    id: "vitarich",
    role: "Full Stack Developer",
    company: "Vitarich Corporation",
    start: "April 2022",
    end: "Present",
    startDate: "2022-04",
    location: "Marilao, Bulacan",
    highlights: [
      "Develop and maintain front-end and back-end components for internal business applications and operational workflows.",
      "Build and support database-driven systems, APIs, and integrations to enable data exchange across business applications.",
      "Work with relational databases, including MySQL, PostgreSQL, and Microsoft SQL Server, for data management and application support.",
      "Translate business requirements into practical user interfaces and responsive web or mobile experiences.",
      "Troubleshoot application issues and support testing, releases, and ongoing maintenance to improve system reliability.",
      "Document workflows and coordinate with technical and business stakeholders to align software solutions with operational needs.",
    ],
  },
  {
    id: "shreya",
    role: "Graphic Artist",
    company: "Shreya Incorporated",
    start: "March 2021",
    end: "September 2021",
    startDate: "2021-03",
    endDate: "2021-09",
    location: "Marilao, Bulacan",
    highlights: [
      "Created client-focused layouts, logos, packaging, website visuals, icons, and illustrations.",
      "Prepared design concepts and revised creative materials based on client feedback and approval requirements.",
      "Provided technical support when needed.",
    ],
  },
  {
    id: "dynastar",
    role: "Graphic Artist",
    company: "Dynastar Inc.",
    start: "June 2015",
    end: "November 2016",
    startDate: "2015-06",
    endDate: "2016-11",
    location: "Marilao, Bulacan",
    highlights: [
      "Designed logos, packaging, illustrations, and visual layouts according to client requirements.",
      "Prepared initial concepts and refined designs through client communication, review, and revisions.",
    ],
  },
];

export const education: readonly Education[] = [
  {
    id: "bsit",
    qualification: "Bachelor of Science in Information Technology",
    institution: "Pambayang Dalubhasaan ng Marilao",
    year: "2021",
  },
  {
    id: "act",
    qualification: "Associate in Computer Technology",
    institution: "STI College of Meycauayan",
    year: "2012",
  },
];

export const training: readonly Training[] = [
  {
    id: "udemy-web",
    title: "How the Internet Works & the Web Development Process",
    provider: "Udemy",
    date: "February 2021",
    dateTime: "2021-02",
  },
  {
    id: "udemy-android-widgets",
    title: "Building Android Widgets from Scratch (Learn 8 Widgets)",
    provider: "Udemy",
    date: "February 2021",
    dateTime: "2021-02",
  },
  {
    id: "trend-micro-malware",
    title: "Introduction to Malware Threats",
    provider: "Trend Micro",
    date: "October 2020",
    dateTime: "2020-10",
  },
  {
    id: "tesda-android",
    title: "Smart Android Mobile Apps Development for Beginners",
    provider: "TESDA Online",
    date: "October 2020",
    dateTime: "2020-10",
  },
];
