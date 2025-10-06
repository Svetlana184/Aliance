import styles from './MissionFactorySection.module.css'

export default function MissionFactorySection({title, text1,text2, ul1, ul2, img='../assets/about_2.png'}){
    const ul_factory1 = ul1.map((index)=>(
        <li key={index}>
            <img src={index.img} alt="" />
            <p> {index.title}</p>
        </li>
    ));
    const ul_factory2 = ul2.map((index)=>(
        <li key={index}>
            <img src={index.img} alt="" />
            <p> {index.title}</p>
           
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
                        <div className={styles.ul_pr}>
                            <ul className={styles.factory_ul}>{ul_factory1}</ul>
                            <ul className={styles.factory_ul}>{ul_factory2}</ul>
                        </div>
                        
                    </div>
                     <img src={img} alt="" />
                </section>
    )
}