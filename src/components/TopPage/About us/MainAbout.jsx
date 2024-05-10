import Link from 'next/link'
import styles from './MainAbout.module.css'
import 'animate.css'
import { useInView } from 'react-intersection-observer';
import React from 'react';

export default function MainAbout() {
    const { ref, inView } = useInView({
        // オプション
        rootMargin: '-80px', 
        triggerOnce: true, // 最初の一度だけ実行
      });

return (
        <section id='about-us' className={styles.top_about_wrapper}  ref={ref}>
        {inView && (
        <div className={styles.top_about_title}>
        <div className={styles.top_about_headline}>ABOUT US</div>
        </div>
        )}
        <div ref={ref}>
            {inView && (
            <div className={styles.top_about_inner}>   
            
            <div className={`${styles.top_about_text} animate__animated animate__fadeInUp`}>
                <span>Techtonixでは新規サービスの受託開発、既存サービスの追加開発や保守運用、自社サービスの企画開発を行っております。</span>
                <span>当社は少数精鋭のチームで、機動性の高いシステム開発事業に取り組んでいます。私たちの強みは、迅速かつ効率的なソフトウェア開発を実現することです。</span>
                <span>私たちの少数精鋭のチームは、熟練した開発者からなり、高い専門知識と経験を備えています。チーム全体で緊密に連携し、お客様のニーズに的確に応える柔軟性と迅速な対応が可能です。</span>
            </div>
                <div className={`${styles.top_about_image} animate__animated animate__fadeInUp`}>
                    <img src="/about_image.png" alt='' />
                </div>
            </div>
             )}
        </div>
                <div className={`${styles.top_about_about} animate__animated animate__fadeInUp`}>
                    <Link className={styles.button} href="/about/">
                        <span>詳しく見る</span>
                        <span className={styles.arrow}></span>
                        </Link>
                    
                </div>

                        </section>
)
}