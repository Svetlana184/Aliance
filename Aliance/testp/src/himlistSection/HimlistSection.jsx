import styles from './HimlistSection.module.css'
import {avtohim_types} from '../data.js'

export default function HimlistSection(){
    const ul1 = avtohim_types.ul1.map((index)=> 
    <li key={index}>
        <div></div>
        <p>{index}</p>
    </li>)
    const ul2 = avtohim_types.ul2.map((index)=> 
    <li key={index}>
        <div></div>
        <p>{index}</p>
    </li>)
    const ul3 = avtohim_types.ul3.map((index)=> 
    <li key={index}>
        <div></div>
        <p>{index}</p>
    </li>)
    const ul4 = avtohim_types.ul4.map((index)=> 
    <li key={index}>
        <div></div>
        <p>{index}</p>
    </li>)
    return(
        <section className={styles.him_sec}>
            <div className="title_block_blue">
                            <div className='title_block_blue_div'></div>
                            <h3 >{avtohim_types.title}</h3>
                        </div>
            <p>{avtohim_types.text}</p>
            <div className={styles.ul_him}>
                <ul>{ul1}</ul>
                <ul>{ul2}</ul>
                <ul>{ul3}</ul>
                <ul>{ul4}</ul>
            </div>
        </section>
    )
}