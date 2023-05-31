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

<section className={styles.Service_wrapper__re0Ps} ref={ref}>
    <div>
        {inView && (
        <div className={styles.Service_serviceTitle__D7CeL}>
            <div className={styles.Service_serviceHeadline__m8jZF}>SERVICE</div>
        </div>
        )}
        <div className={styles.Service_weMake__UTxD2} ref={ref}>
                <div className={styles.Service_scrollDown__Kw0By}>
                {inView &&(
                <span className="animate__animated animate__fadeInUp">We Make</span>
                   )}   
                </div>
        </div>
        <div className={styles.Service_circleWrapper__EJf19} ref={ref}>
            {inView &&(
            <div className={`${styles.Service_circle__BGg6y} animate__animated animate__fadeInUp`}>
                <img src="/Image/circleArrow.png" alt="" width={400} height={400} />
                    <div className={styles.Service_circleContent___sEfc}>
                        <div className={styles.Service_serviceContentTitle__ff_tR}>
                            <div>System</div>
                            <div>development</div>
                        </div>
                        <p className={styles.Service_serviceContentName__ssJ1k}>Webシステム開発</p>
                        <p className={styles.Service_circleLastContent__7yHKD}>Webシステムの構築に関する<br />
                        コンサルティング、設計、開発、運用を行います。</p>
                    </div>
            </div>
            )}
            {inView &&(
            <div className={`${styles.Service_circle__BGg6y} animate__animated animate__fadeInUp`}>
                            <img src="/Image/circleArrow.png" alt="" width={400} height={400} />
                                <div className={styles.Service_circleContent___sEfc}>
                                    <div className={styles.Service_serviceContentTitle__ff_tR}>
                                        <div>Application</div>
                                        <div>development</div>
                                        </div>
                                        <p className={styles.Service_serviceContentName__ssJ1k}>アプリ開発</p>
                                        <p className={styles.Service_circleLastContent__7yHKD}>iOS、Androidともに高品質なアプリをスピーディーに開発致します。</p>
                                    </div>
                                </div>
            )}
            {inView && (
                                <div className={`${styles.Service_circle__BGg6y} animate__animated animate__fadeInUp`}>
                                    <img src="/Image/circleArrow.png" alt="" width={400} height={400} />
                                        <div className={styles.Service_circleContent___sEfc}>
                                            <div className={styles.Service_serviceContentTitle__ff_tR}>
                                                <div>Own Service</div>
                                            </div>
                                            <p className={styles.Service_serviceContentName__ssJ1k}>自社サービス</p>
                                            <p className={styles.Service_serviceContentNameOwnService__hL8BZ}>の企画、開発</p>
                                            <p className={styles.Service_circleLastContent__7yHKD}>自社サービスの企画、開発も行っております。</p>
                                            </div>
                                        </div>
            )}
                                    </div>
                                    <div className={styles.Service_serviceAbout__D5pD_}>
                                        <a className={`${styles.Service_circle__BGg6y} animate__animated animate__fadeInUp`} href="/service/">
                                            <span className={styles.Service_arrow__v7E1N}></span>
                                        </a>
                                        <div className={`${styles.undefined} animate__animated animate__fadeInUp`}>詳しく見る</div>
                                    </div>
                                </div>
                            
                                </section>
                                )
                            }