import { Inter } from 'next/font/google'
import Layout from '../components/common/Layout'
import Main from '../components/TopPage/Main/Main'
import MainAbout from '../components/TopPage/About us/MainAbout'
import MainService from '../components/TopPage/Service/MainService'
import Contact from '../components/common/Contact/Contact'
import Loading from '@/components/TopPage/loading/loading'

export default function Home(){
  
  return (
    
        <Layout>
          <div>
            <Main />
            <MainAbout />
            <MainService />
            <Contact />
          </div>
        </Layout>
    
  )}