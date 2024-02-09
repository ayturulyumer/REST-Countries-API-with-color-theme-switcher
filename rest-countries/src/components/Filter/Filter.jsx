import { useState } from "react";
import styles from "./filter.module.css";

export default function Filter() {
  const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState("Filter by Region");

  const handleRegionClick = (region) => {
    setSelectedRegion(region);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`${styles.dropdown} ${isOpen ? styles.active : ""}`}
        onClick={toggleDropdown}
      >
        <div
          className={styles.select}
          name="selectedRegion"
          value={selectedRegion}
          onChange={handleRegionClick}
        >
          <span>{selectedRegion}</span>
          <i className="fa-solid fa-arrow-down"></i>
        </div>
        <input type="hidden" name="continent" />
        <ul className={styles["dropdown-menu"]}>
        {regions.map(region => (
            <li key={region} onClick={() => handleRegionClick(region)}>{region}</li>
          ))}
        </ul>
      </div>
    </>
  )
}
