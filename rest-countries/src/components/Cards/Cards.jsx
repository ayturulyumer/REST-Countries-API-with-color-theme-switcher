import styles from "./cards.module.css";
import Card from "../Card/Card.jsx";
import { useState, useEffect } from "react";
import * as countriesApi from "../../api/countriesApi.js";

export default function Cards({ selectedRegion }) {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    countriesApi
      .getCountries()
      .then((result) => setCountries(result))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={styles.container}>
      {countries.map((country, index) => (
        <Card key={index} country={country} />
      ))}
    </div>
  );
}
