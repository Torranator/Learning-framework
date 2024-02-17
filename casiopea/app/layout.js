import "./globals.css";

import { Header } from "./components/header/header"
import { Footer } from "./components/footer/footer"
import { Banner } from "./components/banner/banner"
import { Promo } from "./components/promo/promo"
import { NewCardsFragment } from "./components/CardsList/NewCardsFragment/NewCardsFragment";
import { PopularCardsFragment } from "./components/CardsList/PopularCardsFragment/PopularCardsFragment";

export const metadata = {
  title: "Pindie",
  description: "Will that ever work?",
};



export default function RootLayout({ children }) {
  return (
    <html lang="RU">
      <body>
        < Header />
        < Banner />
        <PopularCardsFragment />
        {children}
        < NewCardsFragment />
        < Promo />
        < Footer />
      </body>
    </html>
  );
}
