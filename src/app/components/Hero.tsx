export function Hero() {
  return (
    <section id="home" className="section home-section">
      <div className="flex flex-col-reverse md:flex-row justify-start items-center px-5 mx-4 md:mx-[30px] mt-[50px]">
        <div className="flex-1 text-center md:text-left md:ml-[100px] mt-8 md:mt-0">
          <h1 className="m-0 text-[2em] md:text-[2.5em] text-[#f4f4f4]">Hi I&apos;m XYRUS DARCEN</h1>
          <p className="text-[1em] md:text-[1.2em] text-[#bebebe]">A FULL-STACK WEB DEVELOPER</p>
        </div>
        <div className="my-[30px] md:my-[50px] mx-auto md:mr-[100px] md:ml-0 flex-shrink-0 rounded-[20px] w-[280px] h-[280px] md:w-[450px] md:h-[450px] overflow-hidden">
          {/* Image placeholder - content right section */}
        </div>
      </div>
    </section>
  )
}

export default Hero