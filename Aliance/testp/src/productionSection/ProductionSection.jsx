import styles from './ProductionSection.module.css'
import img_1 from '../assets/about_1.png'
import {prod} from '../data.js'

export default function ProductionSection(){
    return(
        <section className={styles.pr_section}>
            <img src={img_1} alt="" />
            <div className='pr_div'>
                <div className="title_block_blue">
                            <div className='title_block_blue_div'></div>
                            <h3 >{prod.title}</h3>
                        </div>
                <p>{prod.text1}</p>
            </div>
        </section>
    )
}