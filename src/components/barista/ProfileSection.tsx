const ProfileSection = () => {
  return (
    <section className="min-h-screen md:h-screen flex flex-col justify-center items-center gap-8">
      <div>
        <h2 className="text-4xl font-bold text-center font-[BubblegumSans]">Hi I'am</h2>
        <h1 className="text-4xl font-bold text-center text-yellow-500">Petch</h1>
      </div>
      <div className="relative md:w-[40%] flex items-end justify-end">
        <div
          className="absolute bottom-[-7px] rounded-b-full w-[65%] left-1/2 -translate-x-1/2 h-1/2 z-40 border-b-6 border-yellow-400"
        />
        <div className="bg-white rounded-full w-[65%] left-1/2 -translate-x-1/2 absolute z-10 bottom-[-7px]" style={{ aspectRatio: 1 }}></div>
        <div className="relative flex justify-center items-end rounded-b-full overflow-hidden">
          <img
            src="/portfolio/barista/profile.png"
            alt="My Profile pic"
            className="relative z-20 w-1/2 h-1/2 object-contain"
          />
        </div>
      </div>
      <p className="text-center text-xl md:text-2xl px-[4px] mt-[24px] font-semi-bold text-[#2b7a78]">
        A passionate barista with a love for crafting the perfect cup of coffee.
      </p>

      {/* <h2>My Coffee Journey</h2>
      <p>
        My passion for coffee began when I first experienced the perfect pour-over.
        Since then, I've dedicated myself to mastering the art of coffee making,
        from understanding bean origins to perfecting latte art.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div className="bg-white dark:bg-amber-900 p-6 rounded-lg shadow-md">
          <h3>Skills & Expertise</h3>
          <ul>
            <li>Espresso preparation</li>
            <li>Latte art</li>
            <li>Pour-over brewing</li>
            <li>Bean selection and roasting</li>
          </ul>
        </div>
        <div className="bg-white dark:bg-amber-900 p-6 rounded-lg shadow-md">
          <h3>Certifications</h3>
          <ul>
            <li>SCA Barista Skills Foundation</li>
            <li>SCA Brewing Foundation</li>
            <li>Latte Art Workshop Certification</li>
          </ul>
        </div>
      </div> */}
    </section>
  );
};

export default ProfileSection; 