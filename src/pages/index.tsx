import Image from "next/image";

import styles from "@src/styles/Home.module.css";

import tennis from "@src/../public/tennis.png";
import tennisVariantRed from "@src/../public/variant-red.png";
import tennisVariantRed2 from "@src/../public/variant-red-2.png";
import tennisVariantGold from "@src/../public/variant-gold.png";
import Details from "@src/components/Details";

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
            <Image src={tennisVariantRed} alt="" />
            <Image src={tennisVariantGold} alt="" />
            <Image src={tennisVariantRed2} alt="" />
          </div>
        </section>
        <section className={styles.benefits}>
          <h2>Vantagens</h2>
          <div>
            <span>01</span>
            <p>Conforto e suporte otimizados para atividades físicas</p>
          </div>
          <div>
            <span>02</span>
            <p>Design icônico para destacar o seu estilo</p>
          </div>
          <div>
            <span>03</span>
            <p>Tecnologia avançada para melhor performance</p>
          </div>
        </section>
        <section className={styles.faq}>
          <h2>FAQ</h2>
          <div>
            <Details title="Qual é o material utilizado na fabricação do Jordan?" text="O Jordan é feito de materiais de alta qualidade, incluindo couro sintético e tecidos respiráveis."/>
            <Details title="Qual é a garantia oferecida para o produto?" text="Oferecemos uma garantia de 12 meses contra defeitos de fabricação."/>
            <Details title="O Jordan é confortável para usar durante todo o dia?" text=" Sim, o Jordan foi projetado com tecnologia avançada para garantir conforto durante todo o dia."/>
            <Details title="Existe algum limite de peso para usar esse tênis?" text="Não há um limite de peso específico, mas o Jordan foi projetado para suportar até 220 libras."/>
            <Details title="O Jordan é resistente à água?" text="Não, o Jordan não é resistente à água e não é recomendado usá-lo em condições molhadas."/>
          </div>
        </section>
      </main>
    </>
  );
}
