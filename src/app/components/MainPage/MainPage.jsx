import styles from "./MainPage.module.css";
import { Header } from "../Header/Header";

export function MainPage() {
  return (
    <main className={styles.mainPage}>
      <Header />
    </main>
  );
}
