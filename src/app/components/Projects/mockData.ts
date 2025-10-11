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
    tech: ["HTML", "CSS", "JavaScript", "GSAP", "Webpack"],
    year: "2023",
    category: "Frontend",
    liveLink: "https://www.creciendo.com.ph/home",
    githubLink: undefined // Github link is undefined for this project because it is a private repository for a company
  },
  {
    title: "Advance Web",
    image: "/assets/AdvWeb.png",
    description: "Full Stack Developer building an advanced web application with cutting-edge technologies. Implemented RESTful APIs, database architecture, and authentication systems.",
    tech: ["TypeScript", "React", "Node.js", "MongoDB", "Express"],
    year: "2024",
    category: "Full-Stack",
    liveLink: "#",
    githubLink: "#"
  },
  {
    title: "LX Event Pro Website",
    image: "/assets/lxlogo.png",
    description: "Sole Developer creating a comprehensive event management platform. Built real-time booking systems, payment integration, and responsive mobile interfaces.",
    tech: ["React", "Next.js", "Tailwind", "Firebase", "Stripe"],
    year: "2024",
    category: "Full-Stack",
    liveLink: "#",
    githubLink: "#"
  },
];
