// import Scrollama from '../experience/Scrollama';

const Experience = () => {
  return (
    <div className="min-h-screen w-screen bg-[#1f2024] text-white">
      <h1 className="text-center md:text-left text-5xl md:text-6xl 2xl:text-8xl leading-[0.9] tracking-tight font-libreCas  pt-[40px] md:p-[40px] 2xl:p-[60px]">
        EXPERIENCE
      </h1>
      <div className="relative w-screen h-screen overflow-hidden flex items-center justify-center px-4 md:justify-between md:px-0 2xl:pr-[60px] md:pr-[40px]">
        <div className="absolute inset-0 h-full w-full overflow-hidden md:relative md:w-[60%]">
          <img
            className="w-full h-full object-cover object-center opacity-15 md:opacity-100"
            src="/portfolio/dev/Finnomena-office.jpg"
            alt="finnomena-office"
          />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#1f2024] to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#1f2024] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-[#1f2024] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-[#1f2024] to-transparent" />
        </div>
        <div className="relative z-10 w-full p-4 md:w-[35%] md:p-0 2xl:w-[30%]">
          <h1 className="text-4xl md:text-5xl font-bold">FINNOMENA </h1>
          <h2 className="text-2xl md:text-3xl">Fullstack Software Engineer</h2>
          <h2 className="text-xl">June 2021 - May 2025</h2>
          <ul className="list-disc mt-[50px]">
            <li>Led flagship project, generating over 50% company revenue 1B THB AUM</li>
            <li>
              Developed and maintained microservices both back-end and front-end with Go, Vue.js, Typescript, MySQL,
              MongoDB
            </li>
            <li>Improved engineering culture through testing, documentation, and clean architecture practices.</li>
            <li>Designed scalable backend systems using DDD, C4, and SOLID principles.</li>
            <li>Owned 6+ microservices with GCP Pub/Sub and CI/CD pipelines.</li>
          </ul>
        </div>
      </div>
      <div className="relative w-screen h-screen overflow-hidden flex items-center justify-center px-4 md:justify-between md:px-0 2xl:pl-[60px] md:pl-[40px]">
        <div className="relative z-10 w-full p-4 md:w-[35%] md:p-0 2xl:w-[30%]">
          <h1 className="text-4xl md:text-5xl font-bold">RABBIT DIGITAL GROUP </h1>
          <h2 className="text-2xl md:text-3xl">Full Stack Developer [Part time]</h2>
          <h2 className="text-xl">March 2021 – May 2021</h2>
          <ul className="list-disc mt-[50px]">
            <li>Developed LINE LIFF, feature of LINE application to render web view in app with React.js </li>
            <li>Created LINE chatbot which manages electrical appliance installation with Node.js and Typescript.</li>
          </ul>
        </div>
        <div className="absolute inset-0 h-full w-full overflow-hidden md:relative md:w-[60%]">
          <img
            className="w-full h-full object-cover object-right opacity-20 md:opacity-100"
            src="/portfolio/dev/Rabbitdigital-office.jpeg"
            alt="Rabbitdigital-office"
          />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#1f2024] to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#1f2024] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-[#1f2024] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-[#1f2024] to-transparent" />
        </div>
      </div>
      <div className="relative w-screen h-screen overflow-hidden flex items-center justify-center px-4 md:justify-between md:px-0 2xl:pr-[60px] md:pr-[40px]">
        <div className="absolute inset-0 h-full w-full overflow-hidden md:relative md:w-[60%]">
          <img
            className="w-full h-full object-cover object-center opacity-20 md:opacity-100"
            src="/portfolio/dev/Boonmelab-office.jpg"
            alt="Boonmelab-office"
          />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#1f2024] to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#1f2024] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-[#1f2024] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-[#1f2024] to-transparent" />
        </div>
        <div className="relative z-10 w-full p-4 md:w-[35%] md:p-0 2xl:w-[30%]">
          <h1 className="text-4xl md:text-5xl font-bold">BOONMEE LAB </h1>
          <h2 className="text-2xl md:text-3xl">Backend Developer [Intern]</h2>
          <h2 className="text-xl">December 2019 - May 2020</h2>
          <ul className="list-disc mt-[50px]">
            <li>Created RESTful API for the chatbot with Node.js and MongoDB</li>
            <li>
              Connected Application with cloud platform eg. GCP Cloud Task, Cloud Run and enhanced features in chatbot
              application.
            </li>
          </ul>
        </div>
      </div>
      <main className="mx-auto w-full max-w-[2048px] py-8">{/* <Scrollama /> */}</main>
    </div>
  );
};

export default Experience;
