


export default function NewsPage() {
    return(
        <div className={styles.NewsList_wrapper}>
            <div className={styles.PageTitle_wrapper}>
                <h2 className={styles.PageTitle_transparent}>NEWS</h2>
            </div>
            <div className={styles.NewsList_newsListWrapper}>
                <div className={styles.NewsList_singleNewsBox}>
                    <div className={`${styles.NewsList_blogCard__1aK5J} animate__animated animate__fadeInUp`}>
                        <div className={styles.NewsList_blogImgWrapper__FAj1v}>
                            <div className={styles.NewsList_leftTopCard__uVM4P}>
                                <span>ニュース</span>
                            </div>
                            <img src="/img/news/defaultImg.png" alt="記事" className={styles.NewsList_defaultImg__osj8Y} /></div>
                        <div className={styles.NewsList_blogContent}>
                            <p>コーポレートサイトをリニューアルしました。</p>
                            <span>2023-02-14</span>
                        </div>
                    </div>
                </div>
            </div>
            <ul className={styles.Paganation_paginationWrapper}>
                <div>
                    <div className={styles.Paganation_onActive__VqKgW}>
                        <li><a href="/news/page/1/">1</a></li>
                    </div>
                </div>
            </ul>
        </div>
        )
    }