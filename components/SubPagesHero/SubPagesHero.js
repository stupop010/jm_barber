import Link from "next/link";

import styles from "./SubPagesHero.module.scss";

export default function SubPagesHero({ pageName }) {
  return (
    <section className={styles.services_hero}>
      <div className={styles.overlay}>
        <h1>{pageName}</h1>
        <ol className={styles.breadcrumb}>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>

          <li className={styles.active}>{pageName}</li>
        </ol>
        <img src="/mustache.svg" />
      </div>
    </section>
  );
}
