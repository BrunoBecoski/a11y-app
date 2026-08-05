import * as Dialog from "@radix-ui/react-dialog";

import styles from "./TermsOfUseModal.module.css";

export function TermsOfUseModal() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button type="button">Termos de uso</button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />

        <Dialog.Content className={styles.content}>
          <Dialog.Title>Termos de uso</Dialog.Title>

          <Dialog.Description>
            <p>Esses são os termos de uso</p>
            <ul>
              <li>Não use</li>
            </ul>
          </Dialog.Description>

          <Dialog.Close asChild>
            <button type="button" className={styles.closeButton}>
              Fechar
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
