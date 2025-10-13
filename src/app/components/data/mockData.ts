import { FaLaptopCode, FaPalette, FaServer, FaTools } from "react-icons/fa";

// Projects Data section

interface Project {
  title: string;
  image: string;
  description: string;
  tech: string[];
  year: string;
  category: string;
  liveLink: string;
  githubLink: string | undefined;
}

export const projects: Project[] = [
  {
    title: "Creciendo Website",
    image: "/assets/Creciendo.jpg",
    description: "Lead Frontend Developer for this modern business website with elegant design and smooth animations. Focused on creating seamless user experiences and optimized performance.",
    tech: ["JavaScript", "HTML", "CSS", "Tailwind", "React", "Next.JS", "MongoDB", "AWS S3", "DaisyUI", "ReCharts", "Bitbucket", "Jira"],
    year: "2025",
    category: "Web Developer",
    liveLink: "https://www.creciendo.com.ph/home",
    githubLink: undefined // Github link is undefined for this project because it is a private repository for a company
  },
  {
    title: "Advance Web",
    image: "/assets/AdvWeb.png",
    description: "Full Stack Developer building an advanced web application with cutting-edge technologies. Implemented RESTful APIs, database architecture, and authentication systems.",
    tech: ["JavaScript", "React", "Node.js", "MongoDB", "Express"],
    year: "2024",
    category: "Full-Stack",
    liveLink: "#",
    githubLink: "#"
  },
  {
    title: "LX Event Pro Website",
    image: "/assets/lxlogo.png",
    description: "Sole Developer creating a comprehensive event management platform. Built real-time booking systems, payment integration, and responsive mobile interfaces.",
    tech: ["PHP", "HTML", "CSS", "Tailwind", "MySQL"],
    year: "2024",
    category: "Full-Stack",
    liveLink: "#",
    githubLink: undefined
  },
];


// Skills for About Section
interface Skill {
  name: string;
  items: string[];
  icon: React.ElementType;
  color: string;
}

export const skills: Skill[] = [
  {
    name: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"],
    icon: FaLaptopCode,
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "UI/Design",
    items: ["Tailwind", "Bootstrap", "Shadcn UI", "Flutter Flow", "Figma"],
    icon: FaPalette,
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Backend",
    items: ["Node.js", "Firebase", "MongoDB"],
    icon: FaServer,
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "Tools",
    items: ["Git", "GitHub", "Bitbucket"],
    icon: FaTools,
    color: "from-orange-500 to-red-500",
  },
];

interface SocialLink {
  name: string;
  href: string;
  username: string;
  description: string;
  viewBox: string;
  iconPath: string;
  gradient: string;
  glowColor: string;
}

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    href: "https://github.com/PROREXIMITY",
    username: "@PROREXIMITY",
    description: "Check out my codes",
    viewBox: "0 0 24 24",
    iconPath: "M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z",
    gradient: "from-gray-600 to-gray-800",
    glowColor: "rgba(100, 100, 100, 0.3)",
  },
      {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/xyrus-darcen/",
      username: "Xyrus Darcen",
      description: "Connect professionally",
      viewBox: "0 0 24 24",
      iconPath: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z", 
      gradient: "from-[#0A66C2] to-[#004182]",
      glowColor: "rgba(10, 102, 194, 0.3)",
    },
    {
      name: "Gmail",
      href: "mailto:xyrusdarcen27@gmail.com",
      username: "xyrusdarcen27@gmail.com",
      description: "Send me an email",
      viewBox: "0 0 24 24",
      iconPath: "M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z",
      gradient: "from-[#EA4335] to-[#C5221F]",
      glowColor: "rgba(234, 67, 53, 0.3)",
    },
    {
      name: "Discord",
      href: "https://discord.com/users/prorex3786",
      username: "prorex3786",
      description: "Let's chat",
      viewBox: "0 0 24 24",
      iconPath: "M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.369-.444.85-.608 1.23a18.566 18.566 0 0 0-5.487 0 12.36 12.36 0 0 0-.617-1.23A.077.077 0 0 0 8.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026 13.83 13.83 0 0 0 1.226-1.963.074.074 0 0 0-.041-.104 13.175 13.175 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38z",
      gradient: "from-[#5865F2] to-[#4752C4]",
      glowColor: "rgba(88, 101, 242, 0.3)",
    },

];


// For Experience Section
interface Experience {
  type: 'education' | 'organization';
  title: string;
  institution: string;
  period: string;
  description: string;
  image: string;
  achievements?: string[];
}

export const experiences: Experience[] = [
  {
    type: 'education',
    title: 'National University - Baliwag',
    institution: 'Bachelor of Science in Information Technology',
    period: '2021 - 2025',
    description: 'Specialized in Mobile and Web Applications',
    image: '/assets/main-bg.png',
    achievements: [
      'Dean\'s Lister',
      'Top 3 Best Capstone Project'
    ]
  },
  {
    type: 'organization',
    title: 'Chief Creatives Officer',
    institution: 'AWS Cloud Club National University - Baliwag',
    period: '2024 - 2025',
    description: 'Led the creative team in designing promotional materials for tech events and workshops',
    image: '/assets/AWS.jpg',
    achievements: [
      'Successfully led the design of promotional materials',
      'Led the creative team'
    ]
  },
  {
    type: 'organization',
    title: 'Public Relations Officer',
    institution: 'Tanghal Sining: Center for Performing Arts',
    period: '2024 - 2025',
    description: 'Managed the public image and oversaw the design and promotion of various artistic and cultural events and activities.',
    image: '/assets/TSCPA.jpg',
    achievements: [
      'Multi Awarded Organization',
      'Designed the official logo and brand guidelines, establishing a distinctive visual identity for the organization.',
      'Developed and executed promotional campaigns that enhanced the organization\'s visibility and engagement within the community.', 
    ]
  },
  {
    type: 'organization',
    title: 'Public Relations Officer',
    institution: 'Student Counccil - School of Engineering, Architecture, and Technology',
    period: '2023 - 2024',
    description: 'Led a team of creatives in planning, designing, and publishing high-quality publicity materials and social media content to promote student council events and initiatives',
    image: '/assets/SEAT.jpg',
    achievements: [
      'Successfully organized events for the School of Engineering, Architecture, and Technology',
      'Designed the official Student Council logo, establishing a cohesive and modern visual identity across all platforms and significantly boosting brand recognition.',
    ]
  },
  {
    type: 'organization',
    title: 'Video & Graphics Promotions Lead',
    institution: 'Google Developer Student Clubs - National University Baliwag',
    period: '2022 - 2023',
    description: 'Specialized in creating engaging video and graphic promotional content to drive attendance for key tech events and workshops.',
    image: '/assets/Xyrus.png',
    achievements: [
      'Ensured all visual content was high-quality and on-brand, directly supporting the organization\'s goals.',
    ]
  },

];

