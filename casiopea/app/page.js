// import Image from "next/image";
// import styles from "./page.module.css";
import { Banner } from "./components/banner/banner"
import { Promo } from "./components/promo/promo"
import { NewCardsFragment } from "./components/CardsList/NewCardsFragment/NewCardsFragment";
import { PopularCardsFragment } from "./components/CardsList/PopularCardsFragment/PopularCardsFragment";


export default function Home() {
  return (
    <main className="main">
      <Banner/>
      <PopularCardsFragment />
      < NewCardsFragment />
      < Promo />
    </main>
  );
}
