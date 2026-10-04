import Image from 'next/image';
import {LINKS, withBase} from 'config/site';

import './style.css';

const messengers = [
  {name: 'Telegram', icon: '/images/telegram.svg'},
  {name: 'Google Meet', icon: '/images/gm.svg'},
  {name: 'Zoom', icon: '/images/zoom.svg'},
  {name: 'Viber', icon: '/images/viber.svg'},
];

const About = () => (
  <section className="hero" id="about">
    <svg className="blob" style={{left: -120, top: 40, width: 420}} viewBox="0 0 200 200" aria-hidden="true">
      <path
        fill="#f3e7f7"
        d="M45 -60C58 -48 68 -33 73 -16C79 1 80 20 70 33C61 46 41 53 22 61C3 69 -15 78 -33 73C-52 68 -70 49 -76 29C-82 8 -75 -15 -64 -35C-52 -55 -36 -72 -17 -76C2 -80 31 -72 45 -60Z"
        transform="translate(100 100)"
      />
    </svg>
    <div className="wrap hero__grid">
      <div>
        <div className="pill">🌿 Магістр клінічної психології</div>
        <h1>
          Психологічна допомога у <mark>доказовому</mark> підході (КПТ)
        </h1>
        <p className="lead">
          Працюю з тривогою, депресивними станами та вигоранням. Допомагаю знайти внутрішній ресурс та навчитися керувати
          своїм життям за допомогою науково підтверджених методів.
        </p>
        <div className="hero__cta">
          <a className="btn" href={LINKS.booking} target="_blank" rel="noreferrer">
            Записатися на консультацію
          </a>
          <a className="btn btn--soft" href="#checkin">
            Що мене хвилює?
          </a>
        </div>
        <div className="facts">
          <div className="fact">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3 2" />
            </svg>
            Сесія 50 хв
          </div>
          <div className="fact">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3" y="5" width="18" height="12" rx="3" />
              <path d="M8 21h8M12 17v4" />
            </svg>
            Онлайн
          </div>
          <div className="fact">
            {messengers.map(({name, icon}) => (
              <Image key={name} src={withBase(icon)} alt={name} width={22} height={22} />
            ))}
          </div>
        </div>
      </div>
      <div className="hero__ph">
        <div className="shape" />
        <span className="dot" style={{width: 46, height: 46, background: 'var(--butter)', right: '6%', top: '2%'}} />
        <span className="dot" style={{width: 26, height: 26, background: 'var(--sky)', left: '4%', bottom: '12%'}} />
        <Image
          src={withBase('/images/about.webp')}
          alt="Інна Ларіна, психолог"
          width={900}
          height={987}
          sizes="(max-width: 760px) 340px, 480px"
          priority
        />
        <div className="bubble bubble--a">Ви не самі 💜</div>
        <div className="bubble bubble--b">Без осуду та поспіху</div>
      </div>
    </div>
  </section>
);

export default About;
