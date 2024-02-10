import SearchBar from "../SearchBar/SearchBar.jsx";
import Filter from "../Filter/Filter.jsx";
import styles from "./main.module.css";
import Card from "../Card/Card.jsx";

export default function Main() {
  return (
    <>
      <div className={styles.upper}>
        <SearchBar />
        <Filter />
      </div>
      <div className={styles.main}>
       <Card/>
      </div>
    </>
  );
}
