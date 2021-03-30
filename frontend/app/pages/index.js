import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Top from './components/Top';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>DUO 3.4</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Top />
    </div>
  )
}
