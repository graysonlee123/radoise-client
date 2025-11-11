import type { ReactNode } from "react"
import styles from "./Header.module.css"

type Props = {
  children?: ReactNode
}

function Header({children}: Props) {
  return (
    <h2 className={styles.header}>
      {children}
    </h2>
  )
}

export default Header
