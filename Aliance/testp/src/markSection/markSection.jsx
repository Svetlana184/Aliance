import './MarkSection.css'

export default function MarkSection(){
    return(
        <section className="mark_section">
             <div className="title_block_blue">
                            <div className='title_block_blue_div'></div>
                            <h3 >Cобственные торговые марки</h3>
                        </div>
            <ul>
                <li className='mark_card'>
                    <div className='img_div1'></div>
                    <div className='mark_text'>
                        <h5>Автохимия AG-Tech</h5>
                        <p>Для современного мира разбавленное изрядной долей эмпатии, рациональное мышление создаёт предпосылки для поставленных обществом задач.</p>
                    </div>
                </li>
                <li className='mark_card'>
                     <div className='img_div2'></div>
                    <div className='mark_text'>
                        <h5>Автохимия AP</h5>
                        <p>Для современного мира разбавленное изрядной долей эмпатии, рациональное мышление создаёт предпосылки для поставленных обществом задач.</p>
                    </div>
                </li>
            </ul>
        </section>
    )
}