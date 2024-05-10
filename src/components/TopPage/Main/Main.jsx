import styles from './Main.module.css'
import { Link as Scroll } from 'react-scroll';

export default function Main() {
    return (
        <>
        <div class={styles.mainvisual}>
            <img src="/undraw_Developer_activity.png" alt="" />
        </div>
        <div className={styles.mainTitleSection}>
            <div className={styles.DevelopForFun}>
                <div className={styles.titleBlock}>
                    <span className={styles.fadeUp1}>Develop</span>
                </div>
                <div className={styles.titleBlock}>
                    <span className={styles.fadeUp2}>for</span>
                </div>
                <div className={styles.titleBlock}>
                    <span className={styles.fadeUp3}>Fun</span>
                </div>
               
            </div>
        </div>
        <p><span className={styles.scroll}>SCROLL</span></p>
        </>
    );
}

