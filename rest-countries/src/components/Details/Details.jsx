import styles from "./details.module.css";

export default function Details() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <button className={styles.back}>
          <i className="fa-solid fa-arrow-left" />
          Back
        </button>
        <div className={styles.image}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Flag_of_Belgium_%28civil%29.svg/2560px-Flag_of_Belgium_%28civil%29.svg.png"
            alt="flag"
          />
        </div>
      </div>
      <div className={styles.info}>
        <h2>Belgium</h2>
        <div className={styles.details}>
          <div className={styles.maininfo}>
            <p>
              <strong>Native Name:</strong> Belgie
            </p>
            <p>
              <strong>Population:</strong> 123
            </p>
            <p>
              <strong>Region:</strong> Europe
            </p>
            <p>
              <strong>Sub Region:</strong> Western Europe
            </p>
            <p>
              <strong>Capital:</strong> Sofia
            </p>
          </div>
          <div className={styles.secondaryinfo}>
            <p>
              <strong>Top Level Domain:</strong> .be
            </p>
            <p>
              <strong>Currencies:</strong> Euro
            </p>
            <p>
              <strong>Languages:</strong> Dutch,French,German
            </p>
          </div>
          <div className={styles.borders}>
            <p>
              <strong>Border Countries:</strong>
            </p>
            <div className={styles.countriescontainer}>
              <span>France</span>
              <span>Germany</span>
              <span>Netherlands</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
