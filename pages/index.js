import { CSSBaseline, ZEITUIProvider } from '@zeit-ui/react'
import Head from 'next/head'

import '../css/app.less';
import App from '../components/app';


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Beastmaker Training</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ZEITUIProvider>
        <CSSBaseline />
        <App/>
      </ZEITUIProvider>
    </div>
  )
}