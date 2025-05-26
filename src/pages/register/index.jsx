import Image from "next/image";
import styles from "./index.module.css";
import imageSingUp from "@/../public/singup-cuate.svg";
import { Container } from "@/components/layout/container";
import { Form } from "@/components/layout/form";
import Link from "next/link";

export default function Register() {
  const inputs = [
    { label: "E-mail", type: "email" },
    { label: "Senha", type: "password" },
    { label: "Confirme sua senha", type: "password" },
  ];

  return (
    <main className={styles.containerSingUp}>
      <Container>
        <div className={styles.containerImage}>
          <Image
            width={580}
            height={700}
            src={imageSingUp}
            alt="Imagem de registro"
          />
        </div>
        <div className={styles.containerFormSing}>
          <Form
            title="Cadastre-se"
            inputs={inputs}
            descBtn1="Fazer cadastro"
            descBtn2="Registrar com o Google"
          />
          <Link href="/login" className={styles.linkLogin}>
            Já tem uma conta? Faça login
          </Link>
        </div>
      </Container>
    </main>
  );
}
