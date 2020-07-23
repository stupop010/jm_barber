import { useState, useRef, useEffect } from "react";
import SubPageTitle from "../SubPageTitle";
import styles from "./Testimonials.module.scss";

const size = 600;

export default function Testimonials() {
  const [counter, setCounter] = useState(0);
  const slideRef = useRef(null);

  useEffect(() => {
    // slideRef.current.style.transform = `translateX(${-size * counter}px)`;
  }, [slideRef, counter]);

  function next() {
    if (counter === 2) return;
    setCounter(counter + 1);
  }

  function prev() {
    if (counter === 0) return;
    setCounter(counter - 1);
  }

  return (
    <section className={styles.testimonials}>
      <SubPageTitle
        small="let's see our testimonials"
        title="happy testimonials"
        white
      />
      <div className={styles.carousel_container}>
        <div className={styles.carousel_wrapper}>
          <div className={styles.carousel} ref={slideRef}>
            <div className={styles.carousel__slide}>
              <div className={styles.card}>
                <h4>
                  <span>"</span> Wonderful Support!
                </h4>
                <p>
                  They have got my project on time with the competition with a
                  sed highly skilled, and experienced & professional team.
                </p>
              </div>
              <div className={styles.testimonial_person}>
                <div className={styles.person}>
                  <h5>James Fernando</h5>
                  <p>- Manger of Racer</p>
                </div>
                <div className={styles.avatar}>
                  <img src="/person3.jpg" alt="James Fernando" />
                </div>
              </div>
            </div>
            <div className={styles.carousel__slide}>
              <div className={styles.card}>
                <h4>
                  <span>"</span> Awesome Service!
                </h4>
                <p>
                  Explain to you how all this mistaken idea of denouncing
                  pleasure and praising pain was born and i will give you
                  completed.
                </p>
              </div>
              <div className={styles.testimonial_person}>
                <div className={styles.person}>
                  <h5>Jacques Philips</h5>
                  <p>- Designer</p>
                </div>
                <div className={styles.avatar}>
                  <img src="/person4.jpg" alt="James Fernando" />
                </div>
              </div>
            </div>
            <div className={styles.carousel__slide}>
              <div className={styles.card}>
                <h4>
                  <span>"</span> Great & Talented Team!
                </h4>
                <p>
                  The master-builder of human happiness no one rejects, dislikes
                  avoids pleasure itself, because it is very pursue pleasure.
                </p>
              </div>
              <div className={styles.testimonial_person}>
                <div className={styles.person}>
                  <h5>Venanda Mercy</h5>
                  <p>- Newyork City</p>
                </div>
                <div className={styles.avatar}>
                  <img src="/person5.jpg" alt="James Fernando" />
                </div>
              </div>
            </div>
            <div className={styles.carousel__slide}>
              <div className={styles.card}>
                <h4>
                  <span>"</span> Great & Talented Team!
                </h4>
                <p>
                  The master-builder of human happiness no one rejects, dislikes
                  avoids pleasure itself, because it is very pursue pleasure.
                </p>
              </div>
              <div className={styles.testimonial_person}>
                <div className={styles.person}>
                  <h5>Venanda Mercy</h5>
                  <p>- Newyork City</p>
                </div>
                <div className={styles.avatar}>
                  <img src="/person5.jpg" alt="James Fernando" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.button_next} onClick={next} />
        <div className={styles.button_prev} onClick={prev} />
      </div>
    </section>
  );
}
