import Link from 'next/link'
import React, { useState } from 'react'
import css from '@/styles/boxProject.module.css'

const BoxProject = ({
  title,
  img,
  href,
  resumeLeft,
  resumeRight
}: {
  title: string,
  img: string,
  href: string,
  resumeLeft?: string,
  resumeRight?: string
}) => {
  return (
    <div className={css.container}>
      {resumeLeft && (
        <div className={css.contentResume}>
          <div className={css.resume}>{resumeLeft}</div>
        </div>
      )}
      <Link className={css.link} href={href}>
        <div className={css.contentCard}>
          <img className={css.img} src={img} alt={title} />
        </div>
      </Link>
      {resumeRight && (
        <div className={css.contentResume}>
          <div className={css.resume}>{resumeRight}</div>
        </div>
      )}
    </div>
  )
}

export default BoxProject