import { useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import styles from "./Menu.module.scss";

export default function Menu() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  function toggle() {
    setOpen(!open);
  }

  return (
    <>
      <div className={clsx(styles.menu, open && styles.open)}>
        <img src="logo.png" alt="Logo" />
        <ul>
          <li
            className={router.pathname === "/" ? styles.active : null}
            onClick={toggle}
          >
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li
            className={router.pathname === "/service" ? styles.active : null}
            onClick={toggle}
          >
            <Link href="/service">
              <a>Our Services</a>
            </Link>
          </li>
          <li
            className={router.pathname === "/barbers" ? styles.active : null}
            onClick={toggle}
          >
            <Link href="/barbers">
              <a>Our Barbers</a>
            </Link>
          </li>
          <li
            className={
              router.pathname === "/appointment" ? styles.active : null
            }
            onClick={toggle}
          >
            <Link href="/appointment">
              <a>Appointment</a>
            </Link>
          </li>
          <li
            className={router.pathname === "/about" ? styles.active : null}
            onClick={toggle}
          >
            <Link href="/about">
              <a>About Us</a>
            </Link>
          </li>
          <li
            className={router.pathname === "/contact" ? styles.active : null}
            onClick={toggle}
          >
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.hamburger} onClick={toggle}>
        {open ? (
          <FontAwesomeIcon icon={faTimes} className={styles.icon} />
        ) : (
          <FontAwesomeIcon icon={faBars} className={styles.icon} />
        )}
      </div>
    </>
  );
}
