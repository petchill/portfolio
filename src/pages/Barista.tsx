import { useState } from 'react';
import NavigationTabs from '../components/barista/NavigationTabs';
import ProfileSection from '../components/barista/ProfileSection';
import LatteArtSection from '../components/barista/LatteArtSection';
import FlowBarSection from '../components/barista/FlowBarSection';

const Barista = () => {
  const [activeTab, setActiveTab] = useState('journey');

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F8F7F1] dark:bg-amber-950">
      <NavigationTabs activeTab={activeTab} onTabChange={setActiveTab} />

      <main className="mx-auto">
        <section id='journey' className='px-4'>
          <ProfileSection />
        </section>
        <section id="letter-art" className='px-4 py-[24px] bg-yellow-500'>
          <LatteArtSection />
        </section>
        <section id="flow-bar" className='px-4 py-[24px]'>
          <FlowBarSection />
        </section>
        <section id="contact">
        </section>
      </main>
    </div>
  );
};

export default Barista;
