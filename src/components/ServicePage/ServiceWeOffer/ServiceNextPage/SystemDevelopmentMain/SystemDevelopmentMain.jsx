import styles from '../AppDevelopmentMain/AppDevelopmentMain.module.css'
import 'animate.css'

export default function SystemDevelopmentMain() {
    return(
        <div className={styles.AppDevMain_wrapper__Q2kKN}>
            <div className={`${styles.AppDevMain_pageTitle__95a_p} ${styles.PageTitle_wrapper__d3y0q}`}>
                <h2 className={styles.PageTitle_transparent__FD1Cq}>SERVICE</h2>
            </div>
            <div className={`${styles.AppDevMain_webApp__mSB_G} ${styles.AppDevMain_appDevWrapper__cHzO9}`}>
                <div className={styles.AppDevMain_appDevMainContent__MS9pp} >
                <div className={`${styles.AppDevMain_grayArea__DnSKQ} animate__animated animate__fadeInDown`}></div>
                    <div className={`${styles.AppDevMain_textArea__52if7} animate__animated animate__fadeInLeft`}>
                    <h2>Webシステム開発</h2>
                        <p>お客様のニーズに合わせたサービスを企画、デザイン、開発、リリース後の保守運用までワンストップでご提供致します。<br />既存のサービスの追加開発や保守運用も承っております。</p>
                    </div>
                </div>
            </div>
        </div>
    )
}