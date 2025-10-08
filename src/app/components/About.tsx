const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Flutter Flow",
  "Bootstrap",
  "Tailwind",
  "Shadcn UI",
  "Git",
  "GitHub",
  "Bitbucket",
  "Node.js",
  "Figma",
  "MySQL",
  "Firebase",
  "MongoDB",

  // Add the other skills like view more for Adobe Skills
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-[rgba(11,11,15,0.95)] text-white mt-[20px] md:mt-[10px] py-[50px]"
    >
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="text-center mb-10">
          <span className="text-[30px] md:text-[40px] block mb-[10px]">
            ABOUT ME
          </span>
          <hr className="gradient-hr mx-auto" />
          <span className="text-[16px] md:text-[20px] font-light block mb-[40px] md:mb-[70px] px-4">
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology.
          </span>
        </h2>

        <div className="flex flex-col md:flex-row justify-between mt-[30px] mb-[100px] md:mb-[220px] px-4 md:px-[30px] gap-10">
          <div className="flex-1 mr-0 md:mr-[50px]">
            <h3 className="text-[1.5em] md:text-[1.8em] mb-5">
              Get to know me!
            </h3>
            <div className="space-y-5">
              <p className="text-[18px] md:text-[25px] leading-[1.6]">
                I am a{" "}
                <strong className="font-bold text-[#fd6553]">
                  Full-Stack Web Developer
                </strong>{" "}
                building and managing the backend and frontend of Web
                Applications that lead to the success of the overall project.
              </p>
              <p className="text-[18px] md:text-[25px] leading-[1.6]">
                In addition to my interest for web development, I also enjoy
                video editing. I find it fascinating to create visually engaging
                content that tells a story and captures the audience&apos;s
                attention.
              </p>
            </div>
          </div>

          <div className="flex-1">
            <h3 className="text-[1.5em] md:text-[1.8em] mb-5">My Skills</h3>
            <div className="flex flex-wrap gap-[10px]">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="bg-[#333333] text-white py-2 md:py-3 px-3 md:px-4 rounded-[5px] text-[14px] md:text-[16px]"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
