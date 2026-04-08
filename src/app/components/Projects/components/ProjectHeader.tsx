"use client";

import React from "react";

type ViewType = "dev" | "creative";
type SubFilterType = "all" | "image" | "video";

interface ProjectHeaderProps {
  view: ViewType;
  onViewChange: (view: ViewType) => void;
  subFilter: SubFilterType;
  onSubFilterChange: (filter: SubFilterType) => void;
}

const viewOptions: ViewType[] = ["dev", "creative"];
const subFilterOptions: SubFilterType[] = ["all", "image", "video"];

export default function ProjectHeader({
  view,
  onViewChange,
  subFilter,
  onSubFilterChange,
}: ProjectHeaderProps) {
  return (
    <div className="text-center mb-20">
      <div className="inline-block mb-4">
        <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-sm text-purple-300 animate-pulse">
          ✨ Featured Work
        </span>
      </div>
      <h2 className="font-bold text-5xl md:text-6xl mb-6 bg-gradient-to-r from-gray-400 to-white bg-clip-text text-transparent">
        PROJECTS
      </h2>
      <p className="text-gray-400 max-w-2xl mx-auto text-lg">
        Here are the projects that I worked on, showcasing my skills for both personal and collaborative works.
      </p>

      <div className="flex justify-center mt-8">
        <div className="inline-flex rounded-2xl bg-[rgba(15,15,22,0.75)] backdrop-blur-xl p-1.5 border border-white/10 shadow-[0_0_40px_rgba(128,90,213,0.08)]">
          {viewOptions.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => onViewChange(option)}
              className={`px-5 py-3 text-sm font-semibold transition-all duration-300 rounded-xl ${
                view === option
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/20"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {option === "dev" ? "Development" : "Creative Works"}
            </button>
          ))}
        </div>
      </div>

      {view === "creative" && (
        <div className="flex justify-center mt-6">
          <div className="inline-flex rounded-full bg-[rgba(15,15,22,0.75)] backdrop-blur-xl p-1 border border-white/10 shadow-[0_0_20px_rgba(128,90,213,0.05)]">
            {subFilterOptions.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => onSubFilterChange(filter)}
                className={`px-4 py-2 text-xs font-medium transition-all duration-300 rounded-full ${
                  subFilter === filter
                    ? "bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border border-purple-500/30"
                    : "text-gray-500 hover:text-gray-300 hover:bg-white/5"
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
