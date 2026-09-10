import { useRef, useState } from "react";

import styles from "./searchInput.module.css";

interface SearchInputProps {
  search: string;
  setSearch: (search: string) => void;
}

export function SearchInput({ search, setSearch }: SearchInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className={styles.container} onClick={() => inputRef.current.focus()}>
      <input
        ref={inputRef}
        placeholder="Palavra-chave..."
        className={styles.input}
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <button
        type="button"
        className={styles.button}
        onClick={() => setSearch("")}
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
