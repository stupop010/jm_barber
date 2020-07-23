import styles from "./SubPageTitle.module.scss";

export default function SubPageTitle({ title, small, white }) {
  return (
    <div className={styles.title} style={{ color: white ? "white" : "black" }}>
      <small>{small}</small>
      <h2>{title}</h2>
      <hr style={{ borderColor: white ? "white" : "black" }} />
    </div>
  );
}
