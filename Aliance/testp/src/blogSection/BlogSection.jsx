import styles from './BlogSection.module.css'
import arrow_left from '../assets/arrow_to_left.svg'
import arrow_right from '../assets/arrow_to_right.svg'
import {Link} from 'react-router-dom';

export default function BlogSection({title="Блог экспертов в области производства"}){
    return(
        <section className={styles.blog_section}>
             <div className="title_block_blue">
                            <div className='title_block_blue_div'></div>
                            <h3 >{title}</h3>
                        </div>
            <div className={styles.cards}>
                <Link className={styles.link_blog} to="/blog/blog-more">
                <div className={styles.blog_card1}>
                    <h5>
                    Современная методология разработки одухотворила всех причастных
                    </h5>
                    <p>Действия представителей оппозиции, превозмогая сложившуюся непростую экономическую ситуацию, в равной степени предоставлены...</p>
                </div>
                </Link>
                
                <Link className={styles.link_blog} to="#">
                <div className={styles.blog_card2}>
                    <h5>
                    Сложно сказать, почему жизнь прекрасна
                    </h5>
                    <p>Сложно сказать, почему элементы политического процесса функционально разнесены на независимые элементы. Безусловно, высокотехнологичная...</p>
                </div>
                </Link>
                
            </div>
            <div className={styles.nav_blog}>
                 <div className='link_blue'>
                                <div></div>
                                <Link className='link_blue_text' to="#">Весь блог</Link>
                            </div>
                <div>
                    <button className='b_left'><img src={arrow_left} alt="" /></button>
                    <button className='b_right'><img src={arrow_right} alt="" /></button>
                </div>
            </div>
        </section>
    )
}