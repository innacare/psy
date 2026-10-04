'use client';

import {useState} from 'react';
import {LINKS} from 'config/site';
import {checkInItems} from './utils';

import './style.css';

const CheckIn = () => {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (topic: string) =>
    setSelected((prev) => (prev.includes(topic) ? prev.filter((t) => t !== topic) : [...prev, topic]));

  return (
    <section id="checkin" className="checkin-section" aria-labelledby="checkin-title">
      <div className="wrap">
        <div className="checkin">
          <div className="checkin__box">
            <div className="pill">Невеликий чек-ін</div>
            <h2 id="checkin-title">Що вас зараз турбує?</h2>
            <p className="lead" style={{margin: '0 auto'}}>
              Оберіть усе, що відгукується. Це не діагностика, а підказка, з чого можна почати розмову.
            </p>
            <div className="chips" role="group" aria-label="Що вас турбує">
              {checkInItems.map(({phrase, topic}) => (
                <button
                  key={topic}
                  type="button"
                  className="chip"
                  aria-pressed={selected.includes(topic)}
                  onClick={() => toggle(topic)}
                >
                  {phrase}
                </button>
              ))}
            </div>
            <div className="result" aria-live="polite">
              {selected.length === 0 ? (
                <p>Натисніть на фрази вище, і тут з'являться напрямки роботи, які можуть бути вам близькі.</p>
              ) : (
                <>
                  <p>
                    <b>Це може бути про:</b>
                  </p>
                  <ul>
                    {selected.map((topic) => (
                      <li key={topic}>{topic}</li>
                    ))}
                  </ul>
                  <a className="btn" href={LINKS.booking} target="_blank" rel="noreferrer">
                    Обговорити на консультації
                  </a>
                  <small>Це не діагноз, а орієнтир для розмови.</small>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckIn;
