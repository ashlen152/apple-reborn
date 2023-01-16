import React from 'react'
import Image from 'next/image'
import style from './style.module.scss'

const AuthorDetail = () => {
  return (
    <div className={style.container}>
      <div className="img-box">
        <Image alt="Author's avatar" src="/author.jpg" width={50} height={50} />
      </div>
      <span>John Doe</span>
    </div>
  )
}

export default AuthorDetail
