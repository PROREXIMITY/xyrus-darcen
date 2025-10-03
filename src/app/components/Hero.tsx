export function Hero() {
  return (
    <section id="home" className="section home-section">
      <div className="flex justify-start items-center px-5 mx-[30px] mt-[50px]">
        <div className="flex-1 ml-[100px]">
          <h1 className="m-0 text-[2.5em] text-[#f4f4f4]">Hi I&apos;m XYRUS DARCEN</h1>
          <p className="text-[1.2em] text-[#bebebe]">A FULLSTACK DEVELOPER</p>
          <a
            href="#projects"
            className="inline-block py-[10px] px-5 mt-5 text-[#eeeeee] no-underline rounded-[5px] text-[17px] tracking-[4px] font-bold uppercase relative overflow-hidden z-[1] bg-gradient-to-r from-[#FF512F] to-[#F09819] bg-[length:200%_200%] animate-[gradientFlow_5s_linear_infinite_alternate-reverse] transition-shadow duration-300 shadow-[0_0_5px_#fd6553,0_0_2px_rgba(255,255,255,0.6),0_0_8px_#fd6553] hover:shadow-[0_0_5px_#fd6553,0_0_20px_rgba(255,255,255,0.6),0_0_30px_#fd6553]"
          >
            PROJECTS
          </a>
        </div>
        <div className="my-[50px] mr-[100px] ml-0 flex-shrink-0 rounded-[20px] w-[450px] h-[450px] overflow-hidden">
          {/* Image placeholder - content right section */}
        </div>
      </div>
    </section>
  )
}

export default Hero