import styles from './About.module.css';

export default function About() {
    return (
        <div className={styles.About_wrapper___P5b4}>
            <div className={styles.About_background__4_MBK}>
                <div className={styles.PageTitle_wrapper__d3y0q}>
                    <h2 className={styles.PageTitle_gray__1L4xT}>ABOUT</h2>
                </div>
                <div className={styles.About_aboutContent__vJ5m0}>
                    <h3 className={`${styles.undefined} animate__animated animate__fadeInUp`}>世界をハックするサービスを</h3>
                    <p className={`${styles.undefined} animate__animated animate__fadeInUp`}>納品して終わりの関係ではなくサービスの最初から最後までパートナーとしてビジネスの成長に貢献できるようユーザー目線も意識したご提案をさせて頂きます。不要機能をなるべく減らし、事業の変化に応じた要件変更にも対応できるような体制を整えております。</p>
                    <p className={`${styles.undefined} animate__animated animate__fadeInUp`}>私たちと一緒に世界をハックするサービスを生み出しましょう。</p>
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