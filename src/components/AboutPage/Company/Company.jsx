import { useInView } from 'react-intersection-observer'
import styles from './Company.module.css'

export default function Company(){
    return (
        <>
    <div className={styles.CompanyIntro_wrapper__WwW7C}>
        <div className={styles.CompanyIntro_companyIntroWrapper__oi3zs}>
            <span>COMPANY</span>
            <dl className="animate__animated animate__fadeInUp">
                <dt>会社名</dt>
                <dd>株式会社WorldHacks <br className={styles.CompanyIntro_spNewLine__kYpIZ} />（WorldHacks Inc.）</dd>
                <dt>設立</dt><dd>2022年3月24日</dd><dt>所在地</dt>
                <dd>〒150-0002<br />
                    <p className={styles.CompanyIntro_address__FKAGp}>東京都渋谷区渋谷2-19-15 <br className={styles.CompanyIntro_spNewLine__kYpIZ} />宮益坂ビルディング609</p></dd>
                <dt>代表取締役</dt>
                <dd>森下 浬</dd>
                <dt>資本金</dt>
                <dd>1,000万円</dd>
                <dt>事業内容</dt>
                <dd>
                    <ul>
                        <li>・Webシステムの構築に関するコンサルティング、計、開発、運用</li>
                        <li>・スマートフォンアプリに関するコンサルティング、設計、開発、運用(iOS,Android)</li>
                        <li>・自社プロダクトの企画、開発、運用</li>
                    </ul>
                </dd>
            </dl>
        </div>
    </div>
    </>
        )
        }