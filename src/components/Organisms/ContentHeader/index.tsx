import Title from '@Atoms/Title'
import Breadcrumb from '@Molecules/Breadcrumb'
import React, { FC } from 'react'
import styles from './style.module.scss'

interface IProps {
  title: string
  breadcrumb: Array<string>
}

const ContentHeader: FC<IProps> = ({ title, breadcrumb }) => {
  return (
    <>
      <div className={styles.breadcrumbWrapper}>
        <Breadcrumb listBreadcrumb={breadcrumb}></Breadcrumb>
      </div>
      <Title>{title}</Title>
    </>
  )
}

export default ContentHeader
