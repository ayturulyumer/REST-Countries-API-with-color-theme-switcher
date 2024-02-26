import SearchBar from "../SearchBar/SearchBar.jsx";
import Filter from "../Filter/Filter.jsx";
import styles from "./main.module.css";
import Cards from "../Cards/Cards.jsx";

import { useState } from "react";

export default function Main() {
  const [selectedRegion, setSelectedRegion] = useState("Filter by Region");
  const [searchQuery, setSearchQuery] = useState("");

  const onSearchHandler = async (data) => {
    const { searchInput } = data;
    setSearchQuery(searchInput);
  };

  const handleRegionChange = (region) => {
    setSelectedRegion(region);
  };

  return (
    <>
      <div className={styles.upper}>
        <SearchBar  onSearchChange={onSearchHandler} />
        <Filter
          onRegionChange={handleRegionChange}
          selectedRegion={selectedRegion}
        />
      </div>
      <div className={styles.main}>
        <Cards
          selectedRegion={selectedRegion}
          searchQuery={searchQuery}
        />
      </div>
    </>
  );
}
