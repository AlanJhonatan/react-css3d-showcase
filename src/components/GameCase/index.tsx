import styles from "./styles.module.css";

export function GameCase() {
  return (
    <div className={styles.gameCaseContainer}>
      <div>
        <div className={`${styles.face} ${styles.front}`}></div>
        <div className={`${styles.face} ${styles.back}`}></div>
      </div>
    </div>
  );
}
