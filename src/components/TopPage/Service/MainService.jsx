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
            <div className={`${styles.top_service_contentWrapper} animate__animated animate__bounceIn`}>
                <div className={styles.top_service_contentsimg}>
                <Image src="/image_1.png" alt="icon" width={180} height={180}></Image>
                </div>
                <div className={styles.top_service_content}>
                    <p className={styles.top_service_contentName}>エンジニアリング支援</p>
                    <p className={styles.top_service_LastContent}>
                        システムの構築に関するコンサルティング、設計、開発、運用を行います。
                    </p>
                    
                </div>
            </div>
            {inView && (
            <div className={`${styles.top_service_contentWrapper} animate__animated animate__bounceIn`}>
                <div className={styles.top_service_contentsimg}>
                    <Image src="/image_2.png" alt="icon" width={200} height={200}></Image>
                </div>
                <div className={styles.top_service_content}>
                    <p className={styles.top_service_contentName}>Web広告運用支援</p>
                    <p className={styles.top_service_LastContent}>デジタル広告の領域での専門知識と経験を活かし、

                        効果的な広告キャンペーンの設計と最適化を支援します。</p>
                </div>
            </div>
            )}
            {inView && (
            <div className={`${styles.top_service_contentWrapper} animate__animated animate__bounceIn`}>
                <div className={styles.top_service_contentsimg}>
                    <Image src="/image_3.png" alt="icon" width={200} height={200}></Image>
                </div>
                <div className={styles.top_service_content}>
                    <p className={styles.top_service_contentName}>自社サービスの企画、開発</p>

                    <p className={styles.top_service_LastContent}>自社サービスの企画、開発も行っております。</p>
                </div>
            </div>
            )}
              {inView && (
            <div className={`${styles.top_service_about} animate__animated animate__fadeInUp`}>
            <Link className={styles.button} href="/service/">
                        <span>詳しく見る</span>
                        <span className={styles.arrow}></span>
                        </Link>
            </div>
        )}
<div className={styles.top_service_contentsp}>

            </div>
    
            </section>
)
}