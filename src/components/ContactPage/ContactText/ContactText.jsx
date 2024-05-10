import styles from './ContactText.module.css'
import 'animate.css'

export default function ContactText() {
    return(

        <div className={styles.ContactText_wrapper}>
            <div>
                <div className={styles.PageTitle_wrapper}>
                    <h2 className={styles.PageTitle_transparent}>CONTACT</h2>
                </div>
                <p className={`${styles.undefined} animate__animated animate__fadeInUp`}>
                    株式会社Techtonixにご興味をお持ち頂き、誠にありがとうございます。<br />ご依頼やご相談、お困りごとなどがございましたら 以下のフォームよりお気軽にお問い合わせ下さい。<br />後日、担当者より折り返しご連絡いたします。</p>
            </div>
        </div>

        )
        }