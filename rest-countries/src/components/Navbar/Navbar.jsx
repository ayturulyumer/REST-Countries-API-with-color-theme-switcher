import styles from "./navbar.module.css"

export default function Navbar() {
  return (
    <header className={styles.header}>
        <div className={styles.wrapper}>
            <h1>Where in the world?</h1>
            <span><i className="fa-regular fa-moon"></i>Dark Mode</span>
        </div>
    </header>
  )
}
