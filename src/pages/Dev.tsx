import EducationSection from '../components/dev/EducationSection';
import HeroSection from '../components/dev/HeroSection';
import ExperienceSection from '../components/dev/ExperienceSection';
import ProjectSection from '../components/dev/ProjectSection';

const links = [
  { label: 'About Me', href: '#about', prefix: '— ' },
  { label: 'Education', href: '#education', prefix: '- ' },
  { label: 'Contact', href: '#contact', prefix: '- ' },
  { label: 'Blog ↗', href: 'https://example.com', prefix: '' },
];

const Dev = () => {
  const jumpToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen w-screen font-inter bg-[#1f2024] text-white">
      <main className="relative w-full max-w-[2048px] m-auto">
        <section className="h-screen">
          <HeroSection />
        </section>
        <section id="education" className="h-screen">
          <EducationSection />
        </section>
        <section id="experience">
          <ExperienceSection />
        </section>
        <section id="project">
          <ProjectSection />
        </section>
        <nav className="hidden md:block mt-10 text-right text-[#dddddd] md:fixed md:bottom-8 md:right-9 2xl:right-[60px] md:mt-0 md:text-[24px] z-50">
          <ul>
            {links.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={(event) => {
                    if (item.href.startsWith('#')) {
                      event.preventDefault();
                      jumpToSection(item.href.replace('#', ''));
                    }
                  }}
                  className="transition-opacity hover:opacity-80 text-white! font-normal!"
                >
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
