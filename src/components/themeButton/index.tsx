import { useEffect, useState } from "react";

import styles from "./themeButton.module.css";

const icons = {
  dark: {
    sun: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <title>Sol</title>
        <circle cx="12" cy="12" r="4"></circle>
        <path d="M12 2v2"></path>
        <path d="M12 20v2"></path>
        <path d="m4.93 4.93 1.41 1.41"></path>
        <path d="m17.66 17.66 1.41 1.41"></path>
        <path d="M2 12h2"></path>
        <path d="M20 12h2"></path>
        <path d="m6.34 17.66-1.41 1.41"></path>
        <path d="m19.07 4.93-1.41 1.41"></path>
      </svg>
    ),
    moon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2"
      >
        <title>Lua</title>
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
      </svg>
    ),
  },
  light: {
    sun: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2"
      >
        <title>Sol</title>
        <circle cx="12" cy="12" r="4"></circle>
        <path d="M12 2v2"></path>
        <path d="M12 20v2"></path>
        <path d="m4.93 4.93 1.41 1.41"></path>
        <path d="m17.66 17.66 1.41 1.41"></path>
        <path d="M2 12h2"></path>
        <path d="M20 12h2"></path>
        <path d="m6.34 17.66-1.41 1.41"></path>
        <path d="m19.07 4.93-1.41 1.41"></path>
      </svg>
    ),
    moon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <title>Lua</title>
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
      </svg>
    ),
  },
};

type ThemeType = "dark" | "light";

export function ThemeButton() {
  const [theme, setTheme] = useState<ThemeType>("dark");

  function handleToggleTheme() {
    const currentTheme = theme;
    let nextTheme: ThemeType = "light";

    if (currentTheme === "dark") {
      nextTheme = "light";
    }

    if (currentTheme === "light") {
      nextTheme = "dark";
    }

    document.documentElement.classList.remove(currentTheme);
    document.documentElement.classList.add(nextTheme);

    setTheme(nextTheme);
  }

  useEffect(() => {
    const hasDarkClass = document.documentElement.classList.contains("dark");
    const hasLightClass = document.documentElement.classList.contains("light");

    if (hasDarkClass) {
      setTheme("light");
    } else if (hasLightClass) {
      setTheme("dark");
    } else {
      const systemPrefersLight = window.matchMedia(
        "(prefers-color-scheme: light)",
      ).matches;
      setTheme(systemPrefersLight ? "light" : "dark");
    }
  }, []);

  return (
    <button
      type="button"
      onClick={handleToggleTheme}
      data-theme={theme}
      className={styles.button}
      title="Mudar o tema"
    >
      <div className={styles.box} />
      <span className={styles.sun}>{icons[theme].sun}</span>
      <span className={styles.moon}>{icons[theme].moon}</span>
    </button>
  );
}
