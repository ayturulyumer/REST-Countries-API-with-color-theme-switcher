import styles from "./cards.module.css";
import Card from "../Card/Card.jsx";
import ErrorMessage from "../ErrorMessage/ErrorMessage.jsx";
import Spinner from "../Spinner/Spinner.jsx";
import { useState, useEffect } from "react";
import * as countriesApi from "../../api/countriesApi.js";

export default function Cards({ selectedRegion, searchQuery }) {
  const [countries, setCountries] = useState([]);
  const [loading, setShowLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    setShowLoading(true);
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
        setError(error);
        setTimeout(() => setError(""), 2000);
      } finally {
        setShowLoading(false);
      }
    };

    fetchCountries();
  }, [selectedRegion]);

  useEffect(() => {
    setShowLoading(true);
    if (searchQuery !== "") {
      countriesApi
        .getCountryByQuery(searchQuery)
        .then((data) => setCountries(data))
        .catch(
          (error) => setError(error),
          setTimeout(() => setError(""), 2000)
        )
        .finally(() => {
          setShowLoading(false);
        });
    }
  }, [searchQuery]);

  return (
    <div className={styles.container}>
      {loading && <Spinner />}
      {error && <ErrorMessage error={error} />}
      {!error &&
        countries.map((country, index) => (
          <Card key={index} country={country} />
        ))}
    </div>
  );
}
