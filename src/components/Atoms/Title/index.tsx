import React, { FC, PropsWithChildren } from 'react'
import style from './style.module.scss'

const Title: FC<PropsWithChildren> = ({ children }) => {
  return <h2 className={style.title}>{children}</h2>
}

export default Title
