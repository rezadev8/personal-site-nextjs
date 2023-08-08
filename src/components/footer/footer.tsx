"use client"

import { useTranslations } from "next-intl";

const Footer = () => {
  const translations = useTranslations("Footer");

    return (
        <>
        <footer style={{marginTop:30}}>
            {translations('title')} <b>{'<Reza/>'}</b>
        </footer>
        </>
    );
}

export default Footer;