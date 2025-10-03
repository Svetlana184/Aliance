import styles from './MissionFactorySection.module.css'

export default function MissionFactorySection({title, text1,text2, ul, img='../assets/about_2.png'}){
    const ul_factory = ul.map((index)=>(
        <li key={index}>
            {index}
        </li>
    ));
    return(
        <section className={styles.pr_section}>
                   
                    <div className={styles.pr_div}>
                         <div className="title_block_blue">
                            <div className='title_block_blue_div'></div>
                            <h3 >{title}</h3>
                        </div>
                        <p>{text1}</p>
                        <p>
                            {text2}
                        </p>
                        <ul className={styles.factory_ul}>{ul_factory}</ul>
                    </div>
                     <img src={img} alt="" />
                </section>
    )
}