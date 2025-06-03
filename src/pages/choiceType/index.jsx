import { Button } from "@/components/layout/button";
import { Container } from "@/components/layout/container";
import { Title } from "@/components/layout/title";
import styles from "./index.module.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ChoiceType() {
  const router = useRouter();

  const navigate = (route) => {
    router.push({
      pathname: "/registerOrg",
      query: {
        route,
      },
    });
  };

  return (
    <main className={styles.containerChoice}>
      <Container>
        <Title text="Você deseja cadastrar uma..." />
        <div className={styles.containerBtnChoice}>
          <Button
            text="Demanda ou necessidade"
            customClass="btnColor"
            event={() => navigate("/requesting")}
          />
          <Button
            text="Solução ou serviço ofertado"
            event={() => navigate("/solution")}
          />
        </div>
      </Container>
    </main>
  );
}
