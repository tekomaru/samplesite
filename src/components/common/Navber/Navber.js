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
                                    <li><Link href="/page/news/">NEWS</Link></li>
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
                                    <a href="/page/about/">ABOUT</a>
                                    <span>XXXXXXについて</span>
                                  </li>
                                  <li class="animate__animated animate__fadeInUp">
                                    <a href="/page/service/">SERVICE</a>
                                    <span>サービス内容</span>
                                  </li>
                              
                                  <li class="animate__animated animate__fadeInUp">
                                    <a href="/page/news/">NEWS</a>
                                    <span>ニュース</span>
                                  </li>
                                  <li class="animate__animated animate__fadeInUp">
                                    <a href="/page/contact/">CONTACT</a>
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