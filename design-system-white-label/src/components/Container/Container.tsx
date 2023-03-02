import React from 'react';
import styles from './Container.module.scss';

export const Container = ({children}:ContainerProps) => (<div className={styles.container}>{children}</div>)

type ContainerProps = {
  children: React.ReactNode
}