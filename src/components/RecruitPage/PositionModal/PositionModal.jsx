import styles from './PositionModal.module.css'


export default function PositionModal(){
    return(

<div className={styles.PositionModal_modalWrapper}>
<div className={styles.PositionModal_modaSecondWrapper}>
    <div className={styles.PositionModal_closeButton}></div>
        <div className={`${styles.PositionModal_positionTitle} animate__animated animate__fadeInLeft`}>中途採用</div>
        <div className={`${styles.PositionModal_positionIntroWrapper} animate__animated animate__fadeInUp`}>
        <img src="/img/recruit/positionImg1.png" alt="positionImg" />
        <div className={styles.PositionModal_positionIntro}>
            <p></p>
            <a href="https://www.wantedly.com/projects/1020833" target="_blank" rel="noopener noreferrer">
                <img src="/img/recruit/wantedly.png" alt="wantedly" /></a>
        </div>
    </div>
    <div className={styles.PositionModal_positionDescriptionWrapper}>
        <dl className={`${styles.undefined} animate__animated animate__fadeInUp`}>
            <dt>スキル</dt>
            <dd>
                <ul>
                    <li>■必須スキル</li>
                    ・Webアプリやスマホアプリの開発経験1年以上(言語は問わない)<br /><br />
                    <li>■歓迎スキル</li>
                    ・大規模サービスの構築、運用経験<br />
                    ・開発チームメンバーの育成経験<br />
                    ・お客様との打ち合わせ、仕様調整の経験<br />
                </ul>
            </dd>
            <dt>雇用形態</dt>
            <dd>正社員・業務委託</dd>
            <dt>勤務地</dt>
            <dd>フルリモート<br />(ご希望の方は定期的にオフライン出勤も可能です)</dd>
            <dt>勤務時間</dt>
            <dd>10:00～19:00<br />
            フレックスタイム希望の方はご相談ください。</dd>
            <dt>給与</dt>
            <dd>要相談(経験、能力を考慮の上決定します。)</dd>
            <dt>休日休暇</dt>
            <dd>
                <ul>
                    <li>完全週休2日制(土・日)</li>
                    <li>祝日</li>
                    <li>夏季休暇</li>
                    <li>年末年始休暇</li>
                </ul>
            </dd>
            <dt className={styles.PositionModal_lastDt}>福利厚生</dt>
            <dd>
                <ul>
                    <li>■各種社会保険完備（社員のみ）</li>
                    <li>■スポーツジム代補助</li>
                    <li>■美容サロン50%オフ</li>
                    <li>■教材購入費補助</li>
                    <li>■ジョブローテーション</li>
                    <li>■産休育休制度</li>
                    <li>■エンジニア社内勉強会</li>
                </ul>
            </dd>
        </dl>
    </div>
    <div className={styles.PositionModal_entryButtonWrapper}>
        <span className={styles.PositionModal_entryButton}>ENTRY</span>
        <a>応募ポジション一覧へ</a>
    </div>
</div>
</div>
    )
}