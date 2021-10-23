import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Nav from './Nav/nav.js'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Home() {
  return (
   <div>
     <Head><title>Home</title></Head>
     <h1>Home page</h1>
   </div>
  )
}
