import './Footer.css'
import myLogo from '../assets/logo_black.svg'

export default function Footer(){
    return(
        <footer>
            <ul className="simp_ul">
                 <a href="/"><img src={myLogo} alt="" /></a>
                <p>+7 (499) 686-10-14</p>
                <p>г. Мосвка, Холодильный пер. 4к1с8</p>
                <p>a.dragunov@tdaliance.ru</p>
            </ul>
            <div className='foot_main'>
                <ul>
                    <li>
                        <a href="/contract_product"><b>Контрактное производство</b></a>
                    </li>
                    <li>
                        <a href="/product_avtohim">Автомобильная химия</a>
                    </li>
                    <li>
                        <a href="#">Бытовая химия</a>
                    </li>
                    <li>
                        <a href="#">Дезинфицирующие средства</a>
                    </li>
                </ul>
                <ul>
                <li>
                        <a href="#">Пищевые аэрозоли</a>
                    </li>
                    <li>
                        <a href="#">Косметическая продукция</a>
                    </li>
                    <li>
                        <a href="#">Краски аэрозольные</a>
                    </li>
                </ul>
                <ul>
                <li>
                        <a href="/own_product"><b>Собственные марки</b></a>
                    </li>
                    <li>
                        <a href="/product_ag-tech">Автохимия AG-Tech</a>
                    </li>
                    <li>
                        <a href="/product_avtochim">Автохимия AP</a>
                    </li>
                </ul>
                <ul>
                <li>
                        <a href="/about"><b>О компании</b></a>
                    </li>
                    <li>
                        <a href="/blog"><b>Новости</b></a>
                    </li>
                    <li>
                        <a href="/contacts"><b>Контакты</b></a>
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