import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";

import Details from "@src/components/Details";

import styles from "@src/styles/Home.module.css";

import tennis from "@src/../public/tennis.png";
import tennisVariantRed from "@src/../public/variant-red.png";
import tennisVariantRed2 from "@src/../public/variant-red-2.png";
import tennisVariantGold from "@src/../public/variant-gold.png";

const list = {
  visible: {
    opacity: 1,
    transition: { when: "beforeChildren", staggerChildren: 0.2 },
  },
  hidden: { opacity: 0 },
};

const item = {
  visible: {
    opacity: 1,
  },
  hidden: { opacity: 0 },
};

export default function Home() {
  return (
    <>
      <Head>
        <title>JORDAN - NIKE</title>
        <meta
          name="description"
          content="Bem-vindo ao mundo do Jordan, onde performance e estilo se unem. Com design icônico e tecnologia avançada, o Jordan é a escolha perfeita para atletas e amantes do estilo. Projetado para garantir conforto e suporte durante as atividades físicas, este tênis é a escolha ideal para quem busca um visual atual e descolado. Oferecemos uma ampla variedade de opções de cores para escolher e entregamos diretamente à sua porta. Não perca mais tempo e experimente hoje mesmo a diferença que o Jordan pode fazer na sua vida. Adquira agora o seu!"
        />
      </Head>
      <header className={styles.header}>
        <h2>Nike</h2>
      </header>
      <main>
        <section className={styles.introduction}>
          <motion.div
            initial={{ x: -300, opacity: 0 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1>
              Passe a ir além com um <span>Jordan</span>
            </h1>
          </motion.div>
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Image src={tennis} alt="" priority />
            <a href="#">BUY NOW</a>
          </motion.div>
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
          <motion.div initial="hidden" whileInView="visible" variants={list}>
            <motion.div variants={item}>
              <Image src={tennisVariantRed} alt="" />
            </motion.div>
            <motion.div variants={item}>
              <Image src={tennisVariantGold} alt="" />
            </motion.div>
            <motion.div variants={item}>
              <Image src={tennisVariantRed2} alt="" />
            </motion.div>
          </motion.div>
        </section>
        <section className={styles.benefits}>
          <h2>Vantagens</h2>
          <div>
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
          </div>
        </section>
        <section className={styles.faq}>
          <h2>FAQ</h2>
          <div>
            <Details
              title="Qual é o material utilizado na fabricação do Jordan?"
              text="O Jordan é feito de materiais de alta qualidade, incluindo couro sintético e tecidos respiráveis."
            />
            <Details
              title="Qual é a garantia oferecida para o produto?"
              text="Oferecemos uma garantia de 12 meses contra defeitos de fabricação."
            />
            <Details
              title="O Jordan é confortável para usar durante todo o dia?"
              text=" Sim, o Jordan foi projetado com tecnologia avançada para garantir conforto durante todo o dia."
            />
            <Details
              title="Existe algum limite de peso para usar esse tênis?"
              text="Não há um limite de peso específico, mas o Jordan foi projetado para suportar até 220 libras."
            />
            <Details
              title="O Jordan é resistente à água?"
              text="Não, o Jordan não é resistente à água e não é recomendado usá-lo em condições molhadas."
            />
          </div>
        </section>
      </main>
    </>
  );
}
