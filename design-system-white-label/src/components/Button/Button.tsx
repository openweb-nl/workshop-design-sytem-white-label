import React from 'react'
import styles from './Button.module.scss'

const Button: React.FC<ButtonProps> = ({ className = '', appearance = 'default', children, ...props }) => {
  return (
    <button className={`${styles.btn} ${appearance} ${className}`} {...props}>
      {children}
    </button>
  )
}

export default Button

type ButtonProps = {
  className?: string,
  appearance?: 'rounded'
  children?: React.ReactNode
}