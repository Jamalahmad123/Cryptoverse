import { useContext } from "react";
import { HiSun, HiMoon } from "react-icons/hi";
import { ThemeContext } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const togglehandler = () =>
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));

  return (
    <button
      className="flex items-center gap-1 font-semibold"
      onClick={togglehandler}
    >
      {theme === "dark" ? (
        <>
          <HiSun className="text-primary text-2xl" /> <span>Light Mode</span>
        </>
      ) : (
        <>
          <HiMoon className="text-primary text-2xl" /> <span>Dark Mode</span>
        </>
      )}
    </button>
  );
};

export default ThemeToggle;
