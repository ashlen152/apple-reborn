import React, { FC, PropsWithChildren } from 'react'
import style from './style.module.scss'

const BreadcrumbsLabel: FC<PropsWithChildren> = ({ children }) => {
  return <p className={style.breadcrumbs}>{children}</p>
}

export default BreadcrumbsLabel
