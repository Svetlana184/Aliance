import styles from './BigBlogSection.module.css'

export default function BigBlogSection(){
    const cards=[];
    for (let j = 0; j<5; j++){
        const card1 = <li className={styles.blog_card1}>
                    <h5>
                    Современная методология разработки одухотворила всех причастных
                    </h5>
                    <p>Действия представителей оппозиции, превозмогая сложившуюся непростую экономическую ситуацию, в равной степени предоставлены...</p>
        </li>
        const card2 = <li className={styles.blog_card2}>
                    <h5>
                    Сложно сказать, почему жизнь прекрасна
                    </h5>
                    <p>Сложно сказать, почему элементы политического процесса функционально разнесены на независимые элементы. Безусловно, высокотехнологичная...</p>
        </li>
        cards.push(card1)
        cards.push(card2)
    }
    return(
        <section className={styles.blog_section}>
               <ul className={styles.cards_ul}>{cards}</ul>
               <ul className={styles.pages}>
                 <button>1</button>
                 <button>2</button>
                 <button>3</button>
                 <button>4</button>
                 <button>5</button>
               </ul>
        </section>
    )
}