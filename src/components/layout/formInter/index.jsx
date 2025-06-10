import { FaCheckCircle, FaCircle } from "react-icons/fa";
import styles from "./index.module.css";
import { Button } from "../button";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { useRouter } from "next/router";
import { FormContext } from "@/context/FormContext";
import { axiosPost } from "@/services/axiosPost";
import { axiosPut } from "@/services/axiosPut";
import { FormInputs } from "../formInputs";

export const FormInter = ({ inputs, url, urlBtn }) => {
  const router = useRouter();
  const pathname = usePathname();
  const { formStepOne, setFormStepOne } = useContext(FormContext);
  const { formStepTwo, setFormStepTwo } = useContext(FormContext);
  const { formStepThree, setFormStepThree } = useContext(FormContext);
  const { idForm, setIdForm } = useContext(FormContext);
  const { back, setBack } = useContext(FormContext);

  const stageLabel =
    urlBtn === "/requesting" || urlBtn === "/requestList/editItem"
      ? "Necessidades e desafios tecnológicos"
      : urlBtn === "/solution"
      ? "Solução ou serviço ofertado"
      : "Etapa";

  const handleChange = (e, formData, setFormData) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const navigate = (route) => {
    router.push(route);
  };

  async function handleSubmit(e, data, url, route) {
    e.preventDefault();
    if (back) {
      const response = await axiosPut(data, url, idForm);
      console.log(response);
      setBack(false);
    } else {
      const response = await axiosPost(data, url);
      if (data.Nome_Oficial) {
        setIdForm(response.insertId);
      }
      console.log(response);
    }
    navigate(route);
  }

  return (
    <div className={styles.containerFormInter}>
      <div className={styles.formInterStages}>
        {pathname === "/registerOrg" && (
          <span className={styles.stagesChild}>
            <FaCheckCircle
              size={15}
              color={`${pathname == "/registerOrg" ? "#00A624" : "#697077"}`}
            />
            Dados da organização
          </span>
        )}
        <span className={styles.stagesChild}>
          <FaCheckCircle
            size={15}
            color={`${pathname != "/registerOrg" ? "#00A624" : "#697077"}`}
          />
          {stageLabel}
        </span>
      </div>

      <form action="" className={styles.form}>
        {pathname == "/registerOrg" && (
          <FormInputs
            inputs={inputs}
            formData={formStepOne}
            handleChange={(e) => handleChange(e, formStepOne, setFormStepOne)}
          />
        )}
        {pathname == "/requesting" && (
          <FormInputs
            inputs={inputs}
            formData={formStepTwo}
            handleChange={(e) => handleChange(e, formStepTwo, setFormStepTwo)}
          />
        )}
        {pathname == "/requestList/editItem" && (
          <FormInputs
            inputs={inputs}
            formData={formStepThree}
            handleChange={(e) =>
              handleChange(e, formStepThree, setFormStepThree)
            }
          />
        )}
        <div className={styles.containerBtn}>
          <Button
            text="Voltar"
            event={(e) => {
              e.preventDefault();
              router.back();
              setBack(true);
            }}
            customClass={pathname === "/registerOrg" ? "btnBlock" : "btnColor"}
          />
          <Button
            text="Continuar"
            event={(e) => {
              if (pathname === "/registerOrg") {
                handleSubmit(e, formStepOne, url, urlBtn);
              } else if (pathname === "/requesting") {
                const stepTwoWithId = {
                  ...formStepTwo,
                  ID_Ator_Demandante: idForm,
                };
                handleSubmit(e, stepTwoWithId, url, "/requestList");
              }
            }}
            customClass="btnColor"
          />
        </div>
      </form>
    </div>
  );
};
