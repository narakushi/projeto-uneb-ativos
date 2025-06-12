import { FormInter } from "@/components/layout/formInter";
import { Title } from "@/components/layout/title";
import { FormContext } from "@/context/FormContext";
import { useGetOneAxios } from "@/hooks/useGetOneAxios";
import { useContext, useEffect } from "react";
import inputs from "@/../public/jsons/inputsFormReq.json";
import { Container } from "@/components/layout/container";
import axios from "axios";
import { changeKey } from "@/utils/changeKey";

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
  const { setFormStepThree } = useContext(FormContext);
  const { idEditState } = useContext(FormContext);

  const { items: requestings, loading } = useGetOneAxios(
    process.env.NEXT_PUBLIC_NECESSIDADE,
    idEditState
  );

  console.log(idEditState);

  const { formUrlsEnv } = useContext(FormContext);

  const newSolutionType = changeKey(solutionType);
  const newSetorType = changeKey(sectionType);

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

  useEffect(() => {
    if (!loading && requestings.length > 0) {
      const [data] = requestings;
      const keys = Object.keys(data);
      const newObj = {};
      keys.forEach((key) => {
        newObj[key] = data[key];
      });
      setFormStepThree(newObj);
      console.log(data);
    }
  }, [loading, requestings]);

  if (loading) return <>Carregando...</>;

  return (
    <main>
      <Container customClass="collumnMode">
        <Title text="Editar item" />
        <p>Abaixo, edite os dados necessários</p>
        <FormInter
          inputs={inputs}
          url={formUrlsEnv.urlNecessidadeOne}
          urlBtn="/requestList/editItem"
        />
      </Container>
    </main>
  );
}
