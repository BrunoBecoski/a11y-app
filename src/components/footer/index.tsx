import { Logo } from "@/components/logo";
import { TermsOfUseModal } from "@/components/termsOfUseModal";

import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer>
      <div className={styles.content}>
        <Logo />

        <nav className={styles.nav} aria-label="Rodapé">
          <TermsOfUseModal />
        </nav>
      </div>

      <div className={styles.gradient} />
    </footer>
  );
}
