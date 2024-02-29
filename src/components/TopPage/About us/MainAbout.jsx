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
            <span>Techtonixは、新しいプロジェクトの開発、既存サービスのアップデートやメンテナンス、そして独自サービスの企画開発に取り組んでいます。</span>
            <span>私たちは、少ない人数でも高い機動力を持ったシステム開発を行うことに特化しており、迅速かつ効果的なソフトウェア開発が特長です。</span>
            <span>チームは経験豊富な開発者で構成され、専門知識と経験を生かして、お客様の要望に柔軟にかつ速やかに応えることができる環境を整えています。</span>
            </div>
                <div className={`${styles.top_about_image} animate__animated animate__fadeInUp`}>
                    <img src="/engineering_team.png" alt='' />
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