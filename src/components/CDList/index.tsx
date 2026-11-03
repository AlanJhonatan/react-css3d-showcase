import { CDs } from "../../data/cds";
import { CDCase } from "../CDCase";
import styles from "./styles.module.css";

interface CDListProps {
  handleClick: (cd: CD) => void;
}

export function CDList({ handleClick }: CDListProps) {
  return (
    <div className={styles.listContainer}>
      {CDs.map((cd, idx) => (
        <div
          key={cd.name}
          onClick={() => handleClick(cd)}
          className={styles.item}
          style={{ zIndex: CDs.length - idx }}
        >
          <CDCase variant="list-item" cd={cd} />
        </div>
      ))}
    </div>
  );
}
