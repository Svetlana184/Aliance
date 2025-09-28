import styles from './ErrorSection.module.css'

export default function ErrorSection(){
    return(
        <section className={styles.error_sec}>
            <h1>404</h1>

            <h5>Страница не найдена</h5>
            <p>Мы не смогли найти страницу с таким адресом, попробуйте перейти на главную или напишите нам.</p>
           
            <button className={styles.button_blue}>Вернуться на главную</button>
        </section>
    )
}