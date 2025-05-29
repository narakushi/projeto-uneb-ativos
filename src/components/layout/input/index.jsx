import styles from "./index.module.css";

export const Input = ({ label, type, htmlFor, id }) => {
  return (
    <div className={styles.containerInput}>
      <label htmlFor={htmlFor}>{label}</label>
      <input type={type} id={id} />
    </div>
  );
};
