import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.scss'
import Layout from '../components/Layout'

export default function Question() {
  return (
    <Layout>
      <div className={styles.container}>
        ここは問題のページ
      </div>
    </Layout>
    
  )
}