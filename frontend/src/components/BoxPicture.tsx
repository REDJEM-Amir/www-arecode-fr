import React from 'react'
import css from '@/styles/boxPicture.module.css'

const BoxPicture = () => {
  return (
    <div className={css.container}>
      <img className={css.img} src="/picture.jpeg" alt="REDJEM Amir Picture" />
    </div>
  )
}

export default BoxPicture