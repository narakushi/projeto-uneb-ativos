import { Button } from "../button";
import { Input } from "../input";
import { Title } from "../title";
import styles from "./index.module.css";

export const Form = ({
  title,
  inputs,
  descBtn1,
  descBtn2,
  urlBtn1,
  urlBtn2,
  icon,
}) => {
  return (
    <form action="" className={styles.containerForm}>
      <Title text={title} />

      <div className={styles.containerFormInputs}>
        {inputs.map((input) => (
          <Input {...input} key={input.label} />
        ))}
      </div>

      <div className={styles.containerButtons}>
        <Button text={descBtn1} url={urlBtn1} customClass="btnColor" />
        <Button text={descBtn2} url={urlBtn2} icon={icon} />
      </div>
    </form>
  );
};
