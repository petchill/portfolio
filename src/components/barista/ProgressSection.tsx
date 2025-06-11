const ProgressSection = () => {
  return (
    <section className="prose dark:prose-invert max-w-none">
      <h2>Learning Progress</h2>
      <div className="space-y-6">
        <div className="bg-white dark:bg-amber-900 p-6 rounded-lg shadow-md">
          <h3>Current Focus</h3>
          <ul>
            <li>Advanced latte art techniques</li>
            <li>Cupping and sensory analysis</li>
            <li>Green coffee buying and roasting</li>
          </ul>
        </div>
        <div className="bg-white dark:bg-amber-900 p-6 rounded-lg shadow-md">
          <h3>Goals</h3>
          <ul>
            <li>SCA Barista Skills Professional certification</li>
            <li>Master advanced brewing methods</li>
            <li>Develop signature drink recipes</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProgressSection; 