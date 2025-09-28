import styles from './SingleBlock.module.css'

export default function SingleBlock({title}){
    return(
        <section className={styles.single_block}>
            <div className={styles.single_name}>
                <div className={styles.blue_line}></div>
                 <h1 className={styles.single_title}>{title}</h1>
            <ul>
                <li><a href="/">Главная</a></li>
                <li>-</li>
            </ul>
            </div>
            
        </section>
        
    )
}