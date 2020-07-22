import Link from "next/link";

import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
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
          <Link href="/about">
            <a>About Us</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
      <div>&copy; Copyright 2020 | Stuart</div>
    </footer>
  );
}
