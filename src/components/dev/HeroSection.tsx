export default function HeroSection() {
  return (
    <div className="text-center md:text-left flex flex-col justify-between h-full px-[16px] pt-[40px] md:p-[40px] 2xl:p-[60px]">
      <section className="w-full flex md:flex-row flex-col justify-between items-center gap-[20px] 2xl:gap-[60px]">
        <div className="leading-[0.9] tracking-tight font-libreCas">
          <p className="text-5xl md:text-6xl 2xl:text-8xl ">SONGPON NINWONG</p>
          <p className="mt-[8px] text-3xl md:text-5xl 2xl:text-7xl ">SOFTWARE ENGINEER</p>
        </div>
        <p className="flex-1 w-full mt-[20px] md:mt-0 max-w-[420px] 2xl:max-w-[600px] text-[16px] 2xl:text-[24px] leading-[1.2] text-[#e3e3e3] sm:text-lg">
          I'm a passionate and curious software engineer who enjoys building meaningful systems, writing clean code, and
          collaborating with others to create reliable solutions that make a positive impact.
        </p>
      </section>

      <img
        src="/portfolio/dev/Portrait.jpg"
        alt="Portrait of developer"
        className="md:h-[80%] 2xl:h-[70%] w-full md:w-fit"
      />
    </div>
  );
}
