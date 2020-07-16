import styles from "./HomeHero.module.scss";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <h1>J.M Barber Shop</h1>
        <h2>in london</h2>
        <p> KEEPING MEN HANDSOME SINCE… WE OPENED</p>
        <a>appointment now</a>
      </div>
    </section>
  );
}
