import { useState, useRef, useEffect } from 'react';

interface NavigationTabsProps {
  jumpToSection: (sectionId: string) => void;
}

const NavigationTabs = ({ jumpToSection }: NavigationTabsProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const tabs = ['Profile', 'Latte Arts', 'Flow Bar', 'Contact'];
  const tabDictID = {
    Profile: 'journey',
    'Latte Arts': 'latte-art',
    'Flow Bar': 'flow-bar',
    Contact: 'contact',
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleTabClick = (tab: string) => {
    setIsMenuOpen(false);
    if (jumpToSection) {
      const sectionId = tabDictID[tab as keyof typeof tabDictID];
      if (sectionId) {
        jumpToSection(sectionId);
      }
    }
  };
  return (
    <nav className="bg-[#F8F7F1] w-full py-[8px] fixed left-1/2 z-50 transform -translate-x-1/2 top-0">
      <div className="bg-transparent max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center text-3xl font-semibold">
          <span className="text-[#2b7a78]">P</span>
          <span className="text-black ml-1">ETCH</span>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="p-2 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6 text-[#2b7a78]"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Navigation Tabs - Desktop */}
        <div className="hidden lg:flex space-x-12">
        {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => handleTabClick(tab)}
          className={`relative text-lg font-medium duration-200 text-[#15343b] hover:text-[#2b7a78]`}
          style={{ minWidth: '90px' }}
        >
          {tab}
        </button>
        ))}
      </div>

        {/* Download CV Button - Desktop */}
        {/* <button
        className="hidden lg:block bg-[#2b7a78] text-white font-semibold text-lg px-8 py-4 rounded-md shadow-sm hover:bg-[#226c68] transition-colors duration-200"
      >
        Download CV
      </button> */}

        {/* Mobile Menu Popover */}
        {isMenuOpen && (
          <div
            ref={menuRef}
            className="lg:hidden absolute top-20 right-4 bg-white/50 backdrop-blur-sm rounded-lg py-4 px-6 z-50 min-w-[200px] shadow-lg"
          >
            <div className="flex flex-col space-y-4">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleTabClick(tab)}
                  className={`text-lg font-medium transition-colors duration-200 focus:outline-none text-[#15343b] hover:text-[#2b7a78]`}
                >
                  {
                    tab
                  }
                </button>
              ))}
              <button
                className="bg-[#2b7a78]! text-white font-semibold text-lg px-6 py-3 rounded-md shadow-sm hover:bg-[#226c68] transition-colors duration-200 w-full"
                onClick={() => window.open('https://drive.google.com/file/d/1rkkBlMwFuCHhCOgbTEu_sjkwtP8MC1vq/view?usp=sharing', '_blank')}
              >
                Download Resume
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavigationTabs; 