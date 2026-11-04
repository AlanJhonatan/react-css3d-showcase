import { useState } from "react";
import { CDDisplay } from "../components/CDDisplay";
import { CDList } from "../components/CDList";
import styles from "./styles.module.css";
import { CDs, type CD } from "../data/cds";
import { LightScene } from "../Scene/LightScene";

interface ShowcaseProps {
  display: "CD" | "Light";
}

export function Showcase(props: ShowcaseProps) {
  const [currentCD, setCurrentCD] = useState<CD>(CDs[0]);

  if (props.display === "CD") {
    return (
      <div className={styles.showcaseContainer}>
        <CDDisplay cd={currentCD} />
        <CDList handleClick={setCurrentCD} />
      </div>
    );
  }

  if (props.display === "Light") {
    return <LightScene />;
  }
}
