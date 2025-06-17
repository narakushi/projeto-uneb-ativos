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
          `${process.env.NEXT_PUBLIC_SOLUCAO_ATOR}/${idForm}`
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
        <Title text="Soluções ou serviços ofertados cadastrados" />
        <p className={styles.subtitle}>
          Abaixo são listadas as soluções cadastradas por sua organização.
        </p>
        <div className={styles.containerAllList}>
          <div className={styles.containerList}>
            {requestings.length > 0 ? (
              requestings.map((requesting) => (
                <ItemList
                  title={requesting.Nome_Solucao_Servico}
                  titleDescription="Descrição detalhada da solução"
                  description={requesting.Descricao_Detalhada_Solucao}
                  titleSection="Cases de sucesso da aplicação"
                  sectionTitle={requesting.Cases_Sucesso_Aplicacao}
                  routerEdit="/solutionList/editItem"
                  id={requesting.ID_Solucao}
                />
              ))
            ) : (
              <span>Sem demandas cadastradas!</span>
            )}
            <span>{`${requestings.length} demanda(s) cadastrada(s) até agora.`}</span>
          </div>
          <Button
            icon={<FaPlus />}
            text="Adicionar nova solução"
            url="/solutionList/newSolution"
            customClass="btnColor"
          />
        </div>
      </Container>
    </main>
  );
}
