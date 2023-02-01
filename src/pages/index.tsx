import Image from "next/image";

import styles from "@src/styles/Home.module.css";

import tennis from "@src/../public/tennis.png";
import tennisVariantRed from "@src/../public/variant-red.png";
import tennisVariantRed2 from "@src/../public/variant-red-2.png";
import tennisVariantGold from "@src/../public/variant-gold.png";

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
        <section className={styles.product}>
          <h2>O produto</h2>
          <p>
            O Jordan é a escolha perfeita para atletas e amantes do estilo. Com
            design icônico e tecnologia avançada, este tênis garante conforto e
            suporte durante as atividades físicas, além de um visual atual e
            descolado. Seja na quadra ou na rua, o Jordan é sinônimo de
            performance e estilo. Adquira agora o seu e experimente a diferença.
          </p>
          <div>
            <Image src={tennisVariantRed} alt=""/>
            <Image src={tennisVariantGold} alt=""/>
            <Image src={tennisVariantRed2} alt=""/>
          </div>
        </section>
      </main>
    </>
  );
}
