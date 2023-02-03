import '../styles/globals.scss'

import styles from '../styles/page.module.scss'
import Breadcrumb from '@Molecules/Breadcrumb'

const test = ['Home', 'Company', '회사소개', 'CEO 인사말']

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
            <div className={styles.leftContainer}>test</div>
            <div className={styles.rightContainer}>{children}</div>
          </div>
        </main>
      </body>
    </html>
  )
}
