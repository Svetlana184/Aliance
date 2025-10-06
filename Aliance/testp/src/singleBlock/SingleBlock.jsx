import styles from './SingleBlock.module.css'
import { Link} from 'react-router-dom';

export default function SingleBlock({title}){
    return(
        <section className={styles.single_block}>
            <div className={styles.single_name}>
                <div className={styles.blue_line}></div>
                 <h1 className={styles.single_title}>{title}</h1>
            <ul>
                <li>
                    <Link className={styles.link_s} to="/"><p>Главная</p></Link></li>
                <li>-</li>
                 <li> <Link className={styles.link_s} to="#"><p>{title}</p></Link></li>
            </ul>
            </div>
        </section>
        
    )
}