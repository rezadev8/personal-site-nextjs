'use client';
 
import {useTranslations , useLocale} from 'next-intl';
import IndexStyle from "./page.module.css"
 
export default function Index() {
  const translations = useTranslations('Index');
  return <>
    <div dir={useLocale() === 'en' ? 'ltr' : 'rtl'}>
      <h1>{translations('title')}</h1>
    </div>
  </>;
}