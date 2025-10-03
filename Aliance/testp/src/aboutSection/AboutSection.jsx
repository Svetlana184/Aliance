import styles from './AboutSection.module.css'

export default function AboutSection(){
    return(
 <section className={styles.ab_sec}>
        <div className={styles.main_header}>
                <h2>Комплексное обеспечение товарами и расходными материалами бизнеса</h2>
                <p>Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта: высококачественный прототип будущего проекта напрямую зависит от анализа существующих паттернов поведения.</p>
                <button className={styles.button_blue}>Подробнее о компании</button>
            </div>
    </section>
    )
   
}