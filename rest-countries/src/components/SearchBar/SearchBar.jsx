import styles from "./searchbar.module.css";

export default function SearchBar({ onSearchChange }) {
  const changeHandler = (event) => {
    onSearchChange(event.target.value);
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.search} method="POST">
        <i className="fa fa-search" />
        <input
          type="text"
          name="searchInput"
          placeholder="Search for a country..."
          onChange={changeHandler}
        />
      </form>
    </div>
  );
}
