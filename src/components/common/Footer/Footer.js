import Link from 'next/link'
import Image from 'next/image'
import styles from './Footer.module.css'

export default function Footer(){
    return (

        <footer className={styles.Footer_wrapper}>
            <div className={styles.Footer_footerWrapper}>
                <div className={styles.Footer_footerBox}>
                    <Image src="/techtonix_logo_white.png" alt="TechTonix" className={styles.Footer_footerLogo} width={345} height={60} />
                </div>
                <div className={styles.Footer_footerBox}>
                    <span>MENU</span>
                    <ul>
                        <li><Link href="/" >HOME</Link></li>
                        <li><Link href="/ABOUT/">ABOUT</Link></li>
                        <li><Link href="/SERVICE/">SERVICE</Link></li>
                        <li><Link href="/CONTACT/">CONTACT</Link></li>
                    </ul>
                </div>
                <style jsx>{' .Footer_footerBox ul li { color: rgb(245, 245, 245);} '}</style>
                <div className={styles.Footer_footerBox}>
                    <div>
                        {/* <span>SNS</span> */}
                        
                        <ul className={styles.Footer_snsWrapper}>
                       
                            {/* <li><Link href=""><Image src="" alt="line" width={43} height={43} /></Link></li>
                            <li><Link href=""><Image src="" alt="twitter" width={43} height={43}/></Link></li>
                            <li><Link href=""><Image src="" alt="facebook" width={43} height={43}/></Link></li> */}
                        </ul>
                    </div>
                </div>
                <div className={styles.Footer_copyright}>
                    <span>© Techtonix All rights reserved.</span>
                    <span>
                        <Link href="/privacypolicy/">Privacy Policy</Link>
                    </span>
                </div>
                <style jsx>{'.Footer_copyright {color: rgb(245, 245, 245);} '}</style>
            </div>
            <div className={styles.Footer_spFooterWrapper}>
                <div className={styles.Footer_spMenuWrapper}>
                    <span>MENU</span>
                    <div className={styles.Footer_spMenus}>
                        <a href="/">HOME</a>
                        <a href="/ABOUT/">ABOUT</a>
                        <a href="/SERVICE/">SERVICE</a>
                        <a href="/CONTACT/">CONTACT</a>
                    <style jsx>{`
                    .Footer_spMenus a {
                        color:rgb(245, 245, 245);
                    }
                    `}
                    </style>
                    </div>
                </div>
                <div className={styles.Footer_spSocialWrapper}>
                    <span>SOCIAL</span>
                    <p>準備中...</p>
                    {/* <div className={styles.Footer_spSocials}>
                        <a href="">
                            <img src="/img/line.svg" alt="" /></a>
                    </div> */}
                </div>
                <div className={styles.Footer_spImgAndPrivacyPolicy}>
                    <img src="/techtonix_logo_white.png" alt="TechTonix"/>
                        <span>
                            <Link href="/privacypolicy/">Privacy Policy</Link>
                            <style jsx>{`
                            .Footer_spImgAndPrivacyPolicy span {
                                color:rgb(245, 245, 245);
                            }`}
                            </style>
                        </span>
                    </div>
                    <div className={styles.Footer_spCopyright}>
                        <span>© Techtonix. All rights reserved.</span>
                        <style jsx>{`
                        .Footer_spCopyright span {
                            color:rgb(245, 245, 245);
                        }`}
                        </style>
                    </div>
                </div>
            </footer>
)
}


