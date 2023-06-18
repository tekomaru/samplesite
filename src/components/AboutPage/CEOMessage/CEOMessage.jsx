import styles from './CEOMessage.module.css';
import Link from 'next/link';
import 'animate.css';
import { useInView } from 'react-intersection-observer';

export default function CEOMessage(){
    const { ref, inView } = useInView({
        // オプション
        rootMargin: '-80px', 
        triggerOnce: true, // 最初の一度だけ実行
      });
    return (
    <>  
        <div className={styles.CEOMessage_background__LrcXz}>
            <div className={styles.CEOMessage_wrapper__u8hmL} ref={ref}>
                {inView && (
                <div className="animate__animated animate__fadeInUp">
                    <div className={styles.CEOMessage_CEOMessageContent__ciwz9}>
                        <span>CEO<br />MESSAGE</span>
                        <img src="/img/CEO.png" alt="" />
                        <div className={styles.CEOMessage_CEOMessages__Dh36F}>
                            <p></p>
                            <p>代表取締役　</p>
                        </div>
                    </div>
                </div>
                )}
            </div>
        </div>
        </>
)
}