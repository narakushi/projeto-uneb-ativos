import { FaCheckCircle, FaCircle } from "react-icons/fa";
import { Input } from "../input";
import { Select } from "../select";
import { TextArea } from "../textarea";
import styles from "./index.module.css";
import { Button } from "../button";
import { usePathname } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { FormContext } from "@/context/FormContext";

export const FormInter = ({ inputs, urlBtn, type }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [valueGet, setValueGet] = useState({});

  const { formData, setFormData } = useContext(FormContext);
  const { idForm, setIdForm } = useContext(FormContext);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  console.log(formData);
  console.log(idForm);

  const navigate = (rota) => {
    router.push(rota);
  };

  async function putData(e, url, route) {
    e.preventDefault();
    try {
      const response = await axios.put(`${url}/${idForm}`, formData);
      console.log(response.data);
      navigate(route);
      return response.data;
      // navigate(rota);
    } catch (error) {
      console.log("Erro ao recuperar dados: ", error);
    }
  }

  async function postData(e, dados, url, rota) {
    e.preventDefault();
    try {
      const response = await axios.post(url, dados);
      setIdForm(response.data.insertId);
      console.log("Resposta da API: ", response.data);
      navigate(rota);
    } catch (error) {
      console.log("Erro ao enviar dados: ", dados);
      console.log(error);
    }
  }

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
                  value={formData[input.name] || ""}
                  setValue={handleChange}
                />
              ) : input.rows ? (
                <TextArea
                  {...input}
                  value={formData[input.name] || ""}
                  setValue={handleChange}
                />
              ) : (
                <Select
                  {...input}
                  value={formData[input.name] || ""}
                  setValue={handleChange}
                />
              )}
            </div>
          ))}
        </div>
        <div className={styles.containerBtn}>
          {!pathname.includes("/registerOrg") && (
            <Button
              text="Voltar"
              url="/registerOrg?route=%2Frequesting"
              customClass="btnColor"
            ></Button>
          )}

          <Button
            text="Continuar"
            event={
              idForm
                ? (e) =>
                    putData(e, process.env.NEXT_PUBLIC_ATORES, "/requesting")
                : (e) =>
                    postData(
                      e,
                      formData,
                      process.env.NEXT_PUBLIC_ATORES,
                      "/requesting"
                    )
            }
            customClass="btnColor"
          />
        </div>
      </form>
    </div>
  );
};
