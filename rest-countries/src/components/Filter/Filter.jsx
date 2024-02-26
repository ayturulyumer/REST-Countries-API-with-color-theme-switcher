import { useState } from "react";
import styles from "./filter.module.css";

export default function Filter({ onRegionChange, selectedRegion }) {
  const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];
  const [isOpen, setIsOpen] = useState(false);



  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`${styles.dropdown}  ${isOpen ? styles.active : "" }` } data-testid="filter"
        onClick={toggleDropdown}
      >
        <div
          className={styles.select}
          name="selectedRegion"
          value={selectedRegion}
          onChange={onRegionChange}
        >
          <span>{selectedRegion}</span>
          <i className="fa-solid fa-arrow-down"></i>
        </div>
        <input type="hidden" name="continent" />
        <ul className={styles["dropdown-menu"]}>
          {regions.map((region) => (
            <li key={region} onClick={() => onRegionChange(region)}>
              {region}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
