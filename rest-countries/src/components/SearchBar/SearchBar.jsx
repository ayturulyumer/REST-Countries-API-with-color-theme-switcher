import styles from "./searchbar.module.css";
import { useForm } from "../../hooks/useForm.js";

export default function SearchBar({ onSearchChange }) {
 

  const { values, changeHandler, onSubmit } = useForm(
    {
      searchInput: "",
    },
    onSearchChange
  );

  return (
    <div className={styles.wrapper}>
      <form className={styles.search} method="POST" onSubmit={onSubmit}>
        <i className="fa fa-search"  onClick={onSubmit}/>
        <input
          type="text"
          name="searchInput"
          placeholder="Search for a country..."
          value={values.searchInput}
          onChange={changeHandler}
        />
      </form>
    </div>
  );
}
