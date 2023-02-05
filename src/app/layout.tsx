import '@styles/globals.scss'

import styles from '@styles/page.module.scss'

import Image from 'next/image'
import logo from '../../public/images/logo.jpeg'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <main className={styles.main}>
          <div className={styles.warpper}>
            <div className={styles.leftContainer}>
              <div className={styles.imageWrapper}>
                <Image
                  alt="logo-nexon-networks"
                  src={logo}
                  placeholder="blur"
                />
              </div>
            </div>
            <div className={styles.rightContainer}>
              <div className={styles.rightContainerWrapper}>{children}</div>
            </div>
          </div>
        </main>
      </body>
    </html>
  )
}
