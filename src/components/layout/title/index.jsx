import styles from "./index.module.css";

export const Title = ({ text }) => {
  return <h1 className={styles.title}>{text}</h1>;
};
