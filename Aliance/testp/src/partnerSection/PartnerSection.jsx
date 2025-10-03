import './PartnerSection.css'
import {partner_icons_sr, partner_icons_k} from '../data.js'

export default function PartnerSection(){
    const li_icons_sr = partner_icons_sr.map((index)=>
        <li>
            <img src={index.image} alt="" />
            <p>{index.text}</p>
        </li>
    )
    const li_icons_k = partner_icons_k.map((index)=>
        <li key={index}>
            <img src={index.image} alt="" />
            <p>{index.text}</p>
        </li>
    )
    return(
        <section className="PartnerSection">
            <div className='p_main'>
                <div className="title_block_blue">
                            <div className='title_block_blue_div'></div>
                            <h3 >Производим аэрозольную продукцию для разных сфер</h3>
                        </div>
                <div className='p_ul'>
                        <ul className='ul_ic'>
                        {li_icons_sr}
                         </ul>
                        <ul className='ul_ic'>{li_icons_k}</ul>
                </div>
                
                
            </div>
            <ul className='pics'>
                <li><div></div></li>
               <li><div></div></li>
               <li><div></div></li>
               <li><div></div></li>
               <li><div></div></li>
               <li><div></div></li>
               <li><div></div></li>
               <li><div></div></li>
               <li><div></div></li>
            </ul>
        </section>
    )
}