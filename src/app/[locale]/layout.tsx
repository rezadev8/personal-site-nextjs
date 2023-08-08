import "../globals.css"
import Profile from '@/components/sidebar/profile';
import {NextIntlClientProvider , useLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import LayoutStyle from "./layout.module.css"
import "./../../../public/FontAwesome.Pro.6.4.0/web/css/all.css"
import LanguageMenu from "@/components/global/language_menu/language_menu";
import Footer from "@/components/footer/footer";
 
export function generateStaticParams() {
  return [{locale: 'en'}, {locale: 'fa'}];
}
 
export default async function LocaleLayout({children, params: {locale}}:any) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
 
  return (
    <html dir={locale === "en" ? "ltr" : "rtl"} lang={locale}>
      <body className="center">
        <NextIntlClientProvider locale={locale} messages={messages}>
        <div className={'d-flex align-items-start justify-content-around ' + LayoutStyle.container}>
        <LanguageMenu/>
        <Profile/>
        <div className="center flex-dir-column">
          <main className={LayoutStyle.main}>
            {children}
          </main>
          <Footer/>
        </div>
        </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}