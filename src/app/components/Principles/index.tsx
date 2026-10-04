import './style.css';

const principles = [
  {
    title: 'Конфіденційність',
    text: 'Усе, що ми обговорюємо, залишається між нами.',
    icon: (
      <>
        <rect x="6" y="14" width="20" height="14" rx="4" />
        <path d="M10 14v-3a6 6 0 0112 0v3" />
        <circle cx="16" cy="21" r="1.6" />
      </>
    ),
  },
  {
    title: 'Без осуду',
    text: 'Можна говорити про що завгодно й у своєму темпі.',
    icon: <path d="M16 27S5 20 5 12.5A5.5 5.5 0 0116 9a5.5 5.5 0 0111 3.5C27 20 16 27 16 27z" />,
  },
  {
    title: 'Доказовий підхід',
    text: 'Працюю методами з науково підтвердженою ефективністю.',
    icon: (
      <>
        <path d="M6 6h13a4 4 0 014 4v16H10a4 4 0 01-4-4V6z" />
        <path d="M11 12h8M11 17h8" />
      </>
    ),
  },
  {
    title: 'Ваш темп',
    text: 'Частоту і глибину роботи обираємо разом.',
    icon: (
      <>
        <circle cx="16" cy="16" r="11" />
        <path d="M16 9v7l5 3" />
      </>
    ),
  },
];

const Principles = () => (
  <section aria-labelledby="principles-title">
    <div className="wrap">
      <div className="center">
        <div className="pill">Мої принципи</div>
        <h2 id="principles-title">Безпечний простір для розмови</h2>
      </div>
      <ul className="principles">
        {principles.map(({title, text, icon}) => (
          <li className="principle" key={title}>
            <div className="principle__ic">
              <svg viewBox="0 0 32 32" aria-hidden="true">
                {icon}
              </svg>
            </div>
            <h3>{title}</h3>
            <p>{text}</p>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Principles;
