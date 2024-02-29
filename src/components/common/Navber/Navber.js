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
       <div className={`${styles.header} animate__animated animate__fadeInUp`}>
                        <div className={styles.navbarInner}>
                            <Link className="mainvisual_img" href="/">
                            <Image src="/techtonix_logo.png" alt="TechTonix" width={150} height={100}/>
                            </Link>
                            <nav className={styles.pcNavigation}>
                                <ul>
                                    <li><Link href="/">HOME</Link></li>
                                    <li><Link href="/ABOUT/">ABOUT</Link></li>
                                    <li><Link href="/SERVICE/">SERVICE</Link></li>
                                    <li><Link className={styles.contact_button} href="/CONTACT/">CONTACT</Link></li>
                                </ul>
                            </nav>
                            <div className={styles.openHambugerMenu} onClick={() => menuFunction()}>
                              <span className={styles.topMenuBar}></span>
                              <span className={styles.bottomMenuBar}></span>
                              </div>
                            <div className={`${ styles.spAllCover} ${openMenu? styles.open: undefined} animate__animated animate__fadeInLeft`}>
                              <div className={styles.spNavbar}>
                                <a href="/">
                                <img src="/techtonix_logo_white.png" alt="Techtonix" /></a>
                                <div className={styles.closeMenuWrapper} onClick={() => menuFunction()}>
                                  <span>CLOSE</span>
                                  <span className={styles.closeMenuBar}></span>
                                </div>
                              </div>
                              <nav className={styles.spNavigation}>
                                <ul>
                                  <li className="animate__animated animate__fadeInUp">
                                    <a href="/ABOUT/">ABOUT</a>
                                    <span>Techtonixについて</span>
                                  </li>
                                  <li className="animate__animated animate__fadeInUp">
                                    <a href="/SERVICE/">SERVICE</a>
                                    <span>サービスについて</span>
                                  </li>
                                  <li className="animate__animated animate__fadeInUp">
                                    <a href="/CONTACT/">CONTACT</a>
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