"use client";
import LanguageMenuStyle from "./language_menu.module.css";
import { useLocale } from "next-intl";
import { useState } from "react";
import Link from "next/link";
const languages = ["en", "fa"];

const LanguageMenu = () => {
    const [isMuenuOpen , setIsMenuOpen] = useState(false);
  return (
    <>
      <div dir="ltr" className={"d-flex align-items-center flex-dir-column " + LanguageMenuStyle.container} >
        <div onClick={() => setIsMenuOpen(!isMuenuOpen)} className={"center cursor-pointer w-100 " + LanguageMenuStyle["current-lang"]}>
          {useLocale()}
          <i  style={{rotate:isMuenuOpen ? '0deg' : '180deg' , marginLeft:3}} className="fa-light fa-chevron-down fa-xs"></i>
        </div>
        <div
          className={
            "d-flex align-items-center flex-dir-column w-100 " + LanguageMenuStyle.menu
          }
          style={{top:isMuenuOpen ? -3 : -56}}
        >
          {languages.map((lang) => {
            return <Link  className="center w-100" key={lang} href={lang} locale={lang}>{lang}</Link>
          })}
        </div>
      </div>
    </>
  );
};

export default LanguageMenu;
