import {Fragment} from 'react';
import Image from 'next/image';
import {LINKS, withBase} from 'config/site';
import {scopeItems} from './utils';

import './style.css';

const Scope = () => (
  <section id="scope" aria-labelledby="scope-title">
    <div className="wrap">
      <div className="center">
        <div className="pill">Моя експертність та напрямки</div>
        <h2 id="scope-title">З чим я допомагаю впоратися</h2>
        <p className="lead">Кожна тема це окрема «книга», яку ми можемо відкрити разом.</p>
      </div>
      <ul className="shelf">
        {scopeItems.map(({text, details, icon}, i) => (
          <Fragment key={text}>
            <li className="book">
              <div className="ic">
                <Image src={withBase(icon)} alt="" width={64} height={64} loading="lazy" />
              </div>
              <h3>{text}</h3>
              <p>{details}</p>
            </li>
            {(i + 1) % 4 === 0 && <li className="row-board" aria-hidden="true" />}
          </Fragment>
        ))}
      </ul>
      <div className="center">
        <a className="btn" href={LINKS.booking} target="_blank" rel="noreferrer">
          Почати роботу
        </a>
      </div>
    </div>
  </section>
);

export default Scope;
