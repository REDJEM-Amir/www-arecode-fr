import React from 'react'
import css from '@/styles/containerIdentity.module.css'

const ContainerIdentity = ({
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

export default ContainerIdentity