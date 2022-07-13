import type { NextPage } from 'next'
import Head from 'next/head'

import styles from '../styles/Home.module.css'
import Footer from './compoent/Footer'
import Header from './compoent/Header'
import MainPage from './compoent/Main'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      
  
     <MainPage/>
     <Footer/>
    </div>
  )
}

export default Home
