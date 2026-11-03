import { CDCase } from "../components/CDCase";
import styles from "./styles.module.css";

export function Showcase() {
  return (
    <div className={styles.showcaseContainer}>
      <h1 style={{ marginBottom: "50px" }}>showcase</h1>

      {/* <Cube3D /> */}
      <div className={styles.discListContainer}>
        <CDCase variant="list-item" />
        <CDCase variant="list-item" />
        <CDCase variant="list-item" />
        <CDCase variant="list-item" />
      </div>

      <div style={{ marginTop: "200px", backgroundColor: "#dcdcdc" }}>
        <CDCase variant="list-item" />
      </div>

      <div style={{ marginTop: "200px", backgroundColor: "#dcdcdc" }}>
        <CDCase variant="display" />
      </div>
    </div>
  );
}
