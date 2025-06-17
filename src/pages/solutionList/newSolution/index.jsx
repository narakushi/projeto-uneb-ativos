import { Container } from "@/components/layout/container";
import inputs from "@/../public/jsons/inputsFormSol.json";
import { FormInputs } from "@/components/layout/formInputs";
import { useContext, useState } from "react";
import styles from "./index.module.css";
import { Button } from "@/components/layout/button";
import { FaCheckCircle } from "react-icons/fa";
import { changeKey } from "@/utils/changeKey";
import axios from "axios";
import { axiosPost } from "@/services/axiosPost";
import { FormContext } from "@/context/FormContext";
import { useRouter } from "next/router";
import { Alert } from "@/components/layout/alert";

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

export default function NewSolution({ setorType, solutionType }) {
  const [formData, setFormData] = useState({});
  const { idForm } = useContext(FormContext);
  const router = useRouter();
  const [alert, setAlert] = useState(false);

  const handleChange = (e, formData, setFormData) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const newSetorType = changeKey(setorType);
  const newSolutionType = changeKey(solutionType);

  inputs.map((input) => {
    if (input.id === "Tipo_Solucao") {
      input.options = newSolutionType;
    } else if (input.id === "Setores_Alvo_Solucao") {
      input.options = newSetorType;
    } else {
      input;
    }
  });

  async function handleSubmit(e) {
    e.preventDefault();
    const dataWithId = { ...formData, ID_Ator_Ofertante: idForm };
    const response = await axiosPost(
      dataWithId,
      process.env.NEXT_PUBLIC_SOLUCAO_ATOR
    );
    console.log(response);
    if (response.insertId) {
      setAlert(true);
    }
  }

  return (
    <Container>
      <div className={styles.containerFormInter}>
        <div className={styles.formInterStages}>
          <span className={styles.stagesChild}>
            <FaCheckCircle size={15} color="#00A624" />
            Dados da Organização
          </span>
        </div>
        <form action="" className={styles.form}>
          <FormInputs
            inputs={inputs}
            formData={formData}
            handleChange={(e) => handleChange(e, formData, setFormData)}
          />
          {alert && <Alert text="Solução adicionada com sucesso!" />}
          <div className={styles.containerBtn}>
            <Button
              text="Voltar"
              event={(e) => {
                e.preventDefault();
                router.back();
              }}
              customClass="btnColor"
            />
            <Button text="Salvar" event={handleSubmit} customClass="btnColor" />
          </div>
        </form>
      </div>
    </Container>
  );
}
