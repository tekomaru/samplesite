import Link from 'next/link'
import styles from './ServiceWeOffer.module.css'
import 'animate.css'
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

export default function ServiceWeOffer() {
    const { ref, inView } = useInView({
        // オプション
        rootMargin: '-80px', 
        triggerOnce: true, // 最初の一度だけ実行
      });
    return (

        <div className={styles.ServiceWeOffer_wrapper} ref={ref}>
                {inView &&(
                <div className={styles.ServiceWeOffer_serviceWeOffers}>
                    <div className={styles.Service_image}>
                    <Image src="/Web_development.png" width={450} height={300}></Image>
                    </div>
                    <div className={`${styles.ServiceWeOffer_offerContent} animate__animated animate__fadeInUp`}>
                        <div className={styles.Service_box}>
                            <p>エンジニアリング支援</p>
                            <p>Engineering Support</p>
                        </div>
                            <div className={styles.ServiceWeOffer_offerContentBox}>
                                <p>システムの構築に関する コンサルティング、設計、開発、運用を行います。<br/>
                           
                                </p>
                              
                           <p>私たちは、技術の力でビジネスの未来を切り開くエンジニアリング支援サービスを提供しています。システムの構築に関するコンサルティング、設計、開発、運用を一貫して行い、お客様のビジネスを次のレベルへと導きます。<br/>
                           
                           </p>
                            </div>
                    </div>
                    
                </div>
                )}
                {inView &&(
                    
                    <div className={styles.ServiceWeOffer_serviceWeOffers}>
                        <div className={styles.Service_image}>
                        <Image src="/undraw_website.png" width={450} height={300}></Image>
                        </div>
                        <div className={`${styles.ServiceWeOffer_offerContent} animate__animated animate__fadeInUp`}>
                            <div className={styles.Service_box}>
                                <p>Web広告運用支援</p>
                                <p>Web advertising Support</p>
                            </div>
                                <div className={styles.ServiceWeOffer_offerContentBox}>
                                    <p>デジタル広告の領域での専門知識と経験を活かし、 クライアントの目標に合わせたカスタマイズされた戦略を策定し、 効果的な広告キャンペーンの設計と最適化を支援します。
                               
                                    </p>
                              
                                </div>
                        </div>
                        
                    </div>
                    )}
                    {inView &&(
                    
                    <div className={styles.ServiceWeOffer_serviceWeOffers}>
                        <div className={styles.Service_image}>
                        <Image src="/undraw_Ideas.png" width={450} height={300}></Image>
                        </div>
                        <div className={`${styles.ServiceWeOffer_offerContent} animate__animated animate__fadeInUp`}>
                            <div className={styles.Service_box}>
                                <p>自社サービス企画・開発</p>
                                <p>Own Service</p>
                            </div>
                                <div className={styles.ServiceWeOffer_offerContentBox}>
                                    <p>社内メンバーで自由にアイデアを出し合い、プロジェクトを立ち上げて事業化を目指します。現在もメンバーから挙がったアイデアを具体化しプロジェクトを立ち上げて開発を進めています。
                               
                                    </p>
                              
                                </div>
                        </div>
                        
                    </div>
                    )}
            </div>
                
    )
}