import Link from "next/link";
import styles from "./index.module.css";

export const Button = ({ text, url, customClass }) => {
  return (
    <Link
      className={`${styles.btnStyle} ${styles[customClass]}`}
      href={url}
      role="button"
    >
      {text}
    </Link>
  );
};
