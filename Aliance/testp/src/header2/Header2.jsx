import styles from './Header2.module.css'
import myLogo from '../assets/logo_black.svg'
import myPhone from '../assets/phone.svg'

export default function Header2(){
    return(
        <header className={styles.header2}>
            <nav className={styles.nav2}>
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
        </header>
    )
}