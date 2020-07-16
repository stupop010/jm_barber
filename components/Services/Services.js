import styles from "./Services.module.scss";

export default function Services() {
  return (
    <section>
      <div className={styles.title}>
        <small>welcome to the our barber shop</small>
        <h2>Our services</h2>
        <hr />
      </div>
      <div className={styles.card_container}>
        <div className={styles.card}>
          <div>
            <h4>cut a long story short</h4>
            <p>a sharp and stylish haircut</p>
            <ul>
              <li>walk-in price: £34.00</li>
              <li>appointment price: £38.00</li>
            </ul>
          </div>
          <img src="/services1.jpg"></img>
        </div>
        <div className={styles.card}>
          <div>
            <h4>cut a long story short</h4>
            <p>a sharp and stylish haircut</p>
            <ul>
              <li>walk-in price: £34.00</li>
              <li>appointment price: £38.00</li>
            </ul>
          </div>
          <img src="/services1.jpg"></img>
        </div>
        <div className={styles.card}>
          <div>
            <h4>cut a long story short</h4>
            <p>a sharp and stylish haircut</p>
            <ul>
              <li>walk-in price: £34.00</li>
              <li>appointment price: £38.00</li>
            </ul>
          </div>
          <img src="/services1.jpg"></img>
        </div>
        <div className={styles.card}>
          <div>
            <h4>cut a long story short</h4>
            <p>a sharp and stylish haircut</p>
            <ul>
              <li>walk-in price: £34.00</li>
              <li>appointment price: £38.00</li>
            </ul>
          </div>
          <img src="/services1.jpg"></img>
        </div>
      </div>
    </section>
  );
}
