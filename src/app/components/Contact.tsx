'use client';
import React, { useState } from "react";
import { socialLinks } from "./data/mockData";

export default function Contact() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);


  const copyEmail = () => {
    navigator.clipboard.writeText("rusdarcen@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section
      id="contact"
      className="relative bg-[rgba(11,11,15,0.97)] py-20 min-h-screen overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[length:40px_40px] [background-image:linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px] animate-float-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] animate-float-slower" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-full mb-6">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm text-purple-300">Available for opportunities</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gray-400 via-white to-gray-400 bg-clip-text text-transparent">
              LET&apos;S CONNECT
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Feel free to reach out for collaborations, opportunities, or just a friendly chat!
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Resume Download Card - New Addition */}
          <div className="bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:border-purple-500/50 transition-all duration-500 group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">My Resume</h3>
              </div>

              <p className="text-gray-400 mb-6 text-sm md:text-base">
                Download my resume to learn more about my experience and qualifications.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/assets/Xyrus_Darcen_Resume.pdf"
                  download
                  className="w-full inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl text-white text-sm sm:text-base font-semibold hover:scale-[1.02] transition-transform duration-300 hover:shadow-xl hover:shadow-purple-500/50"
                >
                  <span>Download Resume</span>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </a>
                <a
                  href="/assets/Xyrus_Darcen_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-black/30 hover:bg-black/50 rounded-xl text-white text-sm sm:text-base font-semibold hover:scale-[1.02] transition-all duration-300 border border-white/10 hover:border-purple-500/50"
                >
                  <span>View Resume</span>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Email Card - Right Side */}
          <div className="bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:border-purple-500/50 transition-all duration-500 group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">Email Me</h3>
              </div>

              <p className="text-gray-400 mb-6 text-sm md:text-base">
                Prefer email? Send me a message and I&apos;ll get back to you as soon as possible.
              </p>

              {/* Email Display */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10 mb-4">
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <svg className="w-5 h-5 text-purple-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
                  </svg>
                  <span className="text-white text-xs sm:text-sm font-mono break-all">rusdarcen@gmail.com</span>
                </div>
                <button
                  onClick={copyEmail}
                  className="w-full sm:w-auto px-3 py-1.5 bg-purple-500/20 hover:bg-purple-500/30 rounded-lg text-purple-300 text-xs transition-colors whitespace-nowrap"
                >
                  {copiedEmail ? "Copied!" : "Copy"}
                </button>
              </div>

              <a
                href="mailto:rusdarcen@gmail.com"
                className="w-full inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl text-white text-sm sm:text-base font-semibold hover:scale-[1.02] transition-transform duration-300 hover:shadow-xl hover:shadow-purple-500/50"
              >
                <span>Send Email</span>
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Social Links - Enhanced Cards */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Find Me On
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredLink(link.name)}
                onMouseLeave={() => setHoveredLink(null)}
                className="group relative"
              >
                {/* Glow Effect */}
                <div 
                  className={`absolute -inset-0.5 bg-gradient-to-r ${link.gradient} rounded-2xl opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-500`}
                />
                
                <div className="relative bg-black/60 backdrop-blur-xl p-6 rounded-2xl border border-white/10 group-hover:border-white/30 transition-all duration-300 h-full">
                  <div className="flex flex-col items-center text-center space-y-3">
                    {/* Icon */}
                    <div className={`w-14 h-14 bg-gradient-to-br ${link.gradient} rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox={link.viewBox}
                        className="w-7 h-7 text-white fill-current"
                      >
                        <path d={link.iconPath} />
                      </svg>
                    </div>

                    {/* Name */}
                    <h4 className="text-lg font-bold text-white">{link.name}</h4>

                    {/* Username */}
                    <p className="text-xs text-gray-400 font-mono">{link.username}</p>

                    {/* Description */}
                    <p className="text-sm text-gray-500">{link.description}</p>

                    {/* Arrow */}
                    <div className={`transition-all duration-300 ${hoveredLink === link.name ? 'translate-x-1 opacity-100' : 'opacity-0'}`}>
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, 30px); }
        }
        
        @keyframes float-slower {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-30px, -30px); }
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