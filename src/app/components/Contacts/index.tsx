import Image from 'next/image';
import {LINKS, withBase} from 'config/site';

import './style.css';

const Contacts = () => (
  <footer className="footer" id="contacts">
    <div className="wrap foot">
      <div className="foot__soc">
        <a href={LINKS.instagram} target="_blank" rel="noreferrer me" aria-label="Instagram">
          <Image src={withBase('/images/instagram_vector.svg')} alt="" width={22} height={22} />
        </a>
        <a href={LINKS.telegram} target="_blank" rel="noreferrer me" aria-label="Telegram">
          <Image src={withBase('/images/telegram_vector.svg')} alt="" width={22} height={22} />
        </a>
      </div>
      <div>© 2026 Inna Larina. All rights reserved</div>
      <a href={`tel:${LINKS.phone}`} className="foot__tel">
        {LINKS.phone}
      </a>
    </div>
  </footer>
);

export default Contacts;
