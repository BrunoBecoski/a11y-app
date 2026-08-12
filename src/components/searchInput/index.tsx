import styles from "./searchInput.module.css";

export function SearchInput() {
  return (
    <div className={styles.container}>
      <input placeholder="Palavra-chave..." className={styles.input} />

      <span className={styles.span}>Min. 3 caracteres</span>
    </div>
  );
}
