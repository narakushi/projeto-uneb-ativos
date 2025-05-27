import styles from "./index.module.css";

export const TextArea = ({ label, name, rows }) => {
  return (
    <div className={styles.textareaContainer}>
      <label htmlFor="" className={styles.label}>
        {label}
      </label>
      <textarea
        name={name}
        id=""
        rows={rows}
        className={styles.textarea}
      ></textarea>
    </div>
  );
};
