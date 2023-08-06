'use client';
 
import {useTranslations , useLocale} from 'next-intl';
import IndexStyle from "./page.module.css"
 
export default function Index() {
  const translations = useTranslations('Index');
  const descs = translations('desc').split('\n');

  return <>
    <div dir={useLocale() === 'en' ? 'ltr' : 'rtl'}>
      <h1 className={'d-flex flex-dir-column-reverse title-h1 ' + IndexStyle.title}>{translations('title')}</h1>
      {descs.map(desc => <p key={desc}>{desc}</p>)}
      <b>"{translations('powerWord')}"</b>
      <div className=''>

      </div>
    </div>
  </>;
}