import Accordion from './components/Accordion';
import {accordionItems} from './utils';

import './style.css';

const Faq = () => {
  return (
    <>
      <div id="faq">
        <div className="faq__directions">
          <img src="/psy/images/arrows.png" alt="arrows" />
          Часті питання та відповіді
        </div>
        <Accordion items={accordionItems} />
      </div>
    </>
  );
};

export default Faq;
