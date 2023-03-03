import React from 'react'
import styles from './Faq.module.scss'

const Faq = ({ title, children }:FaqProps) => {
  return (
    <details className={styles.faq}>
      <summary>{title}</summary>
      <p>{children}</p>
    </details>
  )
}

type FaqProps = {
  title?: string,
  children?: string | React.ReactElement,
}

export default Faq