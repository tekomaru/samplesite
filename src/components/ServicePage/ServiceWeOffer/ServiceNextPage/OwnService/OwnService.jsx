import styles from '../OrderDelivery/OrderDelivery.module.css'
import 'animate.css'

export default function OwnService() {
    return(

        <div className={styles.OrderDelivery_wrapper__QvuO4}>
            <div className={styles.Headline_headline__tn7LE}>
                <div className={styles.Headline_mainHeadline__GKrWA}>Own Service</div>
                <span>自社サービス開発までの流れ</span>
            </div>
            <div className={styles.OrderDelivery_orderDeliveryWrapper__wArky}>
                <div className={styles.OrderDelivery_delivery__vwtfu}>
                    <div className={`${styles.OrderDelivery_deliveryBox__MHq45} ${styles.OrderDelivery_left___hBVJ} animate__animated animate__fadeInLeft`}>
                        <div className={styles.OrderDelivery_stepWrapper__1VS24}>
                            <p>STEP</p>
                            <span>1</span>
                        </div>
                        <div className={styles.OrderDelivery_orderContentWrapper__tgiEk}>
                            <p>企画</p>
                            <p>社内会議で意見を出し合い、面白いもの、役立つもの、さまざまな意見を出し合います。</p>
                        </div>
                    </div>
                    <div className={`${styles.OrderDelivery_deliveryBox__MHq45} ${styles.OrderDelivery_right__kamLL} animate__animated animate__fadeInRight`}>
                        <div className={styles.OrderDelivery_stepWrapper__1VS24}>
                            <p>STEP</p>
                            <span>2</span>
                        </div>
                        <div className={styles.OrderDelivery_orderContentWrapper__tgiEk}>
                            <p>市場調査</p>
                            <p>サービスの開発・販売をするにあたってより良い事業判断をするために、さまざまは側面から市場分析します。</p>
                        </div>
                    </div>
                    <div className={`${styles.OrderDelivery_deliveryBox__MHq45} ${styles.OrderDelivery_left___hBVJ} animate__animated animate__fadeInLeft`}>
                        <div className={styles.OrderDelivery_stepWrapper__1VS24}>
                            <p>STEP</p>
                            <span>3</span>
                        </div>
                        <div className={styles.OrderDelivery_orderContentWrapper__tgiEk}>
                            <p>設計</p>
                            <p>メンバーをアサインし、実際にどのようなサービス仕様にするのかといった細かな部分を決定します。</p>
                        </div>
                    </div>
                    <div className={`${styles.OrderDelivery_deliveryBox__MHq45} ${styles.OrderDelivery_right__kamLL} animate__animated animate__fadeInRight`}>
                        <div className={styles.OrderDelivery_stepWrapper__1VS24}>
                            <p>STEP</p>
                            <span>4</span>
                        </div>
                        <div className={styles.OrderDelivery_orderContentWrapper__tgiEk}>
                            <p>開発開始</p>
                            <p>得意と個性を活かしてエンジニアたちが迅速かつ的確にプロダクトを進行します。</p>
                        </div>
                    </div>
                    <div className={`${styles.OrderDelivery_deliveryBox__MHq45} ${styles.OrderDelivery_left___hBVJ} animate__animated animate__fadeInLeft`}>
                    <div className={styles.OrderDelivery_stepWrapper__1VS24}>
                            <p>STEP</p>
                            <span>5</span>
                        </div>
                        <div className={styles.OrderDelivery_orderContentWrapper__tgiEk}>
                            <p>リリース</p>
                            <p>専門のチームによるテストを実施し、プロダクトを完成、リリースさせます。</p>
                        </div>
                    </div>
                    <div className={`${styles.OrderDelivery_deliveryBox__MHq45} ${styles.OrderDelivery_right__kamLL} animate__animated animate__fadeInRight`}>
                        <div className={styles.OrderDelivery_stepWrapper__1VS24}>
                            <p>STEP</p>
                            <span>6</span>
                        </div>
                        <div className={styles.OrderDelivery_orderContentWrapper__tgiEk}>
                            <p>保守・運用</p>
                            <p>要望があれば迅速にフィードバックできるスピード対応は大きな強みです。</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}