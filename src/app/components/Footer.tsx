"use client";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[rgb(11,11,15)] to-black py-6 mt-auto overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-[length:40px_40px] [background-image:linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col items-center space-y-4">
          {/* Subtle Divider */}
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-500/20 to-transparent" />

          {/* Copyright with gradient underline */}
          <div className="group relative">
            <div className="text-gray-400 text-sm text-center transition-colors duration-300 group-hover:text-white">
              © {new Date().getFullYear()}{" "}
              <span className="font-medium bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent">
                Xyrus Darcen
              </span>
              . All rights reserved.
            </div>
            <div className="absolute -bottom-1 left-1/2 w-0 h-px bg-gradient-to-r from-purple-500/50 via-pink-500/50 to-white/50 group-hover:w-full transition-all duration-500 -translate-x-1/2" />
          </div>
        </div>
      </div>
    </footer>
  );
}
