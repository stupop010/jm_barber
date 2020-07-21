import SubPageTitle from "../SubPageTitle";

import styles from "./About.module.scss";

export default function About() {
  return (
    <section>
      <SubPageTitle title="15 years of experience" small="unique story" />
      <div className={styles.about}>
        <p>
          THE J.M BARBER SHOP MAYFAIR is located in London’s best kept secret,
          “Shepherd Market”, in a wonderfully charming small square hidden
          between Piccadilly and Curzon Street in the exclusive Borough of
          Mayfair. Mayfair itself is named after the infamous 15 days fair that
          took place on the site that is now known as Shepherd Market. It was
          developed in 1735-46 by Edward Shepherd. It comprises of a number of
          small side streets with a variety of boutique shops, restaurants and
          impressive pubs.
        </p>
        <p>
          This is where James Man decided would be the ideal place for his
          barber shop. The Barber Shop Mayfair was opened by James in the early
          70’s which he continued to run throughout his distinguished career.
        </p>
        <p>
          James was well respected within the local community. Whilst running
          the barber shop, James also worked in the exclusive white’s
          gentlemen’s club in London, where he was proudly elected head barber
          socialising and working alongside some of london’s most influential
          people. He was famous for his warmth and down to earth personality.
        </p>
        <p>
          James’s dear friend and colleague, Conor Parrish has continued with
          his legacy and with her amazing team, who are very experienced in all
          aspects of barbering from classic to modern cuts and shaves, the place
          retains the warmth and friendliness that The Barber Shop Mayfair has
          always been prized for.
        </p>
        <p>
          Gentlemen from all corners of London and further a field flock to our
          unique men’s salon for the pampering and high level of care they know
          they will receive. Customers are confident that they can count on our
          discretion and a professional service. They know they will leave our
          salon feeling and looking their best.
        </p>
        <p>
          We aim to be your home from home, where you always feel special and
          welcome within our relaxed, unhurried surroundings, all designed to
          ensure your total relaxation.
        </p>
      </div>
    </section>
  );
}
