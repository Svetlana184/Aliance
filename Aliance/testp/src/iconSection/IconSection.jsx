import styles from './IconSection.module.css'
import {icons} from '../data.js'

export default function IconSection(){
    const icons_cards = icons.map((index)=>
    <li key={index}>
        <img src={index.img}/>
        <p>{index.text}</p>
    </li>
    )
    return(
        <section className={styles.icon_sec}>
            <ul className={styles.ul_icon}>{icons_cards}</ul>
        </section>
    )
}