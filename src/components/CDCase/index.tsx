import styles from "./styles.module.css";

interface CD {
  front: string;
  back: string;
  cd: string;
}

interface CDCaseProps {
  variant: "list-item" | "display";
  cd: CD;
}

export function CDCase(props: CDCaseProps) {
  return (
    <div className={styles.caseContainer} data-variant={props.variant}>
      <div className={styles.caseScene}>
        <div className={styles.case}>
          <div className={`${styles.face} ${styles.back}`}>
            <img src={props.cd.back} />
          </div>

          <div className={`${styles.face} ${styles.front}`}>
            <img src={props.cd.front} />
          </div>

          {props.variant === "list-item" && (
            <div className={styles.cd}>
              <img src={props.cd.cd} />
            </div>
          )}

          <div className={`${styles.face} ${styles.acrylicShell}`} />
        </div>

        {/* {props.variant === "display" && (
          <div className={styles.cd}>
            <img src={props.cd.cd} />
          </div>
        )} */}
      </div>
    </div>
  );
}
