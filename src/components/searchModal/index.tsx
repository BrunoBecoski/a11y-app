import * as Dialog from "@radix-ui/react-dialog";

import { SearchButton } from "@/components/searchButton";
import { SearchInput } from "@/components/searchInput";
import styles from "./searchModal.module.css";

export function SearchModal() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <SearchButton />
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />

        <Dialog.Content className={styles.modal}>
          <div className={styles.header}>
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
                  strokeWidth="2"
                >
                  <title>x</title>
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
              </button>
            </Dialog.Close>
          </div>

          <div className={styles.content}>
            <Dialog.Description className={styles.description}>
              Uma galáxia de conteúdos para te ajudar.
            </Dialog.Description>

            <SearchInput />

            <div className={styles.categories}>
              <h3>Categorias</h3>

              <div>
                <a href="/acessibilidade">Acessibilidade</a>
                <a href="/acessibilidade-na-web">Acessibilidade na Web</a>
                <a href="/como-tornar-sites-acessiveis">
                  Como tornar sites acessíveis
                </a>
                <a href="/boas-praticas-de-acessibilidade">
                  Boas práticas de acessibilidade
                </a>
                <a href="/desenvolvimento-web-acessivel">
                  Desenvolvimento web acessível
                </a>
              </div>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
