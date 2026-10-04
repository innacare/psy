import './style.css';

const loop = [
  {n: '01', title: 'Ситуація', text: 'Колега не відповів на повідомлення'},
  {n: '02', title: 'Думка', text: '«Мабуть, я зробила щось не так»'},
  {n: '04', title: 'Поведінка', text: 'Уникаю контакту, прокручую в голові'},
  {n: '03', title: 'Емоція', text: 'Тривога, напруга в тілі'},
];

const points = [
  'Структурована робота з чіткою метою',
  'Практичні навички, які залишаються з вами',
  'Підтверджена ефективність при тривозі та депресії',
];

const Approach = () => (
  <section aria-labelledby="approach-title">
    <div className="wrap">
      <div className="cbt">
        <div className="cbt__grid">
          <div>
            <div className="pill">Підхід</div>
            <h2 id="approach-title">Що таке КПТ простими словами</h2>
            <p className="lead">
              Когнітивно-поведінкова терапія виходить з того, що нас засмучує не сама подія, а те, як ми її трактуємо. Це
              один із найбільш досліджених методів психотерапії.
            </p>
            <ul className="points">
              {points.map((text) => (
                <li key={text}>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M5 13l4 4 10-10" />
                  </svg>
                  {text}
                </li>
              ))}
            </ul>
          </div>
          <div className="loop" role="img" aria-label="Цикл: ситуація, думка, емоція, поведінка">
            {loop.map(({n, title, text}) => (
              <div className="loop__n" key={n}>
                <span>{n}</span>
                <b>{title}</b>
                <p>{text}</p>
              </div>
            ))}
            <div className="loop__c" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M20 12a8 8 0 10-3 6.2" />
                <path d="M20 5v5h-5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Approach;
