const JourneySection = () => {
  return (
    <section className="prose dark:prose-invert max-w-none">
      <h2>My Coffee Journey</h2>
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
      </div>
    </section>
  );
};

export default JourneySection; 