import { useState } from 'react';

interface NavItem {
  label: string;
  href: string;
}

interface NavMobileProps {
  links: NavItem[];
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export default function NavMobile({ links, activeSection, onNavigate }: NavMobileProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed flex flex-col items-end top-4 right-4 z-[60] md:hidden">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex flex-col gap-[6px]"
        aria-expanded={isOpen}
        aria-label="Toggle navigation menu"
      >
        <div className="w-[32px] h-[6px] bg-white" />
        <div className="w-[32px] h-[6px] bg-white" />
        <div className="w-[32px] h-[6px] bg-white" />
      </button>

      {isOpen && (
        <nav className="mt-1 w-[130px] rounded-md border border-white/25 bg-black/85 p-3 shadow-xl">
          <ul className="space-y-1 text-right text-base">
            {links.map((item) => (
              <li key={`mobile-${item.label}`}>
                <a
                  href={item.href}
                  onClick={(event) => {
                    if (item.href.startsWith('#')) {
                      event.preventDefault();
                      onNavigate(item.href.replace('#', ''));
                      setIsOpen(false);
                    }
                  }}
                  className="block py-1 text-white! font-normal! transition-opacity hover:opacity-80"
                >
                  {activeSection === item.href.replace('#', '') ? '— ' : '- '}
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
