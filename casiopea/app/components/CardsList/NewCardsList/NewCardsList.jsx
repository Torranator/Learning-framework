import { NewCardsFragment } from "../NewCardsFragment/NewCardsFragment";

import Styles from "./NewCardsList.module.css";

export const NewCardList = () => {
    return (
        <section className={Styles["list-section"]}>
            <h2 className={Styles["list-section__title"]} id="new">
                Новинки
            </h2>
            <ul className={Styles["cards-list"]}>
                <NewCardsFragment />
            </ul>
        </section>
    );
};