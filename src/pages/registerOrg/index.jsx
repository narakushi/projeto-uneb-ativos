import { FormInter } from "@/components/layout/formInter";
import { Container } from "@/components/layout/container";
import styles from "./index.module.css";
import inputs from "@/../public/jsons/inputsOrg.json";
import { Title } from "@/components/layout/title";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

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
  const [values, setValues] = useState([]);

  if (!route) return <>...Carregando</>;

  const changeKey = (array) => {
    const newArray = array.map((tipo) => {
      const novo = {};
      const key = Object.keys(tipo);

      novo["id"] = tipo[key[0]];
      novo["nome"] = tipo[key[1]];

      return novo;
    });

    return newArray;
  };

  const newTipoOrg = changeKey(tipoOrg);
  const newTipoSetor = changeKey(tipoSetor);

  inputs.map((input) => {
    if (input.id === "tipo-de-organizacao") {
      input.options = newTipoOrg;
    } else if (input.id === "setor-principal-de-atuacao") {
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
        {route == "/requesting" && (
          <FormInter
            inputs={inputs}
            urlBtn={route}
            type="demanda"
            setValues={setValues}
          />
        )}
        {route == "/solution" && (
          <FormInter inputs={inputs} urlBtn={route} type="solucao" />
        )}
      </Container>
    </div>
  );
}
