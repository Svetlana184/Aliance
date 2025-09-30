import styles from './SeoSection.module.css'
import {seo} from '../data.js'

export default function SeoSection(){
    return(
        <section className={styles.seo_section}>
            <h4>{seo.title}</h4>
            <p>{seo.text}</p>
        </section>
    )
}