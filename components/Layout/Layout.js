import Head from "next/head";

import Menu from "../Menu";
import Testimonials from "../Testimonials/Testimonials";
import Footer from "../Footer";

import styles from "./Layout.module.scss";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <main className={styles.layout}>
        <Menu />
        <div className={styles.section}>
          {children}
          <Testimonials />
          <Footer />
        </div>
      </main>
    </div>
  );
}
