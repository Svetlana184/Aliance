import styles from './SingleBlock.module.css'
import { Link} from 'react-router-dom';
import avtochim from '../assets/avto_him_single_block.png'

export default function SingleBlock({title="Главная", links=[{text:'Главная', path:'/'}, {text:"эта страница", path:'#'}]}){
    let style = styles.single_block
    let style_link = styles.link_s
    let div_pic;
    if (title=="Современная методология разработки одухотворила всех причастных"){
        style = styles.single_block2
        style_link = styles.link_s1
    }
    if (title=="Автохимия AG_TECH" || title=="Автомобильная химия"){
        div_pic = <img src={avtochim} alt="" />
    }
    const links_single_block = links.map((index)=>
        <li><Link className={style_link} to={index.path}><p>{index.text}</p></Link></li>
    )
    
    return(
        <section className={style}>
            <div className={styles.block_cont}> 
                 <div className={styles.single_name}>
                        <div className={styles.blue_line}></div>
                        <h1 className={styles.single_title}>{title}</h1>
                    <ul className={styles.ul_links}>
                        {links_single_block}
                        {/* <li>
                            <Link className={style_link} to="/"><p>Главная</p></Link></li>
                        <li>-</li>
                        <li> <Link className={style_link} to="#"><p>{title}</p></Link></li> */}
                    </ul>
                    </div>
                    <div className={styles.avt_pic}>{div_pic}</div>
            </div>
           
        </section>
        
    )
}