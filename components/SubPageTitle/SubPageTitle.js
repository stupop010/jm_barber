import styles from "./SubPageTitle.module.scss";

export default function SubPageTitle({ title, small }) {
  return (
    <div className={styles.title}>
      <small>{small}</small>
      <h2>{title}</h2>
      <hr />
    </div>
  );
}
