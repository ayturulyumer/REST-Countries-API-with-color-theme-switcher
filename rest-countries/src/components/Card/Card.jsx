import styles from "./card.module.css";

export default function Card() {
  return (
    <>
    <div className={styles.container}>
      <div className={styles.image}>
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png"
          alt=""
        />
      </div>
      <div className={styles.info}>
        <h2>United States of America</h2>
        <p>
          <strong>Population:</strong> 93,273,900
        </p>
        <p>
          <strong>Region:</strong> Europe
        </p>
        <p>
          <strong>Capital:</strong> Sofia
        </p>
      </div>
    </div>
    </>
    
  );
}
