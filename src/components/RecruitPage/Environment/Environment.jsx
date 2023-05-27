import styles from './Environment.module.css'
import Image from 'next/image'
import 'animate.css'

export default function Environment() {
    return(

        <div className={styles.Environment_wrapper__amXtN} id="enviroment">
            <div className={styles.Headline_headline__tn7LE}>
                <div className={styles.Headline_mainHeadline__GKrWA}>Environment</div>
                <span>働く環境</span>
                </div>
                <div className={`${styles.Environment_environmentWrapper__oMTlo} animate__animated animate__fadeInUp`}>
                    <div className={`${styles.Environment_environmentBox__AjZQ5} animate__animated animate__fadeInUp`}>
                        <Image src="/img/recruit/environment1.png" alt="" />
                            <div className={styles.Environment_environmentDescription__CAWol}>
                                <h3>フルリモート</h3>
                                <p>フルリモートでの勤務も可能です。オンラインワークスペースを導入しているためすぐに質問し合える環境です。</p>
                            </div>
                    </div>
                    <div className={`${styles.Environment_environmentBox__AjZQ5} animate__animated animate__fadeInUp`}>
                        <Image src="/img/recruit/environment2.png" alt="" />
                            <div className={styles.Environment_environmentDescription__CAWol}>
                                <h3>スポーツジム代補助</h3>
                                <p>PCの前にいてばかりだと体も凝ってしまうので、運動してさらにいい開発ができるような環境を推奨しています。</p>
                            </div>
                    </div>
                    <div className={`${styles.Environment_environmentBox__AjZQ5} animate__animated animate__fadeInUp`}>
                        <Image src="/img/recruit/environment3.png" alt="" />
                            <div className={styles.Environment_environmentDescription__CAWol}>
                                <h3>美容サロン50%オフ</h3>
                                <p>仕事も見た目もかっこよく！ （指定店舗があります）</p>
                            </div>
                    </div>
                    <div className={`${styles.Environment_environmentBox__AjZQ5} animate__animated animate__fadeInUp`}>
                        <Image src="/img/recruit/environment4.png" alt="" />
                            <div className={styles.Environment_environmentDescription__CAWol}>
                                <h3>教材購入費補助</h3>
                                <p>技術本など業務に関わる書籍の購入制度です。</p>
                            </div>
                    </div>
                    <div className={`${styles.Environment_environmentBox__AjZQ5} animate__animated animate__fadeInUp`}>
                        <Image src="/img/recruit/environment5.png" alt="" />
                            <div className={styles.Environment_environmentDescription__CAWol}>
                                <h3>ジョブローテーション</h3>
                                <p>キャリア開発の機会を提供する制度です。挑戦したい技術や役割に応じてあなたの挑戦を全力でサポートします。</p>
                            </div>
                    </div>
                    <div className={`${styles.Environment_environmentBox__AjZQ5} animate__animated animate__fadeInUp`}>
                        <Image src="/img/recruit/environment6.png" alt="" />
                            <div className={styles.Environment_environmentDescription__CAWol}>
                                <h3>エンジニア社内勉強会</h3>
                                <p>チームメンバーによる勉強会や情報交換を積極的に行っています。</p>
                            </div>
                    </div>
                </div>
            </div>

            )
            }