import Image from "next/image";

import styles from "@src/styles/Home.module.css";

import tennis from "@src/../public/tennis.png";

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <h2>Nike</h2>
      </header>
      <main>
        <section className={styles.introduction}>
          <h1>
            Passe a ir além com um <span>Jordan</span>
          </h1>
          <Image src={tennis} alt="" />
          <a href="#">BUY NOW</a>
        </section>
      </main>
    </>
  );
}
