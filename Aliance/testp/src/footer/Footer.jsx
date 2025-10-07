import { Link} from 'react-router-dom';

import './Footer.css'
import myLogo from '../assets/logo_black.svg'
import mark from '../assets/contact_icons/mark.svg'
import mail from '../assets/contact_icons/mail.svg'
import inst from '../assets/contact_icons/inst.svg'
import vk from '../assets/contact_icons/vk.svg'


export default function Footer(){
    return(
        <footer>
            <ul className="simp_ul">
                <Link to="/"><img src={myLogo} alt="" /></Link>
                
                <p><b><u><span>+7 (499) 686-10-14</span></u></b></p>
                <div className='contacts_footer'>
                    <img src={mark} alt="" />
                    <p><span>г. Москва, Холодильный пер. 4к1с8</span></p>
                </div>
                <div className='contacts_footer'>
                    <img src={mail} alt="" />
                     <p><span>a.dragunov@tdaliance.ru</span></p>
                </div>
                <div>
                    <img src={vk} alt="" />
                    <img src={inst} alt="" />
                </div>
                
               
            </ul>
            <div className='foot_main'>
                <ul>
                    <li>
                        <Link className='li_link' to="/contract_product"><b>Контрактное производство</b></Link>
                    </li>
                    <li>
                        <Link className='li_link' to="/contract_product/avtohim">Автомобильная химия</Link>
                    </li>
                    <li>
                        <Link className='li_link' to="#">Бытовая химия</Link>
                    </li>
                    <li>
                        <Link className='li_link' to="#">Дезинфицирующие средства</Link>
                    </li>
                </ul>
                <ul>
                <li>
                     <br />
                    <Link className='li_link' to="#">Пищевые аэрозоли</Link>
                    </li>
                    <li>
                        <Link className='li_link' to="#">Косметическая продукция</Link>
                    </li>
                    <li>
                        <Link className='li_link' to="#">Краски аэрозольные</Link>
                    </li>
                </ul>
                <ul>
                <li>
                    <Link className='li_link' to="/own_product"><b>Собственные марки</b></Link>
                    </li>
                    <li>
                        <Link className='li_link' to="/own_product/product_ag-tech">Автохимия AG-Tech</Link>
                    </li>
                    <li>
                        <Link className='li_link' to="/product_avtochim">Автохимия AP</Link>
                    </li>
                </ul>
                <ul>
                <li>
                    <Link className='li_link' to="/about"><b>О компании</b></Link>
                    </li>
                    <li>
                        <Link className='li_link' to="/blog"><b>Новости</b></Link>
                    </li>
                    <li>
                        <Link className='li_link' to="/contact"><b>Контакты</b></Link>
                    </li>
                </ul>
            </div>
            <ul className="simp_ul">
                <p>© 2022 «Aliance Production». Все права защищены.</p>
                <a href='/politics'>Политика конфиденциальности</a>
                <p>Сделано в</p>
            </ul>
        </footer>
    )
}