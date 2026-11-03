import { useState } from "react";
import { CDDisplay } from "../components/CDDisplay";
import { CDList } from "../components/CDList";
import styles from "./styles.module.css";
import { CDs, type CD } from "../data/cds";

export function Showcase() {
  const [currentCD, setCurrentCD] = useState<CD>(CDs[0]);

  return (
    <div className={styles.showcaseContainer}>
      <CDDisplay cd={currentCD} />
      <CDList handleClick={setCurrentCD} />
    </div>
  );
}
