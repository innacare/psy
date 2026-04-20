'use client';

import {useActiveSection} from './useActiveSection';
import {menuItems} from './utils';

import './style.css';

const Header = () => {
  const active = useActiveSection(menuItems.map(({name}) => name));
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({behavior: 'smooth'});

  return (
    <div className="header">
      <img className="header__logo" src="/psy/images/logo.png" alt="logo" />
      <ul className="header__nav">
        {menuItems.map(({name, text}) => (
          <li key={name} className={active === name ? 'active' : ''} onClick={() => scrollTo(name)}>
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
