import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import HackerWord from "./components/HackerWord"
import styles from "./page.module.scss"
import { faCaretRight } from "@fortawesome/free-solid-svg-icons"
import Thumbnail from "./components/Thumbnail"
import Image from "next/image"
import swirl from '@/public/swirl.svg'

export default function Home() {
  const projects: JSX.Element[] = []

  return (
    <main className={styles.main}>
      <Image className={styles.thing} src={swirl} alt='' />
      <div className={styles.titleWrapper}>
        <h1 className={styles.title}>site of things</h1>
        <h2 className={styles.subtitle}>Luc de Cafmeyer</h2>
      </div>
      <div className="container">
        <h1 className={styles.projectsTitle}>
          <FontAwesomeIcon className={styles.arrowRight} icon={faCaretRight} />{" "}
          <HackerWord>Projects</HackerWord>
        </h1>
        <div className={styles.thumbnailContainer}>
          <Thumbnail caption="This is a very cool project">
            Wow look at this project
          </Thumbnail>
          <Thumbnail></Thumbnail>
          <Thumbnail></Thumbnail>
          <Thumbnail></Thumbnail>
          <Thumbnail></Thumbnail>
        </div>
      </div>
    </main>
  )
}
