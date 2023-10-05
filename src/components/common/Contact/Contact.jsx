import Link from 'next/link'
import styles from './Contact.module.css'

export default function Contact() {
    return (
        <div className={styles.Contact_wrapper}>
            <div className={`${styles.animate__animated} animate__fadeInUp}`}>
                <div className={styles.Contact_contactContent}>
                    <div className={styles.Contact_contactLeftContent}>
                        <div className={styles.Contact_contactTitle}>
                            <div>Contact us</div>
                        </div>
                        <div className={styles.Contact_companyIntroduction}>
                            <p>開発のご相談、その他のお問い合わせはこちらから。<br />
                            お気軽にお問い合わせください。</p>
                        </div>
                    </div>
                    <div>
                        <Link className={styles.Contact_contactCircle} href="/CONTACT/">
                            <span>CONTACT</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        )
        }