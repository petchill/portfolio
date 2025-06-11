const HeroSection = () => {
  return (
    <section className="relative h-[60vh] flex items-center justify-center bg-cover bg-center" 
             style={{ backgroundImage: 'url("/coffee-hero.jpg")' }}>
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl font-bold mb-4">My Coffee Journey</h1>
        <p className="text-xl">From bean to cup, exploring the art of coffee</p>
      </div>
    </section>
  );
};

export default HeroSection; 