import { FormInter } from "@/components/layout/formInter";
import inputs from "@/../public/jsons/inputsFormSol.json";
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

export default function Solution({ solutionType, sectionType }) {
  const newSolutionType = changeKey(solutionType);
  const newSectionType = changeKey(sectionType);

  inputs.map((input) => {
    if (input.id === "Tipo_Solucao") {
      input.options = newSolutionType;
    } else if (input.id === "Setores_Alvo_Solucao") {
      input.options = newSectionType;
    } else {
      input;
    }
  });

  return (
    <>
      <Container>
        <FormInter
          inputs={inputs}
          url={process.env.NEXT_PUBLIC_SOLUCAO_ATOR}
          urlBtn="/solution"
        />
      </Container>
    </>
  );
}
