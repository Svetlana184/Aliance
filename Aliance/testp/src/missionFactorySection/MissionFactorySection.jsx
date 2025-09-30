import styles from './MissionFactorySection.module.css'
import img_1 from '../assets/about_2.png'
import {mission1} from '../data.js'

export default function MissionFactorySection({title, text1,text2, ul, img='../assets/about_2.png'}){
    return(
        <section className={styles.pr_section}>
                   
                    <div>
                        <h3 className={styles.title_mission}>{title}</h3>
                        <p>{text1}</p>
                        <p>
                            {text2}
                        </p>
                    </div>
                     <img src={img} alt="" />
                </section>
    )
}