'use client'

import { useTranslations } from 'next-intl';
import React from 'react'

const page = () => {
  const t = useTranslations('Cv');
    
  return (
    <h1>{t('title')}</h1>
  )
}

export default page