const ProjectsSection = () => {
  return (
    <section className="prose dark:prose-invert max-w-none">
      <h2>Coffee Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-amber-900 p-6 rounded-lg shadow-md">
          <h3>Home Roasting Setup</h3>
          <p>Building and optimizing a home coffee roasting station...</p>
        </div>
        <div className="bg-white dark:bg-amber-900 p-6 rounded-lg shadow-md">
          <h3>Coffee Tasting Events</h3>
          <p>Organizing and hosting coffee cupping sessions...</p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection; 