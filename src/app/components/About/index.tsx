import './style.css';

const About = () => (
  <div id="about">
    <div className="about__info">
      <div className="about__contacts">
        <a href="https://www.instagram.com/innacare.psy/" target="_blank" rel="noreferrer">
          <img src="/psy/images/instagram_vector.svg" alt="instagram" />
        </a>
        <a href="https://t.me/larinna21" target="_blank" rel="noreferrer">
          <img src="/psy/images/telegram_vector.svg" alt="telegram" />
        </a>
      </div>
      <div className="about__status">
        <img src="/psy/images/arrows.png" alt="arrows" />
        Магістр клінічної психології
      </div>
      <div className="about__header">Психологічна допомога у доказовому підході (КПТ)</div>
      <div className="about__photo__mobile">
        <img src="/psy/images/about.png" alt="about" />
      </div>
      <div className="about__subheader">
        Працюю з тривогою, депресивними станами та вигоранням. Допомагаю знайти внутрішній ресурс та навчитися керувати
        своїм життям за допомогаю науково підтверджених методів.
      </div>
      <div className="about__communications">
        <div className="about__sessions_block">
          <div className="about__sessions">
            <img src="/psy/images/telegram.svg" alt="telegram" />
            <img src="/psy/images/gm.svg" alt="google-meets" />
            <img src="/psy/images/zoom.svg" alt="zoom" />
            <img src="/psy/images/viber.svg" alt="viber" />
          </div>
          <div>Індивідуальні сесії (50 хв)</div>
        </div>
        <button className="about__btn">Записатися на консультацію</button>
      </div>
    </div>
    <div className="about__photo">
      <img src="/psy/images/about.png" alt="about" />
    </div>
  </div>
);

export default About;
