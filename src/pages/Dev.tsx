import HeroSection from '../components/dev/HeroSection';

const links = [
  { label: 'About Me', href: '#about', prefix: '— ' },
  { label: 'Projects', href: '#projects', prefix: '- ' },
  { label: 'Contact', href: '#contact', prefix: '- ' },
  { label: 'Blog ↗', href: 'https://example.com', prefix: '' },
];

const Dev = () => {
  return (
    <div className="min-h-screen w-screen font-inter bg-[#1f2024] text-white">
      <main className="relative w-full max-w-[2048px] m-auto">
        <section className="h-screen">
          <HeroSection />
        </section>
        <nav className="hidden md:block mt-10 text-right text-[#dddddd] md:fixed md:bottom-8 md:right-9 md:mt-0 md:text-[24px]">
          <ul>
            {links.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="transition-opacity hover:opacity-80 text-white!">
                  {item.prefix}
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </main>
    </div>
  );
};

export default Dev;
