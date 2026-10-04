import {LINKS} from 'config/site';
import Door from './Door';

import './style.css';

const Final = () => (
  <section className="final" aria-labelledby="final-title">
    <div className="wrap final__grid">
      <div className="final__t">
        <div className="pill">Двері завжди відчинені</div>
        <h2 id="final-title">Зробіть перший крок до змін</h2>
        <p>
          Індивідуальні сесії онлайн, у зручному для вас месенджері. Перший крок завжди найважчий, але ви не залишитесь з
          ним наодинці.
        </p>
        <a className="btn" href={LINKS.booking} target="_blank" rel="noreferrer">
          Записатися на консультацію
        </a>
      </div>
      <Door />
    </div>
  </section>
);

export default Final;
