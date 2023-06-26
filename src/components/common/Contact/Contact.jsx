import Link from 'next/link'
import styles from './Contact.module.css'

export default function Contact() {
    return (
        <div className={styles.Contact_wrapper}>
            <div className={`${styles.animate__animated} animate__fadeInUp}`}>
                <div className={styles.Contact_contactContent}>
                    <div className={styles.Contact_contactLeftContent}>
                        <div className={styles.Contact_contactTitle}>
                            <div>Let's Have a</div>
                            <div>Conversation!</div>
                        </div>
                        <div className={styles.Contact_companyIntroduction}>
                            <p>Webサービスやアプリ開発のご相談、協業パートナーなどその他のお問い合わせはこちらから。</p>
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