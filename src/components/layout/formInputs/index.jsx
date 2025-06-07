import { Input } from "../input";
import { Select } from "../select";
import { TextArea } from "../textarea";
import styles from "./index.module.css";

export const FormInputs = ({ inputs, formData, handleChange }) => {
  return (
    <div className={styles.formInputs}>
      {inputs.map((input) => (
        <div key={input.label}>
          {input.type ? (
            <Input
              {...input}
              value={formData[input.name] || ""}
              setValue={handleChange}
              key={input.id}
            />
          ) : input.rows ? (
            <TextArea
              {...input}
              value={formData[input.name] || ""}
              setValue={handleChange}
              key={input.id}
            />
          ) : (
            <Select
              {...input}
              value={formData[input.name] || ""}
              setValue={handleChange}
              key={input.id}
            />
          )}
        </div>
      ))}
    </div>
  );
};
