import Head from 'next/head'

import '../css/antd.less';
import '../css/app.css';
import App from '../components/app';


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Beastmaker Training</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <App/>
    </div>
  )
}