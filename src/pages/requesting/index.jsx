import { FormInter } from "@/components/layout/formInter";
import inputs from "@/../public/jsons/inputsFormReq.json";
import { Container } from "@/components/layout/container";
import { Title } from "@/components/layout/title";
import styles from "./index.module.css";
import { useContext } from "react";
import { FormContext } from "@/context/FormContext";
import axios from "axios";
import { changeKey } from "@/utils/changeKey";

export async function getStaticProps() {
  const [setorType, solutionType] = await Promise.all([
    await axios.get(process.env.NEXT_PUBLIC_TIPO_SETOR),
    await axios.get(process.env.NEXT_PUBLIC_TIPO_SOLUCAO),
  ]);

  return {
    props: {
      setorType: setorType.data,
      solutionType: solutionType.data,
    },
  };
}

export default function Requesting({ setorType, solutionType }) {
  const { formRouter, setFormRouter } = useContext(FormContext);
  const { formUrlsEnv } = useContext(FormContext);

  const newSetorType = changeKey(setorType);
  const newSolutionType = changeKey(solutionType);

  inputs.forEach((input) => {
    if (input.id === "Setor_Impactado_Internamente") {
      input.options = newSetorType;
    }
    if (input.id === "Tipo_Solucao_Buscada") {
      input.options = newSolutionType;
    } else {
      input;
    }
  });

  return (
    <div className={styles.containerReq}>
      <Container>
        <Title text="Cadastro da necessidade ou desafio tecnologico" />
        <p>Abaixo informe os dados da necessidade ou desafio tecnologico</p>
        <FormInter
          inputs={inputs}
          url={formUrlsEnv.urlNecessidade}
          urlBtn={formRouter}
        />
      </Container>
    </div>
  );
}
