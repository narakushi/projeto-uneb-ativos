import styles from "./index.module.css";

export const TextArea = ({
  label,
  name,
  rows,
  htmlFor,
  id,
  value,
  setValue,
}) => {
  return (
    <div className={styles.textareaContainer}>
      <label htmlFor={htmlFor} className={styles.label}>
        {label}
      </label>
      <textarea
        name={name}
        id={id}
        rows={rows}
        className={styles.textarea}
        value={value}
        onChange={setValue}
      ></textarea>
    </div>
  );
};
