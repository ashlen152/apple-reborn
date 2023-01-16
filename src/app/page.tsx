import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/page.module.scss'
import Navbar from '@Molecules/Navbar'
import TableOfContents from '@Molecules/TableOfContents'
import BlogContainer from '@Organisms/BlogContainer/BlogContainer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar></Navbar>
      <TableOfContents></TableOfContents>
      <BlogContainer></BlogContainer>
    </main>
  )
}
