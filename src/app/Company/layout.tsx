import styles from '@styles/company/layout.module.scss'
import ContentHeader from '@Organisms/ContentHeader'

const test = ['Home', 'Company', '회사소개', 'CEO 인사말']

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className={styles.wrapper}>
      <ContentHeader title="Company" breadcrumb={test}></ContentHeader>
      <div className={styles.content}>{children}</div>
    </div>
  )
}
