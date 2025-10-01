import React from "react";
import Image from "next/image";
import "./styles.css"

const projects = [
  {
    title: "TravelSynthPH",
    image: "/images/travel-synth.png",
  },
  {
    title: "ThriveAgro",
    image: "/images/thrive-agro.png",
  },
  {
    title: "Advance Web",
    image: "/advanced-web-project.jpg",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="bg-[rgb(11,11,15)] py-[50px] flex h-screen"
    >
      <div className="max-w-[1200px] mx-auto px-5 flex flex-col items-center w-full">
        <h2 className="text-center mb-10">
          <span className="text-[40px] block mb-[10px] text-white">
            PROJECTS
          </span>
          <hr className="gradient-hr mx-auto" />
          <span className="text-[20px] font-light block mb-[70px] text-white">
            Here are the projects that I worked on, showcasing my skills for
            both personal and collaborative works.
          </span>
        </h2>

        <div className="flex flex-row gap-[50px]">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative w-[400px] h-[250px] transition-all duration-200 mt-[100px] noselect"
            >
              <div className="card-3d absolute inset-0 z-0 grid grid-cols-5 grid-rows-5 gap-0">
                {Array.from({ length: 25 }, (_, i) => (
                  <div
                    key={i}
                    className={`tracker-${
                      i + 1
                    } absolute z-[200] w-full h-full cursor-pointer`}
                  ></div>
                ))}

                <div className="card-inner absolute inset-0 z-0 flex justify-center items-center rounded-2xl transition-all duration-700 bg-white">
                  <p className="opacity-0 absolute bottom-2 left-3 z-20 text-xs font-bold transition-all duration-300 max-w-[110px] text-[rgb(26,26,26)]">
                    HOVER OVER
                  </p>

                  <div className="transition-all duration-300 delay-100 absolute text-xl font-bold text-white">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={300}
                      height={180}
                      className="max-w-full max-h-[180px] rounded-[10px]"
                    />
                  </div>

                  <div className="transform translate-y-[160px] text-[rgb(255,87,35)] text-center w-full font-semibold">
                    {project.title}
                  </div>

                  <div className="absolute w-full h-full -z-[1] transition-all duration-200 opacity-30 bg-gradient-to-r from-[rgb(65,88,208)] via-[rgb(200,80,192)] to-[rgb(255,204,112)] blur-[2rem]"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
