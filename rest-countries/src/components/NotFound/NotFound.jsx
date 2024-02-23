import styles from "./notfound.module.css";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h2 className={styles.error}>404</h2>
      <p>PAGE NOT FOUND</p>
      <p>It looks like nothing was found at this location.</p>
      <Link to={"/"}>
      <button>BACK TO HOME</button>
      </Link>
    </div>
  );
}
