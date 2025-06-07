import { FormInter } from "@/components/layout/formInter";
import { Container } from "@/components/layout/container";
import styles from "./index.module.css";
import inputs from "@/../public/jsons/inputsOrg.json";
import { Title } from "@/components/layout/title";
import axios from "axios";
import { useContext, useEffect } from "react";
import { FormContext } from "@/context/FormContext";
import { changeKey } from "@/utils/changeKey";

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
  const { formRouter, setFormRouter } = useContext(FormContext);
  const { formUrlsEnv } = useContext(FormContext);

  const newTipoOrg = changeKey(tipoOrg);
  const newTipoSetor = changeKey(tipoSetor);

  inputs.map((input) => {
    if (input.id === "Tipo_Ator") {
      input.options = newTipoOrg;
    } else if (input.id === "Setor_Principal_Atuacao") {
      input.options = newTipoSetor;
    } else {
      input;
    }
  });

  return (
    <div className={styles.containerRegisterOrg}>
      <Container>
        <Title text="Cadastro da organização" />
        <p>Abaixo informe os dados da organização que deseja cadastrar</p>

        <FormInter
          inputs={inputs}
          url={formUrlsEnv.urlAtores}
          urlBtn={formRouter}
          setUrlBtn={setFormRouter}
        />
      </Container>
    </div>
  );
}
