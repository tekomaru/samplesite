import { useInView} from 'react-intersection-observer';
import styles from './ServiceTop.module.css'

export default function Service() {
    const { ref, inView } = useInView({
        // オプション
        rootMargin: '-80px', 
        triggerOnce: true, // 最初の一度だけ実行
      });
    return (

        <div className={styles.ServiceMain_wrapper}>
            <div className={styles.ServiceMain_serviceTitleWrapper}>
                {/* <img src="/img/serviceBackground.png" alt="" /> */}
                    <h2 className={styles.ServiceMain_serviceTitle}>
                        <span>SERVICE</span>
                    </h2>
                 
            </div>
            <p>私たちは、あなたのビジネスを次のレベルへと押し上げる多彩なサービスを提供します。最先端の技術とクリエイティブな発想で、あなたのアイデアを現実に変え、市場での成功を実現します。私たちと一緒に、ビジネスの可能性を広げましょう。</p>
        </div>

    )
}