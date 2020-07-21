import SubPageTitle from "../SubPageTitle";
import ContactForm from "../ContactForm";

import styles from "./Appointment.module.scss";

export default function Appointment() {
  return (
    <section>
      <SubPageTitle
        title="Book now"
        small="LET'S MAKE AN APPOINTMENT FOR YOUR LIFE"
      />
      <div className={styles.appointment_wrapper}>
        <div className={styles.opening_times}>
          <h3>Opening Times</h3>
          <ul>
            <li>
              <span>Monday</span>
              <span>9am-6pm</span>
            </li>
            <li>
              <span>Tuesday</span>
              <span>9am-6pm</span>
            </li>
            <li>
              <span>wednesday</span>
              <span>9am-6pm</span>
            </li>
            <li>
              <span>thursday</span>
              <span>9am-6pm</span>
            </li>
            <li>
              <span>friday</span>
              <span>9am-6pm</span>
            </li>
            <li>
              <span>saturday</span>
              <span>10am-4pm</span>
            </li>
            <li>
              <span>sunday</span>
              <span>closed</span>
            </li>
          </ul>
        </div>
        <div className={styles.form_wrapper}>
          <ContactForm btnText="Get Appointment" />
        </div>
      </div>
    </section>
  );
}
