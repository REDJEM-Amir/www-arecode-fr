import React from 'react'
import css from '@/styles/sectionTitle.module.css'

function SectionTitle({
    title
}: {
    title: string
}) {
    return (
        <div className={css.title}>
            {title}
        </div>
    )
}

export default SectionTitle