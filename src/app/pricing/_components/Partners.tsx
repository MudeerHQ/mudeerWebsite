"use client";
import { ArrowLeft } from "lucide-react";
import React from "react";
import Image from "next/image";
import partener1 from "../../assets/partener1.png";
import partener2 from "../../assets/partener2.png";
import partener3 from "../../assets/partener3.png";
import partener4 from "../../assets/partener4.png";
import partener5 from "../../assets/partener5.png";
import partener6 from "../../assets/partener6.png";
import partener7 from "../../assets/partener7.png";
import partener8 from "../../assets/partener8.png";

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
        <div className="flex flex-wrap justify-center items-center gap-4 mt-4">
          <div className="group w-[150px] relative flex justify-center items-center gap-2 text-white bg-black rounded-lg py-2 px-3 text-base font-medium cursor-pointer hover:rounded-3xl transition-all duration-300">
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
          <div className="py-2 px-6 rounded-lg border-2 border-gray-800 font-semibold text-base cursor-pointer">
            تواصل معنا
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="text-center">
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
          تعتمد أكبر فرق الأعمال وأسرعها نموًا على مدير
        </div>

        {/* Scrolling Partners Section */}
        <div className="overflow-hidden w-full relative mt-6">
          <div className="flex whitespace-nowrap py-4 relative animate-scroll">
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
