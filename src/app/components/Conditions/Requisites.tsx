'use client';

import {useEffect, useRef, useState} from 'react';
import {fopItems} from './utils';

const HINT = 'Натисніть на реквізит, щоб скопіювати';

const Requisites = () => {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      return;
    }
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 1400);
  };

  return (
    <div className="pay">
      {fopItems.map(({name, text}) => (
        <div key={name}>
          <b>{name}:</b>
          <button type="button" className="pay__value" title="Скопіювати" onClick={() => copy(text)}>
            {text}
          </button>
        </div>
      ))}
      <em aria-live="polite">{copied ? 'Скопійовано ✓' : HINT}</em>
    </div>
  );
};

export default Requisites;
