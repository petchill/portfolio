const BlogSection = () => {
  return (
    <section className="prose dark:prose-invert max-w-none">
      <h2>Coffee Blog</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-amber-900 p-6 rounded-lg shadow-md">
          <h3>The Art of Pour-Over</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">March 15, 2024</p>
          <p>Exploring the delicate balance of water temperature, grind size, and pour technique...</p>
        </div>
        {/* Add more blog post cards here */}
      </div>
    </section>
  );
};

export default BlogSection; 