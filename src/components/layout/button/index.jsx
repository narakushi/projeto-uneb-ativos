import Link from "next/link";
import styles from "./index.module.css";

export const Button = ({ text, url, customClass, icon, event }) => {
  return !event ? (
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
  ) : (
    <button
      className={`${styles.btnStyle} ${styles[customClass]}`}
      onClick={event}
    >
      <span>
        {icon}
        {text}
      </span>
    </button>
  );
};
