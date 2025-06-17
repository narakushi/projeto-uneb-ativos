import styles from "./index.module.css";

export const Alert = ({ text }) => {
  return <p className={styles.alert}>{text}</p>;
};
