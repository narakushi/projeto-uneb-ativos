import { FaCheckCircle, FaCircle } from "react-icons/fa";
import { Input } from "../input";
import { Select } from "../select";
import { TextArea } from "../textarea";
import styles from "./index.module.css";
import { Button } from "../button";
import { usePathname } from "next/navigation";
import { useState } from "react";
import axios from "axios";

async function enviarDados(e, dados, url) {
  console.log(dados);
  e.preventDefault();
  try {
    const response = await axios.post(url, dados);
    console.log("Resposta da API: ", response.data);
    return response.data;
  } catch (error) {
    console.log("Erro ao enviar dados: ", dados);
    console.log(error);
  }
}

export const FormInter = ({ inputs, urlBtn, type }) => {
  const pathname = usePathname();
  const [valueInput, setValueInput] = useState(() => {
    const inicial = {};

    inputs.map((input) => {
      inicial[input.name] = "";
    });

    return inicial;
  });

  console.log(valueInput);

  const stageLabel =
    type === "demanda"
      ? "Necessidades e desafios tecnológicos"
      : type === "solucao"
      ? "Solução ou serviço ofertado"
      : "Etapa";

  return (
    <div className={styles.containerFormInter}>
      <div className={styles.formInterStages}>
        <span className={styles.stagesChild}>
          <FaCheckCircle
            size={15}
            color={`${pathname == "/registerOrg" ? "#00A624" : "#697077"}`}
          />
          Dados da organização
        </span>
        <span className={styles.stagesChild}>
          <FaCheckCircle
            size={15}
            color={`${pathname != "/registerOrg" ? "#00A624" : "#697077"}`}
          />
          {stageLabel}
        </span>
      </div>

      <form action="" className={styles.form}>
        <div className={styles.formInputs}>
          {inputs.map((input) => (
            <div key={input.label}>
              {input.type ? (
                <Input
                  {...input}
                  value={valueInput[input.name] || ""}
                  setValue={(e) =>
                    setValueInput({
                      ...valueInput,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
              ) : input.rows ? (
                <TextArea
                  {...input}
                  value={valueInput[input.name] || ""}
                  setValue={(e) =>
                    setValueInput({
                      ...valueInput,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
              ) : (
                <Select
                  {...input}
                  setValue={(e) =>
                    setValueInput({
                      ...valueInput,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
              )}
            </div>
          ))}
        </div>
        <div className={styles.containerBtn}>
          {!pathname.includes("/registerOrg") && (
            <Button
              text="Voltar"
              url={
                type === "demanda" ? "/registerOrg?route=%2Frequesting" : "/"
              }
              customClass="btnColor"
            ></Button>
          )}

          <Button
            text="Continuar"
            event={(e) =>
              enviarDados(e, valueInput, process.env.NEXT_PUBLIC_ATORES)
            }
            customClass="btnColor"
          />
        </div>
      </form>
    </div>
  );
};
