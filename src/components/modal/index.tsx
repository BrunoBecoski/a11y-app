import type { RefObject } from "react";

import styles from "./Modal.module.css";

interface ModalProps {
  ref: RefObject<HTMLDivElement>;
}

export function Modal({ ref }: ModalProps) {
  return (
    <div
      id="modal-1"
      ref={ref}
      className={styles.container}
      role="dialog"
      aria-label="Termos de uso"
      aria-labelledby="modal-1_title"
      aria-describedby="modal-1_description"
      tabIndex={-1}
    >
      <h2 id="modal-1_title">Termos de Uso</h2>
      <p id="modal-1_description">Esses são os termos de uso</p>
      <ul>
        <li>Não use</li>
      </ul>
    </div>
  );
}
