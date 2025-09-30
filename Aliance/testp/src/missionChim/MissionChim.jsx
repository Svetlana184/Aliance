import styles from './MissionChim.module.css'

export default function MissionChim({title, text1, text2, image='../assets/mission_pic.png'}){
    return(
        <section className={styles.mission_sectoin}>
            <img src={image} alt="" />
            <div className={styles.mis_main}>
                <h3 className={styles.title_mission}>{title}</h3>
                <p>{text1}</p>
                <br />
                <p>{text2}</p>
            </div>
        </section>
    )

}