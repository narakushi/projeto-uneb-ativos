import styles from "./index.module.css";

export const Container = ({ children, customClass }) => {
  return (
    <div className={`${styles.container} ${styles[customClass]}`}>
      {children}
    </div>
  );
};
