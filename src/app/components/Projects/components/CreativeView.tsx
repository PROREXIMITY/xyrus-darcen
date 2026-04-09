"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { LayoutGrid } from "@/components/ui/layout-grid";
import { WobbleCard } from "@/components/ui/wobble-card";
import type { CreativeWork } from "@/app/components/data/mockData";

type SubFilterType = "all" | "image" | "video";

interface CreativeViewProps {
  subFilter: SubFilterType;
  isTouchDevice: boolean;
  creativeWorks: CreativeWork[];
}

export default function CreativeView({
  subFilter,
  isTouchDevice,
  creativeWorks,
}: CreativeViewProps) {
  const imageWorks = creativeWorks.filter((item) => item.type === "image");
  const videoWorks = creativeWorks.filter((item) => item.type === "video");

  const [selectedVideo, setSelectedVideo] = useState<CreativeWork | null>(null);

  return (
    <>
      {/* --- IMAGE SECTION --- */}
      {(subFilter === "all" || subFilter === "image") && (
        <div className="py-10">
          <LayoutGrid
            cards={imageWorks.map((item, i) => ({
              id: i + 1, //To avoid id of 0 which is falsy
              // className: i % 3 === 0 ? "md:col-span-2" : "col-span-1",
              className: item.isBanner
                ? "md:col-span-2 aspect-[16/9] md:aspect-auto"
                : "col-span-1 aspect-square md:aspect-auto",
              thumbnail: item.image,
              content: (
                <div className="pointer-events-none">
                  <p className="font-bold text-base md:text-2xl text-white leading-tight">
                    {item.title}
                  </p>
                  <p className="font-normal text-[10px] md:text-base text-white/80">
                    {item.subtitle}
                  </p>
                </div>
              ),
            }))}
          />
        </div>
      )}

      {/* --- VIDEO SECTION --- */}
      {(subFilter === "all" || subFilter === "video") && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {videoWorks.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedVideo(item)}
              className="cursor-pointer h-full"
            >
              <WobbleCard
                containerClassName="bg-white/5 border border-white/10 min-h-[300px]"
                wobble={!isTouchDevice}
              >
                <div className="relative h-44 w-full mb-4 overflow-hidden rounded-xl">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center group">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 text-white transition-transform group-hover:scale-110">
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col flex-grow">
                  <h4 className="text-white font-bold text-lg">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.subtitle}</p>
                </div>
              </WobbleCard>
            </div>
          ))}
        </div>
      )}

      {/* --- VIDEO MODAL POP-UP --- */}
      <AnimatePresence>
        {selectedVideo && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
            {/* Background Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedVideo(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-sm cursor-pointer"
            />

            {/* Video Container */}
            <motion.div
              layoutId={`video-${selectedVideo.title}`}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl z-10"
            >
              <video
                src={selectedVideo.videoUrl}
                controls
                autoPlay
                className="w-full h-full object-contain"
              />
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 text-white/50 hover:text-white z-20"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
