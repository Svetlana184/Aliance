import styles from './Header.module.css'
import myLogo from '../assets/logo.png'
import myPhone from '../assets/phone.svg'
import {Link} from 'react-router-dom';

export default function Header(){
    return(
        <header>
            <nav>
                <Link to="/" className={styles.logo}><img src={myLogo} alt="" /></Link>
                <ul>
                    <li><Link className={styles.li_link} to="/about">О компании</Link></li>
                    <li> <Link className={styles.li_link} to="/contract_product">Контрактное производство</Link></li>
                    <li><Link className={styles.li_link} to="/own_product">Собственные марки</Link></li>
                    <li><Link className={styles.li_link} to="/blog">Новости</Link></li>
                    <li><Link className={styles.li_link} to="/contact">Контакты</Link></li>
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
            </div>
        </header>
    )
}