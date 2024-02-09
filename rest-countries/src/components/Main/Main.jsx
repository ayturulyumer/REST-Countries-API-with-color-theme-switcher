import SearchBar from "../SearchBar/SearchBar.jsx";
import Filter from "../Filter/Filter.jsx";
import styles from "./main.module.css";

export default function Main() {
  return (
    <main className={styles.container}>
      <SearchBar />
      <Filter/>
    </main>
  );
}
