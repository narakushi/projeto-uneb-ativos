import { FaCheckCircle, FaCircle } from "react-icons/fa";
import { Input } from "../input";
import { Select } from "../select";
import { TextArea } from "../textarea";
import styles from "./index.module.css";
import { Button } from "../button";
import { usePathname } from "next/navigation";

export const FormInter = ({ inputs, urlBtn }) => {
  const pathname = usePathname();
  return (
    <div className={styles.containerFormInter}>
      <div className={styles.formInterStages}>
        <span className={styles.stagesChild}>
          <FaCheckCircle
            size={15}
            color={`${pathname === "/requesting" ? "#697077" : "#00A624"}`}
          />
          Dados da organização
        </span>
        <span className={styles.stagesChild}>
          <FaCheckCircle
            size={15}
            color={`${pathname === "/requesting" ? "#00A624" : "#697077"}`}
          />
          Necessidades e desafios tenológicos
        </span>
      </div>

      <form action="" className={styles.form}>
        <div className={styles.formInputs}>
          {inputs.map((input) => (
            <div key={input.label}>
              {input.type ? (
                <Input {...input} />
              ) : input.rows ? (
                <TextArea {...input} />
              ) : (
                <Select {...input} />
              )}
            </div>
          ))}
        </div>
        <div className={styles.containerBtn}>
          <Button
            text="Voltar"
            url="/registerOrg"
            customClass="btnColor"
          ></Button>

          <Button text="Continuar" url={urlBtn} customClass="btnColor" />
        </div>
      </form>
    </div>
  );
};
