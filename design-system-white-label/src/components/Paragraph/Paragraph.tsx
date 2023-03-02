import React from 'react'
import styles from './Paragraph.module.scss'

const Paragraph: React.FC<ParagraphProps> = ({ className = '', children, ...props }) => {
  return (
    <p className={`${styles.p} ${className}`} {...props}>
      {children}
    </p>
  )
}

export default Paragraph

type ParagraphProps = {
  className?: string,
  children?: React.ReactNode
}