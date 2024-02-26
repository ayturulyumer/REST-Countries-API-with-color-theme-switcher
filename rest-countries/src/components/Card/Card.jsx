import styles from "./card.module.css";
import { Link } from "react-router-dom";
import { formatPopulation } from "../../utils/formatPopulation.js";

export default function Card({ country }) {
  return (
    <div className={styles.container} data-testid={`card-${country.name.common}`}>
      <div className={styles.image} data-testid={`card-${country.name.common}-image`}>
        <Link
          to={`/details/${country.name.common}`}
          data-testid={`card-${country.name.common}-link`}
        >
          <img src={country.flags.png} alt={country.flags.alt} data-testid={`card-${country.name.common}-flag`} />
        </Link>
      </div>
      <div className={styles.info}>
        <h2>{country.name.common}</h2>
        <p data-testid="population">
          <strong>Population:</strong> {formatPopulation(country.population)}
        </p>
        <p data-testid="region">
          <strong>Region:</strong> {country.region}
        </p>
        <p data-testid="capital">
          <strong>Capital:</strong>{" "}
          {country.capital === undefined ? "undefined" : country.capital[0]}
        </p>
      </div>
    </div>
  );
}
