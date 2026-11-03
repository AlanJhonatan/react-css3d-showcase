import { type CD } from "../../data/cds";
import { CDCase } from "../CDCase";
import styles from "./styles.module.css";

interface CDDisplayProps {
  cd: CD;
}

export function CDDisplay(props: CDDisplayProps) {
  return (
    <div className={styles.displayContainer}>
      <div className={styles.info}>
        <h2>{props.cd?.name || ""}</h2>
        <h3>{props.cd?.artist || ""}</h3>
      </div>
      <CDCase variant="display" cd={props.cd} />
    </div>
  );
}
