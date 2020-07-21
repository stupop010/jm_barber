import AppointmentBtn from "../AppointmentBtn";
import SubPageTitle from "../SubPageTitle";

import styles from "./Services.module.scss";

export default function Services() {
  return (
    <section className={styles.services}>
      <SubPageTitle
        small="welcome to the our barber shop"
        title="Our services"
      />
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
            <h4>the ful j.m service</h4>
            <p>
              Combine your choice of haircut with a beard design or expert trim.
            </p>
            <ul>
              <li>walk-in price: £56.00</li>
              <li>appointment price: £62.00</li>
            </ul>
          </div>
          <img src="/service2.jpg"></img>
        </div>
        <div className={styles.card}>
          <div>
            <h4>the tommy 'n' turkish</h4>
            <p>traditional bread trim or shape up.</p>
            <ul>
              <li>walk-in price: £29.00</li>
              <li>appointment price: £33.00</li>
            </ul>
          </div>
          <img src="/service3.jpg"></img>
        </div>
        <div className={styles.card}>
          <div>
            <h4>brow threading</h4>
            <p>
              Discover the luxury of a well-crafted brow with Ted’s brow
              threading.
            </p>
            <ul>
              <li>walk-in price: £14.00</li>
              <li>appointment price: £14.00</li>
            </ul>
          </div>
          <img src="/service4.jpeg"></img>
        </div>
      </div>
      <div className={styles.btn}>
        <AppointmentBtn />
      </div>
    </section>
  );
}
