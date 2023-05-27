import styles from './OrderDelivery.module.css'
import 'animate.css'

export default function OrderDelivery(){
    return(
        <div className={styles.OrderDelivery_wrapper__QvuO4}>
            <div className={styles.Headline_headline__tn7LE}>
                <div className={styles.Headline_mainHeadline__GKrWA}>From order to delivery</div>
                <span>ご依頼から納品までの流れ</span>
            </div>
            <div className={styles.OrderDelivery_orderDeliveryWrapper__wArky}>
                <div className={styles.OrderDelivery_delivery__vwtfu}>
                    <div className={`${styles.OrderDelivery_deliveryBox__MHq45} ${styles.OrderDelivery_left___hBVJ} animate__animated animate__fadeInLeft`}>
                        <div className={styles.OrderDelivery_stepWrapper__1VS24}>
                            <p>STEP</p>
                            <span>1</span>
                        </div>
                        <div className={styles.OrderDelivery_orderContentWrapper__tgiEk}>
                            <p>ヒアリング</p>
                            <p>お客様のビジネス成功のゴールを確認しながら、システム開発の目的や背景をヒアリングします。</p>
                        </div>
                    </div>
                    <div className={`${styles.OrderDelivery_deliveryBox__MHq45} ${styles.OrderDelivery_right__kamLL} animate__animated animate__fadeInRight`}>
                        <div className={styles.OrderDelivery_stepWrapper__1VS24}>
                            <p>STEP</p>
                            <span>2</span>
                        </div>
                        <div className={styles.OrderDelivery_orderContentWrapper__tgiEk}>
                            <p>ご提案</p>
                            <p>ヒアリングの内容を基に、課題やご要望事項を整理させていただいた段階で、最適なご提案をいたします。</p>
                        </div>
                    </div>
                    <div className={`${styles.OrderDelivery_deliveryBox__MHq45} ${styles.OrderDelivery_left___hBVJ} animate__animated animate__fadeInLeft`}>
                        <div className={styles.OrderDelivery_stepWrapper__1VS24}>
                            <p>STEP</p>
                            <span>3</span>
                        </div>
                        <div className={styles.OrderDelivery_orderContentWrapper__tgiEk}>
                            <p>ご契約</p>
                            <p>ご提示した御見積や開発体制にご合意いただきましたら、ご契約を締結させていただきます。</p>
                        </div>
                    </div>
                    <div className={`${styles.OrderDelivery_deliveryBox__MHq45} ${styles.OrderDelivery_right__kamLL} animate__animated animate__fadeInRight`}>
                        <div className={styles.OrderDelivery_stepWrapper__1VS24}>
                            <p>STEP</p>
                            <span>4</span>
                        </div>
                        <div className={styles.OrderDelivery_orderContentWrapper__tgiEk}>
                            <p>開発開始</p>
                            <p>技術のエキスパートが100%自社内で開発を進めます。</p>
                        </div>
                        </div>
                        <div className={`${styles.OrderDelivery_deliveryBox__MHq45} ${styles.OrderDelivery_left___hBVJ} animate__animated animate__fadeInLeft`}>
                            <div className={styles.OrderDelivery_stepWrapper__1VS24}>
                                <p>STEP</p>
                                <span>5</span>
                            </div>
                            <div className={styles.OrderDelivery_orderContentWrapper__tgiEk}>
                                <p>テスト</p>
                                <p>専門のチームによるテストを実施し、品質向上に努めます。</p>
                            </div>
                        </div>
                        <div className={`${styles.OrderDelivery_deliveryBox__MHq45} ${styles.OrderDelivery_right__kamLL} animate__animated animate__fadeInRight`}>
                            <div className={styles.OrderDelivery_stepWrapper__1VS24}>
                                <p>STEP</p>
                                <span>6</span>
                            </div>
                            <div className={styles.OrderDelivery_orderContentWrapper__tgiEk}>
                                <p>納品・運用</p>
                                <p>システムは納品してからがスタートです。お客様のビジネスをより成長させるために運用をサポートします。</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}