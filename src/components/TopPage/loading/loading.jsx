
import styles from './loading.module.css'

export default function Loading(){

    return(
      <>
     <div className={styles.Loading_wrapper} id="loading">
      <div className={styles.Loading_logoWrapper}>
       <p>Loading...</p>
    </div>
    </div>
    </>
  )}