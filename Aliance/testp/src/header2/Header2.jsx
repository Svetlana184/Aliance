import styles from './Header2.module.css'
import myLogo from '../assets/logo_black.svg'
import myPhone from '../assets/phone.svg'
import {Link} from 'react-router-dom';


export default function Header2(){
    return(
        <header className={styles.header2}>
            <nav className={styles.nav2}>
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
        </header>
    )
}