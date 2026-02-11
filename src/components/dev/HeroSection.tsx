export default function HeroSection() {
  return (
    <div className="text-center md:text-left flex flex-col justify-between h-full p-[16px] md:p-[40px] ">
      <section className="w-full flex md:flex-row flex-col justify-between items-center">
        <div className=" text-6xl md:text-6xl 2xl:text-9xl leading-[0.9] tracking-tight font-libreCas">
          <p>SONGPON NINWONG</p>
          <p className="mt-[8px] text-3xl md:text-5xl 2xl:text-8xl ">SOFTWARE ENGINEER</p>
        </div>
        <p className="mt-[20px] md:mt-0 max-w-[420px] text-[16px] 2xl:text-[24px] leading-[1.2] text-[#e3e3e3] sm:text-lg">
          I'm a passionate and curious software engineer who enjoys building meaningful systems, writing clean code, and
          collaborating with others to create reliable solutions that make a positive impact.
        </p>
      </section>

      <img src="/portfolio/dev/Portrait.jpg" alt="Portrait of developer" className="md:h-[80%] w-full md:w-fit" />
    </div>
  );
}
