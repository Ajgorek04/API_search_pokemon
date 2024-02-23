import styles from "./InfoBox.module.css";

export function InfoBox({ children }) {
  return <div className={styles.infoBox}>{children}</div>;
}
