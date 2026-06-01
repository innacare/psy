'use client';

import {useState} from 'react';

import './accordion.css';

type AccordionItem = {
  title: string;
  text: string;
};

interface Props {
  items: AccordionItem[];
  accordion?: boolean;
}

const Accordion = ({items, accordion = true}: Props) => {
  const [opened, setOpened] = useState<number[]>([]);

  const handleToggle = (index: number) => {
    if (accordion) {
      setOpened((prev) => (prev.includes(index) ? [] : [index]));
      return;
    }

    setOpened((prev) => (prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]));
  };

  return (
    <div className="accordion">
      {items.map(({title, text}, index) => {
        const isOpen = opened.includes(index);

        return (
          <div key={title} className={`accordion__item ${isOpen ? 'accordion__item--active' : ''}`}>
            <button className="accordion__header" onClick={() => handleToggle(index)}>
              <span>{title}</span>
              <span className={`accordion__icon ${isOpen ? 'accordion__icon--active' : ''}`}>+</span>
            </button>

            <div className={`accordion__content ${isOpen ? 'accordion__content--open' : ''}`}>
              <div className="accordion__body">{text}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
