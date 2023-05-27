import Link from 'next/link'
import styles from './Navber.module.css'
import Image from 'next/image'

const Navber = () =>{
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
                            <div className={styles.openHambugerMenu_}>
                              <span className={styles.topMenuBar}></span>
                                    <span className={styles.bottomMenuBar}></span>
                            </div>
                    </div>
         </div>    
         </>           
      )
}
export default Navber;