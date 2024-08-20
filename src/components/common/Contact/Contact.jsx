import Link from 'next/link'
import styles from './Contact.module.css'
import Image from 'next/image';
export default function Contact() {
    return (
        <div className={styles.Contact_wrapper}>
            <Link href="/contact/" className={styles.contact_link}>
                <div className={styles.Contact_contactContent}>
                    <div className={styles.Contact_contactLeftContent}>
                        <div className={styles.Contact_contactTitle}>
                            <div>CONTACT</div>
                        </div>
                        <div className={styles.Contact_companyIntroduction}>
                            <p>開発のご相談、その他のお問い合わせはこちらから。</p>
                        </div>
                    </div>
                    <div className={styles.contact_image}>
                        <Image src="/contact_image.png" alt="" width={400} height={400}/>
                    </div>
                    <div>
                        <Link className={styles.Contact_contactCircle} href="/CONTACT/">
                            <span>→</span>
                        </Link>
                    </div>
                </div>
                </Link>
        </div>
        )
        }