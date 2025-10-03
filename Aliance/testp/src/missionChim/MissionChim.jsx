import styles from './MissionChim.module.css'

export default function MissionChim({title, text1, text2, image='../assets/mission_pic.png'}){
    return(
        <section className={styles.mission_sectoin}>
            <img src={image} alt="" />
            <div className={styles.mis_main}>
                 <div className="title_block_blue">
                            <div className='title_block_blue_div'></div>
                            <h3 >{title}</h3>
                        </div>
                <p>{text1}</p>
                <br />
                <p>{text2}</p>
            </div>
        </section>
    )

}