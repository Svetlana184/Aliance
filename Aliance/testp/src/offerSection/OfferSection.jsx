import './OfferSection.css'
import pic from '../assets/offer_pic.png'

export default function OfferSection(){
    return(
        <section className="offer_section">
            <img className='big_pic' src={pic} alt="" />
            <div>
                <h4>Хотите сотрудничать?</h4>
                <p>Оставьте заявку, наш менеджер свяжется с Вами в ближайшее время ответит на все интересующие вопросы и поможем даже в самых сложных случаях!</p>
            </div>
        </section>
    )
}