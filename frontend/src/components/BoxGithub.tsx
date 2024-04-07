import Link from 'next/link'
import React from 'react'
import css from '@/styles/boxGithub.module.css'
import { LiaGithub } from 'react-icons/lia'

const BoxGithub = () => {
  return (
    <Link className={css.link} href="https://github.com/REDJEM-Amir"  target='_blank'>
    <div className={css.container}>
      <div className={css.contentOne}>
        <div className={css.contentLogo}>
          <LiaGithub className={css.icon} />
        </div>
        <div className={css.contentBtn}>
          <div className={css.btn}>Voir profile</div>
        </div>
      </div>
      <div className={css.contentTwo}>
        <div className={css.title}>Github</div>
        <div className={css.profile}>REDJEM-Amir</div>
        <div className={css.sub}>repository, stats, contributions...</div>
      </div>
    </div>
  </Link>
  )
}

export default BoxGithub