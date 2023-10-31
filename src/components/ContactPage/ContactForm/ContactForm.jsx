import styles from './ContactForm.module.css'


export default function ContactForm(){
    return(

        <div className={styles.ContactForm_wrapper}>
            <span className={styles.ContactForm_firstSpan}>※印の項目は必須項目です。</span>
            <div className={styles.ContactForm_contactFormWrapper}>
                <form name="contact" method="POST" netlify-honeypot="bot-field" data-netlify-recaptcha="true" data-netlify="true">
                <input type="hidden" name="form-name" value="contact" />
                    <div className={styles.ContactForm_rowFormWrapper}>
                        <div className={styles.ContactForm_rowForm}>
                            <div className={styles.ContactForm_labelSpanWrapper}>
                                <label for="subject">お問い合わせの種類</label>
                                <span>※</span>
                            </div>
                            <select name="subject">
                                <option >選択してください</option>
                                <option value="開発・お仕事のご相談">開発・お仕事のご相談</option>
                                <option value="広報・取材について">広報・取材について</option>
                                <option value="その他">その他</option>
                            </select>
                            <span className={styles.ContactForm_errorMessage}>お問い合わせの種類を入力してください。</span>
                        </div>
                        <div className={styles.ContactForm_rowForm}>
                            <label for="company" className={styles.ContactForm_companyLabel}>貴社名</label>
                            <input type="text" placeholder="株式会社●●●" name="company"  />
                        </div>
                        <div className={styles.ContactForm_rowForm}>
                            <div className={styles.ContactForm_labelSpanWrapper}>
                                <label for="name">お名前</label>
                                <span>※</span>
                            </div>
                            <input type="text" placeholder="山田太郎" name="name" />
                            <span className={styles.ContactForm_errorMessage}>ユーザー名を入力してください。</span>
                        </div>
                        <div className={styles.ContactForm_rowForm}>
                            <div className={styles.ContactForm_labelSpanWrapper}>
                                <label for="telphone">電話番号(半角英数)</label>
                                <span>※</span>
                            </div>
                            <input type="tel" placeholder="00000000000" name="telphone"  />
                            <span className={styles.ContactForm_errorMessage}>電話番号を入力してください。</span>
                        </div>
                        <div className={styles.ContactForm_rowForm}>
                            <div className={styles.ContactForm_labelSpanWrapper}>
                                <label for="email">メールアドレス</label>
                                <span>※</span>
                            </div>
                            <input type="email" placeholder="xxxxxxxxxx@zzz.jp" name="email"  />
                            <span className={styles.ContactForm_errorMessage}>メールアドレスを入力してください。</span>
                        </div>
                        <div className={styles.ContactForm_rowForm}>
                            <div className={styles.ContactForm_labelSpanWrapper}>
                                <label for="message" className={styles.ContactForm_message}>お問い合わせ内容</label>
                                <span className={styles.ContactForm_messageSpan}>※</span>
                            </div>
                            <textarea name="message" placeholder="開発についてご相談させてください"></textarea>
                            <span className={styles.ContactForm_errorMessage}>お問い合わせ内容を入力してください。</span>
                        </div>
                        <div className={styles.ContactForm_rowForm}>
                            <label></label>
                            <div className={styles.ContactForm_refForm}>
                                <label>
                                    <input type="file" name="theFiles" />
                                        <span className={styles.ContactForm_refFormSpan}>参考資料がある場合は添付してください</span>
                                </label>
                                <div className={styles.ContactForm_fileNameWrapper}></div>
                            </div>
                            <span className={styles.ContactForm_errorMessage}></span>
                        </div>
                    </div>
                    <p className={styles.ContactForm_contactFormText}>このフォームを送信することにより株式会社Techtonixのプライバシーポリシーに 同意することとします。</p>
                    <div className={styles.ContactForm_confirmButton}>
                        <button type="submit">
                            <span>送信する</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
