import { FormInter } from "@/components/layout/formInter";
import { Title } from "@/components/layout/title";
import { FormContext } from "@/context/FormContext";
import { useGetOneAxios } from "@/hooks/useGetOneAxios";
import { useContext, useEffect, useState } from "react";
import inputs from "@/../public/jsons/inputsFormSol.json";
import { Container } from "@/components/layout/container";
import axios from "axios";
import { changeKey } from "@/utils/changeKey";
import styles from "./index.module.css";
import { FaCheckCircle } from "react-icons/fa";
import { FormInputs } from "@/components/layout/formInputs";
import { Button } from "@/components/layout/button";
import { useRouter } from "next/router";
import { axiosPut } from "@/services/axiosPut";
import { Alert } from "@/components/layout/alert";

export async function getStaticProps() {
  const [solutionType, sectionType] = await Promise.all([
    await axios.get(process.env.NEXT_PUBLIC_TIPO_SOLUCAO),
    await axios.get(process.env.NEXT_PUBLIC_TIPO_SETOR),
  ]);

  return {
    props: {
      solutionType: solutionType.data,
      sectionType: sectionType.data,
    },
  };
}

export default function EditItem({ solutionType, sectionType }) {
  const { idForm } = useContext(FormContext);
  const [formData, setFormData] = useState({});
  const { idEditState } = useContext(FormContext);
  const [alert, setAlert] = useState(false);

  const { items, loading } = useGetOneAxios(
    process.env.NEXT_PUBLIC_SOLUCAO,
    idEditState
  );

  const handleChange = (e, formData, setFormData) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const formatDate = (isoDateString) => {
    const date = new Date(isoDateString);

    const pad = (n, size = 2) => String(n).padStart(size, "0");

    const formatted =
      `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(
        date.getDate()
      )} ` +
      `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(
        date.getSeconds()
      )}.` +
      `${pad(date.getMilliseconds(), 3)}`;

    console.log(formatted);
    return formatted;
  };

  console.log(idEditState);

  const { formUrlsEnv } = useContext(FormContext);
  const newSolutionType = changeKey(solutionType);
  const newSetorType = changeKey(sectionType);
  const router = useRouter();

  inputs.map((input) => {
    if (input.id === "Tipo_Solucao") {
      input.options = newSolutionType;
    } else if (input.id === "Setores_Alvo_Solucao") {
      input.options = newSetorType;
    } else {
      input;
    }
  });

  useEffect(() => {
    if (!loading && items.length > 0) {
      const [data] = items;
      const keys = Object.keys(data);
      const newObj = {};
      keys.forEach((key) => {
        newObj[key] = data[key];
      });
      const objWithDate = {
        ...newObj,
        Data_Registro_Solucao: formatDate(newObj.Data_Registro_Solucao),
      };
      setFormData(objWithDate);
      console.log(data);
    }
  }, [loading, items]);

  async function handleSubmit(e) {
    e.preventDefault();
    const dataWithId = { ...formData, ID_Ator_Ofertante: idForm };
    const response = await axiosPut(
      dataWithId,
      process.env.NEXT_PUBLIC_SOLUCAO,
      idEditState
    );
    console.log(response);
    if (response.affectedRows) {
      setAlert(true);
    }
  }

  if (loading) return <>Carregando...</>;

  return (
    <main>
      <Container customClass="collumnMode">
        <Title text="Editar item" />
        <p>Abaixo, edite os dados necessários</p>

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
            {alert && <Alert text="Solução editada com sucesso!" />}
            <div className={styles.containerBtn}>
              <Button
                text="Voltar"
                event={(e) => {
                  e.preventDefault();
                  router.replace("/solutionList");
                }}
                customClass="btnColor"
              />
              <Button
                text="Salvar"
                event={handleSubmit}
                customClass="btnColor"
              />
            </div>
          </form>
        </div>
      </Container>
    </main>
  );
}
