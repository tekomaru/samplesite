import Link from 'next/link'
import styles from './MainAbout.module.css'
import 'animate.css'
import { useInView } from 'react-intersection-observer';

export default function MainAbout() {
return (
        <section id='about-us' className={styles.Company_wrapper___zoel}>
        <>
        <div className={styles.Company_companyTitle__hHkdJ}>
        <div className={styles.Company_companyHeadline__A55LA}>ABOUT US</div>
        </div>
        <div className={`${styles.Company_companyWrapper___7XfP} animate__animated animate__fadeInUp`}>
            <div className={styles.Company_companyText__kqkJK}>
                <span>WorldHacksでは新規サービスの受託開発、既存サービスの追加開発や保守運用、自社サービスの企画開発を行っております。</span>
                <span>様々なニーズに合わせて、それぞれの事業フェーズ・課題に応じた支援が可能です。</span>
                <span>私たちと一緒に世界をハックするサービスを生み出しましょう。</span>
                </div>
                </div>
                <div className={`${styles.Company_companyAbout__jttEY} animate__animated animate__fadeInUp`}>
                    <Link className={styles.Company_circle__QD60S} href="/company/">
                        <span className={styles.Company_arrow__fhvtz}></span>
                        </Link>
                        <div>WorldHacksについて</div>
                        </div>
                        </>
                        </section>
)
}