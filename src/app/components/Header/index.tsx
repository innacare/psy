'use client';

import {useState, useEffect} from 'react';
import {useActiveSection} from './useActiveSection';
import {menuItems} from './utils';

import './style.css';

const Header = () => {
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 80);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const active = useActiveSection(menuItems.map(({name}) => name));
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({behavior: 'smooth'});

  return (
    <div className={`header ${visible ? 'show' : ''}`}>
      <div className="logo">LOGO</div>
      <ul className="nav">
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
