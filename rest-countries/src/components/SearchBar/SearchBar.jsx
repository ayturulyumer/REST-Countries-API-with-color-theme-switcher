import styles from "./searchbar.module.css";

export default function SearchBar() {
  return (
    <div className={styles.wrapper}>
      <form className={styles.search} method="POST">
        <i className="fa fa-search" />
        <input
          type="text"
          name="searchInput"
          placeholder="Search for a country..."
          // value={values.searchInput}
          // onChange={changeHandler}
        />
      </form>
    </div>
  );
}
