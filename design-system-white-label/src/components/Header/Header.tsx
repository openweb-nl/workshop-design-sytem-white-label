import React from 'react';
import styles from './Header.module.scss';

export const Header = ({children}:HeaderProps) => (<header className={styles.header}>{children}</header>)

type HeaderProps = {
  children: React.ReactNode
}