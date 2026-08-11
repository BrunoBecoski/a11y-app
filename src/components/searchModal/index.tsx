import * as Dialog from "@radix-ui/react-dialog";

import { SearchButton } from "@/components/searchButton";
import styles from "./searchModal.module.css";

export function SearchModal() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <SearchButton />
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />

        <Dialog.Content className={styles.content}>
          <div className={styles.titleAndClose}>
            <Dialog.Title className={styles.title}>Buscar artigos</Dialog.Title>
            <Dialog.Close asChild>
              <button type="button" className={styles.closeButton}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <title>x</title>
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
              </button>
            </Dialog.Close>
          </div>

          <div className={styles.descriptionAndInput}>
            <Dialog.Description className={styles.description}>
              Uma galáxia de conteúdos para te ajudar.
            </Dialog.Description>

            <input placeholder="Palavra-chave..." />

            <div className={styles.categories}>
              <h2>Categorias</h2>

              <div>
                <button type="button">python</button>
                <button type="button">front-end</button>
                <button type="button">java</button>
                <button type="button">carreira</button>
                <button type="button">php</button>
                <button type="button">para empresas</button>
                <button type="button">ia para devs</button>
                <button type="button">javascript</button>
                <button type="button">docker</button>
                <button type="button">react</button>
                <button type="button">node.js</button>
                <button type="button">data analytics</button>
                <button type="button">soft-skills</button>
                <button type="button">teach lead</button>
              </div>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
