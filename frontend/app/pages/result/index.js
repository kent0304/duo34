import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.scss'
import Layout from '../components/Layout'

export default function Result() {
  return (
    <Layout>
      <div className={styles.container}>
          ここは結果のページ
      </div>
    </Layout>

  )
}