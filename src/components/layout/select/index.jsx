import styles from "./index.module.css";

export const Select = ({
  label,
  name,
  options,
  optionsValues,
  htmlFor,
  id,
}) => {
  return (
    <div className={styles.containerSelect}>
      <label htmlFor={htmlFor} className={styles.label}>
        {label}
      </label>
      <select name={name} id={id} className={styles.select}>
        {options.map((option) => (
          <option value={optionsValues || option} key={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
