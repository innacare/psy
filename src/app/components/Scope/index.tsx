import './style.css';
import {scopeItems} from 'components/Scope/utils';

const Scope = () => {
  console.log('Scope');

  return (
    <div id="scope">
      <div className="scope__directions">Моя експертність та напрямки</div>
      <div className="scope__header">З чим я допомагаю впоратися</div>
      <div className="scope__items">
        {scopeItems.map(({name, text, details, icon}) => (
          <div key={name} className="scope__block">
            <img src={icon} alt={name} className="scope__block__img" />
            <div className="scope__block__text">{text}</div>
            <div className="scope__block__details">{details}</div>
          </div>
        ))}
      </div>
      <button className="scope__btn">Почати Роботу</button>
    </div>
  );
};

export default Scope;
