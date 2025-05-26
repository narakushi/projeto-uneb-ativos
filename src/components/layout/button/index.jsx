import Link from "next/link";
import styles from "./index.module.css";

export const Button = ({ text, url, customClass, icon }) => {
  return (
    <Link
      className={`${styles.btnStyle} ${styles[customClass]}`}
      href={url}
      role="button"
    >
      <span>
        {icon}
        {text}
      </span>
    </Link>
  );
};
