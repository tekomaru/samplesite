import styles from './MainService.module.css'
import 'animate.css'
import { useInView } from 'react-intersection-observer';
import React from 'react';

export default function MainService() {
    const { ref, inView } = useInView({
        // オプション
        rootMargin: '-80px', 
        triggerOnce: true, // 最初の一度だけ実行
      });

    return(

<section className={styles.Service_wrapper} ref={ref}>
    <div>
        {inView && (
        <div className={styles.Service_serviceTitle}>
            <div className={styles.Service_serviceHeadline}>SERVICE</div>
        </div>
        )}
        <div className={styles.Service_weMake__UTxD2} ref={ref}>
                <div className={styles.Service_scrollDown}>
                {inView &&(
                <span className="animate__animated animate__fadeInUp">We Make</span>
                   )}   
                </div>
        </div>
        <div className={styles.Service_circleWrapper} ref={ref}>
            {inView &&(
            <div className={`${styles.Service_circle} animate__animated animate__fadeInUp`}>
                    <div className={styles.Service_circleContent}>
                        <div className={styles.Service_serviceContentTitle}>
                            <div>Engineering</div>
                            <div>Support</div>
                        </div>
                        <p className={styles.Service_serviceContentName}>エンジニアリング支援</p>
                        <p className={styles.Service_circleLastContent}>
                        システムの構築に関する
                        コンサルティング、設計、開発、運用を行います。
                        </p>
                    </div>
            </div>
            )}
            {inView &&(
            <div className={`${styles.Service_circle} animate__animated animate__fadeInUp`}>
                                <div className={styles.Service_circleContent}>
                                    <div className={styles.Service_serviceContentTitle}>
                                        <div>Web advertising</div>
                                        <div>Support</div>
                                        </div>
                                        <br />
                                        <p className={styles.Service_serviceContentName}>Web広告運用支援</p>
                                        <p className={styles.Service_circleLastContent}>デジタル広告の領域での専門知識と経験を活かし、<br/>
                                            クライアントの目標に合わせたカスタマイズされた戦略を策定し、
                                            効果的な広告キャンペーンの設計と最適化を支援します。</p>
                                    </div>
                                </div>
            )}
            {inView && (
                                <div className={`${styles.Service_circle} animate__animated animate__fadeInUp`}>
                                        <div className={styles.Service_circleContent}>
                                            <div className={styles.Service_serviceContentTitle}>
                                                <div>Own Service</div>
                                            </div>
                                            <p className={styles.Service_serviceContentName}>自社サービス<br/>の企画、開発</p>
                                            {/* <p className={styles.Service_serviceContentNameOwnService}>の企画、開発</p> */}
                                            <p className={styles.Service_circleLastContent}>自社サービスの企画、開発も行っております。</p>
                                            </div>
                                        </div>
            )}
                                    </div>
                                    <div className={styles.Service_serviceAbout}>
                                        <a className={`${styles.Service_circle} animate__animated animate__fadeInUp`} href="/service/">
                                            <span className={styles.Service_arrow}></span>
                                        </a>
                                        <div className={`${styles.undefined} animate__animated animate__fadeInUp`}>詳しく見る</div>
                                    </div>
                                </div>
                            
                                </section>
                                )
                            }