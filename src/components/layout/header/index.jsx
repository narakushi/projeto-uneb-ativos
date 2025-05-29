import Image from "next/image";
import logo from "@/../public/logo-amico.svg";
import Link from "next/link";
import styles from "./index.module.css";
import { Container } from "../container";

export function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <Link href="/" className={styles.logoHeader}>
          <Image
            priority
            src={logo}
            alt="Logo temporaria do site"
            width={100}
            height={100}
          />
        </Link>
      </Container>
    </header>
  );
}
