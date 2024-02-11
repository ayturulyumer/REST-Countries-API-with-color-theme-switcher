import styles from "./card.module.css";

export default function Card({ country }) {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img
          src={country.flags.png}
          alt={country.flags.alt}
        />
      </div>
      <div className={styles.info}>
        <h2>{country.name.common}</h2>
        <p>
          <strong>Population:</strong> {country.population}
        </p>
        <p>
          <strong>Region:</strong> Europe
        </p>
        <p>
          <strong>Capital:</strong> {country.capital[0]}
        </p>
      </div>
      </div>
  );
}
