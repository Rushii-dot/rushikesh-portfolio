export interface Project {
  id: string;
  title: string;
  logo?: string;
  subtitle: string;
  category: string;
  description: string;
  architectureNotes: string[];
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  accent: 'terracotta' | 'sage';
  year: string;
  role: string;
  deployment: string;
  storage: string;
  backend: string;
  highlights: string[];
}

export interface SkillGroup {
  category: string;
  description: string;
  items: string[];
}

export interface JourneyMilestone {
  id: string;
  period: string;
  phase: string;
  focus: string;
  description: string;
  learnings: string[];
}

export interface PortfolioProfile {
  name: string;
  role: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  status: string;
  academicStatus: string;
  philosophy: string;
  shortBio: string;
}

export const portfolioProfile: PortfolioProfile = {
  name: "Rushikesh Shinde",
  role: "Student Developer",
  location: "Pune, India",
  email: "rushikeshshinde9637@gmail.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  status: "Open to learning, collaborations & internships",
  academicStatus: "Second Year B.Tech — Computer Engineering",
  philosophy: "Building software with care and structural clarity. Learning through the process of creating real, working applications that solve specific community needs.",
  shortBio: "I am a second-year computer engineering student focused on building practical software. I enjoy experimenting with mobile and web technologies, turning technical concepts into functional projects like Radius and Health Club.",
};

export const realProjects: Project[] = [
  {
    id: "proj-radius",
    title: "Radius",
    logo: "/Radius logo.jpg",
    subtitle: "Localized Social Discovery",
    category: "Android Application",
    description:
      "A localized social platform developed as a native Android application. Radius enables users to discover people, activities, and useful information nearby, fostering community connection through real-time chat and localized help-sharing.",
    architectureNotes: [
      "Enables discovery of nearby people, activities, and real-time community information through 'Pulses'.",
      "Facilitates direct connections and community support through integrated chat and help-sharing frameworks.",
      "Built as a native Android application with location-aware discovery logic and map-based exploration.",
      "Prioritizes user privacy with home location obfuscation and customizable radius constraints (500m to 20km)."
    ],
    tags: ["Android Studio", "Firebase", "Google Maps API", "Git"],
    demoUrl: "",
    githubUrl: "https://github.com",
    accent: "terracotta",
    year: "2026",
    role: "Developer",
    deployment: "Android APK",
    storage: "Firebase",
    backend: "Firebase Auth & Firestore",
    highlights: [
      "Discovery of nearby people, activities, and community-shared information.",
      "Real-time chat and connectivity for fostering local relationships.",
      "A dedicated framework for asking or offering help within the community.",
      "Privacy-focused design with coordinate shifting for household protection."
    ]
  },
  {
    id: "proj-health-club",
    title: "Health Club",
    logo: "/Health club logo.jpg",
    subtitle: "Health & Wellness Community",
    category: "Web Project",
    description:
      "A live, deployed website developed for a real client in Barshi. Health Club Barshi is a community-focused platform for a free outdoor exercise group, currently serving as the client's actual web presence to share workout routines, galleries, and events.",
    architectureNotes: [
      "Built using modern web standards to ensure a fast, responsive editorial experience.",
      "Deployed via Netlify for reliable hosting and continuous accessibility.",
      "Managed media assets and community event galleries through Cloudinary for optimized delivery.",
      "Features a 'Today's Workout' section to coordinate group activities and community engagement."
    ],
    tags: ["HTML", "CSS", "JavaScript", "Netlify", "Cloudinary"],
    demoUrl: "https://healthclubbarshi.netlify.app/",
    githubUrl: "https://github.com",
    accent: "sage",
    year: "2026",
    role: "Developer",
    deployment: "Netlify",
    storage: "Cloudinary",
    backend: "Static Web",
    highlights: [
      "Live production website for a real community health client.",
      "Responsive editorial layout focused on community storytelling and accessibility.",
      "Optimized media delivery for workout galleries and event highlights.",
      "Centralized coordination of daily outdoor health activities."
    ]
  }
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Building",
    description: "Technologies used to create user interfaces and mobile experiences.",
    items: ["HTML / CSS", "JavaScript", "React", "TypeScript"]
  },
  {
    category: "Backend & Services",
    description: "Cloud platforms and services integrated into projects for data and deployment.",
    items: ["Firebase", "Cloudinary", "Render", "APIs"]
  },
  {
    category: "Tools",
    description: "Software and version control tools used in the development workflow.",
    items: ["Git / GitHub", "Android Studio", "Netlify", "Google AI Studio / Gemini"]
  }
];

export const journeyMilestones: JourneyMilestone[] = [
  {
    id: "m-current",
    period: "Present",
    phase: "Second Year B.Tech",
    focus: "Experimenting with Full-Stack & Mobile",
    description:
      "Currently pursuing B.Tech in Computer Engineering at DY Patil College of Engineering and Innovation. I am focusing on building real-world projects to deepen my understanding of software development lifecycle and cloud integration.",
    learnings: [
      "Exploring mobile development through the Radius Android project.",
      "Implementing web-based community platforms like Health Club.",
      "Learning to integrate cloud services like Firebase and Cloudinary."
    ]
  },
  {
    id: "m-foundations",
    period: "2023 — 2024",
    phase: "First Year B.Tech",
    focus: "Computer Engineering Foundations",
    description:
      "Completed the first year of Computer Engineering, establishing strong foundations in programming logic, mathematics, and core computing principles.",
    learnings: [
      "Mastered foundational programming syntax and problem-solving logic.",
      "Gained an understanding of web standards and responsive design basics.",
      "Started exploring community-driven software projects."
    ]
  }
];

