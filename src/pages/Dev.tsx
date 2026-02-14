import { useEffect, useState } from 'react';
import EducationSection from '../components/dev/EducationSection';
import HeroSection from '../components/dev/HeroSection';
import ExperienceSection from '../components/dev/ExperienceSection';
import ProjectSection from '../components/dev/ProjectSection';
import BlogSection from '../components/dev/BlogSection';
import FooterSection from '../components/dev/FooterSection';

const links = [
  { label: 'About Me', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Project', href: '#project' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

const Dev = () => {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const sectionIds = links.map((item) => item.href.replace('#', ''));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visibleEntries.length > 0) {
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        root: null,
        threshold: [0.1],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  const jumpToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      setActiveSection(sectionId);
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen w-screen font-inter bg-[#1f2024] text-white">
      <main className="relative w-full max-w-[2048px] m-auto">
        <section id="about" className="h-screen">
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
        <section id="blog">
          <BlogSection />
        </section>
        <section id="contact">
          <FooterSection />
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
                  {activeSection === item.href.replace('#', '') ? '— ' : '- '}
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
