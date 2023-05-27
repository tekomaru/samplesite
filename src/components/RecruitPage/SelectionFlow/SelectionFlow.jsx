import styles from './SelectionFlow.module.css'
import 'animate.css'

export default function SelectionFlow(){
    return(

        <div className={styles.SectionFlow_wrapper} id="selectionFlow">
            <div className={styles.Headline_headline}>
                <div className={styles.Headline_mainHeadline}>Selection Flow</div>
                <span>選考フロー</span>
            </div>
            <div className={styles.SectionFlow_sectionFlowDescription}>
                <p className={`${styles.SectionFlow_sectionFlowBox} animate__animated animate__fadeInUp`}>WorldHacksの選考フローについてご紹介します。<br />まずはじめに今までのポートフォリオやご経験を拝見し、面接でざっくばらんにお話させていただきます。</p>
            </div>
            <div className={styles.SectionFlow_sectionFlowImageWrapper}>
                <div className={`${styles.SectionFlow_sectionFlowBox} animate__animated animate__fadeInUp`}>
                    <div className={styles.SectionFlow_boxInnerRowLine}></div>
                    <span>1</span>
                    <p>書類審査</p>
                    <p>エントリーいただく職種・就業形態に応じて必要な書類をご提出いただきます。</p>
                </div>
                <div className={`${styles.SectionFlow_rowLine} animate__animated animate__fadeInUp`}></div>
                <div className={`${styles.SectionFlow_sectionFlowBox} animate__animated animate__fadeInUp`}>
                    <div className={styles.SectionFlow_boxInnerRowLine}></div>
                    <span>2</span>
                    <p>面接</p>
                    <p>あなたの目標や挑戦したいこと等、ざっくばらんにお話しましょう！</p>
                </div>
                <div className={`${styles.SectionFlow_rowLine} animate__animated animate__fadeInUp`}></div>
                <div className={`${styles.SectionFlow_sectionFlowBox} animate__animated animate__fadeInUp`}>
                    <div className={styles.SectionFlow_boxInnerRowLine}></div>
                    <span>3</span>
                    <p>技術テスト</p>
                    <p>必要に応じて実施しております （ない場合もございます）</p>
                </div>
            </div>
        </div>
    )
}