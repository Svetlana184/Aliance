import styles from './CenterSection.module.css'
import {center} from '../data.js'

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
        </section>
    )
}