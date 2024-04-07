import React from 'react'
import css from '@/styles/boxStacks.module.css'
import Link from 'next/link'

function BoxStacks({
    href,
    img,
    title
}: {
    href: string,
    img: string,
    title: string
}) {
    return (
        <Link className={css.link} href={href} target='_blank'>
            <div className={css.container}>
                <div className={css.contentImg}>
                    <img className={css.img} src={img} alt={title} />
                </div>
            </div>
        </Link>
    )
}

export default BoxStacks