import './style.css';

const Contacts = () => {
  return (
    <>
      <div id="contacts">
        <div>
          <a href="https://www.instagram.com/innacare.psy/" target="_blank" rel="noreferrer">
            <img src="/psy/images/instagram_vector_white.svg" alt="instagram" />
          </a>
          <a href="https://t.me/larinna21" target="_blank" rel="noreferrer">
            <img src="/psy/images/telegram_vector_white.svg" alt="telegram" />
          </a>
        </div>
        <div className="contacts__rights">© 2026 Inna Larina. All rights reserved</div>
        <div>
          <a href="tel:+380933076226" target="_blank" rel="noreferrer">
            +380933076226
          </a>
        </div>
      </div>
    </>
  );
};

export default Contacts;
