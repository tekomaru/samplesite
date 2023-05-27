import styles from '../AppDevelopmentMain/AppDevelopmentMain.module.css'
import 'animate.css'

export default function OwnServiceMain() {
    return(

        <div className={styles.AppDevMain_wrapper__Q2kKN}>
            <div className={`${styles.AppDevMain_pageTitle__95a_p} ${styles.PageTitle_wrapper__d3y0q}`}>
                <h2 className={styles.PageTitle_transparent__FD1Cq}>SERVICE</h2>
            </div>
            <div className={`${styles.AppDevMain_inHouseDev__yNb3M} ${styles.AppDevMain_appDevWrapper__cHzO9}`}>
                <div className={styles.AppDevMain_appDevMainContent__MS9pp}>
                    <div className={`${styles.AppDevMain_grayArea__DnSKQ} animate__animated animate__fadeInDown`}></div>
                    <div className={`${styles.AppDevMain_textArea__52if7} animate__animated animate__fadeInLeft`}>
                        <h2>自社サービス企画・開発</h2>
                        <p>社内メンバーで自由にアイデアを出し合い、プロジェクトを立ち上げて事業化を目指します。<br />現在もメンバーから挙がったアイデアを具体化しプロジェクトを立ち上げて開発を進めています。</p>
                    </div>
                </div>
            </div>
        </div>
    )
}