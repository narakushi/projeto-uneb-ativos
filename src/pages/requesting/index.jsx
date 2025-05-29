import { FormInter } from "@/components/layout/formInter";
import inputs from "@/../public/jsons/inputsFormReq.json";
import { Container } from "@/components/layout/container";
import { Title } from "@/components/layout/title";
import styles from "./index.module.css";

export default function Requesting() {
  return (
    <div className={styles.containerReq}>
      <Container>
        <Title text="Cadastro da necessidade ou desafio tecnologico" />
        <p>Abaixo informe os dados da necessidade ou desafio tecnologico</p>
        <FormInter inputs={inputs} urlBtn="/requestList" />
      </Container>
    </div>
  );
}
