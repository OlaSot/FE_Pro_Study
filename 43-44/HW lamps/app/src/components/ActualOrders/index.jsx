import React from 'react'
import s from './style.module.css'
import first from '../../data/1.png'
import second from '../../data/2.png'
import third from '../../data/3.png'
import fourth from '../../data/4.png'
import arrow from '../../data/arrow.png'

export default function ActualOrders() {
  return (
    <section className={s.special_offers}>
    <h2>Актуальные спецпредложения</h2>

     <div className={s.all_offers}>
        <div className={s.offers}>
            <img src={first} alt="" className={s.offers_image}/>
            <div className={s.descr}>
                <p className={s.descr_offer}>
                    Светильники для дома
                </p>
                <img src={arrow} alt=""/>
            </div>
            </div>
        <div className={s.offers}>
            <img src={second} alt="" className={s.offers_image}/>
            <div className={s.descr}>
                <p className={s.descr_offer}>
                Оборудование профессионалов
                </p>
                <img src={arrow} alt="" />
            </div>
        </div>
        <div className={s.offers}>
            <p className={s.new}>NEW</p>
            <img src={third} alt="" className={s.offers_image}/>
            <div className={s.descr}>
                <p className={s.descr_offer}>
                    Декоративные Светильники
                </p>
                <img src={arrow} alt=""/>
            </div>
        </div>
        <div className={s.offers}>
            <p className={s.new}>NEW</p>
            <img src={fourth} alt="" className={s.offers_image}/>
            <div className={s.descr}>
                <p className={s.descr_offer}>
                    Промышленные Светильники
                </p>
                <img src={arrow} alt=""/>
            </div>
    </div>
</div>
</section>
  )
}
