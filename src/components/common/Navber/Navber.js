import Link from 'next/link'
import styles from './Navber.module.css'
import Image from 'next/image'
import { useState } from 'react'

const Navber = () =>{
  const[openMenu,setOpenMenu] = useState(false);
  const menuFunction = () => {
    setOpenMenu(!openMenu);
  }
  return ( 
    <>
       <div className={`${styles.oeail} animate__animated animate__fadeInUp`}>
                        <div className={styles.navbarInner}>
                            <Link className="imgLinkWrapper" href="/">
                            <Image src="/worldHacksLogo.png" alt="WorldHacks" width={150} height={80}/>
                            </Link>
                            <nav className={styles.pcNavigation}>
                                <ul>
                                    <li><Link href="/">HOME</Link></li>
                                    <li><Link href="/page/about/">ABOUT</Link></li>
                                    <li><Link href="/page/service/">SERVICE</Link></li>
                                    <li><Link href="/page/recruit/">RECRUIT</Link></li>
                                    <li><Link href="/page/news/page/1/">NEWS</Link></li>
                                    <li><Link href="/page/contact/">CONTACT</Link></li>
                                </ul>
                            </nav>
                            <div className={styles.openHambugerMenu} onClick={() => menuFunction()}>
                              <span className={styles.topMenuBar}></span>
                              <span className={styles.bottomMenuBar}></span>
                              </div>
                            <div className={`${ styles.spAllCover} ${openMenu? styles.open: undefined} animate__animated animate__fadeInLeft`}>
                              <div className={styles.spNavbar}>
                                <a href="/">
                                <img src="/img/worldHacksLogo.png" alt="WorldHacks" /></a>
                                <div className={styles.closeMenuWrapper} onClick={() => menuFunction()}>
                                  <span>CLOSE</span>
                                  <span className={styles.closeMenuBar}></span>
                                </div>
                              </div>
                              <nav className={styles.spNavigation}>
                                <ul>
                                  <li class="animate__animated animate__fadeInUp">
                                    <a href="/company/">ABOUT</a>
                                    <span>WorldHacksについて</span>
                                  </li>
                                  <li class="animate__animated animate__fadeInUp">
                                    <a href="/service/">SERVICE</a>
                                    <span>WorldHacksのサービス内容</span>
                                  </li>
                                  <li class="animate__animated animate__fadeInUp">
                                    <a href="/recruit/">RECRUIT</a>
                                    <span>採用情報</span>
                                  </li>
                                  <li class="animate__animated animate__fadeInUp">
                                    <a href="/news/page/1/">NEWS</a>
                                    <span>ニュース</span>
                                  </li>
                                  <li class="animate__animated animate__fadeInUp">
                                    <a href="/contact/">CONTACT</a>
                                    <span>お問い合わせ</span>
                                  </li>
                                </ul>
                              </nav>
                          </div>
                          
                    </div>
         </div>    
         </>           
      
      )
}
export default Navber;