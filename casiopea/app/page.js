// import Image from "next/image";
// import styles from "./page.module.css";
// cardslist=cardlist

import { Banner } from "./components/banner/banner"
import { Promo } from "./components/promo/promo"
import { CardsList } from "./components/CardsList/CardList/CardsList";

export default function Home() {
  return (
    <main className="main">
      <Banner/>
      <CardsList id="new" title="Популярные"/>
      <CardsList id="popular" title="Новинки"/>
      < Promo />
    </main>
  );
}
{/* <CardList id="popular" title="Популярные"> */}
{/* <CardList id="new" title="Новинки"> */}
