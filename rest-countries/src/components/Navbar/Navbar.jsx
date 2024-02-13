import styles from "./navbar.module.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Link to={"/"} style={{ textDecoration: "none", color: "inherit" }}>
          <h1>Where in the world?</h1>
        </Link>
        <span>
          <i className="fa-regular fa-moon"></i>Dark Mode
        </span>
      </div>
    </header>
  );
}
