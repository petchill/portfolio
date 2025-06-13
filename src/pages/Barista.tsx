import { useState } from 'react';
import NavigationTabs from '../components/barista/NavigationTabs';
import JourneySection from '../components/barista/JourneySection';
import BlogSection from '../components/barista/BlogSection';
import GallerySection from '../components/barista/GallerySection';
import ProjectsSection from '../components/barista/ProjectsSection';
import ProgressSection from '../components/barista/ProgressSection';

const Barista = () => {
  const [activeTab, setActiveTab] = useState('journey');

  return (
    <div className="min-h-screen bg-[#F8F7F1] dark:bg-amber-950">
      <NavigationTabs activeTab={activeTab} onTabChange={setActiveTab} />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        {activeTab === 'journey' && <JourneySection />}
        {activeTab === 'blog' && <BlogSection />}
        {activeTab === 'gallery' && <GallerySection />}
        {activeTab === 'projects' && <ProjectsSection />}
        {activeTab === 'progress' && <ProgressSection />}
      </main>
    </div>
  );
};

export default Barista;
