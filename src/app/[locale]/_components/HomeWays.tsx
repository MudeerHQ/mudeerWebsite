import React from "react";
import { useLocale } from "next-intl";
import Image from "next/image";
import way1 from "../../../app/assets/way1.png";
import way2 from "../../../app/assets/way2.png";
import way3 from "../../../app/assets/way3.png";
import way4 from "../../../app/assets/way4.png";
import way5 from "../../../app/assets/way5.png";
import way6 from "../../../app/assets/way6.png";
import { Sparkles } from "lucide-react";
import { Link } from "@/i18n/routing";

export default function HomeWays() {
  const locale = useLocale();
  return (
    <div
      dir={locale === "ar" ? "rtl" : "ltr"}
      className="h-auto -mt-32 bg-[#1A1919] pt-12 rounded-t-[60px] overflow-hidden pb-56 max-sm:rounded-t-[30px]"
    >
      <div className="flex flex-col gap-8 justify-center items-center px-4 text-center pt-12 max-sm:pt-6 pb-10 pl-3 max-sm:gap-4">
        <div className="py-[6px] px-5 w-[150px] rounded-full bg-[#335FFF] flex justify-center items-center gap-2">
          <span>
            <Sparkles size={20} color="white" strokeWidth={1.25} />
          </span>
          <span className="text-base font-medium text-[#FFFFFF]">
            ميزات مدير
          </span>
        </div>
        <div className="text-[#FFFFFF] font-semibold text-xl sm:text-3xl md:text-4xl lg:text-[50px] leading-tight">
          غيّر الطريقة التي يعمل بها فريقك.{" "}
        </div>
        <div className="text-[#686767] font-normal text-2xl max-sm:text-lg">
          إدارة العمل كما يجب أن تكون— بسيطة، وذكية، ومتكاملة.{" "}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-8 w-[80%] m-auto">
        <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
          <div className="flex flex-col gap-4 justify-between">
            <div className="flex flex-col gap-4 bg-[#3737371A] border border-[#71717A] rounded-3xl pt-6 pr-6 md:pr-8  overflow-hidden">
              <div className="pl-6 md:pl-8 text-center md:text-start">
                <span className="font-medium text-[17px] text-[#FFFFFF] leading-[24px]">
                  الأهداف. خطط، نفّذ وحقق المزيد. {" "}
                </span>
                <span className="font-medium text-[17px] text-[#FFFFFF80] leading-[24px]">
                  حدّد المراحل الأساسية لمشاريعك، وتابع التقدم الحقيقي، وأبقِ
                  الجميع على نفس المسار، ليصبح كل إنجاز نقطة تحفيز تقرّبك من
                  الهدف النهائي.{" "}
                </span>
              </div>
              <div className="">
                <Image src={way1} alt="way-1" className="w-full" />
              </div>
            </div>

            <div
              className="flex flex-col gap-4 border border-[#71717A] rounded-3xl pt-6  overflow-hidden"
              style={{
                background:
                  "linear-gradient(-50deg, rgba(88, 112, 176, 0.5) 0%, rgba(55, 55, 55, 0.5) 26%)",
              }}
            >
              <div className="text-center md:text-start px-6 md:px-8">
                <span className="font-medium text-[17px] text-[#FFFFFF] leading-[24px]">
                  الإشعارات. مصمّمة للأفراد. لتركيز أعلى.{" "}
                </span>
                <span className="font-medium text-[17px] text-[#FFFFFF80] leading-[24px]">
                  ابقَ على اطلاع دون إزعاج—تحكَّم في الإشعارات التي تصلك، اختر
                  ما هو مهم، وأوقف التنبيهات غير الضرورية، لا مزيد من التشتيت.{" "}
                </span>
              </div>
              <div className="flex justify-center pr-8">
                <Image src={way2} alt="way-2" className="w-full" />
              </div>
            </div>
          </div>
          <div className=" flex flex-col gap-4 justify-between bg-[#3737371A] border border-[#71717A] rounded-3xl pt-6 pr-6 md:pr-8 overflow-hidden">
            <div className="pl-6 md:pl-8 text-center md:text-start">
              <span className="font-medium text-[17px] text-[#FFFFFF] leading-[24px]">
                الكانفاس. مساحة لكل فكرة، ولكل نقاش.{" "}
              </span>
              <span className="font-medium text-[17px] text-[#FFFFFF80] leading-[24px]">
                مساحة مرنة للنقاش، العصف الذهني، والتخطيط مع فريقك. دوّن
                الأفكار، نظّمها، وشاركها بسهولة لتحويلها إلى خطوات عملية بوضوح
                وسلاسة.{" "}
              </span>
            </div>
            <div className="flex justify-center md:justify-end">
              <Image src={way3} alt="way-3" className="w-full" />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            className="flex flex-col gap-4 border border-[#71717A] rounded-3xl py-6 pt-8  overflow-hidden px-8"
            style={{
              background:
                "linear-gradient(242deg, rgba(88, 112, 176, 0.5) 0%, rgba(55, 55, 55, 0.5) 26%)",
            }}
          >
            <div className="flex flex-col text-center md:text-start">
              <span className="font-medium text-[17px] text-[#FFFFFF] leading-[24px]">
                التقارير. قرارات أفضل، أسرع.
              </span>
              <span className="font-medium text-[17px] text-[#FFFFFF80] leading-[24px]">
                بيانات دقيقة، وتحليلات فورية، ورؤية واضحة للأداء. لا حاجة لتخمين
                ما يحدث.
              </span>
            </div>
            <div className="flex justify-center">
              <Image src={way4} alt="way-4" className="w-full" />
            </div>
          </div>

          <div className="flex flex-col justify-end gap-4 border border-[#71717A] rounded-3xl overflow-hidden pt-4">
            <div className="flex flex-col text-center md:text-start px-6 md:px-8">
              <span className="font-medium text-[17px] text-[#FFFFFF] leading-[24px]">
                الملفات. منظّمة وفي متناول يدك دائمًا.
              </span>
              <span className="font-medium text-[17px] text-[#FFFFFF80] leading-[24px]">
                لا مزيد من البحث في الإيميلات والمحادثات—احتفظ بكل مستنداتك في
                مكان واحد، حتى تصل إلى ما تحتاجه في أي لحظة.
              </span>
            </div>
            <div className="flex justify-center pr-8">
              <Image src={way5} alt="way-5" className="w-full" />
            </div>
          </div>

          <div
            className="flex flex-col justify-end gap-4 border border-[#71717A] rounded-3xl overflow-hidden pt-4"
            style={{
              background:
                "linear-gradient(166deg, #c339a16b 0%, rgba(55, 55, 55, 0.5) 26%)",
            }}
          >
            <div className="flex flex-col text-center md:text-start px-6 md:px-8">
              <span className="font-medium text-[17px] text-[#FFFFFF] leading-[24px]">
                لوحة المدير. رؤية شاملة، وإدارة سلسة.
              </span>
              <span className="font-medium text-[17px] text-[#FFFFFF80] leading-[24px]">
                إدارة الأذونات، والتحكم في الوصول، والحفاظ على أمان معلومات عملك
                بكل سهولة، لتعمل فرقك بثقة تامة.
              </span>
            </div>
            <div className="flex justify-center pr-8">
              <Image src={way6} alt="way-6" className="w-full" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-24 max-sm:mt-12">
        <div className="relative group hover:-translate-x-1  transition-all duration-300  ">
          <Link
            href="/create-account"
            className="peer px-5  py-[16px] flex items-center overflow-hidden duration-300 transition-all  font-bold text-md bg-white text-[#000] rounded-2xl relative group-hover:hover:rounded-3xl "
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
                fill="#1A1919"
              />
            </svg>
          </Link>
          <div className="absolute text-[#1A1919] right-[-1em] top-1/2 -translate-y-1/2 w-4 h-4  transition-all duration-300">
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
      </div>
    </div>
  );
}
