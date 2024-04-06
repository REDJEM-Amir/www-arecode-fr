import React from 'react'
import css from '@/styles/containerRow.module.css'

const ContainerRow = ({
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

export default ContainerRow