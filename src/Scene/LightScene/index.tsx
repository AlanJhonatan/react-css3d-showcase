import styles from "./styles.module.css";

export function LightScene() {
  return (
    <div className={styles.lightSceneContainer}>
      <div className={styles.camera}>
        <div className={styles.scene}>
          <div className={styles.cube}>
            <div className={styles.cubeFace} />
            <div className={styles.cubeFace} />
            <div className={styles.cubeFace} />
            <div className={styles.cubeFace} />
            <div className={styles.cubeFace} />
            <div className={styles.cubeFace} />
          </div>

          <div className={styles.floor} />
        </div>
      </div>
    </div>
  );
}
