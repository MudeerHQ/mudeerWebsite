import React from "react";
import Image from "next/image";
import featuresImg from "../../../assets/features-img.png";
import { useLocale } from "next-intl";
import backFeatures from "../../../assets/bg-features.png";
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
import feature1 from "../../../assets/feature1.png";
import feature2 from "../../../assets/feature2.png";
import feature3 from "../../../assets/feature3.png";
import { Link } from "@/i18n/routing";
export default function FeaturesHeader() {
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
      className="bg-bottom bg-contain bg-no-repeat overflow-hidden pb-32"
      style={{
        backgroundImage: `url(${backFeatures.src})`,
        backgroundPosition: `center calc(15rem)`,
      }}
    >
      <div className="flex flex-col justify-center items-center gap-8 pt-[100px] sm:pt-[140px] md:pt-[180px] pb-[60px] sm:pb-[80px] md:pb-[100px] px-4 ">
        <div className="grid gap-8">
          <h1 className="font-semibold text-sm sm:text-base md:text-xl text-center bg-gradient-to-b from-[#2CC171] to-[rgba(51,95,255,0.8)] bg-clip-text text-transparent">
            المشاريع
          </h1>

          <h2 className="font-bold text-3xl sm:text-5xl md:text-[82px] text-[#00B252] text-center">
            انجز أكثر.
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-7xl font-light text-[#FFFFFF] text-center">
            مع فريقك من مكان واحد.{" "}
          </p>
          <p className="text-base sm:text-lg md:text-2xl font-light text-[#FFFFFF] text-center">
            نظّم مشاريعك وتابع مهام فريقك وتعاون بشكل أفضل مع مدير.{" "}
          </p>
        </div>
        <div className="flex items-center justify-center gap-x-4">
          <div className="overflow-hidden relative group hover:-translate-x-1  transition-all duration-300  ">
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
                  className="fill-transparent group-hover:fill-current overflow-hidden"
                />
              </svg>
            </div>
          </div>
          <Link
            href="/contact-sales"
            className="rounded-[18px] py-[14px] px-3 border-2 border-[#FFFFFF] font-normal text-lg cursor-pointer bg-transparent text-[#FFFFFF] w-[170px] text-center transition-all duration-300  hover:shadow-[4px_4px_0_-1px_white] hover:-translate-x-1 hover:-translate-y-1 hover:rounded-3xl"
          >
            تواصل مع المبيعات
          </Link>
        </div>
        <div>
          <Image src={featuresImg} alt="features-header" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-between w-[80%] m-auto">
        <div className="bg-[#0D0D0D80] min-h-[285px] flex flex-col gap-6 px-6 py-8 rounded-[20px] m-auto">
          <div>
            <Image src={feature1} alt="feature-1" />
          </div>
          <h3 className="font-semibold text-2xl text-[#FFFFFF]">
            نظّم مشاريعك
          </h3>
          <p className="font-normal text-lg text-[#D4D4D8]">
            تابع سير العمل لحظة بلحظة، واعرف من يعمل على ماذا في أي وقت بطرق عرض
            تفاعلية تجعل التعاون أسهل وأسرع.
          </p>
        </div>
        <div className="bg-[#0D0D0D80] min-h-[285px] flex flex-col gap-6 px-6 py-8 rounded-[20px] m-auto">
          <div>
            <Image src={feature2} alt="feature-2" />
          </div>
          <h3 className="font-semibold text-2xl text-[#FFFFFF]">حقّق أهدافك</h3>
          <p className="font-normal text-lg text-[#D4D4D8]">
            اربط مشاريعك بالأهداف الكبرى والأهداف المرحلية مع تقارير تلقائية
            لتتبع الأداء في الوقت الفعلي ورفع الإنتاجية.{" "}
          </p>
        </div>
        <div className="bg-[#0D0D0D80] min-h-[285px] flex flex-col gap-6 px-6 py-8 rounded-[20px] m-auto">
          <div>
            <Image src={feature3} alt="feature-3" />
          </div>
          <h3 className="font-semibold text-2xl text-[#FFFFFF]">
            تحكّم بمسار عملك
          </h3>
          <p className="font-normal text-lg text-[#D4D4D8]">
            أتمت سير العمل واستخدم قوالب تنظيم المشاريع جاهزة، لا تبدأ من الصفر
            وركّز على ما يهم فعلاً.{" "}
          </p>
        </div>
      </div>
      <div className="text-center my-28 w-full">
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
