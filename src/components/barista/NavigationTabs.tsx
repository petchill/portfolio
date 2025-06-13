import React from 'react';

interface NavigationTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const NavigationTabs = ({ activeTab, onTabChange }: NavigationTabsProps) => {
  const tabs = ['Profile', 'Flow Bar', 'Latte Arts', 'Contact'];

  return (
    <nav className="bg-[#faf9f3] w-full py-6">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center text-3xl font-semibold">
          <span className="text-[#2b7a78]">J</span>
          <span className="text-black ml-1">Deo.</span>
        </div>
        {/* Navigation Tabs */}
        <div className="flex space-x-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => onTabChange(tab)}
              className={`relative text-lg font-medium transition-colors duration-200 focus:outline-none ${
                activeTab === tab
                  ? 'text-[#2b7a78]'
                  : 'text-[#15343b] hover:text-[#2b7a78]'
              }`}
              style={{ minWidth: '90px' }}
            >
              {activeTab === tab ? (
                <span>
                  <span className="text-[#2b7a78]">(</span>
                  <span className="mx-1 font-semibold">{tab}</span>
                  <span className="text-[#2b7a78]">)</span>
                </span>
              ) : (
                tab
              )}
            </button>
          ))}
        </div>
        {/* Download CV Button */}
        <button
          className="bg-[#2b7a78] text-white font-semibold text-lg px-8 py-4 rounded-md shadow-sm hover:bg-[#226c68] transition-colors duration-200"
        >
          Download CV
        </button>
      </div>
    </nav>
  );
};

export default NavigationTabs; 