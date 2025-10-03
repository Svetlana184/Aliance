import styles from './BlogSection.module.css'
import arrow_left from '../assets/arrow_to_left.svg'
import arrow_right from '../assets/arrow_to_right.svg'

export default function BlogSection(){
    return(
        <section className={styles.blog_section}>
             <div className="title_block_blue">
                            <div className='title_block_blue_div'></div>
                            <h3 >Блог экспертов в области производства</h3>
                        </div>
            <div className={styles.cards}>
                <div className={styles.blog_card1}>
                    <h5>
                    Современная методология разработки одухотворила всех причастных
                    </h5>
                    <p>Действия представителей оппозиции, превозмогая сложившуюся непростую экономическую ситуацию, в равной степени предоставлены...</p>
                </div>
                <div className={styles.blog_card2}>
                    <h5>
                    Сложно сказать, почему жизнь прекрасна
                    </h5>
                    <p>Сложно сказать, почему элементы политического процесса функционально разнесены на независимые элементы. Безусловно, высокотехнологичная...</p>
                </div>
            </div>
            <div className={styles.nav_blog}>
                <div>
                    <div></div>    
                    <a href="">Весь блог</a>
                </div>
                <div>
                    <button className='b_left'><img src={arrow_left} alt="" /></button>
                    <button className='b_right'><img src={arrow_right} alt="" /></button>
                </div>
            </div>
        </section>
    )
}