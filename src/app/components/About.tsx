const skills = [
  { name: "Frontend", items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"] },
  { name: "UI/Design", items: ["Tailwind", "Bootstrap", "Shadcn UI", "Flutter Flow", "Figma"] },
  { name: "Backend", items: ["Node.js", "Firebase", "MongoDB"] },
  { name: "Tools", items: ["Git", "GitHub", "Bitbucket"] },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen py-20"
    >
      {/* Background with grid and gradient overlay */}
      <div className="absolute inset-0 bg-[rgba(11,11,15,0.97)] z-0">
        <div className="absolute inset-0 bg-[length:40px_40px] [background-image:linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)]" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-5">
        {/* Header Section */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-gray-400 to-white bg-clip-text text-transparent [text-shadow:0_0_10px_rgba(255,255,255,0.2)]">
              ABOUT ME
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-[1fr,auto,1fr] gap-8 md:gap-12">
          {/* About Me Section */}
          <div className="bg-black/40 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-500">
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Get to know me
            </h3>
            <div className="space-y-6 text-gray-300">
              <p className="leading-relaxed">
                I am a <span className="text-[rgba(236,72,153,0.8)] font-semibold">Full-Stack Web Developer</span> building
                and managing the backend and frontend of Web Applications that lead to the success of the overall project.
              </p>
              <p className="leading-relaxed">
                In addition to my interest for web development, I also enjoy video editing. 
                I find it fascinating to create visually engaging content that tells a story 
                and captures the audience&apos;s attention.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px bg-gradient-to-b from-transparent via-white/20 to-transparent mx-auto" />

          {/* Skills Section */}
          <div className="bg-black/40 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-500">
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              My Skills
            </h3>
            <div className="space-y-6">
              {skills.map((category) => (
                <div key={category.name} className="space-y-3">
                  <h4 className="text-sm uppercase tracking-wider text-gray-400">
                    {category.name}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-sm rounded-full 
                          bg-gradient-to-r from-[rgba(99,102,241,0.1)] to-[rgba(236,72,153,0.1)]
                          border border-white/10 hover:border-white/20 
                          transition-all duration-300 hover:scale-105
                          text-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
