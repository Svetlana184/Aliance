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
            <div className="title_block_blue">
                            <div className='title_block_blue_div'></div>
                            <h3 >Контрактное производство</h3>
                        </div>
            <ul>
               {cards}
            </ul>
        </section>
    )
}