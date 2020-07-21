import SubPageTitle from "../SubPageTitle";
import ContactForm from "../ContactForm";

import styles from "./Contact.module.scss";

const map =
  "https://maps.googleapis.com/maps/api/staticmap?center=51.5136952,-0.1348066&zoom=18&size=400x400&key=AIzaSyAcklHGLaqLqlu5Va7gV7VWD82YbHmZpM0";

export default function Contact() {
  return (
    <section className={styles.contact}>
      <SubPageTitle
        small="LET'S MAKE AN CONTACT FOR YOUR LIFE"
        title="Contact"
      />

      <div className={styles.contact_wrapper}>
        <div className={styles.address}>
          <img src={map} />
          <ul>
            <li>
              <span>J.M Barbers</span>
            </li>
            <li>33 D'Arblay St</li>
            <li></li>
            Soho
            <li>London</li>
            <li>W1F 8EU</li>
          </ul>
        </div>
        <div>
          <ContactForm btnText="Submit" />
        </div>
      </div>
    </section>
  );
}
