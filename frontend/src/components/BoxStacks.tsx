import React from 'react'
import css from '@/styles/boxStacks.module.css'
import Link from 'next/link'

function BoxStacks({
    href
}:{
    href: string
}) {
  return (
    <Link className={css.link} href={href}>
        <div className={css.container}>
            
        </div>
    </Link>
  )
}

export default BoxStacks