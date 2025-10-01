import React from "react";

function Navigation() {
  return (
    <div className="flex justify-center">
      <nav
        className="flex justify-between items-center bg-gray-800/50 rounded-[20px] 
      backdrop-blur-[5px] px-5 mt-5 w-[800px] max-w-[90vw]"
      >
        <a href="#home" className="text-white no-underline text-2xl font-bold">
          XRD
        </a>
        <ul className="list-none m-0 p-0 flex gap-5">
          <li>
            <a
              href="#home"
              className="text-white no-underline py-[14px] px-5 block hover:bg-gradient-to-r hover:from-[#FF512F] hover:to-[#F09819] hover:rounded-[10px] transition-all"
            >
              HOME
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-white no-underline py-[14px] px-5 block hover:bg-gradient-to-r hover:from-[#FF512F] hover:to-[#F09819] hover:rounded-[10px] transition-all"
            >
              ABOUT
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-white no-underline py-[14px] px-5 block hover:bg-gradient-to-r hover:from-[#FF512F] hover:to-[#F09819] hover:rounded-[10px] transition-all"
            >
              PROJECTS
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-white no-underline py-[14px] px-5 block hover:bg-gradient-to-r hover:from-[#FF512F] hover:to-[#F09819] hover:rounded-[10px] transition-all"
            >
              CONTACT
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
