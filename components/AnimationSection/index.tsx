"use client";

import Image from "next/image";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, CSSRulePlugin);

const AnimationSection = () => {
  const container = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      // PC用
      mm.add("(min-width:768px)", () => {
        const animItems = gsap.utils.toArray<HTMLElement>(".animation-item");
        animItems.forEach((item) => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: item,
              start: "top 50%",
              toggleActions: "play none none",
            },
          });
          tl.from(
            item.querySelector(".animation-title"),
            {
              opacity: 0,
              y: 40,
              duration: 0.8,
            },
            0
          );
          tl.to(
            item.querySelector(".animation-image__overlay"),
            {
              xPercent: 100,
              duration: 0.8,
            },
            0
          );
          tl.from(item.querySelector(".animation-text"), {
            opacity: 0,
            y: 30,
            duration: 0.5,
          });
        });
        return () => ScrollTrigger.getAll().forEach((st) => st.kill());
      });
      //   スマホ用
      mm.add("(max-width:767px)", () => {
        const animItems = gsap.utils.toArray<HTMLElement>(".animation-item");
        animItems.forEach((item) => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: item,
              start: "top 50%",
              toggleActions: "play none none",
            },
          });
          tl.from(item.querySelector(".animation-title"), {
            opacity: 0,
            y: 30,
            duration: 0.5,
          });
          tl.from(item.querySelector(".animation-text"), {
            opacity: 0,
            y: 20,
            duration: 0.5,
          });
          tl.to(item.querySelector(".animation-image__overlay"), {
            xPercent: 100,
            duration: 0.5,
          });
        });
        return () => ScrollTrigger.getAll().forEach((st) => st.kill());
      });
      return () => mm.revert();
    },
    { scope: container }
  );

  return (
    <section className="animation-item py-16 md:py-24 lg:py-32 bg-gray-50">
      <hgroup className="title mb-10 md:mb-16 lg:mb-20">
        <h2>セクションタイトルが入ります</h2>
        <p>Scroll Trigger×TimeLine</p>
      </hgroup>
      <div ref={container}>
        <section className="animation-item w-[90%] mx-auto mb-10 md:mb-12 lg:mb-14">
          <div className="flex flex-wrap items-center flex-col md:flex-row md:justify-between">
            <div className="w-full md:w-[48%]">
              <h2 className="animation-title font-bold text-xl md:text-2xl lg:text-3xl mb-6 md:mb-7 lg:mb-8">
                タイトル
              </h2>
              <div className="animation-text">
                <p className="leading-loose">
                  テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                </p>
                <p className="leading-loose">
                  テキストテキストテキストテキストテキストテキスト
                </p>
                <p className="leading-loose">テキストテキストテキスト</p>
              </div>
            </div>
            <figure className="animation-image w-full md:w-[50%] mt-6 md:mt-0 aspect-[4-3] relative overflow-hidden">
              <div
                className="animation-image__overlay 
              bg-white w-full h-full absolute left-0 top-0 translate-0"
                aria-hidden="true"
              ></div>
              <Image
                src="/images/forest.jpg"
                width={960}
                height={640}
                alt="森"
                className="object-cover w-full rounded-3xl"
              />
            </figure>
          </div>
        </section>
        <section className="animation-item w-[90%] mx-auto mb-10 md:mb-12 lg:mb-14">
          <div className="flex flex-wrap items-center flex-col md:flex-row md:justify-between">
            <div className="w-full md:w-[48%]">
              <h2 className="animation-title font-bold text-xl md:text-2xl lg:text-3xl mb-6 md:mb-7 lg:mb-8">
                タイトル
              </h2>
              <div className="animation-text">
                <p className="leading-loose">テキストテキストテキスト</p>
                <p className="leading-loose">テキストテキストテキスト</p>
                <p className="leading-loose">テキストテキストテキスト</p>
              </div>
            </div>
            <figure className="animation-image w-full md:w-[50%] mt-6 md:mt-0 aspect-[4-3] relative overflow-hidden">
              <div
                className="animation-image__overlay 
              bg-white w-full h-full absolute left-0 top-0 translate-0"
                aria-hidden="true"
              ></div>
              <Image
                src="/images/park.jpg"
                width={960}
                height={640}
                alt="公園"
                className="object-cover w-full rounded-3xl"
              />
            </figure>
          </div>
        </section>
        <section className="animation-item w-[90%] mx-auto">
          <div className="flex flex-wrap items-center flex-col md:flex-row md:justify-between">
            <div className="w-full md:w-[48%]">
              <h2 className="animation-title font-bold text-xl md:text-2xl lg:text-3xl mb-6 md:mb-7 lg:mb-8">
                タイトル
              </h2>
              <div className="animation-text">
                <p className="leading-loose">テキストテキストテキスト</p>
                <p className="leading-loose">
                  テキストテキストテキストテキストテキスト
                </p>
                <p className="leading-loose">
                  テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                </p>
              </div>
            </div>
            <figure className="animation-image w-full md:w-[50%] mt-6 md:mt-0 aspect-[4-3] relative overflow-hidden">
              <div
                className="animation-image__overlay 
              bg-white w-full h-full absolute left-0 top-0 translate-0"
                aria-hidden="true"
              ></div>
              <Image
                src="/images/river.jpg"
                width={960}
                height={640}
                alt="川"
                className="object-cover w-full rounded-3xl"
              />
            </figure>
          </div>
        </section>
      </div>
    </section>
  );
};

export default AnimationSection;
