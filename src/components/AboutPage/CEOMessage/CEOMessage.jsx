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
                            <p>大学卒業後にプログラミングに出会い、ITなら学歴、場所、国籍すら関係なく挑戦出来ることに魅力を感じプログラミングを学びエンジニアになりました。</p>
                            <p>エンジニアとして働く中で面白いメンバーと面白いサービスを作りたいという気持ちが強くなり株式会社WorldHacksを設立いたしました。一緒に世界をHackするようなサービスを作りましょう。</p>
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