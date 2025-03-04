import React from "react";
import { useLocale } from "next-intl";
import backVision from "../../../assets/bg-vision.png";
import backGoal from "../../../assets/bg-goal-sec.png";
import backVisionSec from "../../../assets/bg-vision-sec.png";

export default function AboutVision() {
  const locale = useLocale();

  return (
    <div
      dir={locale === "ar" ? "rtl" : "ltr"}
      className="flex flex-col gap-16 lg:gap-24 bg-center bg-contain bg-no-repeat bg-[#09090B] h-auto min-h-[800px] md:min-h-[900px] lg:min-h-[1200px] -mt-24 rounded-t-[30px] lg:rounded-t-[60px] overflow-hidden py-16 lg:pt-[100px] px-8"
      style={{
        backgroundImage: `url(${backVision.src})`,
        backgroundPosition: `center top`,
      }}
    >
      {/* Mission Section */}
      <div
        className="flex flex-col gap-3 px-4 md:px-12 lg:px-32 py-10 bg-contain bg-no-repeat"
        style={{
          backgroundImage: `url(${backGoal.src})`,
          backgroundPosition: `right 2rem center`,
        }}
      >
        <div className="flex flex-col gap-6 lg:gap-10 py-4 lg:py-8">
          <div className="font-bold text-xl md:text-3xl lg:text-4xl text-[#09090B] bg-[#FFD800] w-fit px-4 py-2 rounded-[12px] rotate-[10deg] md:rotate-[15deg]">
            &quot;مهمتنا
          </div>
          <div className="font-semibold text-xl md:text-4xl lg:text-5xl text-[#FFFFFF] leading-[40px] md:leading-[60px] lg:leading-[70px] w-full md:w-[80%] lg:w-[65%]">
            تمكين الأفراد وفرق العمل من تحقيق إنتاجية أعلى للوصول إلى أقصى
            إمكاناتهم.
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="flex justify-end">
        <div
          className="flex flex-col gap-3  py-10 bg-contain bg-no-repeat "
          style={{
            backgroundImage: `url(${backVisionSec.src})`,
            backgroundPosition: "right center",
          }}
        >
          <div className="flex flex-col gap-6 lg:gap-10 py-4 lg:py-6 pr-16 max-sm:pr-4">
            <div className="font-bold text-2xl md:text-3xl lg:text-4xl text-[#09090B] bg-[#99AFFF] w-fit px-4 py-2 rounded-[12px] rotate-[-10deg] md:rotate-[-15deg]">
              &quot;رؤيتنا
            </div>
            <div className="font-semibold text-2xl md:text-4xl lg:text-5xl text-[#FFFFFF] leading-[40px] md:leading-[60px] lg:leading-[70px] w-full md:w-[80%]">
              بناء منتجات مصمّمة للأفراد، مبنية لتعزيز الإنتاجية.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
