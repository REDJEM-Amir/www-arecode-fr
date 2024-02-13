import React from 'react'
import css from '@/styles/feed.module.css'
import { LuLinkedin } from 'react-icons/lu'
import { LiaLinkedin, LiaLinkedinIn } from 'react-icons/lia'

const feed = () => {
  return (
    <div className={css.container}>
      <div className={css.contentTitleOne}>
        <div className={css.titleOne}>Mes réseaux</div>
      </div>
      <div className={css.rowOne}>
        <div className={css.contentBoxOne}>
          <div className={css.contentBoxOneRowOne}>
            <div className={css.contentIconLinkedin}>
              <LiaLinkedinIn className={css.iconLinkedin}/>
            </div>
            <div className={css.contentBtnLinkedin}>
              <div className={css.btnLinkedin}>Follow</div>
            </div>
          </div>
        </div>
        <div className={css.contentBoxTwo}>

        </div>
      </div>
    </div>
  )
}

export default feed