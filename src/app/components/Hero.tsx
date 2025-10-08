import { TextGenerateEffect } from "@/components/ui/text-generate-effect";


export function Hero() {
  return (
    <section
      id="home"
      className="flex items-center justify-center min-h-screen"
    >
      <div className="flex flex-col items-center text-center max-w-3xl px-5">
        <h1 className="tracking-widest text-4xl md:text-6xl font-bold text-[#f4f4f4] [text-shadow:_0_0_50px_rgba(255,255,255,0.4)] bg-gradient-to-b from-gray-400 to-white bg-clip-text text-transparent">
          XYRUS DARCEN
        </h1>

        <div className="[&_*]:text-[#bebebe] [&_*]:text-xl [&_*]:md:text-2xl [&_*]:tracking-widest ">
          <TextGenerateEffect words="FULL-STACK WEB DEVELOPER" duration={2} />
        </div>
        {/* <p className="text-xl md:text-2xl text-[#bebebe] tracking-wider">
          FULL-STACK WEB DEVELOPER
        </p> */}
      </div>
    </section>
  );
}

export default Hero;
