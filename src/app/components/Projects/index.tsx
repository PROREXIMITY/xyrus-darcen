"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { projects, creativeWorks } from "@/app/components/data/mockData";
import CarouselModal from "./components/CarouselModal";
import ProjectHeader from "./components/ProjectHeader";
import DevProjectCard from "./components/DevProjectCard";
import CreativeView from "./components/CreativeView";

type ViewType = "dev" | "creative";
type SubFilterType = "all" | "image" | "video";

function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [view, setView] = useState<ViewType>("dev");
  const [subFilter, setSubFilter] = useState<SubFilterType>("all");
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window);
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const queryView = params.get("view");

    if (queryView === "creative" || queryView === "dev") {
      setView(queryView);
      sectionRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    const url = new URL(window.location.href);
    url.searchParams.set("view", view);
    window.history.replaceState({}, "", url.toString());
  }, [view]);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState<string[]>([]);
  const [modalStartIndex, setModalStartIndex] = useState(0);

  const openCarousel = (images: string[], startIndex = 0) => {
    setModalImages(images.length ? images : []);
    setModalStartIndex(startIndex);
    setModalOpen(true);
  };

  const closeCarousel = () => {
    setModalOpen(false);
    setModalImages([]);
    setModalStartIndex(0);
  };

  return (
    <section id="projects" ref={sectionRef} className="bg-[rgb(11,11,15)] py-20 px-5 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <ProjectHeader
          view={view}
          onViewChange={setView}
          subFilter={subFilter}
          onSubFilterChange={setSubFilter}
        />

        {view === "dev" ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="flex flex-col gap-8 md:gap-16"
          >
            {projects.map((project, index) => (
              <DevProjectCard
                key={index}
                project={project}
                index={index}
                hoveredIndex={hoveredIndex}
                setHoveredIndex={setHoveredIndex}
                openCarousel={openCarousel}
              />
            ))}
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full">
            <CreativeView
              subFilter={subFilter}
              isTouchDevice={isTouchDevice}
              creativeWorks={creativeWorks}
            />
          </motion.div>
        )}
      </div>

      <CarouselModal images={modalImages} open={modalOpen} startIndex={modalStartIndex} onClose={closeCarousel} />
    </section>
  );
}

export default Projects;
