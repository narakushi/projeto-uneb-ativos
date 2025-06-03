import styles from "./index.module.css";

export const Input = ({ name, label, type, htmlFor, id, value, setValue }) => {
  return (
    <div className={styles.containerInput}>
      <label htmlFor={htmlFor}>{label}</label>
      <input
        name={name}
        type={type}
        id={id}
        value={value}
        onChange={setValue}
      />
    </div>
  );
};
