import Link from 'next/link'
import styles from './MainRecruit.module.css'
import 'animate.css'

export default function MainRecruit() {

return (
    <section className={styles.Recruit_wrapper__oyHGV}>
        <div className={styles.Recruit_worldMap02___gTf_}>
        </div>
        <div className={styles.Recruit_recruitTitle__CyZnG}>
            <div className={styles.Recruit_recruitHeadline__ZyEKh}>RECRUIT</div>
        </div>
        <div className={styles.Recruit_recruitContent__y_kNZ}>
            <div className={styles.Recruit_scrollCircle__Gp1AW}>
                
            </div>
            <style jsx>{'.Recruit_scrollCircle__Gp1AW {max-height: 3000px; width: 1475.21px; height: 1475.21px; top: calc(50% - 737.606px); left: calc(50% - 737.606px); opacity: 187.065;}'}</style>
            <span className={styles.Recruit_joinWorldHacks__gjkR6}>JOIN XXXXXXXXX</span>
            <div className={styles.Recruit_recruitWrapper__kXmCr}>
                <span className={`${styles.undefined} animate__animated animate__fadeInUp`}>XXXXXXではインターン、業界未経験からのポテンシャル採用、中途採用と幅広くご用意しております。 挑戦を恐れず積極的に事業を推し進めていける方を募集しております。</span>
                <span className={`${styles.undefined} animate__animated animate__fadeInUp`}>チャレンジしたい方は是非お待ちしております。</span>
            </div>
        </div>
        <div className={styles.Recruit_recruitAbout__Tzn72}>
            <a className={`${styles.Recruit_circle__JFabt} animate__animated animate__fadeInUp`} href="/recruit/">
            <span className={styles.Recruit_arrow__PREhm}></span>
            </a>
            <div className={`${styles.undefined} animate__animated} animate__fadeInUp}`}>採用について</div>
        
        </div>
        </section>
)
}