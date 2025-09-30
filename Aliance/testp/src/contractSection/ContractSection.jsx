import './ContractSection.css'
import {himicats} from '../data.js'

export default function ContractSection(){


    const cards = himicats.map((index)=> 
    <li className='card_contract' key={index}>
                 <div>
                         <h5>{index.title}</h5>
                    <p>{index.text}</p>
                    </div>
                   
                    <img src={index.img} alt="" />
    </li>)
    return(
        <section className="contract_section">
            <h2 className="title_contract">Контрактное производство</h2>
            <ul>
               {cards}
            </ul>
        </section>
    )
}