import React from 'react'
import css from '@/styles/boxLinkedin.module.css'
import { LiaLinkedinIn } from 'react-icons/lia'

const BoxLinkedin = () => {
  return (
    <div className={css.container}>
      <div className={css.contentOne}>
        <div className={css.contentLogo}>
          <LiaLinkedinIn className={css.iconLinkedin}/>
        </div>
        <div className={css.contentBtn}>
          <div className={css.btn}>Se connecter</div>
        </div>
      </div>
      <div className={css.contentTwo}>
        <div className={css.title}>LinkedIn</div>
        <div className={css.profile}>Amir REDJEM</div>
        <div className={css.sub}>Développeur Web Full-Stack 🚀</div>
      </div>
    </div>
  )
}

export default BoxLinkedin