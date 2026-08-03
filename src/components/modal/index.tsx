import styles from "./Modal.module.css";

export function Modal() {
  return (
    <div className={styles.container}>
      <h2>Termos de Uso</h2>
      <p>Esses são os termos de uso</p>
      <ul>
        <li>Não use</li>
      </ul>
    </div>
  );
}
