export default function Contact() {
  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/PROREXIMITY",
      viewBox: "0 0 24 24",
      icon: (
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      ),
      hoverColor:
        "hover:shadow-white/20 hover:border-white/30 group-hover:text-white/90",
      borderColor: "border-white/10",
      iconColor: "text-white",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/xyrus-darcen/",
      viewBox: "0 0 24 24",
      icon: (
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      ),
      hoverColor:
        "hover:shadow-[#0A66C2]/30 hover:border-[#0A66C2]/50 group-hover:text-[#0A66C2]",
      borderColor: "border-[#0A66C2]/20",
      iconColor: "text-[#0A66C2]",
    },
    {
      name: "Gmail",
      href: "mailto:xyrusdarcen27@gmail.com",
      viewBox: "0 0 24 24",
      icon: (
        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
      ),
      hoverColor:
        "hover:shadow-[#EA4335]/30 hover:border-[#EA4335]/50 group-hover:text-[#EA4335]",
      borderColor: "border-[#EA4335]/20",
      iconColor: "text-[#EA4335]",
    },
    {
      name: "Discord",
      href: "https://discord.com/users/prorex3786",
      viewBox: "0 0 24 24",
      icon: (
        <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.369-.444.85-.608 1.23a18.566 18.566 0 0 0-5.487 0 12.36 12.36 0 0 0-.617-1.23A.077.077 0 0 0 8.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026 13.83 13.83 0 0 0 1.226-1.963.074.074 0 0 0-.041-.104 13.175 13.175 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38z" />
      ),
      hoverColor:
        "hover:shadow-[#5865F2]/30 hover:border-[#5865F2]/50 group-hover:text-[#5865F2]",
      borderColor: "border-[#5865F2]/20",
      iconColor: "text-[#5865F2]",
    },
  ];

  return (
    <section
      id="contact"
      className="bg-[rgba(11,11,15,0.95)] py-[50px] min-h-screen"
    >
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="text-center mb-10">
          <span className="text-[30px] md:text-[40px] block mb-[10px] text-white">
            CONTACT
          </span>
          <hr className="gradient-hr mx-auto" />
          <span className="text-[16px] md:text-[20px] font-light block mb-[40px] md:mb-[70px] px-4 text-white">
            Get in touch with me for any inquiries or collaboration
            opportunities.
          </span>
        </h2>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-10">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-5 rounded-full backdrop-blur-lg border ${link.borderColor} bg-gradient-to-tr from-black/60 to-black/40 
              shadow-lg hover:shadow-2xl ${link.hoverColor} hover:scale-110 hover:rotate-3 active:scale-95 active:rotate-0 
              transition-all duration-300 ease-out cursor-pointer group relative overflow-hidden`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
              <div className="relative z-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox={link.viewBox}
                  className={`w-7 h-7 ${link.iconColor} fill-current transition-colors duration-300`}
                >
                  {link.icon}
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* Email Contact - Hidden since we have Gmail icon */}
        <div className="text-center mt-16">
          <p className="text-[18px] md:text-[25px] text-white/80">
            Feel free to reach out through any of these platforms!
          </p>
        </div>
      </div>
    </section>
  );
}
