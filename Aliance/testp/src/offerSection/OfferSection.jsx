import './OfferSection.css'
import pic from '../assets/offer_pic.png'

export default function OfferSection(){
    return(
        <section className="offer_section">
            <img className='big_pic' src={pic} alt="" />
            <div className='offer_div'>
                 <div className="title_block_blue">
                            <div className='title_block_blue_div'></div>
                            <h3 >Хотите сотрудничать?</h3>
                        </div>
                <p>Оставьте заявку, наш менеджер свяжется с Вами в ближайшее время ответит на все интересующие вопросы и поможем даже в самых сложных случаях!</p>
            <div className='offer_forms'>
                <form className='form_1'>
                    <input type="text" name="name" placeholder='    Имя'/>
                </form>
                <form className='form_1'>
                    <input type="text" name="name"/>
                </form>
            </div>
            <div className='bottom_offer'>
                <button>Отправить заявку</button>
                <p>Обращаясь к нам вы получаете не только профессиональную работу, но и абсолютную конфиденциальность информации!</p>
            </div>
            </div>
        </section>
    )
}