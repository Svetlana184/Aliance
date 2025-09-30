import styles from './ProductionSection.module.css'
import img_1 from '../assets/about_1.png'
import {prod} from '../data.js'

export default function ProductionSection(){
    return(
        <section className={styles.pr_section}>
            <img src={img_1} alt="" />
            <div>
                <h3 className={styles.title_mission}>{prod.title}</h3>
                <p>{prod.text1}</p>
            </div>
        </section>
    )
}