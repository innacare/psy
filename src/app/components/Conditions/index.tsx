'use client';

import {useParallaxEmbla} from './useParallaxEmbla';
import './style.css';
import './carousel.css';

// TODO add dimplomas
const images = [
  '/psy/images/test.png',
  '/psy/images/test_2.png',
  '/psy/images/test.png',
  '/psy/images/test_2.png',
  '/psy/images/test.png',
  '/psy/images/test_2.png',
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
            <span>1600 грн</span>
          </div>
          <div className="price__block">
            <div>
              Офлайн консультація
              <div>Тривалість 55 хв, м.Київ</div>
            </div>
            <span>1800 грн</span>
          </div>
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
