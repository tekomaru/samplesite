import styles from './RecruitMain.module.css'
import 'animate.css'

export default function RecruitMain(){
    return(
        <div className={styles.RecruitMain_wrapper___UgSA} id="message">
            <div className={styles.RecruitMain_recruitWrapper__XLaFJ}>
                <div className={`${styles.RecruitMain_pageTitle__FVihV} ${styles.PageTitle_wrapper__d3y0q}`}>
                    <h2 className={styles.PageTitle_transparent__FD1Cq}>RECRUIT</h2>
                </div>
                <p className={`${styles.RecruitMain_recruitDescription__pD7r_} animate__animated animate__fadeInLeft`}>最高のチームで<br />世界をHACKしないか。</p>
                <div className={styles.RecruitMain_pageArrowWrapper__K2H5K}>
                    <div className={styles.RecruitMain_pageArrow__Ic5ZH}>
                        <a className={`${styles.RecruitMain_circle__9lV4w} animate__animated animate__fadeInUp`} aria-label="メッセージ" href="#message">
                            <span className={styles.RecruitMain_arrow__t_DHB}></span>
                        </a>
                        <a href="#message">
                            <div className={`${styles.undefined} animate__animated animate__fadeInUp`}>メッセージ</div>
                        </a>
                    </div>
                    <div className={styles.RecruitMain_pageArrow__Ic5ZH}>
                        <a className={`${styles.RecruitMain_circle__9lV4w} animate__animated animate__fadeInUp`} aria-label="募集ポジション" href="#openPosition">
                            <span className={styles.RecruitMain_arrow__t_DHB}></span>
                        </a>
                        <a href="#openPosition">
                            <div className={`${styles.undefined} animate__animated animate__fadeInUp`}>募集ポジション</div>
                        </a>
                    </div>
                    <div className={styles.RecruitMain_pageArrow__Ic5ZH}>
                        <a className={`${styles.RecruitMain_circle__9lV4w} animate__animated animate__fadeInUp`} aria-label="働く環境" href="#enviroment">
                            <span className={styles.RecruitMain_arrow__t_DHB}></span>
                        </a>
                        <a href="#enviroment">
                            <div className={`${styles.undefined} animate__animated animate__fadeInUp`}>働く環境</div>
                        </a>
                    </div>
                    <div className={styles.RecruitMain_pageArrow__Ic5ZH}>
                        <a className={`${styles.RecruitMain_circle__9lV4w} animate__animated animate__fadeInUp`} aria-label="選考フロー" href="#selectionFlow">
                            <span className={styles.RecruitMain_arrow__t_DHB}></span>
                        </a>
                        <a href="#selectionFlow">
                            <div className={`${styles.undefined} animate__animated animate__fadeInUp`}>選考フロー</div>
                        </a>
                    </div>
                </div>
                <div className={styles.RecruitMain_recruitMessageWrapper__oFbZA}>
                    <p className={`${styles.undefined} animate__animated animate__fadeInUp`}>WorldHacksでは裁量権を持って事業を推し進めていける方を募集しております。<br /><br />
                    リーダーとしてチームを引っ張っていきたい方、エンジニアを目指している方、上昇志向のある学生、新規事業の企画開発に興味のある方はぜひお問い合わせください。</p>
                </div>
            </div>
        </div>
    )
}