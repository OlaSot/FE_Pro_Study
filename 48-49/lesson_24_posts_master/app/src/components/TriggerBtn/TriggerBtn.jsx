import React from 'react'
import s from './index.module.css'

export default function TriggerBtn({btn_text, onClick}) {

    const styles = {
        backgroundColor: btn_text === 'RUS' ? 'green' : 'blue'
    }

  return (
    <div>
        <div className={s.triggers_btn} style={styles} onClick={onClick}>
            {btn_text}
        </div>

    </div>
  )
}
