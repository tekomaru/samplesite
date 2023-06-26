import Link from 'next/link'
import styles from './Contact.module.css'

export default function Contact() {
    return (
        <div className={styles.Contact_wrapper__F1Fby}>
            <div className={`${styles.animate__animated} animate__fadeInUp}`}>
                <div className={styles.Contact_contactContent__5LDWC}>
                    <div className={styles.Contact_contactLeftContent__WJ1dY}>
                        <div className={styles.Contact_contactTitle__fuoH7}>
                            <div>Let's Have a</div>
                            <div>Conversation!</div>
                        </div>
                        <div className={styles.Contact_companyIntroduction__ygv1K}>
                            <p>Webサービスやアプリ開発のご相談、協業パートナーなどその他のお問い合わせはこちらから。</p>
                        </div>
                    </div>
                    <div>
                        <Link className={styles.Contact_contactCircle__0vuZB} href="/CONTACT/">
                            <span>CONTACT</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        )
        }