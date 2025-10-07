import styles from './MapSection.module.css'
import map from '../assets/map.png'
import mark from '../assets/contact_icons/mark.svg'
import mail from '../assets/contact_icons/mail.svg'
import vk from '../assets/contact_icons/vk.svg'
import inst from '../assets/contact_icons/inst.svg'


export default function MapSection(){
    return(
        <section className={styles.map_sec}>
            <div className={styles.map_top}>
                <p className={styles.phone}><u><b>+7 (499) 686-10-14</b></u></p>
                <div className={styles.cont}>
                    <img src={mark} alt="" />
                    <p>г. Москва, Холодильный пер. 4к1с8</p>
                </div>
                <div className={styles.cont}>
                    <img src={mail} alt="" />
                    <p>a.dragunov@tdaliance.ru</p>
                </div>
                <div>
                    <img src={vk} alt="" />
                    <img src={inst} alt="" />
                </div>
            </div>
            <img className={styles.map_img} src={map} alt="" />
        </section>
    )
}