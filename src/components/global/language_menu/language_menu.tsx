"use client";
import LanguageMenuStyle from "./language_menu.module.css";
import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
const languages = ["en", "fa"];

const LanguageMenu = () => {
    const [isMuenuOpen , setIsMenuOpen] = useState(false);
  return (
    <>
      <div className={"d-flex align-items-center flex-dir-column " + LanguageMenuStyle.container} >
        <div onClick={() => setIsMenuOpen(!isMuenuOpen)} className={"center cursor-pointer w-100 " + LanguageMenuStyle["current-lang"]}>
          {useLocale()}
        </div>
        <motion.div
          className={
            "d-flex align-items-center flex-dir-column w-100 " + LanguageMenuStyle.menu
          }
          animate={{top:isMuenuOpen ? -3 : -56}}
        >
          {languages.map((lang) => {
            return <Link key={lang} href={lang} locale={lang}>{lang}</Link>
          })}
        </motion.div>
      </div>
    </>
  );
};

export default LanguageMenu;
