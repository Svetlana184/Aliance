import './MissionSection.css'
import {Link} from 'react-router-dom';

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
            <div className='link_blue'>
                 <div></div>
                <Link className='link_blue_text' to="#">Подробнее о компании</Link>
            </div>
            </div>
        </section>
    )
}