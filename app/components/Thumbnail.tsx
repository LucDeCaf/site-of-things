import styles from "./scss/Thumbnail.module.scss"

interface ThumbnailProps {
  caption?: string
  children?: JSX.Element | string
}

export default function Thumbnail({ children, caption }: ThumbnailProps) {
  return (
    <div className={styles.thumbnail}>
      <div className={styles.content}>{children}</div>
      {caption && <div className={styles.caption}>{caption}</div>}
    </div>
  )
}
