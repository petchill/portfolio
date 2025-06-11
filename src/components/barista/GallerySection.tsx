const GallerySection = () => {
  return (
    <section className="prose dark:prose-invert max-w-none">
      <h2>Coffee Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Gallery images will go here */}
        <div className="aspect-square bg-gray-200 dark:bg-amber-800 rounded-lg"></div>
        <div className="aspect-square bg-gray-200 dark:bg-amber-800 rounded-lg"></div>
        <div className="aspect-square bg-gray-200 dark:bg-amber-800 rounded-lg"></div>
        <div className="aspect-square bg-gray-200 dark:bg-amber-800 rounded-lg"></div>
      </div>
    </section>
  );
};

export default GallerySection; 