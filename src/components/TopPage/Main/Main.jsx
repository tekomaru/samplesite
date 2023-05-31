import styles from './Main.module.css'
import { Link as Scroll } from 'react-scroll';

export default function Main() {
    return (
        <>
        <canvas id="canvas" class={styles.Main_canvas__HD016} data-engine="three.js r145" width={1440} height={718}></canvas>
        <div className={styles.mainTitleSection}>
            <div className={styles.hacktheworld}>
                <div className={styles.titleBlock}>
                    <span className={styles.fadeUp1}>XXXXX</span>
                </div>
                <div className={styles.titleBlock}>
                    <span className={styles.fadeUp2}>XXXX</span>
                </div>
                <div className={styles.titleBlock}>
                    <span className={styles.fadeUp3}>XXXXX</span>
                </div>
                <div className={styles.subTitle}>
                <span className={styles.fadeUp4}>テキストテキストテキスト</span>
                </div>
            </div>
            <div className={styles.leftScroll}>
                <Scroll to="about-us">SCROLL</Scroll>
            </div>
        </div>
        </>
    );
}

