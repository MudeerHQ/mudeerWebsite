"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import homeImg from "../../../app/assets/home-header-img.svg";
import { useLocale } from "next-intl";
import partener1 from "../../../app/assets/partener1.png";
import partener2 from "../../../app/assets/partener2.png";
import partener3 from "../../../app/assets/partener3.png";
import partener4 from "../../../app/assets/partener4.png";
import partener5 from "../../../app/assets/partener5.png";
import partener6 from "../../../app/assets/partener6.png";
import partener7 from "../../../app/assets/partener7.png";
import partener8 from "../../../app/assets/partener8.png";
import "animate.css"; // Import Animate.css
import { ArrowLeft } from "lucide-react";

export default function HomeHeader() {
  const locale = useLocale();
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
  const typingSpeed = 80; // Speed of typing (ms per character)
  const deletingSpeed = 80; // Speed of deleting (ms per character)
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
          <div className="flex flex-wrap justify-center items-center gap-4 mt-4">
            <div className="group w-[150px] relative flex justify-center items-center gap-2 text-white bg-[#1A1919] rounded-[18px] p-[14px] text-base font-medium cursor-pointer hover:rounded-3xl transition-all duration-300">
              <ArrowLeft
                color="#FFFFFF"
                size={14}
                className="ml-2 absolute -right-4 group-hover:right-2 transition-all duration-200"
              />
              جرّب مدير مجانًا
              <ArrowLeft
                color="#FFFFFF"
                size={14}
                className="group-hover:hidden transition-opacity duration-200"
              />
            </div>
            <div className="rounded-[18px] p-[14px] border-2 border-gray-800 font-semibold text-base cursor-pointer">
              تواصل مع المبيعات
            </div>
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
