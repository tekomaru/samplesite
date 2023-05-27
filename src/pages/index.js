import { Inter } from 'next/font/google'
import Layout from '../components/common/Layout'
import Main from '../components/TopPage/Main/Main'
import MainAbout from '../components/TopPage/About us/MainAbout'
import MainService from '../components/TopPage/Service/MainService'
import MainRecruit from '../components/TopPage/Recruit/MainRecruit'
import MainNews from '../components/TopPage/News/MainNews'
import Contact from '../components/common/Contact/Contact'
export default function Home(){
  return (
    <Layout>
      <div>
      <Main />
      <MainAbout />
      <MainService />
      <MainRecruit />
      <MainNews />
      <Contact />
      </div>
      </Layout>
  )}