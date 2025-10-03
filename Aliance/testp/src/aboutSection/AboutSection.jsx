import styles from './AboutSection.module.css'
import {icons} from '../data.js'


export default function AboutSection(){
     const icons_cards = icons.map((index)=>
    <li key={index}>
        <img src={index.img}/>
        <p>{index.text}</p>
    </li>);
    return(
        <section className={styles.ab_sec}>
        <div className={styles.main_header}>
                <h2>Комплексное обеспечение товарами и расходными материалами бизнеса</h2>
                <p className={styles.p_big}>Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта: высококачественный прототип будущего проекта напрямую зависит от анализа существующих паттернов поведения.</p>
                <button className={styles.button_blue}>Подробнее о компании</button>
                <div className={styles.icon_sec}>
                    <ul className={styles.ul_icon}>{icons_cards}</ul>
                </div>
        </div>
        
    </section>
    )
   
}