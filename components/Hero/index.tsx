"use client";
import Image from "next/image";
import { EffectFade, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import styles from "./index.module.css";
import React, { useState, useRef, useEffect } from "react";
import { useInview } from "@/hook/useInview";
import type { SwiperRef } from "swiper/react";

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<SwiperRef>(null);
  const [inview, setInview] = useState(false);

  useInview<HTMLElement>({ ref, setInview, once: false });

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      if (inview) {
        swiperRef.current.swiper.autoplay.start();
      } else {
        swiperRef.current.swiper.autoplay.stop();
      }
    }

  }, [swiperRef, inview]);


  return (
    <section
      className={`${styles.hero} py-16 md:py-24 lg:py-32 mx-auto w-[90%] relative`}
      ref={ref}
    >
      <h1
        className={`
            ${styles.hero__copy}
            ${inview ? ' ' + styles.inview : ''}
             break-words max-w-[90%] absolute top-1/2 left-[5%] md:left-0 -translate-y-1/2 z-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold font-mono bg-emerald-500 py-2 px-4`}
      >
        microCMS×GSAP×swiper
      </h1>
      <Swiper
        className={`${styles.hero__slider} md:w-[60%] rounded-3xl`}
        modules={[EffectFade, Autoplay]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        effect="fade"
        ref={swiperRef}
      >
        <SwiperSlide className={styles.hero__slide}>
          <Image
            src="/images/forest.jpg"
            width={5997}
            height={4000}
            alt="森"
            className="object-cover w-full rounded-3xl h-[60vh]"
          />
        </SwiperSlide>
        <SwiperSlide className={styles.hero__slide}>
          <Image
            src="/images/park.jpg"
            width={6144}
            height={4096}
            alt="公園"
            className="object-cover w-full rounded-3xl h-[60vh]"
          />
        </SwiperSlide>
        <SwiperSlide className={styles.hero__slide}>
          <Image
            src="/images/river.jpg"
            width={5760}
            height={3840}
            alt="川"
            className="object-cover w-full rounded-3xl h-[60vh]"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Hero;
