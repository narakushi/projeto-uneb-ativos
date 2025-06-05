import styles from "./index.module.css";

export const Select = ({
  label,
  name,
  options,
  htmlFor,
  id,
  setValue,
  value,
}) => {
  return (
    <div className={styles.containerSelect}>
      <label htmlFor={htmlFor} className={styles.label}>
        {label}
      </label>
      <select
        name={name}
        id={id}
        className={styles.select}
        onChange={setValue}
        value={value}
      >
        {options.map((option, index) => (
          <>
            {index == 0 && <option value="">Selecione uma opção</option>}
            <option value={option.id || option} key={option.nome || option}>
              {option.nome || option}
            </option>
          </>
        ))}
      </select>
    </div>
  );
};
