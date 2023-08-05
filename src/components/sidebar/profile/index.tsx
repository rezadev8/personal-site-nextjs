"use client"
import Link from "next/link";
import ProfileStyle from "./profile.module.css"
import {useTranslations} from 'next-intl';
import { motion } from "framer-motion";

const Profile = () => {
  const translations = useTranslations('SideBar');

    return (
        <>
            <aside className={ProfileStyle.parent}>
                <section className={ProfileStyle["sec-1"]}>
                    <div className={"center w-100 "  + ProfileStyle['profile-img__parent']}>
                    <img className={ProfileStyle['profile-img']} src="/img/profile.jpg" alt="profile img" />
                    </div>
                    <div className={"d-flex align-items-center flex-dir-column justify-content-around w-100 "  + ProfileStyle['sec-2__parent']}>
                        <h3><Link className={ProfileStyle["profile-name"]} href={'/'}>{translations('name')}</Link></h3>
                        <div className={ProfileStyle['profile-position']}>
                             {translations('position')}
                        </div>
                        <div className={"d-flex align-items-center justify-content-between " + ProfileStyle['profile-socials']}>
                            <a href="https://instagram.com/rezadev" target="_blank"><i className="fab fa-instagram"></i></a>
                            <a href="https://github.com/rezadev8" target="_blank"><i className="fab fa-github"></i></a>
                            <a href="https://github.com/rezadev8" target="_blank"><i className="fab fa-telegram"></i></a>
                        </div>
                    </div>
                </section>
                <section className={'d-flex align-items-center flex-dir-column justify-content-around ' + ProfileStyle["sec-2"]}>
                    <div className={'d-flex align-items-end flex-dir-column ' + ProfileStyle['infos-parent']}>
                        <div className={ProfileStyle['info-parent']}>
                            <span>{translations('birthDay')}</span>
                            <i className="fa-thin fa-calendar-lines fa-lg"></i>
                        </div>
                        <div className={ProfileStyle['info-parent']}>
                            <span>{translations('location')}</span>
                            <i className="fa-thin fa-location-pin fa-lg"></i>
                        </div>
                        <div className={ProfileStyle['info-parent']}>
                            <span>{translations('email')}</span>
                            <i className="fa-thin fa-envelope fa-lg"></i>
                        </div>
                        <div className={ProfileStyle['info-parent']}>
                            <span>{translations('phone')}</span>
                            <i className="fa-thin fa-mobile-notch fa-lg"></i>
                        </div>
                    </div>
                    <motion.button 
                    whileTap={{scale:0.9}}
                    className={'d-flex align-items-center justify-content-around cursor-pointer ' + ProfileStyle['download-btn']}>{translations('downloadCv')}<i className="fa-light fa-arrow-down-to-bracket"></i></motion.button>
                </section>
            </aside>
        </>
    );
}

export default Profile;