import styles from './SmartphoneApp.module.css';


export default function SmartphoneApp() {
    return (

        <div className={styles.SmartPhoneAppDevelopment_wrapper__jUaJz}>
            <div className={`${styles.SmartPhoneAppDevelopment_enabledApplicationsWrapper__VaAkl} animate__animated animate__fadeInUp`}>
                <div className={styles.SmartPhoneAppDevelopment_enabledApplicationTitle__wA9L7}>
                    <p>開発可能アプリケーション</p>
                    <span>Developable Application</span>
                </div>
                <div className={styles.SmartPhoneAppDevelopment_enabledApplications__wqjPW}>
                    <div className={styles.SmartPhoneAppDevelopment_iosAndroid__ndhPh}>
                        <img src="/img/appdev/smartphone.png" alt="" />
                        <span>iOSアプリ / Androidアプリ</span>
                    </div>
                    <div className={styles.SmartPhoneAppDevelopment_enabledApplicationsGrid__uPi6t}>
                        <p>業務アプリ</p>
                        <p>メディアアプリ</p>
                        <p>マッチングアプリ</p>
                        <p>会員アプリ</p>
                        <p>ECアプリ</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
