import React from 'react'
import { useTranslation } from 'react-i18next'

function Projects() {
  const {t} =useTranslation()
  return (
    <div className='mt-4 text-center'>
      <h4 className='bg-primary text-primary-foreground rounded text-center py-1 px-2 w-fit m-auto'>{t('projects')}</h4>
      <h2 className='text-2xl md:text-4xl font-bold capitalize mt-2'>{t('checkout-my-work')}</h2>
      <p className='text-muted-foreground lg:text-base italic max-w-2xl text-center m-auto'>{t('project-description')}</p>
    </div>
  )
}

export default Projects