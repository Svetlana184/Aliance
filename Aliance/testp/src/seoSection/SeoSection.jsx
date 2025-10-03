import styles from './SeoSection.module.css'
import {seo} from '../data.js'
import {Link} from 'react-router-dom';

export default function SeoSection(){
    return(
        <section className={styles.seo_section}>
                            
           <h4 >{seo.title}</h4>
            <p>{seo.text}</p>
             <div className='link_blue'>
                                <div></div>
                                <Link className='link_blue_text' to="#">Читать больше</Link>
                            </div>
        </section>
    )
}