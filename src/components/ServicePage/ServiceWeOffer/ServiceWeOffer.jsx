import Link from 'next/link'
import styles from './ServiceWeOffer.module.css'
import 'animate.css'

export default function ServiceWeOffer() {
    return (

        <div className={styles.ServiceWeOffer_wrapper__tN43d}>
            <div className={styles.Headline_headline__tn7LE}>
                <div className={styles.Headline_mainHeadline__GKrWA}>Service we offer</div>
                    <span>提供サービス</span>
                </div>
                <div className={styles.ServiceWeOffer_serviceWeOffers__eQUrZ}>
                    <div className={`${styles.ServiceWeOffer_offerContent__q4vdh} animate__animated animate__fadeInUp`}>
                        <p>Webシステム開発</p>
                        <p>System<br />development</p>
                        <div className={styles.ServiceWeOffer_offerContentBox__iBCYe}>
                            <p>お客様のニーズに合わせたサービスを企画、デザイン、開発、リリース後の保守運用までワンストップでご提供致します。既存のサービスの追加開発や保守運用も承っております。</p>
                            <Link href="PageSystemDevelopment">VIEW MORE</Link>
                        </div>
                    </div>
                    <div className={`${styles.ServiceWeOffer_offerContent__q4vdh} animate__animated animate__fadeInUp`} id="ServiceWeOffer_offerContent02__kLg_g">
                        <p>アプリ開発</p>
                        <p>Application<br />development</p>
                        <div className={styles.ServiceWeOffer_offerContentBox__iBCYe}>
                            <p>アプリ開発もお客様のニーズに合わせてiOS、Androidともに高品質なアプリをスピーディーに開発致します。アプリのみの開発も承っておりますのでお気軽にお問い合わせください。</p>
                            <Link href="PageAppDevelopment">VIEW MORE</Link>
                        </div>
                    </div>
                    <div className={`${styles.ServiceWeOffer_offerContent__q4vdh} animate__animated animate__fadeInUp`} id="ServiceWeOffer_offerContent03__vTnju">
                        <p>自社サービス<br />企画・開発</p>
                        <p>Own Service</p>
                        <div className={styles.ServiceWeOffer_offerContentBox__iBCYe}>
                            <p>社内メンバーで自由にアイデアを出し合い、プロジェクトを立ち上げて事業化を目指します。現在もメンバーから挙がったアイデアを具体化しプロジェクトを立ち上げて開発を進めています。</p>
                            <Link href="PageOwnService">VIEW MORE</Link>
                        </div>
                    </div>
                </div>
            </div>
    )
}