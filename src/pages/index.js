import { Inter } from 'next/font/google'
import Layout from '../components/common/Layout'
import Main from '../components/TopPage/Main/Main'
import MainAbout from '../components/TopPage/About us/MainAbout'
import MainService from '../components/TopPage/Service/MainService'
import Contact from '../components/common/Contact/Contact'
import TopButton from '../components/common/top_button/TopButton'
import React,{ useEffect} from 'react';


export default function Home(){

  return (
    
        <Layout>
          <div>
            <Main />
            <MainAbout />
            <MainService />

            <Contact />
      <TopButton showAfter={300} />
          </div>
        </Layout>
    
  )}