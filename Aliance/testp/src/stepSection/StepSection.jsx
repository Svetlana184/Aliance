import './StepSection.css'
import {Link} from 'react-router-dom';

export default function StepSection(){
    return(
        <>
            <section className='step_section'> 
                <div className="title_block_blue">
                            <div className='title_block_blue_div'></div>
                            <h3 >Схема работы</h3>
                        </div>
                <ul className='step_ul'>
                    <li>
                        <h3>01</h3>
                        <div>
                            <h5>Знакомство</h5>
                            <p>Безусловно, сплочённость команды профессионалов позволяет оценить значение форм воздействия.</p>
                            <div className='link_blue'>
                                <div></div>
                                <Link className='link_blue_text' to="#">Оставить заявку</Link>
                            </div>
                        </div>
                    </li>
                    <li>
                        <h3>02</h3>
                        <div>
                            <h5>Заключение договора</h5>
                            <p>Лишь интерактивные прототипы призваны к ответу.</p>
                           
                        </div>
                    </li>
                    <li>
                        <h3>03</h3>
                        <div>
                            <h5>Производство</h5>
                            <p>А также стремящиеся вытеснить традиционное производство, нанотехнологии функционально разнесены на независимые элементы.</p>
                           
                        </div>
                    </li>
                    <li>
                        <h3>04</h3>
                        <div>
                            <h5>Доставка</h5>
                            <p>В частности, экономическая повестка сегодняшнего дня говорит о возможностях приоритизации разума над эмоциями.</p>
                            
                        </div>
                    </li>
                </ul>
            </section>
        </>
    )
}