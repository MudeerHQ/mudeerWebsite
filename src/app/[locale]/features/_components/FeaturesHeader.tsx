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
import { ArrowLeft } from "lucide-react";
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
      className="bg-bottom bg-contain bg-no-repeat overflow-hidden "
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
        <div className="flex flex-wrap justify-center items-center gap-4 mt-4">
          <div className="group w-[170px] relative flex justify-center items-center gap-2 text-black bg-[#FFFFFF] rounded-[18px] py-[14px] px-3 text-lg font-normal cursor-pointer hover:rounded-3xl transition-all duration-300">
            جرّب مدير مجانًا
            <ArrowLeft color="black" size={14} />
          </div>
          <div className="rounded-[18px] py-[14px] px-3 border-2 border-[#FFFFFF] font-normal text-lg cursor-pointer bg-transparent text-[#FFFFFF] w-[170px] text-center hover:rounded-3xl transition-all duration-300">
            تواصل مع المبيعات
          </div>
        </div>
        <div>
          <Image src={featuresImg} alt="features-header" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[60px] w-[90%] m-auto">
        <div className="bg-[#0D0D0D80] max-w-[380px] flex flex-col gap-6 px-6 py-8 rounded-[20px] m-auto">
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
        <div className="bg-[#0D0D0D80] max-w-[380px] flex flex-col gap-6 px-6 py-8 rounded-[20px] m-auto">
          <div>
            <Image src={feature2} alt="feature-2" />
          </div>
          <h3 className="font-semibold text-2xl text-[#FFFFFF]">حقّق أهدافك</h3>
          <p className="font-normal text-lg text-[#D4D4D8]">
            اربط مشاريعك بالأهداف الكبرى والأهداف المرحلية مع تقارير تلقائية
            لتتبع الأداء في الوقت الفعلي ورفع الإنتاجية.{" "}
          </p>
        </div>
        <div className="bg-[#0D0D0D80] max-w-[380px] flex flex-col gap-6 px-6 py-8 rounded-[20px] m-auto">
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
