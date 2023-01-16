import React, { FC, PropsWithChildren } from 'react'

const Title: FC<PropsWithChildren> = ({ children }) => {
  return <h1>{children}</h1>
}

export default Title
