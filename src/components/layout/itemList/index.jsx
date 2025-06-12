import { Button } from "../button";
import styles from "./index.module.css";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { MdEdit } from "react-icons/md";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { FormContext } from "@/context/FormContext";
import axios from "axios";

export const ItemList = ({
  title,
  titleDescription,
  description,
  titleSection,
  sectionTitle,
  routerEdit,
  id,
}) => {
  const router = useRouter();
  const { setIdEditState } = useContext(FormContext);

  async function handleDelete(e) {
    if (confirm("Deseja deletar este item?")) {
      const res = await axios.delete(
        `${process.env.NEXT_PUBLIC_NECESSIDADE}/${id}`
      );
      console.log(res);
    }
  }

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
          event={(e) => {
            e.preventDefault();
            router.replace(routerEdit);
            setIdEditState(id);
          }}
          customClass="btnColor"
        />
        <Button
          icon={<RiDeleteBin6Fill />}
          text="Excluir"
          event={handleDelete}
          customClass="btnColor"
        />
      </div>
    </div>
  );
};
