'use client';

import {useEffect, useRef, useState} from 'react';

const Door = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setOpen(true);
          observer.disconnect();
        }
      },
      {threshold: 0.6}
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`door${open ? ' open' : ''}`} aria-hidden="true">
      <div className="door__frame">
        <div className="door__room" />
        <div className="door__leaf" />
      </div>
      <div className="door__mat" />
    </div>
  );
};

export default Door;
