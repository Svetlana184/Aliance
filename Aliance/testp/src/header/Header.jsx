import styles from './Header.module.css'
import myLogo from '../assets/logo.png'
import myPhone from '../assets/phone.svg'

export default function Header(){
    return(
        <header>
            <nav>
                <a className={styles.logo} href="/"><img src={myLogo} alt="" /></a>
                <ul>
                    <li><a href="/about">О компании</a></li>
                    <li><a href="/contract_product">Контрактное производство</a></li>
                    <li><a href="/own_product">Собственные торговые марки</a></li>
                    <li><a href="/blog">Новости</a></li>
                    <li><a href="/contact">Контакты</a></li>
                </ul>
            <div className={styles.phone}>
                <img src={myPhone} alt="" />
                <p><b>+7 (499) 686-10-14</b></p>
            </div>
            <button className={styles.button_blue}>Получить консультацию</button>
            </nav>
            <div className={styles.main_header}>
                <h1>Комплексное обеспечение товарами и расходными материалами бизнеса</h1>
                <p>Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта: высококачественный прототип будущего проекта напрямую зависит от анализа существующих паттернов поведения.</p>
                <button className={styles.button_blue}>Подробнее о компании</button>
                {/* <ul>
                    <li>
                        <img src="" alt="" />
                        <p></p>
                    </li>
                    <li>
                        <img src="" alt="" />
                        <p></p>
                    </li>
                    <li>
                        <img src="" alt="" />
                        <p></p>
                    </li>
                    <li>
                        <img src="" alt="" />
                        <p></p>
                    </li>
                    <li>
                        <img src="" alt="" />
                        <p></p>
                    </li>
                </ul> */}
            </div>
        </header>
    )
}