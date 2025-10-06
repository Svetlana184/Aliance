import styles from './DistributeSection.module.css'
import {distribyte} from '../data.js'
import download_icon from "../assets/download.svg"


export default function DistributeSection(){
    const ul_dist = distribyte.ul.map((index)=> (
        <li key={index}>
            <img src={index.image} alt="" />
            <p>{index.text}</p>
        </li>
    ))
    return(
        <section className={styles.dist_sec}>
            <div className={styles.dest_text}>
                 <div className="title_block_blue">
                                            <div className='title_block_blue_div'></div>
                                            <h3 className={styles.title_dist}>{distribyte.title}</h3>
                                        </div>
                    <p className={styles.dist_p}>{distribyte.text}</p>
                    <ul>
                       {ul_dist}
                    </ul>
                    <button>
                        <img src={download_icon} alt="" />
                        <p>Скачать каталог</p>
                    </button>
            </div>
            <img className={styles.dist_book} src={distribyte.image} alt="" />
        </section>
    )
}