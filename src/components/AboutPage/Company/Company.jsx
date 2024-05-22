import { useInView } from 'react-intersection-observer'
import styles from './Company.module.css'

export default function Company(){
    const { ref, inView } = useInView({
        // オプション
        rootMargin: '-80px', 
        triggerOnce: true, // 最初の一度だけ実行
      });
    return (
    <div className={styles.CompanyIntro_wrapper}>
        <div className={styles.CompanyIntro_companyIntroWrapper}>
            <><span>COMPANY</span>
            <dl className="animate__animated animate__fadeInUp">
                <dt>会社名</dt>
                <dd>株式会社Techtonix</dd>
                <dt>設立</dt><dd>2023年4月7日</dd>
                <dt>所在地</dt>
                <dd>〒020-0862<br />
                    岩手県盛岡市東仙北2丁目2-13</dd>
                <dt>代表取締役</dt>
                    <dd>内城 瑛</dd>
                <dt>資本金</dt>
                    <dd>100万円</dd>
                <dt>事業内容</dt>
                    <dd>
                        <ul>
                            <li>・コンピュータソフトウェア及びコンピュータシステムの規格、開発、分析、設計、制作、半場に、管理及び保守並びにそれらのコンサルティング</li>
                            <li>・システムエンジニアリングサービスに関わる業務</li>
                            <li>・ウェブサイト、ウェブコンテンツ及びホームページの企画</li>
                            <li>・広告の企画、制作及び配信並びに広告代理業務</li>
                        </ul>
                    </dd>
                </dl></>
        </div>
    </div>
        )
        }