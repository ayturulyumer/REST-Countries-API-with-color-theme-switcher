import styles from "./card.module.css";
import { Link } from "react-router-dom";
import { formatPopulation } from "../../utils/formatPopulation.js";

export default function Card({ country }) {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Link to={`/details/${country.name.common}`}>
          <img src={country.flags.png} alt={country.flags.alt} />
        </Link>
      </div>
      <div className={styles.info}>
        <h2>{country.name.common}</h2>
        <p>
          <strong>Population:</strong> {formatPopulation(country.population)}
        </p>
        <p>
          <strong>Region:</strong> {country.region}
        </p>
        <p>
          <strong>Capital:</strong> {country.capital === undefined ? "undefined" : country.capital[0]}
        </p>
      </div>
    </div>
  );
}
