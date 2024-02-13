import styles from "./details.module.css";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import * as countriesApi from "../../api/countriesApi.js";
import { getObjProperties } from "../../utils/getObjProperties.js";
import { formatPopulation } from "../../utils/formatPopulation.js";
import { extractLanguageNames } from "../../utils/extractLanguageNames.js";

export default function Details() {
  const [country, setCountry] = useState([]);
  const { countryName } = useParams();
  const navigateTo = useNavigate();

  // Get First Property of Native Name Object
  let nativeName = "";
  if (country.length > 0 && country[0]?.name?.nativeName) {
    nativeName = getObjProperties(country[0].name.nativeName, 1);
  }

  // Format Population
  let population = "";
  if (country[0]?.population !== undefined) {
    population = formatPopulation(country[0].population);
  }

  // Get First Currency of Currencies Obj
  let currencies = "";
  if (country[0]?.currencies !== undefined) {
    currencies = getObjProperties(country[0].currencies, 1);
  }

  // Join languages by comma if there are multiple
  let languages = "";
  if (country[0]?.languages !== undefined) {
    languages = extractLanguageNames(country[0].languages);
  }

  useEffect(() => {
    countriesApi
      .getCountry(countryName)
      .then((result) => setCountry(result))
      .catch((err) => console.log(err));
  }, [countryName]);

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <button className={styles.back} onClick={() => navigateTo("/")}>
          <i className="fa-solid fa-arrow-left" />
          Back
        </button>
        <div className={styles.image}>
          <img src={country[0]?.flags?.png} alt={country[0]?.flags?.alt} />
        </div>
      </div>
      <div className={styles.info}>
        <h2>{country[0]?.name?.common}</h2>
        <div className={styles.details}>
          <div className={styles.maininfo}>
            <p>
              <strong>Native Name:</strong> {nativeName[0]?.common}
            </p>
            <p>
              <strong>Population:</strong> {population}
            </p>
            <p>
              <strong>Region:</strong> {country[0]?.region}
            </p>
            <p>
              <strong>Sub Region:</strong>{" "}
              {country[0]?.subregion === "" ? "None" : country[0]?.subregion}
            </p>
            <p>
              <strong>Capital:</strong>{" "}
              {country[0]?.capital.length === 0 ? "None" : country[0]?.capital}
            </p>
          </div>
          <div className={styles.secondaryinfo}>
            <p>
              <strong>Top Level Domain:</strong> {country[0]?.tld}
            </p>
            <p>
              <strong>Currencies:</strong>
              {currencies === undefined ? "None" : currencies[0]?.name}
            </p>
            <p>
              <strong>Languages:</strong> {languages}
            </p>
          </div>
          <div className={styles.borders}>
            <p>
              <strong>Border Countries:</strong>
            </p>
            <div className={styles.countriescontainer}>
              {country[0]?.borders.length === 0 ? (
                <span>None</span>
              ) : (
                country[0]?.borders.map((border) => (
                  <span key={border}>{border}</span>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
