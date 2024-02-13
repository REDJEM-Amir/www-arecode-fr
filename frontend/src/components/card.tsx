import React from 'react'
import css from '@/styles/card.module.css'

const card = () => {
  return (
    <div className={css.container}>
      <div className={css.contentPicture}>
        <img className={css.picture} src='/picture.jpeg' alt='picture' />
      </div>
      <div className={css.contentTitle}>
        <div className={css.title}>REDJEM Amir</div>
      </div>
      <div className={css.contentSubTitle}>
        <div className={css.subTitle}>Développeur Web Full-Stack.</div>
      </div>
      <div className={css.contentText}>
        <div className={css.text}>Je crée des SaaS innovants et propose des solutions personnalisées à mes clients. Fasciné par l'IA et la blockchain, j'explore leur potentiel pour révolutionner notre futur.</div>
      </div>
    </div>
  )
}

export default card