"use client";

import 'swiper/css';
import 'swiper/css/pagination';
import { useTranslations, useLocale } from "next-intl";
import IndexStyle from "./page.module.css";
import SimpleBox from "@/components/boxs/simple_box/simple_box";
import CommentBox from "@/components/boxs/comment_box/comment_box";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { comments, skils } from '@/data/main';


// Import Swiper styles

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
        <div className={"d-flex align-items-center justify-content-around flex-wrap " + IndexStyle['box-parent']} style={{marginBottom:20}}>
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
        <div style={{minWidth:"100%"}}>
        <Swiper
        breakpoints={{
          576: {
            // width: 576,
            slidesPerView: 1,
          },
          768: {
            // width: 768,
            slidesPerView: 2,
          },
        }}
        slidesPerView={'auto'}
        spaceBetween={20}
        pagination={{
        }}
        modules={[Pagination]}
        className="d-flex align-items-center justify-content-around flex-wrap"
      >
          {comments.map((skil:any , i:number) => <SwiperSlide key={i}><CommentBox  icon={skil.avatar} text={skil[useLocale()].comment} title={skil[useLocale()].title} iconAlt={'avatar'} /></SwiperSlide>)}
      </Swiper>
        </div>
      </section>
    </>
  );
}
