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
                <div className={styles.About_aboutContent__vJ5m0} ref={ref}>
                    {inView &&(
                    <><h3 className="animate__animated animate__fadeInUp">世界をハックするサービスを</h3>
                    <p className="animate__animated animate__fadeInUp">納品して終わりの関係ではなくサービスの最初から最後までパートナーとしてビジネスの成長に貢献できるようユーザー目線も意識したご提案をさせて頂きます。不要機能をなるべく減らし、事業の変化に応じた要件変更にも対応できるような体制を整えております。</p>
                    <p className="animate__animated animate__fadeInUp">私たちと一緒に世界をハックするサービスを生み出しましょう。</p></>
                    )}
                </div>
            </div>
            <div className={styles.About_loopWrap__xgNTZ}>
                <img src="/img/slick01.png"  alt="" />
                <img src="/img/slick02.png" widthalt="" />
                <img src="/img/slick03.png" alt="" />
            </div>
        </div>
    )
}