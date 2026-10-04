import {LINKS} from 'config/site';

import './style.css';

const MobileCta = () => (
  <div className="mbar">
    <a className="btn" href={LINKS.booking} target="_blank" rel="noreferrer">
      Записатися на консультацію
    </a>
  </div>
);

export default MobileCta;
