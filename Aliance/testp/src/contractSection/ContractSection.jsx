import './ContractSection.css'
import chim from '../assets/avto-him.png'

export default function ContractSection(){
    return(
        <section className="contract_section">
            <h2 className="title_contract">Контрактное производство</h2>
            <ul>
                <li className='card_contract'>
                    <div>
                         <h5>Автомобильная химия</h5>
                    <p>Безусловно, сплочённость команды профессионалов позволяет оценить значение форм воздействия.</p>
                    </div>
                   
                    <img src={chim} alt="" />
                </li>
                <li className='card_contract'>
                     <div>
                         <h5>Автомобильная химия</h5>
                    <p>Безусловно, сплочённость команды профессионалов позволяет оценить значение форм воздействия.</p>
                    </div>
                    <img src={chim} alt="" />
                </li>
                <li className='card_contract'>
                     <div>
                         <h5>Автомобильная химия</h5>
                    <p>Безусловно, сплочённость команды профессионалов позволяет оценить значение форм воздействия.</p>
                    </div>
                    <img src={chim} alt="" />
                </li>
                <li className='card_contract'>
                    <div>
                         <h5>Автомобильная химия</h5>
                    <p>Безусловно, сплочённость команды профессионалов позволяет оценить значение форм воздействия.</p>
                    </div>
                    <img src={chim} alt="" />
                </li>
                <li className='card_contract'>
                    <div>
                         <h5>Автомобильная химия</h5>
                    <p>Безусловно, сплочённость команды профессионалов позволяет оценить значение форм воздействия.</p>
                    </div>
                    <img src={chim} alt="" />
                </li>
                <li className='card_contract'>
                     <div>
                         <h5>Автомобильная химия</h5>
                    <p>Безусловно, сплочённость команды профессионалов позволяет оценить значение форм воздействия.</p>
                    </div>
                    <img src={chim} alt="" />
                </li>
            </ul>
        </section>
    )
}