import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import HackerWord from "./components/HackerWord"
import styles from "./page.module.scss"
import { faCaretRight } from "@fortawesome/free-solid-svg-icons"

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.titleWrapper}>
        <h1 className={styles.title}>site of things</h1>
        <h2 className={styles.subtitle}>Luc de Cafmeyer</h2>
      </div>
      <div className="container">
        <h1 className={styles.projectsTitle}>
          <FontAwesomeIcon className={styles.arrowRight} icon={faCaretRight} />{" "}
          <HackerWord>Projects</HackerWord>
        </h1>
      </div>
    </main>
  )
}
