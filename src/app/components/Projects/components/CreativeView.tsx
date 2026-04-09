"use client";

import React from "react";
import Image from "next/image";
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

  return (
    <>
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
                  <p className="font-bold text-base md:text-2xl text-white leading-tight">{item.title}</p>
                  <p className="font-normal text-[10px] md:text-base text-white/80">
                    {item.subtitle}
                  </p>
                </div>
              ),
            }))}
          />
        </div>
      )}

      {(subFilter === "all" || subFilter === "video") && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {videoWorks.map((item, index) => (
            <WobbleCard
              key={index}
              containerClassName="bg-white/5 border border-white/10 min-h-[300px]"
              wobble={!isTouchDevice}
            >
              <div className="relative h-44 w-full mb-4 overflow-hidden rounded-xl">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="100%"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 text-white">
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
              <h4 className="text-white font-bold text-lg">{item.title}</h4>
              <p className="text-gray-400 text-sm">{item.subtitle}</p>
            </WobbleCard>
          ))}
        </div>
      )}
    </>
  );
}
