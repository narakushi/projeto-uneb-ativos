import { FormInter } from "@/components/layout/formInter";
import { Container } from "@/components/layout/container";
import styles from "./index.module.css";
import inputs from "@/../public/jsons/inputsOrg.json";
import { Title } from "@/components/layout/title";

export default function RegisterOrg() {
  return (
    <div className={styles.containerRegisterOrg}>
      <Container>
        <Title text="Cadastro da organização"></Title>
        <p>Abaixo informe os dados da organização que deseja cadastrar</p>
        <FormInter inputs={inputs} urlBtn="/requesting" />
      </Container>
    </div>
  );
}
