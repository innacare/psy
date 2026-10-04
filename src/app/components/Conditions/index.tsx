import {LINKS, PRICE} from 'config/site';
import Clock from './Clock';
import Requisites from './Requisites';
import Certificates from './Certificates';

import './style.css';

const Conditions = () => (
  <section id="conditions" aria-labelledby="conditions-title">
    <div className="wrap">
      <div className="center">
        <div className="pill">Умови та сертифікація</div>
        <h2 id="conditions-title">Вартість та освіта</h2>
      </div>
      <div className="price-grid">
        <div className="clockbox">
          <Clock />
          <p>одна сесія, {PRICE.minutes} хвилин тільки для вас</p>
        </div>
        <div className="appt">
          <div className="l">Вартість</div>
          <h3>Онлайн консультація</h3>
          <div className="dur">Тривалість {PRICE.minutes} хв</div>
          <div className="sum">
            {PRICE.amount}
            <span>грн</span>
          </div>
          <a className="btn" href={LINKS.payment} target="_blank" rel="noreferrer">
            Сплатити онлайн
          </a>
          <Requisites />
        </div>
      </div>
      <div className="wall">
        <h3>Освіта</h3>
        <p className="lead">Дипломи та сертифікати. Натисніть, щоб збільшити.</p>
        <Certificates />
      </div>
    </div>
  </section>
);

export default Conditions;
