import SubTitle from '@Atoms/SubTitle'
import React, { FC, PropsWithChildren } from 'react'
import styles from './style.module.scss'

const ContentSubTitle: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <SubTitle>{children}</SubTitle>
    </div>
  )
}

export default ContentSubTitle
