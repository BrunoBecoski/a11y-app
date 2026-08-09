import { Logo } from "@/components/logo";

import styles from "./Footer.module.css";

export function Footer() {
  function handleScrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <footer aria-label="Rodapé" className={styles.container}>
      <div className={styles.line} />

      <div className={styles.content}>
        <Logo withLabel={false} />

        <button
          type="button"
          onClick={handleScrollTop}
          className={styles.button}
        >
          Voltar ao topo
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <title>Seta para cima</title>
            <path d="m5 12 7-7 7 7"></path>
            <path d="M12 19V5"></path>
          </svg>
        </button>
      </div>
    </footer>
  );
}
