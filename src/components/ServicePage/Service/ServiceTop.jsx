import { useInView} from 'react-intersection-observer';
import styles from './ServiceTop.module.css'

export default function Service() {
    const { ref, inView } = useInView({
        // オプション
        rootMargin: '-80px', 
        triggerOnce: true, // 最初の一度だけ実行
      });
    return (

        <div className={styles.ServiceMain_wrapper___yDuj}>
            <div className={styles.ServiceMain_serviceTitleWrapper__8xBUe}>
                <img src="/img/serviceBackground.png" alt="" />
                    <h2 className={styles.ServiceMain_serviceTitle__DWIh0}>
                        <span>SERVICE</span>
                    </h2>
            </div>
            <div className={styles.ServiceMain_serviceMainContent__uxOt6} ref={ref}>
                {inView &&(
                <><p className="animate__animated animate__fadeInUp">お客様のパートナーとしての開発を</p>
                    <div className={`${styles.ServiceMain_scrollDown__7jqtz} animate__animated animate__fadeInUp`}></div>
                        <p className="animate__animated animate__fadeInUp">
                        WEBサービスをメインとして、モバイルアプリケーション、様々なニーズにおいて、要件定義から設計、開発、テスト、保守・運用まで、弊社の経験豊富なエンジニアが対応いたします。<br />
                        WorldHacksでは綿密なお打ち合わせのもと、開発のご依頼をご経験されてことがある企業様をはじめ、システム開発やアプリ開発が初めての企業様でも、安心して構築・開発をおこなってきた実績がございます。
                        </p></>
                )}
            </div>
        </div>

    )
}