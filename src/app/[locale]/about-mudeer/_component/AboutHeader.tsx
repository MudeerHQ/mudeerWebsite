import React from "react"; 
import Image from "next/image";
import aboutImg from "../../../assets/about-img.png";
import { useLocale } from "next-intl";
import backAbout from "../../../assets/bg-about.png";
import partener9 from "../../../assets/partener9.png";
import partener10 from "../../../assets/partener10.png";
import partener11 from "../../../assets/partener11.png";
import partener12 from "../../../assets/partener12.png";
import partener13 from "../../../assets/partener13.png";
import partener14 from "../../../assets/partener14.png";
import partener15 from "../../../assets/partener15.png";
import partener16 from "../../../assets/partener16.png";
import partener17 from "../../../assets/partener17.png";
import partener18 from "../../../assets/partener18.png";
export default function AboutHeader() {
  const locale = useLocale();
  const partners = [
    partener9,
    partener10,
    partener11,
    partener12,
    partener13,
    partener14,
    partener15,
    partener16,
    partener17,
    partener18,
    partener9,
    partener10,
    partener11,
    partener12,
    partener13,
    partener14,
    partener15,
    partener16,
    partener17,
    partener18,
    partener9,
    partener10,
    partener11,
    partener12,
    partener13,
    partener14,
    partener15,
    partener16,
    partener17,
    partener18,
    partener9,
    partener10,
    partener11,
    partener12,
    partener13,
    partener14,
    partener15,
    partener16,
    partener17,
    partener18,
  ];

  return (
    <div
      dir={locale === "ar" ? "rtl" : "ltr"}
      className="bg-bottom bg-contain bg-no-repeat overflow-hidden mb-80 max-sm:mb-28"
      style={{
        backgroundImage: `url(${backAbout.src})`,
        backgroundPosition: `center calc(1rem)`,
      }}
    >
      <div className="flex flex-col justify-center items-center gap-8 pt-[100px] sm:pt-[140px] md:pt-[180px] pb-[60px] sm:pb-[80px] md:pb-[100px] px-4 ">
        <div className="grid gap-6">
          <h1 className="font-bold text-3xl sm:text-5xl md:text-7xl text-[#FFD800] text-center">
            منصة إدارة العمل التعاوني
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-5xl text-[#FFFFFF] text-center">
            .حيث تعمل الفرق معًا لتحقق المزيد{" "}
          </p>
        </div>
        <div className="text-2xl font-normal text-[#FFFFFF] max-w-[90%] sm:max-w-[80%] md:max-w-[55%] text-center leading-10">
          مدير منصة متكاملة مصمّمة لرفع إنتاجية الفرق وتعزيز التعاون وزيادة
          شفافية التواصل لتحقيق أهداف العمل المشتركة، لأن الأفكار والأشخاص
          .العظيمين يستحقون التنفيذ الرائع
        </div>
        <div>
          <Image src={aboutImg} alt="about-header" />
        </div>
      </div>
      <div className="text-center mt-20 w-full">
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#F4F4F5]">
          تعتمد الشركات الأسرع نموًا على مدير لزيادة الإنتاجية في أعمالها{" "}
        </div>

        {/* Scrolling Partners Section */}
        <div className="overflow-hidden w-full relative mt-10">
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
        </div>
      </div>
    </div>
  );
}
