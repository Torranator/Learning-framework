// import Image from "next/image";
// import styles from "./page.module.css";

export default function Home() {
  return (
    <main className="main">
      <section className="list-section">
        <h2 className="list-section__title" id="popular">
          Популярное
        </h2>
      </section>
      <section className="list-section">
        <h2 className="list-section__title" id="new">
          Новинки
        </h2>
      </section>
    </main>
  );
}
