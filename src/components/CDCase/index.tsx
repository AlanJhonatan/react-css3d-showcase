import styles from "./styles.module.css";
import { CDArtMapping } from "./mapping";

interface CDCaseProps {
  variant: "list-item" | "display";
}

export function CDCase(props: CDCaseProps) {
  return (
    <div className={styles.caseContainer} data-variant={props.variant}>
      <div className={styles.caseScene}>
        <div className={styles.case}>
          <div className={`${styles.face} ${styles.back}`}>
            <img src={CDArtMapping.sabrinaCarpenter.emails.back} />
          </div>

          <div className={`${styles.face} ${styles.front}`}>
            <img src={CDArtMapping.sabrinaCarpenter.emails.front} />
          </div>

          <div className={styles.cd}>
            <img src={CDArtMapping.sabrinaCarpenter.emails.cd} />
          </div>
        </div>
      </div>
    </div>
  );
}
