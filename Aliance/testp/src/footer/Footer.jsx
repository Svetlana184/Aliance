import './Footer.css'

export default function Footer(){
    return(
        <footer>
            <ul className="simp_ul">
                <p>+7 (499) 686-10-14</p>
                <p>г. Мосвка, Холодильный пер. 4к1с8</p>
                <p>a.dragunov@tdaliance.ru</p>
            </ul>
            <div className='foot_main'>
                <ul>
                    <li>
                        <a href="#">Контрактное производство</a>
                    </li>
                    <li>
                        <a href="#">Автомобильная химия</a>
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
                        <a href="#">Собственные марки</a>
                    </li>
                    <li>
                        <a href="#">Автохимия AG-Tech</a>
                    </li>
                    <li>
                        <a href="#">Автохимия AP</a>
                    </li>
                </ul>
                <ul>
                <li>
                        <a href="#">О компании</a>
                    </li>
                    <li>
                        <a href="#">Новости</a>
                    </li>
                    <li>
                        <a href="#">Контакты</a>
                    </li>
                </ul>
            </div>
            <ul className="simp_ul">
                <p>© 2022 «Aliance Production». Все права защищены.</p>
                <p>Политики конфиденциальности</p>
                <p>Сделано в</p>
            </ul>
        </footer>
    )
}