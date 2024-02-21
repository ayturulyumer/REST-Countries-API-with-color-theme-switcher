import { createContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
    // Optionally, save theme preference to local storage
  };


  const value = {
    theme,
    toggleTheme,
  };


  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
