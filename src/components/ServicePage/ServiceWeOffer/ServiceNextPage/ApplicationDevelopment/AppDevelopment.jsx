import styles from './AppDevelopment.module.css'
import 'animate.css'

export default function AppDevelopment(){
    return(
        <div className={styles.ApplicationDevelopment_wrapper__ccbM9}>
            <div>
                <div className={styles.Headline_headline__tn7LE}>
                    <div className={styles.Headline_mainHeadline__GKrWA}>Application Development</div>
                        <span>WorldHacksのアプリケーション開発とは</span>
                    </div>
                </div>
                <div className={styles.ApplicationDevelopment_applicationDevelopments__bP83y}>
                    <div className={`${styles.ApplicationDevelopment_applicationDevelopment__IBYvR} animate__animated animate__fadeInUp`}>
                        <img src="/img/appdev/pcIcon.png" alt="" />
                        <span>あらゆる機能開発まで対応可能</span>
                        <p>開発規模に最適な技術を用いた開発を実施しており、簡易的な開発から最新技術とデータを用いたプロジェクトの開発までニーズに沿ったご提案をいたします。</p>
                    </div>
                    <div className={`${styles.ApplicationDevelopment_applicationDevelopment__IBYvR} animate__animated animate__fadeInUp`}>
                        <img src="/img/appdev/conversation.png" alt="" />
                        <span>プロトタイプ作成による要件設計</span>
                        <p>プロジェクトにおいて早期にプロトタイプを作成しており、何を作るのかを視覚的にしながら、 クライアントと成果物の具体化を進めて行きます。</p>
                    </div>
                    <div className={`${styles.ApplicationDevelopment_applicationDevelopment__IBYvR} animate__animated animate__fadeInUp`}>
                        <img src="/img/appdev/setting.png" alt="" />
                        <span>納品後のサポートも充実</span>
                        <p>多くのプロジェクトでは、ご納品後の保守・運用を承っております。システムの安定的な稼働から 継続的な開発支援まで対応しております。</p>
                    </div>
                </div>
            </div>
            )
            }