"use client"

import { Dispatch, MouseEventHandler, SetStateAction, useState } from "react"
import styles from "./scss/Navbar.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"

export default function Navbar() {
  const [showNav, setShowNav] = useState(false)
  const links = ["Home", "About", "Contact", "Projects"]
  const navElements = links.map((link) => (
    <div className={styles.navItem}>
      <Link href={`/${link.toLowerCase()}`}>{link}</Link>
    </div>
  ))

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    setShowNav((prev) => !prev)
  }

  return (
    <nav className={styles.navbar}>
      <div
        className={`${styles.navbarContent} ${!showNav && styles.navbarHidden}`}
      >
        <div className={styles.navItems}>{navElements}</div>
        <button
          onClick={() => setShowNav((prev) => !prev)}
          className={styles.navClose}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
      <button
        className={`${styles.navOpen} ${showNav && styles.toggleHidden}`}
        onClick={handleClick}
      >
        <span>
          <FontAwesomeIcon icon={faBars} />
        </span>
      </button>
    </nav>
  )
}
