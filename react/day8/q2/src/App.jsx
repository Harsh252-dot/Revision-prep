import { useEffect, useRef, useState } from 'react';

export default function App() {
  const sectionsRef = useRef({});
  const activeSectionRef = useRef(null); // no re-render trigger
  const [active, setActive] = useState('about');

  const sections = ['about', 'services', 'portfolio', 'contact'];

  const scrollToSection = (section) => {
    sectionsRef.current[section].scrollIntoView({
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = activeSectionRef.current;

      for (const section of sections) {
        const el = sectionsRef.current[section];
        const rect = el.getBoundingClientRect();

        if (rect.top <= 150 && rect.bottom >= 150) {
          currentSection = section;
        }
      }

      // Update state ONLY when section changes
      if (currentSection && currentSection !== active) {
        activeSectionRef.current = currentSection;
        setActive(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [active]);

  return (
    <>
      <nav>
        {sections.map((section) => (
          <button
            key={section}
            onClick={() => scrollToSection(section)}
            className={active === section ? 'active' : ''}
          >
            {section.toUpperCase()}
          </button>
        ))}
      </nav>

      {sections.map((section) => (
        <section
          key={section}
          ref={(el) => (sectionsRef.current[section] = el)}
          className={section}
        >
          {section.toUpperCase()}
        </section>
      ))}
    </>
  );
}
