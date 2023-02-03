import BreadcrumbsLabel from '@Atoms/BreadcrumbLabel'
import React, { FC } from 'react'
import style from './style.module.scss'

interface IBreadcrumb {
  listBreadcrumb: Array<string>
}

const Breadcrumb: FC<IBreadcrumb> = ({ listBreadcrumb }) => {
  return (
    <div className={style.wrapper}>
      {listBreadcrumb &&
        listBreadcrumb.map((item, index) => (
          <BreadcrumbsLabel key={index}>
            {item}
            {index !== listBreadcrumb.length - 1 ? (
              <span>&nbsp;&gt;&nbsp;</span>
            ) : (
              ''
            )}
          </BreadcrumbsLabel>
        ))}
    </div>
  )
}

export default Breadcrumb
