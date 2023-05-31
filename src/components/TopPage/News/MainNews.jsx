import Link from 'next/link'
import styles from './MainNews.module.css'
import 'animate.css'
import { useInView } from 'react-intersection-observer';
import React from 'react';

export default function MainNews() {
    const { ref, inView } = useInView({
        // オプション
        rootMargin: '-80px', 
        triggerOnce: true, // 最初の一度だけ実行
      });
return (
        <section className={styles.News_wrapper__twCjo} ref={ref}>
            
            <div>
            {inView && (
                <div className={styles.News_newsTitle__s3d4m}>
                    <div className={styles.News_newsHeadline__Hv06j}>NEWS</div>
                </div>
            )}
                <div className={styles.News_newsBlogWrapper__uI7Kq} ref={ref}>
                    {inView && (
                    <div className={`${styles.News_blogCard__DFgkB} animate__animated animate__fadeInUp`}>
                        <div className={styles.News_blogImgWrapper__Jm6oG}>
                            <div className={styles.News_leftTopCard__e9Py1}>
                                <span>ニュース</span>
                            </div>
                            <img src="/img/news/defaultImg.png" alt="記事" width={270} height={287} className={styles.News_defaultImg__SV9HJ} />
                        </div>
                        <div className={styles.News_blogContent___pEgF}>
                            <p>コーポレートサイトをリニューアルしました。</p>
                            <span>2023-02-14</span>
                        </div>
                    </div>
                    )}
                </div>
                <div className={styles.News_newsAbout__GdoLH}>
                    <Link className={`${styles.News_circle__TS7Oe} animate__animated} animate__fadeInUp`} href="/news/page/1/">
                        <span className={styles.News_arrow__bq51y}></span>
                    </Link>
                    <div className={`${styles.undefined} animate__animated animate__fadeInUp`}>NEWSをもっと見る</div>
                </div>
            </div>
            </section>
            )
            }