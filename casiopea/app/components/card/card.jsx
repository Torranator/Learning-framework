

// import { NewCardsFragment } from "../NewCardsFragment/NewCardsFragment";

import Styles from "./card.module.css";


export const card = (props) => {
    return (
        <article className="card">
        <img src={props.image} alt=""
          className="card__image" />
        <div className="card__content-block">
          <h3 className="card__title">{props.title}</h3>
          <p className="card__description">
            {props.description}
          </p>
          <div className="card__info-container">
            <p className="card__author">
              Автор: <span className="card__accent">{props.developer}</span>
            </p>
            <p className="card__votes">
              Голосов на сайте: <span className="card__accent">{props.users.length}</span>
            </p>
          </div>
        </div>
        </article>
    );
};


