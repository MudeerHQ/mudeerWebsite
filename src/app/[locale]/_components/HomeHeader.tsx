"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import homeImg from "../../../app/assets/home-header-img.svg";
import { useLocale, useTranslations } from "next-intl";
import partener1 from "../../../app/assets/partener1.png";
import partener2 from "../../../app/assets/partener2.png";
import partener3 from "../../../app/assets/partener3.png";
import partener4 from "../../../app/assets/partener4.png";
import partener5 from "../../../app/assets/partener5.png";
import partener6 from "../../../app/assets/partener6.png";
import partener7 from "../../../app/assets/partener7.png";
import partener8 from "../../../app/assets/partener8.png";
import "animate.css"; // Import Animate.css
import { Link } from "@/i18n/routing";

export default function HomeHeader() {
  const locale = useLocale();
  const t = useTranslations("Navbar");

  const partners = [
    partener1,
    partener2,
    partener3,
    partener4,
    partener5,
    partener6,
    partener7,
    partener8,
    partener1,
    partener2,
    partener3,
    partener4,
    partener5,
    partener6,
    partener7,
    partener8,
    partener1,
    partener2,
    partener3,
    partener4,
    partener5,
    partener6,
    partener7,
    partener8,
    partener1,
    partener2,
    partener3,
    partener4,
    partener5,
    partener6,
    partener7,
    partener8,
    partener1,
    partener2,
    partener3,
    partener4,
    partener5,
    partener6,
    partener7,
    partener8,
  ];

  const words = ["مشاريعك...", "أهدافك...", "عملك...", "مهامك...", "فريقك..."];
  const typingSpeed = 120; // Speed of typing (ms per character)
  const deletingSpeed = 120; // Speed of deleting (ms per character)
  const delayBeforeDeleting = 10; // Delay before erasing (ms)

  const [index, setIndex] = useState(0); // Track current word
  const [text, setText] = useState(""); // Displayed text
  const [isDeleting, setIsDeleting] = useState(false); // Typing or deleting?

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      // Typing animation
      if (text.length < words[index].length) {
        timeout = setTimeout(() => {
          setText(words[index].slice(0, text.length + 1));
        }, typingSpeed);
      } else {
        // Wait before deleting
        timeout = setTimeout(() => setIsDeleting(true), delayBeforeDeleting);
      }
    } else {
      // Deleting animation
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText(words[index].slice(0, text.length - 1));
        }, deletingSpeed);
      } else {
        // Move to the next word
        setIsDeleting(false);
        setIndex((prevIndex) => (prevIndex + 1) % words.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);

  return (
    <div
      dir={locale === "ar" ? "rtl" : "ltr"}
      className=" overflow-hidden mb-40 max-sm:mb-28"
    >
      <div className="flex flex-col justify-center items-center gap-16 max-sm:gap-8 pt-[120px] sm:pt-[120px] md:pt-[140px] pb-[80px] sm:pb-[80px] md:pb-[100px] px-4 ">
        <div className="grid gap-12 max-md:gap-6">
          <h1 className="font-bold text-4xl sm:text-6xl md:text-7xl lg:text-[96px] text-[#0D0D0D] text-center">
            منصة واحدة لكل
          </h1>

          {/* Description */}
          <p className="text-[40px] sm:text-[50px] md:text-[70px] lg:text-[90px] text-[#0D0D0D] font-light text-center">
            {text}
            <span className="animate-blink">|</span> {/* Blinking Cursor */}
          </p>
        </div>
        <div className="grid gap-6">
          <div className="text-2xl font-light text-[#0D0D0D]  text-center ">
            أدر عملك وارفع إنتاجية <span className="font-bold">فريقك</span>{" "}
            وتعاون بشكل <span className="font-bold">أفضل</span> لتحقيق أهداف
            العمل المشتركة.{" "}
          </div>
          {/* Buttons */}
          <div className="flex items-center justify-center gap-x-4">
            {/* <div className="relative group hover:-translate-x-1  transition-all duration-300  ">
              <Link
                href="/create-account"
                className="peer px-5  py-[16px] flex items-center overflow-hidden duration-300 transition-all  font-bold text-md bg-[#000] text-white rounded-2xl relative group-hover:hover:rounded-3xl "
              >
                <div className="pl-3 transform transition-all duration-300 group-hover:translate-x-[-1.7em]">
                  جرّب مدير مجانًا
                </div>
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-all duration-300 group-hover:translate-x-[-3em] rotate-180"
                >
                  <path
                    d="M16 7.38197L15.4495 7.10674L15.4484 7.10617L15.4455 7.10464L15.4188 7.09062C15.393 7.07688 15.3516 7.05438 15.2965 7.02295C15.1862 6.96006 15.0213 6.86173 14.8166 6.72686C14.4066 6.45661 13.8417 6.0427 13.2383 5.47699C12.029 4.34323 10.6931 2.62752 10.1006 0.257465L8.16032 0.742531C8.87215 3.58987 10.4711 5.62416 11.8704 6.93606C11.8933 6.95756 11.9162 6.97887 11.9391 7H0V9H11.9391C11.9162 9.02112 11.8933 9.04244 11.8704 9.06394C10.4711 10.3758 8.87215 12.4101 8.16032 15.2575L10.1006 15.7425C10.6931 13.3725 12.029 11.6568 13.2383 10.523Z"
                    fill="currentColor"
                  />
                </svg>
              </Link>
              <div className="absolute text-white right-[-1em] top-1/2 -translate-y-1/2 w-4 h-4  transition-all duration-300">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-transform duration-300 group-hover:translate-x-[-2em] rotate-180"
                >
                  <path
                    d="M16 7.38197L15.4495 7.10674L15.4484 7.10617L15.4455 7.10464L15.4188 7.09062C15.393 7.07688 15.3516 7.05438 15.2965 7.02295C15.1862 6.96006 15.0213 6.86173 14.8166 6.72686C14.4066 6.45661 13.8417 6.0427 13.2383 5.47699C12.029 4.34323 10.6931 2.62752 10.1006 0.257465L8.16032 0.742531C8.87215 3.58987 10.4711 5.62416 11.8704 6.93606C11.8933 6.95756 11.9162 6.97887 11.9391 7H0V9H11.9391C11.9162 9.02112 11.8933 9.04244 11.8704 9.06394C10.4711 10.3758 8.87215 12.4101 8.16032 15.2575L10.1006 15.7425C10.6931 13.3725 12.029 11.6568 13.2383 10.523Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div> */}
            <div
              className={`overflow-hidden relative group hover:${
                locale === "ar" ? "-translate-x-1" : "translate-x-1"
              } transition-all duration-300`}
            >
              <Link
                href="/create-account"
                className="peer px-5  py-[16px] flex items-center overflow-hidden duration-300 transition-all font-bold text-md bg-[#141414F5] text-white rounded-[10px] relative group-hover:hover:rounded-3xl"
              >
                <div
                  className={` transform transition-all duration-300 ${
                    locale === "ar"
                      ? "group-hover:-translate-x-[1.7em] pl-3"
                      : "group-hover:translate-x-[1.7em] pr-3"
                  }`}
                >
                  {t("li45")}
                </div>
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`transition-all duration-300 ${
                    locale === "ar"
                      ? "group-hover:-translate-x-[3em] rotate-180"
                      : "group-hover:translate-x-[3em]"
                  }`}
                >
                  <path
                    d="M16 7.38197L15.4495 7.10674L15.4484 7.10617L15.4455 7.10464L15.4188 7.09062C15.393 7.07688 15.3516 7.05438 15.2965 7.02295C15.1862 6.96006 15.0213 6.86173 14.8166 6.72686C14.4066 6.45661 13.8417 6.0427 13.2383 5.47699C12.029 4.34323 10.6931 2.62752 10.1006 0.257465L8.16032 0.742531C8.87215 3.58987 10.4711 5.62416 11.8704 6.93606C11.8933 6.95756 11.9162 6.97887 11.9391 7H0V9H11.9391C11.9162 9.02112 11.8933 9.04244 11.8704 9.06394C10.4711 10.3758 8.87215 12.4101 8.16032 15.2575L10.1006 15.7425C10.6931 13.3725 12.029 11.6568 13.2383 10.523Z"
                    fill="currentColor"
                  />
                </svg>
              </Link>
              <div
                className={`absolute text-white ${
                  locale === "ar" ? "right-[-1em]" : "left-[-1em]"
                } top-1/2 -translate-y-1/2 w-4 h-4 transition-all duration-300`}
              >
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`transition-transform duration-300 ${
                    locale === "ar"
                      ? "group-hover:-translate-x-[2em] rotate-180"
                      : "group-hover:translate-x-[2em]"
                  }`}
                >
                  <path
                    d="M16 7.38197L15.4495 7.10674L15.4484 7.10617L15.4455 7.10464L15.4188 7.09062C15.393 7.07688 15.3516 7.05438 15.2965 7.02295C15.1862 6.96006 15.0213 6.86173 14.8166 6.72686C14.4066 6.45661 13.8417 6.0427 13.2383 5.47699C12.029 4.34323 10.6931 2.62752 10.1006 0.257465L8.16032 0.742531C8.87215 3.58987 10.4711 5.62416 11.8704 6.93606C11.8933 6.95756 11.9162 6.97887 11.9391 7H0V9H11.9391C11.9162 9.02112 11.8933 9.04244 11.8704 9.06394C10.4711 10.3758 8.87215 12.4101 8.16032 15.2575L10.1006 15.7425C10.6931 13.3725 12.029 11.6568 13.2383 10.523Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
            <Link
              href="/contact-sales"
              className={`rounded-[18px] p-[14px] border-2 border-gray-800 font-semibold text-base cursor-pointer transform  duration-300 transition-all   hover:-translate-y-1 hover:rounded-3xl ${
                locale === "ar"
                  ? "hover:shadow-[4px_4px_0_-1px_rgba(0,0,0,1)] hover:-translate-x-1"
                  : "hover:shadow-[-4px_4px_0_-1px_rgba(0,0,0,1)] hover:translate-x-1"
              }`}
            >
              {t("li27")}
            </Link>
          </div>
        </div>

        <div>
          <Image src={homeImg} alt="home-header" />
        </div>
      </div>
      <div className="text-center w-full grid gap-4">
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-[#0D0D0D]">
          تعتمد أكبر فرق الأعمال وأسرعها نموًا على مدير{" "}
        </div>

        {/* Scrolling Partners Section */}
        <div className="overflow-hidden w-full relative mt-6">
          <div
            className={`flex whitespace-nowrap ${
              locale === "ar" ? "animate-scroll-rtl" : "animate-scroll-ltr"
            }`}
          >
            {partners.concat(partners).map((partner, index) => (
              <div key={index} className="flex-shrink-0 mx-3">
                <Image
                  src={partner}
                  className=" grayscale hover:grayscale-0 transition"
                  alt="logo"
                />
              </div>
            ))}
          </div>
          <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-white to-transparent"></div>
          <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-white to-transparent"></div>
        </div>
      </div>
    </div>
  );
}
