import styles from './MainService.module.css';
import 'animate.css';
import { useInView } from 'react-intersection-observer';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


export default function MainService() {
    const { ref, inView } = useInView({
        // オプション
        rootMargin: '-80px', 
        triggerOnce: true, // 最初の一度だけ実行
      });

    return(

<section className={styles.top_service_wrapper} ref={ref}>
        {inView && (
        <div className={styles.top_service_title}>
            <div className={styles.top_service_headline}>SERVICE</div>
        </div>
        )}
        <div ref={ref}>
            {inView &&(
            <div className={`${styles.top_service_contentWrapper} animate__animated animate__bounceIn`}>
                  <Image src="/image1.png" alt="icon" width={200} height={200}></Image>
                <div className={styles.top_service_content}>
                        <p className={styles.top_service_contentName}>エンジニアリング支援</p>
                        <p className={styles.top_service_LastContent}>
                        システムの構築に関する
                        コンサルティング、設計、開発、運用を行います。
                        </p>
                </div>
            </div>
            )}
            {inView &&(
            <div className={`${styles.top_service_contentWrapper} animate__animated animate__bounceIn`}>
                <Image src="/image2.png" alt="icon" width={200} height={200}></Image>
                <div className={styles.top_service_content}>
                                <p className={styles.top_service_contentName}>Web広告運用支援</p>
                                    <p className={styles.top_service_LastContent}>デジタル広告の領域での専門知識と経験を活かし、
                                            {/* クライアントの目標に合わせたカスタマイズされた戦略を策定し、 */}
                                            効果的な広告キャンペーンの設計と最適化を支援します。</p>
                </div>
            </div>
            )}
            {inView && (
            <div className={`${styles.top_service_contentWrapper} animate__animated animate__bounceIn`}>
                  <Image src="/image3.png" alt="icon" width={250} height={250}></Image>
                <div className={styles.top_service_content}>
                  
                                 <p className={styles.top_service_contentName}>自社サービス<br/>の企画、開発</p>
                                            {/* <p className={styles.Service_serviceContentNameOwnService}>の企画、開発</p> */}
                                <p className={styles.top_service_LastContent}>自社サービスの企画、開発も行っております。</p>
                </div>
            </div>
            )}
        </div>
        <div className={styles.top_service_contentsp}>
      
        </div>
        {inView && (
            <div className={`${styles.top_service_about} animate__animated animate__fadeInUp`}>
            <Link className={styles.button} href="/ABOUT/">
                        <span>詳しく見る</span>
                        <span className={styles.arrow}></span>
                        </Link>
            </div>
        )}
            </section>
)
}