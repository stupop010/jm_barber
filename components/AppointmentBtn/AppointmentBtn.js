import Link from "next/link";
import styles from "./AppointmentBtn.module.scss";

export default function AppointmentBtn() {
  return (
    <Link href="/appointment">
      <a className={styles.btn}>appointment now</a>;
    </Link>
  );
}
