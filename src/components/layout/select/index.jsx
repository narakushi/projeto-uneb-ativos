import styles from "./index.module.css";

export const Select = ({ label, name, options }) => {
  return (
    <div className={styles.containerSelect}>
      <label htmlFor="" className={styles.label}>
        {label}
      </label>
      <select name={name} id="" className={styles.select}>
        {options.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};
