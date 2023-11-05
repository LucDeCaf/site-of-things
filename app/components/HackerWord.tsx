"use client"

import { MouseEventHandler, useEffect, useState } from "react"
import styles from "./scss/HackerWord.module.scss"
import { Roboto_Mono } from "next/font/google"

const alphabet = "abcdefghijklmnopqrstuvwxyz"

type HackerWordProps = {
  children: string
}

type LetterProps = {
  children: string
}

const robotoMono = Roboto_Mono({subsets: ['latin']})

function Letter({ children }: LetterProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [renderedLetter, setRenderedLetter] = useState(children)

  useEffect(() => {
    if (!isHovered) {
      setRenderedLetter(children)
      return
    }

    setRenderedLetter(alphabet[Math.floor(Math.random() * 25)])
    const interval = setInterval(() => {
      setRenderedLetter(alphabet[Math.floor(Math.random() * 25)])
    }, 30)

    return () => clearInterval(interval)
  }, [isHovered])

  return (
    <span
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`${styles.hovered}`}
    >
      {renderedLetter}
    </span>
  )
}

export default function HackerWord({ children }: HackerWordProps) {
  let letters: JSX.Element[] = []

  for (let i = 0; i < children.length; i++) {
    letters.push(<Letter key={i}>{children[i]}</Letter>)
  }

  return <span className={`${robotoMono.className} ${styles.word}`}>{letters}</span>
}
