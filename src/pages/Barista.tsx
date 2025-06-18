import NavigationTabs from '../components/barista/NavigationTabs';
import ProfileSection from '../components/barista/ProfileSection';
import LatteArtSection from '../components/barista/LatteArtSection';
import FlowBarSection from '../components/barista/FlowBarSection';
import ContactSection from '../components/barista/ContactSection';

const Barista = () => {
  const jumpToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F8F7F1] dark:bg-amber-950">
      <NavigationTabs jumpToSection={jumpToSection} />

      <main className="mx-auto">
        <section id='journey' className='px-4'>
          <ProfileSection />
        </section>
        <section id="latte-art" className='px-4 pt-[92px] py-[24px] bg-yellow-500'>
          <LatteArtSection />
        </section>
        <section id="flow-bar" className='px-4 pt-[92px] py-[24px]'>
          <FlowBarSection />
        </section>
        <section id="contact" className='px-4 pt-[92px] py-[24px] bg-[#2b7a78]'>
          <ContactSection />
        </section>
      </main>
    </div>
  );
};

export default Barista;
