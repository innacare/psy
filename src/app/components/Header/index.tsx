import Image from 'next/image';
import {LINKS, PERSON_NAME, withBase} from 'config/site';
import {menuItems} from './utils';

import './style.css';

const Header = () => (
  <header className="header">
    <div className="wrap header__nav">
      <a href="#top" className="brand" aria-label={`${PERSON_NAME} — на початок сторінки`}>
        <Image src={withBase('/images/logo.webp')} alt="" width={36} height={38} priority />
        {PERSON_NAME}
      </a>
      <nav aria-label="Основна навігація">
        <ul className="menu">
          {menuItems.map(({id, text}) => (
            <li key={id}>
              <a href={`#${id}`}>{text}</a>
            </li>
          ))}
        </ul>
      </nav>
      <a className="btn header__cta" href={LINKS.booking} target="_blank" rel="noreferrer">
        Записатися
      </a>
    </div>
  </header>
);

export default Header;
