'use client';

import {useParallaxEmbla} from './useParallaxEmbla';
import './style.css';
import './carousel.css';
import {fopItems} from './utils';

// TODO add dimplomas
const images = [
  '/psy/images/certificate_0.webp',
  '/psy/images/certificate_1.webp',
  '/psy/images/certificate_2.webp',
  '/psy/images/certificate_3.webp',
  '/psy/images/certificate_4.webp',
  '/psy/images/certificate_5.webp',
  '/psy/images/certificate_6.webp',
  '/psy/images/certificate_7.webp',
  '/psy/images/certificate_8.webp',
  '/psy/images/certificate_9.webp',
  '/psy/images/certificate_10.webp',
  '/psy/images/certificate_11.webp',
  '/psy/images/certificate_12.webp',
];

const Conditions = () => {
  const {emblaRef, selectedIndex, scrollSnaps, scrollTo} = useParallaxEmbla();

  return (
    <div id="conditions">
      <div className="conditions__directions">
        <img src="/psy/images/arrows.png" alt="arrows" />
        Умови та сертифікація
      </div>
      <div className="conditions__content">
        <div className="conditions__price">
          <div className="conditions__header">Вартість</div>
          <div className="price__block">
            <div>
              Онлайн консультація
              <div>Тривалість 55 хв</div>
            </div>
            <span>1200 грн</span>
          </div>
          <div className="price__block">
            <div>
              Офлайн консультація
              <div>Тривалість 55 хв, м.Київ, вул. Бориса Грінченка, 2, оф.№2</div>
            </div>
            <span>1500 грн</span>
          </div>

          <div className="price__payment">
            <img src="/psy/images/payment.png" alt="payment" />
            {/* TODO add token link for payment */}
            <a href="https://next.privat24.ua/payments/dashboard">
              Сплатити онлайн
            </a>
          </div>

          {fopItems.map(({name, text}) => (
            <div key={name} className="price__payment___item">
              <b>{name}:</b>
              <span
                onClick={() => navigator.clipboard.writeText(text)}
                title="Натисніть, щоб скопіювати"
              >
                {text}
              </span>
            </div>
          ))}
        </div>
        <div className="conditions__certificates">
          <div className="conditions__header">Освіта</div>

          <div className="embla" ref={emblaRef}>
            <div className="embla__container">
              {images.map((src, i) => (
                <div className="embla__slide" key={i}>
                  <div className="parallax">
                    <div className="parallax__layer">
                      <img src={src} alt={`slide-${i}`} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="embla__dots">
            {scrollSnaps.map((_, i) => (
              <button
                key={i}
                className={`embla__dot ${i === selectedIndex ? 'is-active' : ''}`}
                onClick={() => scrollTo(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conditions;
