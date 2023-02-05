import React, { FC, PropsWithChildren } from 'react'
import styles from './style.module.scss'

const SubTitle: FC<PropsWithChildren> = ({ children }) => {
  return <h1 className={styles.title}>{children}</h1>
}

export default SubTitle
