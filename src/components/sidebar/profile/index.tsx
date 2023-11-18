"use client"
import Link from "next/link";
import ProfileStyle from "./profile.module.css"
import {useTranslations} from 'next-intl';

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
                            <a href="https://instagram.com/rezadev8" target="_blank"><i className="fab fa-instagram"></i></a>
                            <a href="https://github.com/rezadev8" target="_blank"><i className="fab fa-github"></i></a>
                            <a href="https://t.me/Rezadev" target="_blank"><i className="fab fa-telegram"></i></a>
                        </div>
                    </div>
                </section>
                <section className={'d-flex align-items-center flex-dir-column justify-content-around ' + ProfileStyle["sec-2"]}>
                    <div className={'d-flex align-items-start flex-dir-column ' + ProfileStyle['infos-parent']}>
                        <div className={ProfileStyle['info-parent']}>
                            <i className="fa-thin fa-calendar-lines fa-lg"></i>
                            <span>{translations('birthDay')}</span>
                        </div>
                        <div className={ProfileStyle['info-parent']}>
                            <i className="fa-thin fa-location-pin fa-lg"></i>
                            <span>{translations('location')}</span>
                        </div>
                        <div className={ProfileStyle['info-parent']}>
                            <i className="fa-thin fa-envelope fa-lg"></i>
                            <span>{translations('email')}</span>
                        </div>
                    </div>
                    <a href="/my-cv.pdf" 
                    className={'d-flex align-items-center justify-content-around cursor-pointer ' + ProfileStyle['download-btn']}>{translations('downloadCv')}<i className="fa-light fa-arrow-down-to-bracket"></i></a>
                </section>
            </aside>
        </>
    );
}

export default Profile;