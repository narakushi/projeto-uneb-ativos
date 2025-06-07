import { Button } from "@/components/layout/button";
import { Container } from "@/components/layout/container";
import { Title } from "@/components/layout/title";
import styles from "./index.module.css";
import { useRouter } from "next/router";
import { useContext } from "react";
import { FormContext } from "@/context/FormContext";

export default function ChoiceType() {
  const router = useRouter();

  const { formRouter, setFormRouter } = useContext(FormContext);
  const navigate = (route) => {
    router.push("/registerOrg");
    setFormRouter(route);
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
