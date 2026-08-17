import styles from "./searchButton.module.css";

interface SearchButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function SearchButton(props: SearchButtonProps) {
  return (
    <button type="button" className={styles.container} {...props}>
      <svg
        className={styles.icon}
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <title>Lupa</title>
        <circle cx="11" cy="11" r="8"></circle>
        <path d="m21 21-4.3-4.3"></path>
      </svg>
      <span className={styles.label}>Buscar...</span>
    </button>
  );
}
