import { createContext, useState} from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Get the theme from local storage, if it exists
    const storedTheme = localStorage.getItem("theme");
    // Return the stored theme, or "light" if no theme is stored
    return storedTheme ? storedTheme : "light";
  });

  const toggleTheme = () => {
    setTheme((curr) => {
      const newTheme = curr === "light" ? "dark" : "light";
      // Save the new theme preference to local storage
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  const value = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContext;
