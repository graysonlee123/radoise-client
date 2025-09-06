import type { ButtonHTMLAttributes } from "react"
import classes from "./Button.module.css"

type Props = ButtonHTMLAttributes<HTMLButtonElement>

function Button({children, className, ...props}: Props) {
  const classNames = [classes.button, className].filter((value) => Boolean(value)).join(' ')

  return (
    <button className={classNames} {...props}>
      {children}
    </button>
  )
}

export default Button