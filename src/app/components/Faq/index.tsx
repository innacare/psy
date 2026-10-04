import {faqItems} from './utils';

import './style.css';

const Faq = () => (
  <section id="faq" aria-labelledby="faq-title">
    <div className="wrap">
      <div className="center">
        <div className="pill">FAQ</div>
        <h2 id="faq-title">Часті питання та відповіді</h2>
      </div>
      <div className="faq">
        {faqItems.map(({question, answer}, i) => (
          <details key={question} open={i === 0}>
            <summary>
              <h3>{question}</h3>
            </summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
      <aside className="support">
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path d="M16 27S5 20 5 12.5A5.5 5.5 0 0116 9a5.5 5.5 0 0111 3.5C27 20 16 27 16 27z" />
          <path d="M11 15h3l1.5-3 2 6 1.5-3h2" />
        </svg>
        <div>
          <b>Якщо вам потрібна допомога просто зараз</b>
          <p>
            Консультація не замінює невідкладну допомогу. У кризовій ситуації зверніться на лінію підтримки Lifeline
            Ukraine:
            <a href="tel:7333" className="support__tel">
              7333
            </a>
            (безкоштовно) або за номером 112.
          </p>
        </div>
      </aside>
    </div>
  </section>
);

export default Faq;
