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
