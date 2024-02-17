export const Header = () => {
    return (
        <header className="header">
          <a hfer="./index.html" className="logo">
            <img className="logo__image" src="./logo.svg" alt="logo"/>
          </a>
          <nav className="menu">
            <ul className="menu__list">
              <li className="menu__item">
                <a href="" className="menu__link">Новинки</a>
              </li>
              <li className="menu__item">
                <a href="" className="menu__link">Популярные</a>
              </li>
              <li className="menu__item">
                <a href="" className="menu__link">Шутеры</a>
              </li>
              <li className="menu__item">
                <a href="" className="menu__link">Ранеры</a>
              </li>
              <li className="menu__item">
                <a href="" className="menu__link">Пиксельные</a>
              </li>
              <li className="menu__item">
                <a href="" className="menu__link">TDS</a>
              </li>
            </ul>
            <div className="auth">
              <button className="auth__button">Войти</button>
            </div>
          </nav>
        </header>
    );
}