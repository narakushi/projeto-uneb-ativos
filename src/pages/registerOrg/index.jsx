import { FormInter } from "@/components/layout/formInter";
import { Container } from "@/components/layout/container";
import styles from "./index.module.css";
import inputs from "@/../public/jsons/inputsOrg.json";
import { Title } from "@/components/layout/title";
import axios from "axios";
import { useRouter } from "next/router";

export async function getStaticProps() {
  const [tipoOrg, tipoSetor] = await Promise.all([
    await axios.get(process.env.NEXT_PUBLIC_TIPO_ATORES),
    await axios.get(process.env.NEXT_PUBLIC_TIPO_SETOR),
  ]);

  return {
    props: {
      tipoOrg: tipoOrg.data,
      tipoSetor: tipoSetor.data,
    },
  };
}

export default function RegisterOrg({ tipoOrg, tipoSetor }) {
  const router = useRouter();
  const { route } = router.query;

  if (!route) return <>...Carregando</>;

  //separando em um array os nomes
  const tipos = tipoOrg.map((tipo) => tipo.Nome_Tipo_Ator);
  const tiposSetor = tipoSetor.map((tipo) => tipo.Nome_Setor);

  //separando os ids
  const idTipos = tipoOrg.map((tipo) => tipo.ID_Tipo_Ator);
  const idTipoSetor = tipoSetor.map((tipo) => tipo.ID_Setor);

  //passando os dados vindos das tabelas auxiliares para o json do frontend
  inputs.map((input) => {
    if (input.id === "tipo-de-organizacao") {
      input.options = tipos;
      input.optionsValues = idTipos;
    } else if (input.id === "setor-principal-de-atuacao") {
      input.options = tiposSetor;
      input.optionsValues = idTipoSetor;
    } else {
      input;
    }
  });

  return (
    <div className={styles.containerRegisterOrg}>
      <Container>
        <Title text="Cadastro da organização" />
        <p>Abaixo informe os dados da organização que deseja cadastrar</p>
        {route == "/requesting" && (
          <FormInter inputs={inputs} urlBtn={route} type="demanda" />
        )}
        {route == "/solution" && (
          <FormInter inputs={inputs} urlBtn={route} type="solucao" />
        )}
      </Container>
    </div>
  );
}
