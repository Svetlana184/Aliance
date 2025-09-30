import './PartnerSection.css'
import pic from '../assets/p_pic.png'
import {partner_icons_sr, partner_icons_k} from '../data.js'

export default function PartnerSection(){
    const li_icons_sr = partner_icons_sr.map((index)=>
        <li>
            <img src={index.image} alt="" />
            <p>{index.text}</p>
        </li>
    )
    const li_icons_k = partner_icons_k.map((index)=>
        <li>
            <img src={index.image} alt="" />
            <p>{index.text}</p>
        </li>
    )
    return(
        <section className="PartnerSection">
            <div className='p_main'>
                <h2 className='title_partner'>Производим аэрозольную продукцию для разных сфер</h2>
                <div>
                <ul>
                  {li_icons_sr}
                </ul>
                <ul>{li_icons_k}</ul>
                </div>
                
            </div>
            <img className='p_pic' src={pic} alt="" />
        </section>
    )
}