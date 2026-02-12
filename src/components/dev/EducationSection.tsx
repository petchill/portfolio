export default function EducationSection() {
  return (
    <div
      className="relative text-center md:text-left flex flex-col justify-between h-full px-[16px] pt-[40px] md:p-[40px] 2xl:p-[60px] bg-fixed bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/portfolio/dev/Chula.jpeg')",
      }}
    >
      <h1 className="text-5xl md:text-6xl 2xl:text-8xl leading-[0.9] tracking-tight font-libreCas">EDUCATION</h1>
      <div className="px-[16px] md:px-[40px] 2xl:px-[60px] text-right right-0 absolute top-1/2 transform -translate-y-1/2">
        <h1 className="text-5xl">Bachelor of Science</h1>
        <h2 className="text-3xl">Major Computer Science</h2>
        <h1 className="text-5xl">Chulalongkorn University</h1>
        <h2 className="text-xl">August 2017 - May 2021</h2>
      </div>
    </div>
  );
}
