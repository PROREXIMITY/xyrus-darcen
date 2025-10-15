"use client";

import React, { useState } from "react";
import { skills } from "@/app/components/data/mockData";
import { FaLaptopCode, FaArrowLeft } from "react-icons/fa";
import Image from "next/image";
import ExperienceCards from "@/app/components/Experience";

export default function About() {
  const [activeSkill, setActiveSkill] = useState<number | null>(null);
  const [showEducation, setShowEducation] = useState(false);
  const [activeType, setActiveType] = useState<
    "education" | "organization" | "intern"
  >("education");

  // Early return for education content
  if (showEducation) {
    return (
      <section className="relative min-h-screen py-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-[rgba(11,11,15,0.97)] z-0">
          <div className="absolute inset-0 bg-[length:40px_40px] [background-image:linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)]" />

          {/* Floating Gradient Orbs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-[100px] animate-float-slow" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] animate-float-slower" />
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-5">
          {/* Back Button */}
          <button
            onClick={() => setShowEducation(false)}
            className="group flex items-center gap-2 mb-8 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300"
          >
            <FaArrowLeft className="text-purple-400 group-hover:-translate-x-1 transition-transform" />
            <span className="text-white/80 group-hover:text-white">
              Back to About
            </span>
          </button>

          {/* Toggle Buttons */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-2xl bg-black/40 backdrop-blur-xl p-1.5 border border-white/10">
              {(["education", "organization", "intern"] as const).map((type) => (
                <button
                  key={type}
                  onClick={() => setActiveType(type)}
                  className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    activeType === type
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Experience Cards */}
          <ExperienceCards activeType={activeType} />
        </div>
      </section>
    );
  }

  return (
    <section id="about" className="relative min-h-screen py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[rgba(11,11,15,0.97)] z-0">
        <div className="absolute inset-0 bg-[length:40px_40px] [background-image:linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)]" />

        {/* Floating Gradient Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-[100px] animate-float-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] animate-float-slower" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-5">
        {/* Header with Animated Badge */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-full mb-4">
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
            <span className="text-sm text-purple-300">
              Full-Stack Developer & Creative
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold">
            <span className="bg-gradient-to-r from-gray-400 via-white to-gray-400 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_100%]">
              ABOUT ME
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Crafting digital experiences with code and creativity
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {/* Main Bio Card - Takes up more space */}
          <div className="col-span-12 lg:col-span-7 bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:border-purple-500/50 transition-all duration-500 group relative overflow-hidden">
            {/* Animated Border Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/20 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                  <FaLaptopCode className="text-white text-xl" />
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  Get to know me
                </h3>
              </div>

              <div className="space-y-6 text-gray-300">
                {/* Professional Block */}
                <div className="relative pl-6 border-l-2 border-purple-500/30 hover:border-purple-500/60 transition-colors duration-300">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-purple-500 rounded-full animate-pulse" />
                  <p className="text-sm font-semibold text-purple-300 mb-2 uppercase tracking-wider">
                    Professional Focus
                  </p>
                  <p className="text-base leading-relaxed">
                    I&apos;m a passionate{" "}
                    <span className="font-semibold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                      Full-Stack Web Developer
                    </span>{" "}
                    taking projects from concept to deployment. My expertise
                    lies in architecting efficient backend solutions and
                    creating fluid, captivating frontend experiences.
                  </p>
                </div>

                {/* Creative Block */}
                <div className="relative pl-6 border-l-2 border-blue-500/30 hover:border-blue-500/60 transition-colors duration-300">
                  <div
                    className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-500 rounded-full animate-pulse"
                    style={{ animationDelay: "0.5s" }}
                  />
                  <p className="text-sm font-semibold text-blue-300 mb-2 uppercase tracking-wider">
                    Creative Side
                  </p>
                  <p className="text-base leading-relaxed">
                    Beyond code, I explore{" "}
                    <span className="text-white font-semibold">
                      video editing
                    </span>{" "}
                    to craft compelling visual narratives. I believe great
                    products need both solid engineering and captivating
                    storytelling.
                  </p>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                  <div className="text-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                      Fresh Grad
                    </div>
                    <div className="text-xs text-gray-500">Ready to Learn</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">5+</div>
                    <div className="text-xs text-gray-500">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">100%</div>
                    <div className="text-xs text-gray-500">Dedication</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Info Cards */}
          <div className="col-span-12 lg:col-span-5 flex flex-col gap-4">
            {/* Location Card */}
            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-xl p-6 rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 group">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-gray-500">Based in</div>
                  <div className="text-white font-semibold">
                    Baliwag, Bulacan, Philippines
                  </div>
                </div>
              </div>
            </div>

            {/* Status Card */}
            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-xl p-6 rounded-2xl border border-green-500/20 hover:border-green-500/40 transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">Status</div>
                  <div className="text-white font-semibold">
                    Open to Opportunities
                  </div>
                </div>
              </div>
            </div>

            {/* Education Card - Modified to be clickable */}
            <button
              onClick={() => setShowEducation(true)}
              className="w-full text-left bg-gradient-to-br from-yellow-500/10 to-amber-500/10 backdrop-blur-xl p-6 rounded-2xl border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-yellow-500/20 rounded-xl flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-yellow-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 14l9-5-9-5-9 5 9 5z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Background</div>
                    <div className="text-white font-semibold">
                      Education & Organizations
                    </div>
                  </div>
                </div>
                <svg
                  className="w-5 h-5 text-yellow-400 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </button>

            {/* CTA Card - Let's work together */}
            <a
              href="#contact"
              className="block bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-xl p-6 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

              <div className="flex items-center justify-between relative">
                <div>
                  <div className="text-white font-semibold mb-1 group-hover:text-purple-300 transition-colors">
                    Let&apos;s work together
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-400">
                    Get in touch
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      →
                    </span>
                  </div>
                </div>
                <div className="h-10 w-10 rounded-xl bg-purple-500/20 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-purple-400 transform rotate-45 group-hover:-rotate-45 transition-all duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </div>
              </div>
            </a>
          </div>

          {/* Skills Section - Full Width */}
          <div className="col-span-12">
            <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Technical Arsenal
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {skills.map((category, index) => (
                <div
                  key={category.name}
                  className="relative group cursor-pointer"
                  onMouseEnter={() => setActiveSkill(index)}
                  onMouseLeave={() => setActiveSkill(null)}
                >
                  {/* Glow effect */}
                  <div
                    className={`absolute -inset-0.5 bg-gradient-to-r ${category.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
                  />

                  <div className="relative bg-black/60 backdrop-blur-xl p-6 rounded-2xl border border-white/10 group-hover:border-white/30 transition-all duration-300 h-full">
                    {/* Icon Header */}
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`w-10 h-10 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                      >
                        {React.createElement(category.icon, {
                          className: "text-white text-lg",
                        })}
                      </div>
                      <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                        {category.name}
                      </h4>
                    </div>

                    {/* Skills Tags */}
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((skill, i) => (
                        <span
                          key={skill}
                          className={`px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-gray-300 
                            transition-all duration-300 
                            ${
                              activeSkill === index
                                ? "bg-white/10 border-white/30 text-white scale-105"
                                : ""
                            }
                            hover:bg-white/15 hover:border-white/40 hover:text-white`}
                          style={{
                            transitionDelay:
                              activeSkill === index ? `${i * 50}ms` : "0ms",
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-x {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes float-slow {
          0%,
          100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(30px, 30px);
          }
        }

        @keyframes float-slower {
          0%,
          100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(-30px, -30px);
          }
        }

        .animate-gradient-x {
          animation: gradient-x 8s ease infinite;
        }

        .animate-float-slow {
          animation: float-slow 20s ease-in-out infinite;
        }

        .animate-float-slower {
          animation: float-slower 25s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

