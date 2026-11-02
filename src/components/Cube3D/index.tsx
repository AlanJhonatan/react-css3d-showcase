import styles from "./styles.module.css";

export function Cube3D() {
  return (
    <div className={styles.scene}>
      <div className={styles.cube}>
        <div className={`${styles.face} ${styles.first}`}>
          <span>1</span>
        </div>

        <div className={`${styles.face} ${styles.second}`}>
          <span>2</span>
        </div>

        <div className={`${styles.face} ${styles.third}`}>
          <span>3</span>
        </div>

        <div className={`${styles.face} ${styles.fourth}`}>
          <span>4</span>
        </div>

        <div className={`${styles.face} ${styles.fifth}`}>
          <span>5</span>
        </div>

        <div className={`${styles.face} ${styles.sixth}`}>
          <span>6</span>
        </div>
      </div>
    </div>
  );
}
