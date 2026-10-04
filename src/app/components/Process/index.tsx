import './style.css';

const steps = [
  {
    title: 'Запис',
    text: 'Заповніть коротку форму й оберіть зручний час.',
    icon: (
      <>
        <rect x="6" y="9" width="28" height="25" rx="5" />
        <path d="M6 17h28M13 5v7M27 5v7" />
        <path d="M15 26l4 4 7-8" />
      </>
    ),
  },
  {
    title: 'Знайомство',
    text: 'Перша сесія: обговорюємо запит і ваші очікування.',
    icon: (
      <>
        <path d="M6 9h20a4 4 0 014 4v8a4 4 0 01-4 4H16l-6 5v-5H6a4 4 0 01-4-4v-8a4 4 0 014-4z" transform="translate(2 0)" />
        <path d="M14 17h12M14 22h7" transform="translate(2 0)" />
      </>
    ),
  },
  {
    title: 'План',
    text: 'Разом визначаємо цілі та формат подальшої роботи.',
    icon: (
      <>
        <circle cx="9" cy="30" r="4" />
        <circle cx="31" cy="10" r="4" />
        <path d="M13 30h8a6 6 0 000-12h-2a6 6 0 010-12h8" strokeDasharray="2 3.5" />
      </>
    ),
  },
  {
    title: 'Робота',
    text: 'Регулярні сесії та прості вправи між зустрічами.',
    icon: (
      <>
        <path d="M20 34V19" />
        <path d="M20 19c0-6-4-9-10-9 0 6 4 9 10 9z" />
        <path d="M20 24c0-5 3-8 9-8 0 5-3 8-9 8z" />
        <path d="M12 34h16" />
      </>
    ),
  },
];

const Process = () => (
  <section id="process" aria-labelledby="process-title">
    <div className="wrap">
      <div className="center">
        <div className="pill">Як це працює</div>
        <h2 id="process-title">Від першого повідомлення до змін</h2>
        <p className="lead">Чотири простих кроки. Ви завжди знаєте, що буде далі.</p>
      </div>
      <ol className="steps">
        {steps.map(({title, text, icon}) => (
          <li className="step" key={title}>
            <div className="step__ic">
              <svg viewBox="0 0 40 40" aria-hidden="true">
                {icon}
              </svg>
            </div>
            <div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default Process;
