import styles from './About.module.css';
import { useInView } from 'react-intersection-observer'

export default function About() {
    const { ref, inView } = useInView({
        // オプション
        rootMargin: '-80px', 
        triggerOnce: true, // 最初の一度だけ実行
      });
    return (
        <div className={styles.About_wrapper___P5b4}>
            <div className={styles.About_background__4_MBK}>
                <div className={styles.PageTitle_wrapper__d3y0q}>
                    <h2 className={styles.PageTitle_gray__1L4xT}>ABOUT</h2>
                </div>
                <div className={styles.About_aboutContent} ref={ref}>
                    {inView &&(
                    <><p className="animate__animated animate__fadeInUp">Techtonixでは新規サービスの受託開発、既存サービスの追加開発や保守運用、自社サービスの企画開発を行っております。</p>
                    <p className="animate__animated animate__fadeInUp">当社は少数精鋭のチームで、機動性の高いシステム開発事業に取り組んでいます。私たちの強みは、迅速かつ効率的なソフトウェア開発を実現することです。</p>
                    <p className="animate__animated animate__fadeInUp">私たちの少数精鋭のチームは、熟練した開発者からなり、高い専門知識と経験を備えています。チーム全体で緊密に連携し、お客様のニーズに的確に応える柔軟性と迅速な対応が可能です。
                    </p>
                    </>
                    )}
                </div>
            </div>
            {/* <div className={styles.About_loopWrap__xgNTZ}>
                <img src="/img/slick01.png"  alt="" />
                <img src="/img/slick02.png" widthalt="" />
                <img src="/img/slick03.png" alt="" />
            </div> */}
        </div>
    )
}