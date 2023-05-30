import styles from './CEOMessage.module.css';
import Link from 'next/link';
import 'animate.css';

export default function CEOMessage(){
    return (
    <>  
        <div className={styles.CEOMessage_background__LrcXz}>
            <div className={styles.CEOMessage_wrapper__u8hmL}>
                <div>
                    <div className={`${styles.CEOMessage_CEOMessageContent__ciwz9} animate__animated animate__fadeInUp`}>
                        <span>CEO<br />MESSAGE</span>
                        <img src="/img/CEO.png" alt="" />
                        <div className={styles.CEOMessage_CEOMessages__Dh36F}>
                            <p>私は小笠原諸島の父島という島で生まれ育ち体育大に進学と同時に上京しました。私が生まれ育った小さな島では挑戦しようと思っても挑戦出来る環境すらありませんでした。大学卒業後にプログラミングに出会い、ITなら学歴、場所、国籍すら関係なく挑戦出来ることに魅力を感じプログラミングを学びエンジニアになりました。</p>
                            <p>エンジニアとして働く中で面白いメンバーと面白いサービスを作りたいという気持ちが強くなり株式会社WorldHacksを設立いたしました。一緒に世界をHackするようなサービスを作りましょう。</p>
                            <p>代表取締役　森下 浬</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <div className={`${styles.Contact_wrapper__F1Fby} animate__animated animate__fadeInUp`}>
                <div className={styles.Contact_worldMap03__7I7Zp}></div>
                <div className={styles.Contact_contactContent__5LDWC}>
                    <div className={styles.Contact_contactLeftContentCompany__U0S_O}>
                        <div className={styles.Contact_contactTitle__fuoH7}>
                            <div>Let's Have a</div>
                            <div>Conversation!</div>
                        </div>
                        <div className={styles.Contact_companyIntroduction__ygv1K}>
                                <p>Webサービスやアプリ開発のご相談、協業パートナーや取材などその他のお問い合わせはこちらから。</p>
                        </div>
                    </div>
                    <div>
                        <Link className={styles.Contact_contactCircleCompany__bbhbB} href="/contact/">
                            <span>CONTACT</span>
                        </Link>
                        <div className={styles.Contact_arrow__2IyRu}>
                            <img src="/img/contact/arrow.svg" alt="" className={styles.Contact_arrowimg__3H_My} />
                        </div>
                    </div>
                </div>
            </div>
        </>
)
}