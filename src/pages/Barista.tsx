import { useState } from 'react';
import NavigationTabs from '../components/barista/NavigationTabs';
import ProfileSection from '../components/barista/ProfileSection';
import LatteArtSection from '../components/barista/LatteArtSection';

const Barista = () => {
  const [activeTab, setActiveTab] = useState('journey');

  return (
    <div className="min-h-screen w-screen flex flex-col items-center justify-center bg-[#F8F7F1] dark:bg-amber-950">
      <NavigationTabs activeTab={activeTab} onTabChange={setActiveTab} />

      <main className="max-w-7xl mx-auto px-4">
        <section id='journey'>
          <ProfileSection />
        </section>
        <section id="letter-art">
          <LatteArtSection />
        </section>
        <section id="flow-bar">
        </section>
        <section id="contact">
        </section>
      </main>
    </div>
  );
};

export default Barista;
