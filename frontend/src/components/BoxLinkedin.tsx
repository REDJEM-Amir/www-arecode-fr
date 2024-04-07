import React from 'react'
import css from '@/styles/boxLinkedin.module.css'
import { LiaLinkedinIn } from 'react-icons/lia'
import Link from 'next/link'

const BoxLinkedin = () => {
  return (
    <Link className={css.link} href="https://www.linkedin.com/in/amir-redjem-963049230/"  target='_blank'>
      <div className={css.container}>
        <div className={css.contentOne}>
          <div className={css.contentLogo}>
            <LiaLinkedinIn className={css.iconLinkedin} />
          </div>
          <div className={css.contentBtn}>
            <div className={css.btn}>Se connecter</div>
          </div>
        </div>
        <div className={css.contentTwo}>
          <div className={css.title}>LinkedIn</div>
          <div className={css.profile}>in/amir-redjem-963049230</div>
          <div className={css.sub}>Développeur Web Full-Stack 🚀</div>
        </div>
      </div>
    </Link>
  )
}

export default BoxLinkedin