import { Logo } from "../logo";
import { TermsOfUseModal } from "../termsOfUseModal";

import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Logo />

      <nav className={styles.nav} aria-label="Rodapé">
        <TermsOfUseModal />
      </nav>
    </footer>
  );
}
