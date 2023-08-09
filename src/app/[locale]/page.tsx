"use client";

import 'swiper/css';
import 'swiper/css/pagination';
import { useTranslations, useLocale } from "next-intl";
import IndexStyle from "./page.module.css";
import SimpleBox from "@/components/boxs/simple_box/simple_box";
import CommentBox from "@/components/boxs/comment_box/comment_box";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';


// Import Swiper styles

const skils : any = [
  {
    en:{
      title: "Web Development",
      desc: "Web development using the latest JavaScript libraries and frameworks",
    },
    fa:{
      title:"توسعه دهنده وب",
      desc:"توسعه وب با استفاده از جدیدترین کتابخانه ها و فریمورک های جاوا اسکریپت",
    },
    icon:"/img/icons/web-dev.png",
    iconAlt:""
  },
  {
    en:{
      title: "Mobile application developer",
      desc: "Mobile developer using React Native for ios and Android",
    },
    fa:{
      title:"توسعه‌دهنده برنامه‌های موبایل",
      desc:"توسعه دهنده برنامه موبایل با استفاده از React Native برای ios و Android",
    },
    icon:"/img/icons/phone.png",
    iconAlt:""
  },
  {
    en:{
      title: "Mobile application developer",
      desc: "Mobile developer using React Native for ios and Android",
    },
    fa:{
      title:"توسعه‌دهنده برنامه‌های موبایل",
      desc:"توسعه دهنده برنامه موبایل با استفاده از React Native برای ios و Android",
    },
    icon:"/img/icons/phone.png",
    iconAlt:""
  }
]

export default function Index() {
  const translations = useTranslations("Index");
  const descs = translations("desc").split("\n");

  return (
    <>
      <section
        dir={useLocale() === "en" ? "ltr" : "rtl"}
        className={IndexStyle["sec-1"]}
      >
        <h1
          className={
            "d-flex flex-dir-column-reverse title-h1 title-line " +
            IndexStyle.title
          }
        >
          {translations("title")}
        </h1>
        {descs.map((desc) => (
          <p key={desc}>{desc}</p>
        ))}
        <b>"{translations("powerWord")}"</b>
      </section>
      <section className={IndexStyle["sec-2"]}>
        <h2
          className={
            "d-flex flex-dir-column-reverse title-h2 line-heigth-0 mt-1 " + IndexStyle.title
          }
        >
          {translations("title2")}
        </h2>
        <div className="d-flex align-items-center justify-content-around flex-wrap">
          {skils.map((skil:any , i:number) => <SimpleBox key={i} icon={skil.icon} text={skil[useLocale()].desc} title={skil[useLocale()].title} iconAlt={skil.iconAlt} />)}
        </div>
      </section>
      <section className={IndexStyle["sec-1"]}>
        <h2
          className={
            "d-flex flex-dir-column-reverse title-h2 line-heigth-0 mt-1 " + IndexStyle.title
          }
        >
          {translations("title3")}
        </h2>
        <Swiper
        slidesPerView={2}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="d-flex align-items-center justify-content-around flex-wrap"
      >
          {skils.map((skil:any , i:number) => <SwiperSlide className='d-flex align-items-start justify-content-between'   key={i}><CommentBox  icon={skil.icon} text={skil[useLocale()].desc} title={skil[useLocale()].title} iconAlt={skil.iconAlt} /></SwiperSlide>)}
      </Swiper>
      </section>
    </>
  );
}
