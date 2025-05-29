import { ItemList } from "@/components/layout/itemList";
import styles from "./index.module.css";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/layout/button";
import { FaPlus } from "react-icons/fa";
import { Title } from "@/components/layout/title";

export default function RequestList() {
  const items = [
    {
      title: "Sistema para gerenciamento do estacionamento",
      titleDescription: "Descrição detalhada da necessidade",
      description:
        "Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in...",
      titleSection: "Setor impactado internamente",
      sectionTitle: "Rhoncus morbi et augue nec",
    },
  ];

  return (
    <main className={styles.containerMainList}>
      <Container>
        <Title text="Necessidades e desafios tenológicos cadastrados" />
        <p className={styles.subtitle}>
          Abaixo são listadas as demandas da sua organização.
        </p>
        <div className={styles.containerList}>
          {items.map((item) => (
            <ItemList {...item} />
          ))}
          <Button
            icon={<FaPlus />}
            text="Adicionar demanda"
            url="/"
            customClass="btnColor"
          />
        </div>
      </Container>
    </main>
  );
}
