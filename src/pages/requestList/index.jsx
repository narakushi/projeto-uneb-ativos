import { ItemList } from "@/components/layout/itemList";
import styles from "./index.module.css";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/layout/button";
import { FaPlus } from "react-icons/fa";
import { Title } from "@/components/layout/title";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { FormContext } from "@/context/FormContext";

export default function RequestList() {
  const [requestings, setRequestings] = useState([]);
  const { idForm, setIdForm } = useContext(FormContext);

  useEffect(() => {
    async function getRequestings() {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_NECESSIDADE}/${idForm}`
        );

        setRequestings(response.data);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }

    getRequestings();
  }, [idForm]);

  console.log(idForm);
  console.log(`${process.env.NEXT_PUBLIC_NECESSIDADE}/${idForm}`);

  return (
    <main className={styles.containerMainList}>
      <Container>
        <Title text="Necessidades e desafios tenológicos cadastrados" />
        <p className={styles.subtitle}>
          Abaixo são listadas as demandas da sua organização.
        </p>
        <div className={styles.containerAllList}>
          <div className={styles.containerList}>
            {requestings.map((requesting) => (
              <ItemList
                title={requesting.Titulo_Necessidade_Desafio}
                titleDescription="Descrição detalhada da necessidade"
                description={requesting.Descricao_Detalhada_Necessidade}
                titleSection="Resultados Esperados"
                sectionTitle={requesting.Resultados_Esperados}
              />
            ))}
          </div>
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
