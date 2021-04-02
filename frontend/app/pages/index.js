import Head from 'next/head'
import Top from './components/Top';
import Layout from './components/Layout';

export default function Home() {
  return (
    <div>
      <Head>
        <title>DUO 3.4</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Top />
      </Layout>
    </div>
  )
}
