import { Button } from "../button";
import styles from "./index.module.css";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { MdEdit } from "react-icons/md";
import { useRouter } from "next/router";

export const ItemList = ({
  title,
  titleDescription,
  description,
  titleSection,
  sectionTitle,
}) => {
  const router = useRouter();

  return (
    <div className={styles.containerItem}>
      <p>{title}</p>

      <div className={styles.contentItem}>
        <strong>{titleDescription}</strong>
        <span>{description}</span>
      </div>

      <div className={styles.contentItem}>
        <strong>{titleSection}</strong>
        <span>{sectionTitle}</span>
      </div>

      <div className={styles.containerBtn}>
        <Button
          icon={<MdEdit />}
          text="Editar"
          url="/requestList/editItem"
          customClass="btnColor"
        />
        <Button
          icon={<RiDeleteBin6Fill />}
          text="Excluir"
          url="/"
          customClass="btnColor"
        />
      </div>
    </div>
  );
};
