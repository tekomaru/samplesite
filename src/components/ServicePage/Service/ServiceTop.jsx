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
                       </>
                )}
            </div>
        </div>

    )
}