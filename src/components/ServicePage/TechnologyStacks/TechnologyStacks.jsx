import styles from './TechnologyStacks.module.css'
import { useInView } from 'react-intersection-observer';
import 'animate.css'

export default function TechnologyStacks() {
    const { ref, inView } = useInView({
        // オプション
        rootMargin: '-80px', 
        triggerOnce: true, // 最初の一度だけ実行
      });
    return (

        <div className={styles.TechnologyStacks_wrapper__bysQW}>
            <div ref={ref}>
                {inView &&(
                <div className={styles.Headline_headline__tn7LE}>
                <div className={styles.Headline_mainHeadline__GKrWA}>Technology Stacks</div>
                <span>対応可能な技術スタック一覧</span>
                </div>
                )}
                {inView &&(
                <div className={`${styles.TechnologyStacks_technologyStacksGridWrapper__tE9k_} animate__animated animate__fadeInUp`}>
                <img src="/img/service/languages.png" alt="" />
                <img src="/img/service/frameworks.png" alt="" />
                <img src="/img/service/infrastructures.png" alt="" />
                <img src="/img/service/others.png" alt="" />
                </div>
                )}
            </div>
    </div>
    )
    }