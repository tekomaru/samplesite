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
        <section id='about-us' className={styles.About_wrapper}  ref={ref}>
        {inView && (
        <div className={styles.About_AboutTitle}>
        <div className={styles.About_AboutHeadline}>ABOUT US</div>
        </div>
        )}
        <div className={styles.About_AboutWrapper} ref={ref}>
            {inView && (
            <div className={`${styles.About_AboutText} animate__animated animate__fadeInUp`}>
                <span>Techtonixでは新規サービスの受託開発、既存サービスの追加開発や保守運用、自社サービスの企画開発を行っております。</span>
                <span>当社は少数精鋭のチームで、機動性の高いシステム開発事業に取り組んでいます。私たちの強みは、迅速かつ効率的なソフトウェア開発を実現することです。</span>
                <span>私たちの少数精鋭のチームは、熟練した開発者からなり、高い専門知識と経験を備えています。チーム全体で緊密に連携し、お客様のニーズに的確に応える柔軟性と迅速な対応が可能です。</span>
            </div>
            )}
        </div>
                <div className={`${styles.About_AboutAbout} animate__animated animate__fadeInUp`}>
                    <Link className={styles.About_circle} href="/ABOUT/">
                        <span className={styles.About_arrow}></span>
                        </Link>
                        <div>会社について</div>
                </div>

                        </section>
)
}