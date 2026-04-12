import {useEffect, useState} from 'react';

export const useActiveSection = (ids: string[]) => {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections.length > 0) {
          setActive(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: '-40% 0px -50% 0px',
        threshold: [0.1, 0.3, 0.5, 0.7, 1],
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [ids]);

  return active;
};
