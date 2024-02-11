import SearchBar from "../SearchBar/SearchBar.jsx";
import Filter from "../Filter/Filter.jsx";
import styles from "./main.module.css";
import Cards from "../Cards/Cards.jsx";

export default function Main() {
  return (
    <>
      <div className={styles.upper}>
        <SearchBar />
        <Filter />
      </div>
      <div className={styles.main}>
       <Cards/>
      </div>
    </>
  );
}
