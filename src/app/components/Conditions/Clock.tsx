'use client';

import {useEffect, useState} from 'react';

const round = (n: number) => Math.round(n * 100) / 100;

const TICKS = Array.from({length: 12}, (_, i) => {
  const a = (i * Math.PI) / 6;
  return {
    x1: round(120 + Math.sin(a) * 80),
    y1: round(120 - Math.cos(a) * 80),
    x2: round(120 + Math.sin(a) * 90),
    y2: round(120 - Math.cos(a) * 90),
  };
});

const getAngles = () => {
  const d = new Date();
  const m = d.getMinutes() + d.getSeconds() / 60;
  const h = (d.getHours() % 12) + m / 60;
  return {hour: h * 30, minute: m * 6};
};

const Clock = () => {
  const [angles, setAngles] = useState({hour: 300, minute: 0});

  useEffect(() => {
    setAngles(getAngles());
    const timer = setInterval(() => setAngles(getAngles()), 20000);
    return () => clearInterval(timer);
  }, []);

  return (
    <svg viewBox="0 0 240 240" aria-hidden="true">
      <circle cx="120" cy="120" r="112" fill="#c9bdf0" />
      <circle cx="120" cy="120" r="102" fill="#fff" />
      <circle cx="120" cy="120" r="88" fill="none" stroke="#f3e7f7" strokeWidth="10" />
      <circle
        cx="120"
        cy="120"
        r="88"
        fill="none"
        stroke="#d3ebe0"
        strokeWidth="10"
        strokeLinecap="round"
        strokeDasharray="506.8 552.9"
        transform="rotate(-90 120 120)"
      />
      <g stroke="#6f5bd1" strokeWidth="3" strokeLinecap="round">
        {TICKS.map((t, i) => (
          <line key={i} {...t} />
        ))}
      </g>
      <line
        x1="120"
        y1="120"
        x2="120"
        y2="82"
        stroke="#2e3552"
        strokeWidth="7"
        strokeLinecap="round"
        transform={`rotate(${angles.hour} 120 120)`}
      />
      <line
        x1="120"
        y1="120"
        x2="120"
        y2="58"
        stroke="#2e3552"
        strokeWidth="5"
        strokeLinecap="round"
        transform={`rotate(${angles.minute} 120 120)`}
      />
      <circle cx="120" cy="120" r="7" fill="#ee7b63" />
    </svg>
  );
};

export default Clock;
