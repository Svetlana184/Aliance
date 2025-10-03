import './MissionSection.css'

export default function MissionSection({title, text1, text2, image='../assets/mission_pic.png'}){
    return(
        <section className='mission_sectoin'>
            <img src={image} alt="" />
            <div className='mis_main'>
                 <div className="title_block_blue">
                            <div className='title_block_blue_div'></div>
                            <h3 >{title}</h3>
                        </div>
            <p>{text1}</p>
            <p>{text2}</p>
            <div>
                <div></div>
                <a href="">Оставить заявку</a>
            </div></div>
            
        </section>
    )
}