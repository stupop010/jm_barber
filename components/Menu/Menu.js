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
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li className={router.pathname === "/service" ? styles.active : null}>
          <Link href="/service">
            <a>Our Services</a>
          </Link>
        </li>
        <li>
          <Link href="/barbers">
            <a>Our Barbers</a>
          </Link>
        </li>
        <li>
          <Link href="/appointment">
            <a>Appointment</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>About Us</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
