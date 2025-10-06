import styles from './MapSection.module.css'
import map from '../assets/map.png'

export default function MapSection(){
    return(
        <section className={styles.map_sec}>
            <div className={styles.map_top}>
                <p><u><b>+7 (499) 686-10-14</b></u></p>
                <div><p>г. Москва, Холодильный пер. 4к1с8</p></div>
                <div><p>a.dragunov@tdaliance.ru</p></div>
                <div></div>
            </div>
            <img className={styles.map_img} src={map} alt="" />
        </section>
    )
}