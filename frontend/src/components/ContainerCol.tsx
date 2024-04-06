import React from 'react'
import css from '@/styles/containerCol.module.css'

const ContainerCol = ({
  children
}:{
  children?: React.ReactNode;
}) => {
  return (
    <div className={css.container}>
      {children}
    </div>
  )
}

export default ContainerCol