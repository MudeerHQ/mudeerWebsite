"use client";
import React from "react";
import Image from "next/image";
import partener1 from "../../../assets/partener1.png";
import partener2 from "../../../assets/partener2.png";
import partener3 from "../../../assets/partener3.png";
import partener4 from "../../../assets/partener4.png";
import partener5 from "../../../assets/partener5.png";
import partener6 from "../../../assets/partener6.png";
import partener7 from "../../../assets/partener7.png";
import partener8 from "../../../assets/partener8.png";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/routing";

export default function Partners() {
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
  const locale = useLocale();

  return (
    <div className="flex flex-col gap-16 mb-10  ">
      {/* Header Section */}
      <div className="flex flex-col justify-center items-center gap-6 text-center">
        <div className="flex flex-col gap-4">
          <span className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            جاهز تبدأ
          </span>
          <span className="font-light text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            وتزوّد إنتاجية فريقك؟
          </span>
        </div>
        <div className="font-normal text-lg sm:text-xl md:text-2xl">
          كل ما تفعله أو تخطط له، يصبح إنجازه أفضل مع مدير.
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-center gap-x-4">
          <div className="relative group hover:-translate-x-1  transition-all duration-300  ">
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
          </div>
          <Link
            href="/contact-sales"
            className="rounded-[18px] p-[14px] border-2 border-gray-800 font-semibold text-base cursor-pointer transform  duration-300 transition-all  hover:shadow-[4px_4px_0_-1px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 hover:rounded-3xl"
          >
            تواصل معنا
          </Link>
        </div>
      </div>

      {/* Partners Section */}
      <div className="text-center mt-10">
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
          تعتمد أكبر فرق الأعمال وأسرعها نموًا على مدير
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
