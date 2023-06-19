import Link from 'next/link'
import Image from 'next/image'
import styles from './Footer.module.css'

export default function Footer(){
    return (

        <footer className={styles.Footer_wrapper__RlMTC}>
            <div className={styles.Footer_footerWrapper__MYxan}>
                <div className={styles.Footer_footerBox__MDesG}>
                    <Image src="/techtonix_logo.png" alt="TechTonix" className={styles.Footer_footerLogo__pfHjk} width={345} height={60} />
                </div>
                <div className={styles.Footer_footerBox__MDesG}>
                    <span>MENU</span>
                    <ul>
                        <li><Link href="/" >HOME</Link></li>
                        <li><Link href="/company/">ABOUT</Link></li>
                        <li><Link href="/service/">SERVICE</Link></li>
                        <li><Link href="/contact/">CONTACT</Link></li>
                    </ul>
                </div>
                <style jsx>{' .Footer_footerBox__MDesG ul li { color: rgb(245, 245, 245);} '}</style>
                <div className={styles.Footer_footerBox__MDesG}>
                    <div>
                        <span>SOCIAL</span>
                        
                        <ul className={styles.Footer_snsWrapper__UNIgD}>
                        <p>準備中...</p>
                            {/* <li><Link href=""><Image src="" alt="line" width={43} height={43} /></Link></li>
                            <li><Link href=""><Image src="" alt="twitter" width={43} height={43}/></Link></li>
                            <li><Link href=""><Image src="" alt="facebook" width={43} height={43}/></Link></li> */}
                        </ul>
                    </div>
                </div>
                <div className={styles.Footer_copyright__GHIKt}>
                    <span>© Techtonix All rights reserved.</span>
                    <span>
                        <Link href="/privacy_policy/">Privacy Policy</Link>
                    </span>
                </div>
                <style jsx>{'.Footer_copyright__GHIKt {color: rgb(245, 245, 245);} '}</style>
            </div>
            <div className={styles.Footer_spFooterWrapper__cclRy}>
                <div className={styles.Footer_spMenuWrapper__NM_bo}>
                    <span>MENU</span>
                    <div className={styles.Footer_spMenus__3e4s1}>
                        <a href="/">HOME</a>
                        <a href="/company/">COMPANY</a>
                        <a href="/service/">SERVICE</a>
                        <a href="/contact/">CONTACT</a>
                    <style jsx>{`
                    .Footer_spMenus__3e4s1 a {
                        color:rgb(245, 245, 245);
                    }
                    `}
                    </style>
                    </div>
                </div>
                <div className={styles.Footer_spSocialWrapper___kSQT}>
                    <span>SOCIAL</span>
                    <p>準備中...</p>
                    {/* <div className={styles.Footer_spSocials__QHJtd}>
                        <a href="">
                            <img src="/img/line.svg" alt="" /></a>
                    </div> */}
                </div>
                <div className={styles.Footer_spImgAndPrivacyPolicy__rIuHW}>
                    <img src="/img/footerLogo.png" alt="worldHacks" />
                        <span>
                            <a href="/privacy_policy/">Privacy Policy</a>
                            <style jsx>{`
                            .Footer_spImgAndPrivacyPolicy__rIuHW span {
                                color:rgb(245, 245, 245);
                            }`}
                            </style>
                        </span>
                    </div>
                    <div className={styles.Footer_spCopyright__5zZNi}>
                        <span>© Techtonix. All rights reserved.</span>
                        <style jsx>{`
                        .Footer_spCopyright__5zZNi span {
                            color:rgb(245, 245, 245);
                        }`}
                        </style>
                    </div>
                </div>
            </footer>
)
}


