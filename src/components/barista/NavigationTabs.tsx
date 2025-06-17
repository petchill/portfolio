import { useState, useRef, useEffect } from 'react';

interface NavigationTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const NavigationTabs = ({ activeTab, onTabChange }: NavigationTabsProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const tabs = ['Profile', 'Flow Bar', 'Latte Arts', 'Contact'];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="bg-transparent w-full max-w-[390px] py-6 fixed left-1/2 z-50 transform -translate-x-1/2 top-0">
      <div className="bg-transparent max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center text-3xl font-semibold">
          <span className="text-[#2b7a78]">P</span>
          <span className="text-black ml-1">ETCH</span>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="p-2"
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
        {/* <div className="hidden lg:flex space-x-12">
        {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`relative text-lg font-medium transition-colors duration-200 focus:outline-none ${activeTab === tab
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
      </div> */}

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
                  onClick={() => {
                    onTabChange(tab);
                    setIsMenuOpen(false);
                  }}
                  className={`text-lg font-medium transition-colors duration-200 focus:outline-none ${activeTab === tab
                    ? 'text-[#2b7a78]'
                    : 'text-[#15343b] hover:text-[#2b7a78]'
                    }`}
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
              <button
                className="bg-[#2b7a78] text-white font-semibold text-lg px-6 py-3 rounded-md shadow-sm hover:bg-[#226c68] transition-colors duration-200 w-full"
              >
                Download CV
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavigationTabs; 