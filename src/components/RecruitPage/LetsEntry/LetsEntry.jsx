import styles from './LetsEntry.module.css'
import Link from 'next/link'
import 'animate.css'

export default function LetsEntry(){
    return(
        <div className={styles.LetsEntry_wrapper__H_v_d}>
            <div className={styles.LetsEntry_LetsEntryWrapper__vZzSQ}>
                <h3 className={`${styles.undefined} animate__animated animate__fadeInUp`}>LET'S ENTRY</h3>
                <Link className={`${styles.LetsEntry_circle__i700g} animate__animated animate__fadeInUp`} aria-label="LET'S ENTRY" href="/contact/" />
                    <a><span className={styles.LetsEntry_arrow__RJWn8}></span></a>
            </div>
        </div>
    )
}