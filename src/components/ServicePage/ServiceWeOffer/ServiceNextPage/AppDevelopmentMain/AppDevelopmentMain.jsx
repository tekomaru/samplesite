import styles from './AppDevelopmentMain.module.css'
import 'animate.css'

export default function AppDevelopmentMain(){
    return(

        <div className={styles.AppDevMain_wrapper__Q2kKN}>
            <div className={`${styles.AppDevMain_pageTitle__95a_p} ${styles.PageTitle_wrapper__d3y0q}`}>
                <h2 className={styles.PageTitle_transparent__FD1Cq}>SERVICE</h2>
            </div>
            <div className={`${styles.AppDevMain_smartPhoneApp__NibG0} ${styles.AppDevMain_appDevWrapper__cHzO9}`}>
                <div className={styles.AppDevMain_appDevMainContent__MS9pp}>
                    <div className={`${styles.AppDevMain_grayArea__DnSKQ} animate__animated animate__fadeInDown`}></div>
                <div className={`${styles.AppDevMain_textArea__52if7} animate__animated animate__fadeInLeft`}>
                    <h2>アプリ開発</h2>
                    <p>お客様のニーズに合わせてiOS、Androidともに高品質なアプリをスピーディーに開発致します。 <br />
                    アプリのみの開発も承っておりますのでお気軽にお問い合わせください。</p>
                </div>
            </div>
        </div>
    </div>
    )
}