import styles from './CenterSection.module.css'
import {center} from '../data.js'
import arrow_left from '../assets/arrow_to_left.svg'
import arrow_right from '../assets/arrow_to_right.svg'


export default function CenterSection(){
    const images = center.images.map((index)=>
        <li> <img src={index}></img></li>
   )
    return(
        <section className={styles.center_sec}>
            <div className="title_block_blue">
                <div className='title_block_blue_div'></div>
                <h3 >{center.title}</h3>
            </div>
            <div className={styles.center_text}>
                <p>{center.text1}</p>
                <p>{center.text2}</p>
            </div>
            <ul className={styles.center_images}>{images}</ul>
            <div className={styles.nav_b}>
                <button className='b_left'><img src={arrow_left} alt="" /></button>
                <button className='b_right'><img src={arrow_right} alt="" /></button>
            </div>
        </section>
    )
}