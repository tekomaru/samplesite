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
            <div className={styles.ServiceMain_serviceMainContent} ref={ref}>
                {inView &&(
                <><p className="animate__animated animate__fadeInUp"></p>
                   
                       </>
                )}
            </div>
        </div>

    )
}