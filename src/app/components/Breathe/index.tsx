'use client';

import {useEffect, useState} from 'react';

import './style.css';

const PHASES = [
  {cls: 'in', label: 'Вдих'},
  {cls: 'hold', label: 'Затримка'},
  {cls: 'out', label: 'Видих'},
  {cls: 'rest', label: 'Пауза'},
];

const IDLE_HINT = 'Сядьте зручно та розслабте плечі';

const Breathe = () => {
  const [step, setStep] = useState<number | null>(null);

  useEffect(() => {
    if (step === null) return;
    const timer = setTimeout(() => setStep((s) => (s === null ? s : s + 1)), 4000);
    return () => clearTimeout(timer);
  }, [step]);

  const phase = step === null ? null : PHASES[step % PHASES.length];

  return (
    <section className="breathe" id="breathe" aria-labelledby="breathe-title">
      <div className="wrap">
        <div className="pill">Хвилина для себе</div>
        <h2 id="breathe-title">Спробуйте дихання «квадрат»</h2>
        <p className="lead" style={{margin: '0 auto'}}>
          Вдих, пауза, видих, пауза: по 4 секунди. Допомагає заспокоїти нервову систему, коли тривожно.
        </p>
        <div className="orb-wrap">
          <div className={`orb ${phase?.cls ?? ''}`} />
          <div className="breathe__label" aria-live="polite">
            {phase?.label ?? 'Готові?'}
          </div>
        </div>
        <div className="breathe__hint">{phase ? 'Рахуйте до 4' : IDLE_HINT}</div>
        <button type="button" className="btn" onClick={() => setStep((s) => (s === null ? 0 : null))}>
          {step === null ? 'Почати' : 'Зупинити'}
        </button>
      </div>
    </section>
  );
};

export default Breathe;
