import React, { useContext } from 'react'
import TriggerBtn from '../TriggerBtn/TriggerBtn'
import s from './index.module.css'
import { Context } from '../../context'


export default function TriggersContainer() {

const {change_to_eng, change_to_rus} = useContext(Context)

  return (
    <div className={s.container}>
        <TriggerBtn onClick={change_to_rus} btn_text='RUS'/>
        <TriggerBtn onClick={change_to_eng} btn_text='ENG'/>
    </div>
  )
}
