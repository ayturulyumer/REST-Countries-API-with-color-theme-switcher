import styles from "./cards.module.css";
import Card from "../Card/Card.jsx";
import { useState, useEffect } from "react";
import * as countriesApi from "../../api/countriesApi.js";

export default function Cards({ selectedRegion, searchQuery }) {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        let result;
        if (selectedRegion === "Filter by Region") {
          result = await countriesApi.getAllCountries();
        } else {
          result = await countriesApi.getCountriesByRegion(selectedRegion);
        }
        setCountries(result);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCountries();
  }, [selectedRegion]);

  useEffect(() => {
    if (searchQuery !== "") {
      countriesApi
        .getCountryByQuery(searchQuery)
        .then((data) => setCountries(data))
        .catch((err) => console.log(err));
    }
  }, [searchQuery]);

  console.log(countries)

  return (
    <div className={styles.container}>
      {countries.map((country, index) => (
        <Card key={index} country={country} />
      ))}
    </div>
  );
}
