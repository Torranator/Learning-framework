import styles from "./Footer.module.css"

export const Footer = () => {
    return (
        <section className={styles["footer"]}>
        <footer>
          <a href="./index.html" className="footer__logo">
            <span className="footer__logo-name">pindie</span><span className="footer__logo-copy">, XXI век</span>
          </a>
          <ul className="social-list">
            <li className="social-list__item">
              <a href="" className="button social-list__link">YT</a>
            </li>
            <li className="social-list__item">
              <a href="" className="button social-list__link">ВК</a>
            </li>
            <li className="social-list__item">
              <a href="" className="button social-list__link">TG</a>
            </li>
          </ul>
        </footer>
        </section>
    );
}