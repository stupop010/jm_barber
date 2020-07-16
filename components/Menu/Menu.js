import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./Menu.module.scss";

export default function Menu() {
  const router = useRouter();

  return (
    <div className={styles.menu}>
      <img src="logo.png" alt="Logo" />
      <ul>
        <li className={router.pathname === "/" ? styles.active : null}>
          <Link href="/">Home</Link>
        </li>
        <li className={router.pathname === "/service" ? styles.active : null}>
          <Link href="/service">Our Services</Link>
        </li>
        <li>
          <Link href="/">Our Barbers</Link>
        </li>
        <li>
          <Link href="/">Appointment</Link>
        </li>
        <li>
          <Link href="/">About Us</Link>
        </li>
        <li>
          <Link href="/">Contact</Link>
        </li>
      </ul>
    </div>
  );
}
