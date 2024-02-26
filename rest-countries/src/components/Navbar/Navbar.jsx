import * as styles from "./navbar.module.css";
import { Link } from "react-router-dom";
import ThemeContext from "../../contexts/ThemeContext.jsx";
import { useContext } from "react";
export default function Navbar() {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Link to={"/"} style={{ textDecoration: "none", color: "inherit" }}>
          <h1>Where in the world?</h1>
        </Link>
        <span onClick={toggleTheme}>
          <i
            className={
              theme === "light" ? "fa-regular fa-moon" : "fa-regular fa-sun"
            }
          ></i>
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </span>
      </div>
    </header>
  );
}
