import styles from "./MainPage.module.css";
import { Header } from "../Header/Header";
import { Content } from "../Content/Content";

export function MainPage() {
  return (
    <main className={styles.mainPage}>
      <Header />
      <Content />
    </main>
  );
}
