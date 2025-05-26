import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { Title } from "@/components/layout/title";
import { Button } from "@/components/layout/button";
import homeImage from "@/../public/merger-amico.svg";
import Image from "next/image";
import { Container } from "@/components/layout/container";

export default function Home() {
  return (
    <main className={styles.home}>
      <Container>
        <section className={styles.sectionContent}>
          <strong className={styles.titleTop}>A Aplicação</strong>
          <Title text="Conecte sua organização: cadastre uma solução ou uma demanda" />
          <p>
            Aqui, ideias e necessidades se encontram. Empresas e instituições
            podem se cadastrar para apresentar desafios ou oferecer soluções que
            ajudam a melhorar nossa cidade.
          </p>
          <div className={styles.buttonsRedirect}>
            <Button text="Cadastre-se" url="/register" customClass="btnColor" />
            <Button text="Entrar" url="/login" />
          </div>
        </section>
        <div>
          <Image width={570} height={390} src={homeImage} />
        </div>
      </Container>
    </main>
  );
}
