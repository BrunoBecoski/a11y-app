import { Logo } from "@/components/logo";
import { SearchModal } from "@/components/searchModal";

import styles from "./header.module.css";
import { ThemeButton } from "../themeButton";

export function Header() {
  return (
    <header className={styles.container} aria-label="Cabeçalho">
      <div className={styles.content}>
        <div className={styles.logoAndSearch}>
          <Logo />

          <SearchModal />
        </div>

        <ThemeButton />
      </div>
    </header>
  );
}
