import styles from './MissionFactorySection.module.css'
import img_1 from '../assets/about_2.png'
import {mission1} from '../data.js'

export default function MissionFactorySection(){
    return(
        <section className={styles.pr_section}>
                   
                    <div>
                        <h3 className={styles.title_mission}>{mission1.title}</h3>
                        <p>{mission1.text1}</p>
                        <p>
                            {mission1.text2}
                        </p>
                    </div>
                     <img src={img_1} alt="" />
                </section>
    )
}