"use client"

import { useTranslations  , useLocale} from "next-intl";

const Footer = () => {
  const translations = useTranslations("Footer");

    return (
        <>
        <footer style={{marginTop:30}}>
            {translations('title')} <a target="_blank" href="https://t.me/Rezadev"><b>{useLocale() === "en" ? "<Reza/>" : "</Reza>"}</b></a>
        </footer>
        </>
    );
}

export default Footer;