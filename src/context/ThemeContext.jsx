import { useState, useEffect, createContext } from "react";

const getInitialTheme = () => {
  if (typeof window !== "undefined" && localStorage) {
    const userPrefs = window.localStorage.getItem("color-theme");
    if (typeof userPrefs === "string") {
      return userPrefs;
    }

    const userMedia = window.matchMedia("prefers-color-scheme: dark");
    if (userMedia.matches) {
      return "dark";
    }
  }
  return "light";
};

export const ThemeContext = createContext();

export const ThemeProvider = ({ initialTheme, children }) => {
  const [theme, setTheme] = useState(getInitialTheme);

  const rawSetTheme = (theme) => {
    const root = document.documentElement;
    const isDark = theme === "dark";

    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(theme);

    localStorage.setItem("color-theme", theme);
  };

  if (initialTheme) {
    rawSetTheme(initialTheme);
  }

  useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
