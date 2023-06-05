import { Inter } from 'next/font/google'
import Layout from '../components/common/Layout'
import Main from '../components/TopPage/Main/Main'
import MainAbout from '../components/TopPage/About us/MainAbout'
import MainService from '../components/TopPage/Service/MainService'
import MainNews from '../components/TopPage/News/MainNews'
import Contact from '../components/common/Contact/Contact'
import { useState } from 'react'
import { useEffect } from 'react'
import Loading from '@/components/TopPage/loading/loading'

export default function Home(){
  const [isShowLoading,setIsShowLoading] = useState(false);

  useEffect(() => {
    setTimeout(() =>{
      setIsShowLoading(true);

    },3000);
  });

  return (
    <><div>
      <Loading isShow={isShowLoading} />
    </div>
        <Layout>
          <div>
            <Main />
            <MainAbout />
            <MainService />
            <MainNews />
            <Contact />
          </div>
        </Layout>
      </>
  )}