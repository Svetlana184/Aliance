import styles from './MissionFactorySection.module.css'

export default function MissionFactorySection({title, text1,text2, ul, img='../assets/about_2.png'}){
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
                    </div>
                     <img src={img} alt="" />
                </section>
    )
}