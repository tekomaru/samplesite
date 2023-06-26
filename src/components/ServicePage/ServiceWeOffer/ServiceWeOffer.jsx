import Link from 'next/link'
import styles from './ServiceWeOffer.module.css'
import 'animate.css'
import { useInView } from 'react-intersection-observer';

export default function ServiceWeOffer() {
    const { ref, inView } = useInView({
        // オプション
        rootMargin: '-80px', 
        triggerOnce: true, // 最初の一度だけ実行
      });
    return (

        <div className={styles.ServiceWeOffer_wrapper} ref={ref}>
            {inView && (
            <div className={styles.Headline_headline}>
                <div className={styles.Headline_mainHeadline__GKrWA}>Service we offer</div>
                    <span>提供サービス</span>
                </div>
            )}
                {inView &&(
                <div className={styles.ServiceWeOffer_serviceWeOffers}>
                    <div className={`${styles.ServiceWeOffer_offerContent} animate__animated animate__fadeInUp`}>
                        <p>エンジニアリング支援</p>
                        <p>Engineering Support</p>
                        <div className={styles.ServiceWeOffer_offerContentBox}>
                            <p>システムの構築に関する コンサルティング、設計、開発、運用を行います。<br/>
                            <br />
                            <br />
                            <br/>
                            </p>
                            {/* <Link href="/service/ServiceSystemDevelopment/">VIEW MORE</Link> */}
                        </div>
                    </div>
                    <div className={`${styles.ServiceWeOffer_offerContent} animate__animated animate__fadeInUp`} id="ServiceWeOffer_offerContent02__kLg_g">
                        <p>Web広告運用支援</p>
                        <p>Web advertising Support</p>
                        <div className={styles.ServiceWeOffer_offerContentBox}>
                            <p>デジタル広告の領域での専門知識と経験を活かし、
                                クライアントの目標に合わせたカスタマイズされた戦略を策定し、 効果的な広告キャンペーンの設計と最適化を支援します。</p>
                            {/* <Link href="/page/ServiceAppDevelopment/">VIEW MORE</Link> */}
                        </div>
                    </div>
                    <div className={`${styles.ServiceWeOffer_offerContent} animate__animated animate__fadeInUp`} id="ServiceWeOffer_offerContent03__vTnju">
                        <p>自社サービス企画・開発</p>
                        <p>Own Service</p>
                        
                        <div className={styles.ServiceWeOffer_offerContentBox}>
                            <p>社内メンバーで自由にアイデアを出し合い、プロジェクトを立ち上げて事業化を目指します。現在もメンバーから挙がったアイデアを具体化しプロジェクトを立ち上げて開発を進めています。</p>
                            {/* <Link href="/service/ServiceOwnService/">VIEW MORE</Link> */}
                        </div>
                    </div>
                </div>
                )}
            </div>
                
    )
}