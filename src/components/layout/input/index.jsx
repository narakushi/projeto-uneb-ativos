import styles from "./index.module.css";

export const Input = ({ label, type }) => {
  return (
    <div className={styles.containerInput}>
      <label htmlFor="">{label}</label>
      <input type={type} />
    </div>
  );
};
