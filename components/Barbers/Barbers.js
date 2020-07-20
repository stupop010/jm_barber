import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

import styles from "./Barbers.module.scss";

export default function Barbers() {
  return (
    <section className={styles.barbers}>
      <div className={styles.title}>
        <small>MEET OUR BABRER TEAM</small>
        <h2>our barbers</h2>
        <hr />
      </div>
      <div className={styles.barbers_wrapper}>
        {barbers.map((barber) => {
          return (
            <div className={styles.card} key={barber.name}>
              <div className={styles.img}>
                <img src={barber.img} alt={barber.name} />
                <div className={styles.img_overlay}>
                  <FontAwesomeIcon icon={faFacebook} className={styles.icon} />
                  <FontAwesomeIcon
                    icon={faTwitterSquare}
                    className={styles.icon}
                  />
                  <FontAwesomeIcon
                    icon={faInstagramSquare}
                    className={styles.icon}
                  />
                  <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
                </div>
              </div>
              <h2>{barber.name}</h2>
              <h4>{barber.title}</h4>
              <p>{barber.bio}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

const barbers = [
  {
    name: "James Man",
    img: "/barber1.jpg",
    title: "The Founder",
    bio:
      "Hello guys, I am James from Sirbistana. I am senior art director and founder of The M.J Barber Shop Company.",
  },
  {
    name: "Conor Parrish",
    img: "/barber2.jpg",
    title: "The Barber",
    bio:
      "I’m Conor and I’ve been a barber at J.M Barbers for six years. Originally born and raised in Oxford, I moved to London in 2014 looking for a new adventure. Working at Barbershop has been my favorite adventure so far – I love building strong connections with my clients and helping them express their personalities through their appearance!",
  },
  {
    name: "Brooke Kirkpatrick",
    img: "/barber3.jpg",
    title: "The Barber",
    bio:
      "Brooke is a barber who has worked at Barbershop for the past five years. He specializes in straight razor shaves for those who like a more traditional shave. Brooke creates a relaxed environment for his clients and looks forward to making you look and feel your best.",
  },
];
