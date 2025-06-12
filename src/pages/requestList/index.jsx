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
          `${process.env.NEXT_PUBLIC_NECESSIDADE_ATOR}/${idForm}`
        );

        setRequestings(response.data);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }

    getRequestings();
  }, [idForm]);

  return (
    <main className={styles.containerMainList}>
      <Container>
        <Title text="Necessidades e desafios tecnológicos cadastrados" />
        <p className={styles.subtitle}>
          Abaixo são listadas as demandas da sua organização.
        </p>
        <div className={styles.containerAllList}>
          <div className={styles.containerList}>
            {requestings.length > 0 ? (
              requestings.map((requesting) => (
                <ItemList
                  title={requesting.Titulo_Necessidade_Desafio}
                  titleDescription="Descrição detalhada da necessidade"
                  description={requesting.Descricao_Detalhada_Necessidade}
                  titleSection="Resultados Esperados"
                  sectionTitle={requesting.Resultados_Esperados}
                  routerEdit="/requestList/editItem"
                  id={requesting.ID_Necessidade}
                />
              ))
            ) : (
              <span>Sem demandas cadastradas!</span>
            )}
            <span>{`${requestings.length} demanda(s) cadastrada(s) até agora.`}</span>
          </div>
          <Button
            icon={<FaPlus />}
            text="Adicionar demanda"
            url="/requestList/newRequesting"
            customClass="btnColor"
          />
        </div>
      </Container>
    </main>
  );
}
