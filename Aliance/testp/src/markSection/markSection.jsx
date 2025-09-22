import './MarkSection.css'
import logo_marka from '../assets/AGTECH.png'

export default function MarkSection(){
    return(
        <section className="mark_section">
            <h2 className="title_mark">Cобственные торговые марки</h2>
            <ul>
                <li className='mark_card'>
                    <img src={logo_marka} alt="" />
                    <div>
                        <h5>Автохимия AG-Tech</h5>
                        <p>Для современного мира разбавленное изрядной долей эмпатии, рациональное мышление создаёт предпосылки для поставленных обществом задач.</p>
                    </div>
                </li>
                <li className='mark_card'>
                    <img src={logo_marka} alt="" />
                    <div>
                        <h5>Автохимия AP</h5>
                        <p>Для современного мира разбавленное изрядной долей эмпатии, рациональное мышление создаёт предпосылки для поставленных обществом задач.</p>
                    </div>
                </li>
            </ul>
        </section>
    )
}