import styles from './BlogSection.module.css'

export default function BlogSection(){
    return(
        <section className={styles.blog_section}>
            <h2 className={styles.title_blog}>Блог экспертов в области производства</h2>
            <div className={styles.cards}>
                <div className={styles.blog_card}>
                    <h5>
                    Современная методология разработки одухотворила всех причастных
                    </h5>
                    <p>Действия представителей оппозиции, превозмогая сложившуюся непростую экономическую ситуацию, в равной степени предоставлены...</p>
                </div>
                <div className={styles.blog_card}>
                    <h5>
                    Сложно сказать, почему жизнь прекрасна
                    </h5>
                    <p>Сложно сказать, почему элементы политического процесса функционально разнесены на независимые элементы. Безусловно, высокотехнологичная...</p>
                </div>
            </div>
            <div>
                <div>
                    <div></div>    
                    <a href="">Весь блог</a>
                </div>
                <div>
                    <button></button>
                    <button></button>
                </div>
            </div>
        </section>
    )
}