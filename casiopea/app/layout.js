import "./globals.css";

import { Header } from "./components/header/header"
import { Footer } from "./components/footer/footer"

export const metadata = {
  title: "Pindie",
  description: "Will that ever work?",
};



export default function RootLayout({ children }) {
  return (
    <html lang="RU">
      <body>
        < Header />
        {children}
        < Footer />
      </body>
    </html>
  );
}
