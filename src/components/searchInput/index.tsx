import { useRef, useState } from "react";

import styles from "./searchInput.module.css";

export function SearchInput() {
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className={styles.container} onClick={() => inputRef.current.focus()}>
      <input
        ref={inputRef}
        placeholder="Palavra-chave..."
        className={styles.input}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button
        type="button"
        className={styles.button}
        onClick={() => setValue("")}
      >
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
    </div>
  );
}
