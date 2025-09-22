import './PartnerSection.css'
import pic from '../assets/p_pic.png'

export default function PartnerSection(){
    return(
        <section className="PartnerSection">
            <div className='p_main'>
                <h2 className='title_partner'>Производим аэрозольную продукцию для разных сфер</h2>
                <div>
<ul>
                    <li>
                        <img src="" alt="" />
                        <p>Химические производства</p>
                    </li>
                    <li>
                        <img src="" alt="" />
                        <p>Автомойки</p>
                    </li>
                    <li>
                        <img src="" alt="" />
                        <p>Пищевая продукция</p>
                    </li>
                    <li>
                        <img src="" alt="" />
                        <p>Лаки и краски</p>
                    </li>
                    
                </ul>
                <ul><li>
                        <img src="" alt="" />
                        <p>Косметические средства</p>
                    </li>
                    <li>
                        <img src="" alt="" />
                        <p>Автомобильная косметика</p>
                    </li>
                    <li>
                        <img src="" alt="" />
                        <p>Косметика по уходу за одеждой</p>
                    </li>
                    <li>
                        <img src="" alt="" />
                        <p>Косметика по уходу за обувью</p>
                    </li>
                    <li>
                        <img src="" alt="" />
                        <p>Строительные материалы</p>
                    </li>
                    <li>
                        <img src="" alt="" />
                        <p>И многих других</p>
                    </li></ul>
                </div>
                
            </div>
            <img className='p_pic' src={pic} alt="" />
        </section>
    )
}