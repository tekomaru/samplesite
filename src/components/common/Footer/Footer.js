import Link from 'next/link'
import Image from 'next/image'
import styles from './Footer.module.css'

export default function Footer(){
    return (

        <footer className={styles.Footer_wrapper__RlMTC}>
            <div className={styles.Footer_footerWrapper__MYxan}>
                <div className={styles.Footer_footerBox__MDesG}>
                    <Image src="/img/footerLogo.png" alt="worldHacks" className={styles.Footer_footerLogo__pfHjk} width={345} height={60} />
                </div>
                <div className={styles.Footer_footerBox__MDesG}>
                    <span>MENU</span>
                    <ul>
                        <li><Link href="/" >HOME</Link></li>
                        <li><Link href="/page/company/">ABOUT</Link></li>
                        <li><Link href="/page/service/">SERVICE</Link></li>
                        <li><Link href="/page/recruit/">RECRUIT</Link></li>
                        <li><Link href="/page/news/page/1/">NEWS</Link></li>
                        <li><Link href="/page/contact/">CONTACT</Link></li>
                    </ul>
                </div>
                <style jsx>{' .Footer_footerBox__MDesG ul li { color: rgb(245, 245, 245);} '}</style>
                <div className={styles.Footer_footerBox__MDesG}>
                    <div>
                        <span>SOCIAL</span>
                        <ul className={styles.Footer_snsWrapper__UNIgD}>
                            <li><Link href="https://line.me/R/ti/p/@564hwchb"><Image src="/img/line.svg" alt="line" width={43} height={43} /></Link></li>
                            <li><Link href="https://twitter.com/WorldHacks_Inc"><Image src="/img/twitter.svg" alt="twitter" width={43} height={43}/></Link></li>
                            <li><Link href="https://www.facebook.com/worldhacks20220324"><Image src="/img/facebook.svg" alt="facebook" width={43} height={43}/></Link></li>
                        </ul>
                    </div>
                </div>
                <div className={styles.Footer_copyright__GHIKt}>
                    <span>© WorldHacks Corporation. All rights reserved.</span>
                    <span>
                        <Link href="/privacy_policy/">Privacy Policy</Link>
                    </span>
                </div>
                <style jsx>{'.Footer_copyright__GHIKt {color: rgb(245, 245, 245);} '}</style>
            </div>
           
            </footer>
)
}


