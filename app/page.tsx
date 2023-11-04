import styles from "./page.module.scss"

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.titleWrapper}>
        <h1 className={styles.title}>site of things</h1>
        <h2 className={styles.subtitle}>Luc de Cafmeyer</h2>
      </div>
    </main>
  )
}
