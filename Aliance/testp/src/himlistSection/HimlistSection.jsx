import styles from './HimlistSection.module.css'
import {avtohim_types} from '../data.js'

export default function HimlistSection(){
    return(
        <section className={styles.him_sec}>
            <div className="title_block_blue">
                            <div className='title_block_blue_div'></div>
                            <h3 >{avtohim_types.title}</h3>
                        </div>
            <p>{avtohim_types.text}</p>
            <div></div>
        </section>
    )
}