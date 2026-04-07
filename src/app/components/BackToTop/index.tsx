'use client';

import {useState, useEffect} from 'react';
import './style.css';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener('scroll', () => setIsVisible(window.scrollY > 100), {passive: true});

    return () => {
      window.removeEventListener('scroll', () => setIsVisible(window.scrollY > 100));
    };
  }, []);

  return (
    isVisible && (
      <button
        className="back-btn"
        onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
        aria-label="Back to top"
      >
        <img src="/psy/images/arrow.svg" alt="back to top" />
      </button>
    )
  );
};

export default BackToTop;
